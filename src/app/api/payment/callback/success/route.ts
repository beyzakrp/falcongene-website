import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // PaynKolay'dan gelen POST verilerini al
    const formData = await request.formData();
    
    // Form verilerini URL parametrelerine çevir
    const params = new URLSearchParams();
    
    // PaynKolay callback parametrelerini ekle
    formData.forEach((value, key) => {
      params.append(key, value.toString());
    });

    // Success sayfasına parametrelerle redirect et
    const redirectUrl = `/payment/success?${params.toString()}`;
    
    // 302 redirect response döndür
    return NextResponse.redirect(new URL(redirectUrl, request.url), 302);
    
  } catch (error) {
    console.error('Payment success callback error:', error);
    
    // Hata durumunda fail sayfasına yönlendir
    const failUrl = new URL('/payment/fail?error=callback_error', request.url);
    return NextResponse.redirect(failUrl, 302);
  }
}

// GET request'leri için de aynı mantık
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const redirectUrl = `/payment/success?${searchParams.toString()}`;
    
    return NextResponse.redirect(new URL(redirectUrl, request.url), 302);
  } catch (error) {
    console.error('Payment success GET callback error:', error);
    const failUrl = new URL('/payment/fail?error=callback_error', request.url);
    return NextResponse.redirect(failUrl, 302);
  }
}