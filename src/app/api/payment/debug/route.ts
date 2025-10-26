import { NextRequest, NextResponse } from 'next/server';
import { getPaynKolayConfig } from '@/lib/paynkolay';

export async function GET(request: NextRequest) {
  try {
    const config = getPaynKolayConfig();
    
    // Debug bilgilerini döndür (hassas bilgileri gizle)
    const debugInfo = {
      environment: config.environment,
      sx: config.sx,
      sharedPaymentUrl: config.sharedPaymentUrl,
      paymentUrl: config.paymentUrl,
      hasSecret: !!config.secret,
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
