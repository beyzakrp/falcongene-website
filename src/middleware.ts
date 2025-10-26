import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // API route'ları için environment validation
  if (request.nextUrl.pathname.startsWith('/api/payment')) {
    const environment = process.env.NKOLAY_ENVIRONMENT || 'test';
    
    // Production'da test kartlarını engelle (opsiyonel)
    if (environment === 'production') {
      // Test kartı kontrolü (opsiyonel - PaynKolay zaten reddeder)
      // const testCardPatterns = [
      //   '4508034508034509',
      //   '4508034508034517',
      // ];
    }
    
    // Development'ta production credentials kullanımını logla
    if (process.env.NODE_ENV === 'development' && environment === 'production') {
      console.warn('⚠️  WARNING: Using PRODUCTION credentials in DEVELOPMENT mode!');
      console.warn('   Real money WILL BE CHARGED from cards!');
      console.warn('   Change to test mode: NKOLAY_ENVIRONMENT=test');
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/payment/:path*',
    '/api/orders/:path*',
  ],
};
