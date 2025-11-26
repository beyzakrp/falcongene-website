import { NextRequest, NextResponse } from 'next/server';
import { getPaynKolayConfig } from '@/lib/paynkolay';

export async function GET(request: NextRequest) {
  try {
    const nkEnvironment = process.env.NKOLAY_ENVIRONMENT || 'test';
    const isProdRuntime = process.env.NODE_ENV === 'production';
    
    // Never expose gateway details in production
    if (nkEnvironment === 'production' || isProdRuntime) {
      return NextResponse.json(
        { error: 'Not found' },
        { status: 404 }
      );
    }

    const config = getPaynKolayConfig();
    
    // Debug bilgilerini döndür (hassas bilgileri gizle)
    const debugInfo = {
      environment: config.environment,
      hasSx: !!config.sx,
      hasSecret: !!config.secret,
      sharedPaymentUrl: config.sharedPaymentUrl,
      paymentUrl: config.paymentUrl,
      timestamp: new Date().toISOString()
    };

    return NextResponse.json(debugInfo);
  } catch (error) {
    console.error('Debug route error:', error);
    return NextResponse.json(
      { error: 'Failed to get debug information' },
      { status: 500 }
    );
  }
}
