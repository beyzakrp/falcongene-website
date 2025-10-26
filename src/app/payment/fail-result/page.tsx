'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface PaymentResult {
  success: false;
  message: string;
  clientRefCode?: string;
  amount?: string;
  responseCode?: string;
  errorMessage?: string;
}

export default function PaymentFailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [result, setResult] = useState<PaymentResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const processPaymentResult = async () => {
      try {
        // Browser ortamında mı kontrol et
        if (typeof window === 'undefined') {
          setLoading(false);
          return;
        }

        // URL parametrelerini window.location.search'den al
        const urlParams = new URLSearchParams(window.location.search);
        
        // PaynKolay büyük harfli parametreler gönderiyor
        const responseCode = urlParams.get('RESPONSE_CODE') || null;
        const clientRefCode = urlParams.get('CLIENT_REFERENCE_CODE') || null;
        const amount = urlParams.get('TRANSACTION_AMOUNT') || null;
        const bankMessage = urlParams.get('BANK_MESSAGE') || null;
        const responseData = urlParams.get('RESPONSE_DATA') || null;
        
        console.log('Payment fail params:', {
          responseCode,
          clientRefCode,
          amount,
          bankMessage,
          responseData
        });

        // Hata mesajını belirle
        let message = 'Ödeme işlemi başarısız oldu.';
        
        if (bankMessage) {
          message = bankMessage;
        } else if (responseData) {
          message = decodeURIComponent(responseData);
        } else if (responseCode) {
          // PaynKolay response kodlarına göre özel mesajlar
          switch (responseCode) {
            case '3':
              message = 'Kartınız reddedildi. Lütfen bankangızla iletişime geçiniz.';
              break;
            case '4':
              message = 'Geçersiz kart numarası. Lütfen kart bilgilerinizi kontrol ediniz.';
              break;
            case '5':
              message = 'Yetersiz bakiye. Lütfen farklı bir kart deneyiniz.';
              break;
            case '6':
              message = 'Kartın son kullanma tarihi geçmiş.';
              break;
            case '7':
              message = 'Hatalı CVV kodu.';
              break;
            case '8':
              message = 'Sistem hatası. Lütfen daha sonra tekrar deneyiniz.';
              break;
            case '9':
              message = '3D Secure doğrulaması başarısız.';
              break;
            default:
              message = `Ödeme başarısız (Kod: ${responseCode})`;
          }
        }

        setResult({
          success: false,
          message,
          clientRefCode: clientRefCode || undefined,
          amount: amount || undefined,
          responseCode: responseCode || undefined,
          errorMessage: errorMessage || undefined
        });

      } catch (error) {
        console.error('Payment fail processing error:', error);
        setResult({
          success: false,
          message: 'Ödeme işlenirken bir hata oluştu.'
        });
      } finally {
        setLoading(false);
      }
    };

    processPaymentResult();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Ödeme İşleniyor
          </h2>
          <p className="text-gray-600">
            Lütfen bekleyiniz...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="text-center">
          {/* Hata İkonu */}
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
          {(result?.responseCode || result?.clientRefCode || result?.amount) && (
            <div className="bg-gray-50 rounded-md p-4 mb-6 text-left">
              <h3 className="font-semibold text-gray-700 mb-3">İşlem Detayları</h3>
              
              {result?.amount && (
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">Tutar:</span>
                  <span className="font-medium">₺{result.amount}</span>
                </div>
              )}
              
              {result?.responseCode && (
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">Hata Kodu:</span>
                  <span className="font-medium text-red-600">{result.responseCode}</span>
                </div>
              )}
              
              {result?.clientRefCode && (
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
          )}

          {/* Olası Çözümler */}
          <div className="bg-blue-50 rounded-md p-4 mb-6 text-left">
            <h3 className="font-semibold text-blue-800 mb-2">Ne yapabilirsiniz?</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Kart bilgilerinizi kontrol ediniz</li>
              <li>• Farklı bir kart deneyiniz</li>
              <li>• Kartınızda yeterli bakiye olduğundan emin olunuz</li>
              <li>• İnternet bağlantınızı kontrol ediniz</li>
              <li>• Daha sonra tekrar deneyiniz</li>
            </ul>
          </div>

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

        {/* Destek Bilgisi */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            Sorun devam ediyorsa{' '}
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