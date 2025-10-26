import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // API route'ları için environment validation
  if (request.nextUrl.pathname.startsWith('/api/payment')) {
    const environment = process.env.NKOLAY_ENVIRONMENT || 'test';
    
    // Production'da test kartlarını engelle (opsiyonel)
    if (environment === 'production') {
      const testCardPatterns = [
        '4508034508034509', // Test başarılı kart
        '4508034508034517', // Test başarısız kart
      ];
      
      // Request body'den kart numarasını kontrol et (eğer varsa)
      // Bu kısım opsiyonel - gerçek implementasyonda PaynKolay zaten reddeder
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
