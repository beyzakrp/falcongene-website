import { NextRequest, NextResponse } from 'next/server';
import { findOrderByClientRefCode } from '@/lib/orderService';

interface PaymentSuccessNotificationRequest {
  clientRefCode: string;
  authCode: string;
  amount?: string;
}

export async function POST(request: NextRequest) {
  let body: PaymentSuccessNotificationRequest;
  
  try {
    body = await request.json();
    const { clientRefCode, authCode, amount } = body;

    if (!clientRefCode || !authCode) {
      return NextResponse.json({
        success: false,
        error: 'Missing required parameters'
      }, { status: 400 });
    }

    console.log('Sending payment success notification:', {
      clientRefCode,
      authCode,
      amount,
      timestamp: new Date().toISOString()
    });

    // Firebase'den gerçek sipariş bilgilerini al
    const order = await findOrderByClientRefCode(clientRefCode);
    
    if (!order) {
      console.error('Order not found for notification:', clientRefCode);
      return NextResponse.json({
        success: false,
        error: 'Order not found',
        clientRefCode
      }, { status: 404 });
    }

    console.log('Found order for notification:', order.id);

    // EmailJS için email gönderimi
    const emailData = {
      service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_EMAILJS_PAYMENT_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      template_params: {
        to_email: order.customerInfo.email,
        customer_name: order.customerInfo.name,
        order_id: order.id,
        client_ref_code: clientRefCode,
        auth_code: authCode,
        transaction_id: authCode,
        test_type: order.orderDetails.testType,
        package_name: order.orderDetails.packageName,
        gene_count: order.orderDetails.geneCount,
        amount: amount || order.orderDetails.amount.toString(),
        payment_date: new Date().toLocaleDateString('tr-TR'),
        payment_time: new Date().toLocaleTimeString('tr-TR'),
        support_email: 'destek@falcongene.com',
        company_name: 'FalconGene'
      }
    };

    console.log('Sending customer email to:', order.customerInfo.email);

    // EmailJS API'sine istek gönder
    const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!emailResponse.ok) {
      const responseText = await emailResponse.text();
      console.error('EmailJS customer email error:', responseText);
      throw new Error(`EmailJS API error: ${emailResponse.status} - ${responseText}`);
    }

    console.log('Customer email sent successfully');

    // İnternal bildirim email'i (admins için)
    const adminEmailData = {
      service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_EMAILJS_ORDER_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      template_params: {
        to_email: 'orders@falcongene.com', // Admin email
        customer_name: order.customerInfo.name,
        customer_email: order.customerInfo.email,
        customer_phone: order.customerInfo.phone || 'Belirtilmedi',
        order_id: order.id,
        client_ref_code: clientRefCode,
        auth_code: authCode,
        test_type: order.orderDetails.testType,
        package_name: order.orderDetails.packageName,
        amount: amount || order.orderDetails.amount.toString(),
        payment_date: new Date().toLocaleDateString('tr-TR'),
        payment_time: new Date().toLocaleTimeString('tr-TR'),
        order_status: 'Ödeme Tamamlandı'
      }
    };

    console.log('Sending admin notification email');

    // Admin bildirimini gönder
    const adminResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(adminEmailData),
    });

    if (!adminResponse.ok) {
      const adminResponseText = await adminResponse.text();
      console.error('EmailJS admin email error:', adminResponseText);
      // Admin email hatası varsa customer'a başarılı response döndür ama logla
    } else {
      console.log('Admin email sent successfully');
    }

    return NextResponse.json({
      success: true,
      message: 'Payment success notifications sent',
      orderId: order.id,
      customerEmail: order.customerInfo.email
    });

  } catch (error) {
    console.error('Email notification error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Detailed error:', {
      message: errorMessage,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({
      success: false,
      error: 'Failed to send email notifications',
      details: process.env.NODE_ENV === 'development' ? errorMessage : 'Internal server error'
    }, { status: 500 });
  }
}