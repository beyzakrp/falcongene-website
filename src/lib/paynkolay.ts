/**
 * PaynKolay Payment Gateway Configuration
 */

export interface PaynKolayConfig {
  environment: 'test' | 'production';
  sx: string;
  secret: string;
  paymentUrl: string;
  sharedPaymentUrl: string;
  verificationUrl: string;
}

/**
 * Get PaynKolay configuration based on environment
 */
export function getPaynKolayConfig(): PaynKolayConfig {
  const environment = (process.env.NKOLAY_ENVIRONMENT || 'test') as 'test' | 'production';
  
  const config: PaynKolayConfig = {
    environment,
    sx: environment === 'production' 
      ? process.env.NKOLAY_PROD_SX || ''
      : process.env.NKOLAY_TEST_SX || '',
    secret: environment === 'production' 
      ? process.env.NKOLAY_PROD_SECRET || ''
      : process.env.NKOLAY_TEST_SECRET || '',
    paymentUrl: environment === 'production'
      ? 'https://paynkolay.nkolayislem.com.tr/Vpos/v1/Payment'
      : 'https://paynkolaytest.nkolayislem.com.tr/Vpos/v1/Payment',
    sharedPaymentUrl: environment === 'production'
      ? 'https://paynkolay.nkolayislem.com.tr/Vpos'
      : 'https://paynkolaytest.nkolayislem.com.tr/Vpos',
    verificationUrl: environment === 'production'
      ? 'https://paynkolay.nkolayislem.com.tr/Vpos/v1/Verification'
      : 'https://paynkolaytest.nkolayislem.com.tr/Vpos/v1/Verification'
  };

  // Validate configuration
  if (!config.sx || !config.secret) {
    throw new Error(`PaynKolay configuration is incomplete for ${environment} environment`);
  }

  return config;
}

/**
 * Get callback URLs based on environment
 */
export function getCallbackUrls(customBaseUrl?: string): { successUrl: string; failUrl: string } {
  let baseUrl: string;
  
  if (customBaseUrl) {
    // Frontend'den gelen dinamik URL (development için)
    baseUrl = customBaseUrl;
  } else if (process.env.NODE_ENV === 'production') {
    // Production ortamı - önce PRODUCTION_DOMAIN, sonra VERCEL_URL kullan
    const productionDomain = process.env.PRODUCTION_DOMAIN || process.env.VERCEL_URL;
    
    if (!productionDomain || productionDomain === 'yourdomainhere.com') {
      console.warn('⚠️  PRODUCTION_DOMAIN not set! Update .env.local before deploying to production');
    }
    
    baseUrl = productionDomain?.startsWith('http') 
      ? productionDomain 
      : `https://${productionDomain}`;
  } else {
    // Development ortamında varsayılan
    baseUrl = 'http://localhost:3001';
  }
    
  return {
    successUrl: `${baseUrl}/api/payment/callback/success`,
    failUrl: `${baseUrl}/api/payment/callback/fail`
  };
}

/**
 * PaynKolay response code meanings
 */
export const PAYNKOLAY_RESPONSE_CODES = {
  '2': 'İşlem başarılı',
  '3': 'Kart reddedildi',
  '4': 'Geçersiz kart numarası',
  '5': 'Yetersiz bakiye',
  '6': 'Kartın son kullanma tarihi geçmiş',
  '7': 'Hatalı CVV kodu',
  '8': 'Sistem hatası',
  '9': '3D Secure doğrulaması başarısız',
  '10': 'İşlem iptal edildi',
  '11': 'Geçersiz işlem',
  '12': 'Kart kısıtlı',
  '13': 'Geçersiz tutar',
  '14': 'Kart bulunamadı',
  '15': 'İşlem süresi doldu'
} as const;

/**
 * Get human-readable message for response code
 */
export function getResponseCodeMessage(code: string): string {
  return PAYNKOLAY_RESPONSE_CODES[code as keyof typeof PAYNKOLAY_RESPONSE_CODES] || `Bilinmeyen hata (${code})`;
}

/**
 * Validate PaynKolay environment variables
 */
export function validatePaynKolayConfig(): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  const environment = process.env.NKOLAY_ENVIRONMENT || 'test';

  if (environment === 'production') {
    if (!process.env.NKOLAY_PROD_SX) {
      errors.push('NKOLAY_PROD_SX is required for production environment');
    }
    if (!process.env.NKOLAY_PROD_SECRET) {
      errors.push('NKOLAY_PROD_SECRET is required for production environment');
    }
  } else {
    if (!process.env.NKOLAY_TEST_SX) {
      errors.push('NKOLAY_TEST_SX is required for test environment');
    }
    if (!process.env.NKOLAY_TEST_SECRET) {
      errors.push('NKOLAY_TEST_SECRET is required for test environment');
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}