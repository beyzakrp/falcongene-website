import { NextRequest, NextResponse } from 'next/server';
import { createOrder, createOrderFromPayment } from '@/lib/orderService';

interface CreateOrderRequest {
  customerInfo: {
    name: string;
    email: string;
    phone?: string;
  };
  testType: string;
  packageType: 'basic' | 'premium';
  clientRefCode: string;
  amount: number;
}

export async function POST(request: NextRequest) {
  let body: CreateOrderRequest;
  
  try {
    body = await request.json();
    const { customerInfo, testType, packageType, clientRefCode, amount } = body;

    if (!customerInfo.name || !testType || !packageType || !clientRefCode) {
      return NextResponse.json({
        success: false,
        error: 'Missing required parameters'
      }, { status: 400 });
    }

    console.log('Creating order with Firebase:', {
      customerInfo,
      testType,
      packageType,
      clientRefCode,
      amount,
      timestamp: new Date().toISOString()
    });

    // Firebase ile gerçek sipariş oluştur
    const orderData = createOrderFromPayment(
      customerInfo,
      testType,
      packageType,
      clientRefCode
    );

    const orderId = await createOrder(orderData);

    console.log('Order created successfully:', orderId);

    return NextResponse.json({
      success: true,
      orderId,
      message: 'Order created successfully',
      orderData: {
        clientRefCode,
        testType,
        packageType,
        amount
      }
    });

  } catch (error) {
    console.error('Order creation error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Detailed error:', {
      message: errorMessage,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({
      success: false,
      error: 'Failed to create order',
      details: process.env.NODE_ENV === 'development' ? errorMessage : 'Internal server error'
    }, { status: 500 });
  }
}