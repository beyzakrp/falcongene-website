import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { getPaynKolayConfig, getCallbackUrls } from '@/lib/paynkolay';

interface HashRequest {
  amount: string;
  clientRefCode: string;
  customerEmail: string;
  customerName: string;
  isSharedPayment?: boolean;
  baseUrl?: string; // Frontend'den gelen base URL
  // Direct payment için opsiyonel alanlar
  installmentNo?: string;
  cardHolderName?: string;
  cardNumber?: string;
  month?: string;
  year?: string;
  cvv?: string;
  use3D?: string;
  transactionType?: string;
}

// IP adresi alma fonksiyonu
function getClientIp(request: NextRequest): string {
  const headers = [
    'x-client-ip',
    'x-forwarded-for',
    'x-forwarded',
    'x-cluster-client-ip',
    'forwarded-for',
    'forwarded',
  ];

  for (const header of headers) {
    const headerValue = request.headers.get(header);
    if (headerValue) {
      const ipList = headerValue.split(',');
      const ip = ipList[0].trim();
      return ip;
    }
  }

  // Fallback IP
  return '127.0.0.1';
}

// Tarih formatı fonksiyonu (dd.mm.yyyy HH:MM:SS)
function getFormattedDate(): string {
  const now = new Date();
  const pad = (num: number) => num.toString().padStart(2, '0');

  const day = pad(now.getDate());
  const month = pad(now.getMonth() + 1);
  const year = now.getFullYear();

  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}

export async function POST(request: NextRequest) {
  try {
    const body: HashRequest = await request.json();
    
    // PaynKolay konfigürasyonunu al
    const config = getPaynKolayConfig();
    const { successUrl, failUrl } = getCallbackUrls(body.baseUrl);

    // Client IP adresini al
    const cardHolderIP = getClientIp(request);
    
    // Tarih formatı (dd.mm.yyyy HH:MM:SS)
    const rnd = getFormattedDate();

    if (body.isSharedPayment) {
      // PaynKolay Ortak Ödeme Sayfası için hash oluşturma (SHA-512 + Base64)
      // Format: sx|clientRefCode|amount|successUrl|failUrl|rnd|customerKey|merchantSecretKey
      const hashStrParts = [
        config.sx,
        body.clientRefCode,
        body.amount,
        successUrl,
        failUrl,
        rnd,
        '', // customerKey (boş)
        config.secret
      ];
      const hashStr = hashStrParts.join('|');
      
      // SHA-512 hash oluştur ve Base64 encode et
      const hashDataV2 = crypto.createHash('sha512').update(hashStr, 'utf-8').digest('base64');

      const formData = {
        sx: config.sx,
        clientRefCode: body.clientRefCode,
        amount: body.amount,
        successUrl,
        failUrl,
        rnd,
        hashDataV2,
        cardHolderIP,
        use3D: 'true',
        transactionType: 'sales',
        agentCode: '1236',
        detail: 'false' // Add missing detail parameter
      };

      return NextResponse.json({ 
        success: true, 
        formData,
        paymentUrl: config.sharedPaymentUrl
      });

    } else {
      // Direct Payment için hash oluşturma (mevcut kod)
      const hashString = config.sx + body.clientRefCode + body.amount + successUrl + failUrl + rnd + config.secret;
      const hashData = crypto.createHash('sha256').update(hashString).digest('hex').toUpperCase();

      const paymentData = {
        sx: config.sx,
        clientRefCode: body.clientRefCode,
        successUrl,
        failUrl,
        amount: body.amount,
        installmentNo: body.installmentNo || '1',
        cardHolderName: body.cardHolderName,
        month: body.month,
        year: body.year,
        cvv: body.cvv,
        cardNumber: body.cardNumber,
        use3D: body.use3D || 'true',
        transactionType: body.transactionType || 'SALES',
        rnd,
        hashData,
        environment: config.environment,
        currencyNumber: '949'
      };

      return NextResponse.json({ 
        success: true, 
        paymentData,
        paymentUrl: config.paymentUrl
      });
    }

  } catch (error) {
    console.error('Hash generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate payment hash' },
      { status: 500 }
    );
  }
}

// Hash doğrulama fonksiyonu (callback'lerde kullanılacak)
// Şu an kullanılmıyor, gerekirse export edilebilir
// function verifyHash(
//   sx: string,
//   clientRefCode: string,
//   amount: string,
//   responseCode: string,
//   authCode: string,
//   rnd: string,
//   secret: string,
//   receivedHash: string
// ): boolean {
//   const hashString = sx + clientRefCode + amount + responseCode + authCode + rnd + secret;
//   const calculatedHash = crypto.createHash('sha256').update(hashString).digest('hex').toUpperCase();
//   return calculatedHash === receivedHash;
// }