import { NextRequest, NextResponse } from 'next/server';
import { findOrderByClientRefCode, updateOrderPaymentSuccess } from '@/lib/orderService';

interface UpdatePaymentRequest {
  clientRefCode: string;
  authCode: string;
  transactionId?: string;
  amount?: string;
}

export async function POST(request: NextRequest) {
  let body: UpdatePaymentRequest;
  
  try {
    body = await request.json();
    const { clientRefCode, authCode, transactionId, amount } = body;

    if (!clientRefCode || !authCode) {
      return NextResponse.json({
        success: false,
        error: 'Missing required parameters'
      }, { status: 400 });
    }

    console.log('Updating payment with Firebase:', {
      clientRefCode,
      authCode,
      transactionId,
      amount,
      timestamp: new Date().toISOString()
    });

    // Firebase'den siparişi client ref code ile bul
    const order = await findOrderByClientRefCode(clientRefCode);
    
    if (!order || !order.id) {
      console.error('Order not found:', clientRefCode);
      return NextResponse.json({
        success: false,
        error: 'Order not found',
        clientRefCode
      }, { status: 404 });
    }

    console.log('Found order:', order.id);

    // Firebase'de ödeme bilgilerini güncelle
    await updateOrderPaymentSuccess(order.id, {
      authCode,
      transactionId: transactionId || authCode,
      clientRefCode
    });

    console.log('Payment updated successfully for order:', order.id);

    return NextResponse.json({
      success: true,
      message: 'Order payment updated successfully',
      orderId: order.id,
      clientRefCode,
      authCode
    });

  } catch (error) {
    console.error('Order payment update error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Detailed error:', {
      message: errorMessage,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({
      success: false,
      error: 'Failed to update order payment',
      details: process.env.NODE_ENV === 'development' ? errorMessage : 'Internal server error'
    }, { status: 500 });
  }
}