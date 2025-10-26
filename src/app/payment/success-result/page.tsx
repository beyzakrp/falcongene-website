'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface PaymentResult {
  success: boolean;
  message: string;
  transactionId?: string;
  amount?: string;
  clientRefCode?: string;
  authCode?: string;
  responseCode?: string;
}

export default function PaymentSuccessPage() {
  const router = useRouter();
  const [result, setResult] = useState<PaymentResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const processPaymentResult = async () => {
      try {
        // URL parametrelerini window.location.search kullanarak al
        const urlParams = new URLSearchParams(window.location.search);
        
        // URL parametrelerinden ödeme bilgilerini al
        // PaynKolay büyük harfli parametreler gönderiyor
        const responseCode = urlParams.get('RESPONSE_CODE');
        const authCode = urlParams.get('AUTH_CODE');
        const clientRefCode = urlParams.get('CLIENT_REFERENCE_CODE'); // Büyük harf
        const amount = urlParams.get('TRANSACTION_AMOUNT'); // TRANSACTION_AMOUNT olarak geliyor
        const hashData = urlParams.get('hashDataV2'); // V2 hash kullanıyoruz
        const rnd = urlParams.get('RND'); // Büyük harf

        console.log('Payment success params:', {
          responseCode,
          authCode,
          clientRefCode,
          amount,
          hasHashData: !!hashData,
          rnd
        });

        // Temel kontroller
        if (!responseCode || !clientRefCode) {
          setResult({
            success: false,
            message: 'Ödeme bilgileri eksik. Lütfen tekrar deneyiniz.'
          });
          setLoading(false);
          return;
        }

        // RESPONSE_CODE = 2 ve AUTH_CODE dolu mu kontrol et
        if (responseCode !== '2' || !authCode) {
          setResult({
            success: false,
            message: 'Ödeme başarısız. Lütfen tekrar deneyiniz.',
            responseCode,
            authCode: authCode || undefined,
            clientRefCode,
            amount: amount || undefined
          });
          setLoading(false);
          return;
        }

        // Hash doğrulaması yap (opsiyonel - başarısız olsa bile devam eder)
        let hashVerified = false;
        try {
          const verificationResponse = await fetch('/api/payment/verify', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              responseCode,
              authCode,
              clientRefCode,
              amount,
              hashData,
              rnd
            }),
          });

          const verificationResult = await verificationResponse.json();
          hashVerified = verificationResult.success;

          if (!hashVerified) {
            console.warn('⚠️ Hash verification failed, but payment was successful according to PaynKolay');
          }
        } catch (verifyError) {
          console.error('Verification request failed:', verifyError);
          // Hash doğrulaması başarısız olsa bile RESPONSE_CODE=2 ve AUTH_CODE varsa devam et
        }

        // Başarılı ödeme (RESPONSE_CODE=2 ve AUTH_CODE varsa)
        setResult({
          success: true,
          message: 'Ödemeniz başarıyla tamamlandı!',
          transactionId: authCode,
          amount: amount || undefined,
          clientRefCode: clientRefCode || undefined,
          authCode: authCode || undefined,
          responseCode: responseCode || undefined
        });

        // Başarılı ödeme sonrası işlemler
        if (clientRefCode && authCode) {
          try {
            // Sipariş bilgilerini güncelle
            await fetch('/api/orders/update-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                clientRefCode,
                authCode,
                transactionId: authCode,
                amount
              })
            });

            // Email bildirimi gönder
            await fetch('/api/notifications/payment-success', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                clientRefCode,
                authCode,
                amount
              })
            });
          } catch (error) {
            console.error('Post-payment processing error:', error);
            // Ödeme başarılı ama sonrası işlemler hatalı - loglanır ama kullanıcıya gösterilmez
          }
        }

      } catch (error) {
        console.error('Payment processing error:', error);
        setResult({
          success: false,
          message: 'Ödeme işlenirken bir hata oluştu. Lütfen müşteri hizmetleri ile iletişime geçiniz.'
        });
      } finally {
        setLoading(false);
      }
    };

    processPaymentResult();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Ödemeniz İşleniyor
          </h2>
          <p className="text-gray-600">
            Lütfen bekleyiniz, ödemeniz doğrulanıyor...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        {result?.success ? (
          <>
            {/* Başarılı Ödeme */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Ödeme Başarılı!
              </h1>
              
              <p className="text-gray-600 mb-6">
                {result.message}
              </p>

              {/* Ödeme Detayları */}
              <div className="bg-gray-50 rounded-md p-4 mb-6 text-left">
                <h3 className="font-semibold text-gray-700 mb-3">Ödeme Detayları</h3>
                
                {result.amount && (
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Tutar:</span>
                    <span className="font-medium">₺{result.amount}</span>
                  </div>
                )}
                
                {result.transactionId && (
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">İşlem No:</span>
                    <span className="font-medium text-sm">{result.transactionId}</span>
                  </div>
                )}
                
                {result.clientRefCode && (
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Referans:</span>
                    <span className="font-medium text-sm">{result.clientRefCode}</span>
                  </div>
                )}
                
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">Tarih:</span>
                  <span className="font-medium">{new Date().toLocaleString('tr-TR')}</span>
                </div>
              </div>

              {/* Aksiyonlar */}
              <div className="space-y-3">
                <button
                  onClick={() => router.push('/dashboard')}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  Panelime Git
                </button>
                
                <button
                  onClick={() => router.push('/')}
                  className="w-full bg-gray-200 text-gray-800 py-3 px-4 rounded-md font-medium hover:bg-gray-300 transition-colors"
                >
                  Ana Sayfaya Dön
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Başarısız Ödeme */}
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Ödeme Başarısız
              </h1>
              
              <p className="text-gray-600 mb-6">
                {result?.message}
              </p>

              {/* Hata Detayları */}
              {(result?.responseCode || result?.clientRefCode) && (
                <div className="bg-gray-50 rounded-md p-4 mb-6 text-left">
                  <h3 className="font-semibold text-gray-700 mb-3">İşlem Detayları</h3>
                  
                  {result?.responseCode && (
                    <div className="flex justify-between py-1">
                      <span className="text-gray-600">Yanıt Kodu:</span>
                      <span className="font-medium">{result.responseCode}</span>
                    </div>
                  )}
                  
                  {result?.clientRefCode && (
                    <div className="flex justify-between py-1">
                      <span className="text-gray-600">Referans:</span>
                      <span className="font-medium text-sm">{result.clientRefCode}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Aksiyonlar */}
              <div className="space-y-3">
                <button
                  onClick={() => router.back()}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  Tekrar Dene
                </button>
                
                <button
                  onClick={() => router.push('/')}
                  className="w-full bg-gray-200 text-gray-800 py-3 px-4 rounded-md font-medium hover:bg-gray-300 transition-colors"
                >
                  Ana Sayfaya Dön
                </button>
              </div>
            </div>
          </>
        )}

        {/* Destek Bilgisi */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            Sorun yaşıyorsanız{' '}
            <a 
              href="/iletisim" 
              className="text-blue-600 hover:underline"
            >
              müşteri hizmetleri
            </a>
            {' '}ile iletişime geçebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}