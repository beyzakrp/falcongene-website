import { NextResponse } from 'next/server';
import { getPaynKolayConfig, validatePaynKolayConfig } from '@/lib/paynkolay';
import { db } from '@/lib/firebase';

export async function GET() {
  try {
    // PaynKolay konfigürasyon kontrolü
    const configValidation = validatePaynKolayConfig();
    
    let paynkolayStatus = 'healthy';
    let paynkolayConfig = null;
    
    if (configValidation.isValid) {
      try {
        paynkolayConfig = getPaynKolayConfig();
        paynkolayStatus = 'healthy';
      } catch {
        paynkolayStatus = 'configuration_error';
      }
    } else {
      paynkolayStatus = 'configuration_missing';
    }

    // Firebase bağlantı kontrolü
    let firebaseStatus = 'healthy';
    try {
      // Firebase config kontrolü
      if (!db.app.options.projectId) {
        firebaseStatus = 'configuration_error';
      }
    } catch {
      firebaseStatus = 'connection_error';
    }

    const healthData = {
      status: paynkolayStatus === 'healthy' && firebaseStatus === 'healthy' ? 'healthy' : 'unhealthy',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      services: {
        paynkolay: {
          status: paynkolayStatus,
          environment: paynkolayConfig?.environment || 'unknown',
          errors: configValidation.isValid ? [] : configValidation.errors
        },
        firebase: {
          status: firebaseStatus
        },
        emailjs: {
          status: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ? 'configured' : 'not_configured'
        }
      },
      version: process.env.npm_package_version || '1.0.0'
    };

    const statusCode = healthData.status === 'healthy' ? 200 : 503;
    
    return NextResponse.json(healthData, { status: statusCode });

  } catch (error) {
    return NextResponse.json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}