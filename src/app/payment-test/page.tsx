'use client';

import React, { useState } from 'react';
import PaynKolayPayment from '../components/PaynKolayPayment';

export default function PaymentTestPage() {
  const [amount, setAmount] = useState('100.00');
  const [showPayment, setShowPayment] = useState(false);

  const handlePaymentSuccess = () => {
    console.log('Payment completed successfully');
  };

  const handlePaymentError = (error: string) => {
    console.error('Payment error:', error);
    alert(`Ödeme hatası: ${error}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            PaynKolay Ödeme Test Sayfası
          </h1>
          <p className="text-gray-600">
            Bu sayfa PaynKolay ödeme entegrasyonunu test etmek için kullanılır.
          </p>
        </div>

        {!showPayment ? (
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Test Ödemesi Başlat
            </h2>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Test Tutarı (₺)
              </label>
              <input
                type="number"
                step="0.01"
                min="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="100.00"
              />
            </div>

            <button
              onClick={() => setShowPayment(true)}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Ödeme Formunu Göster
            </button>

            {/* Test Kartları Bilgisi */}
            <div className="mt-6 p-4 bg-yellow-50 rounded-md">
              <h3 className="font-semibold text-yellow-800 mb-2">Test Kartları:</h3>
              <div className="text-sm text-yellow-700 space-y-1">
                <div><strong>Başarılı:</strong> 4546711234567894</div>
                <div><strong>Başarısız:</strong> 4546711234567886</div>
                <div><strong>3D Secure:</strong> 4546711234567894</div>
                <div className="mt-2">
                  <strong>Test Bilgileri:</strong><br />
                  Ay: 12, Yıl: 2026, CVV: 001<br />
                  Kart Sahibi: Herhangi bir isim
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <PaynKolayPayment
              amount={amount}
              clientRefCode={`TEST-${Date.now()}`}
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
            />
            
            <div className="text-center mt-6">
              <button
                onClick={() => setShowPayment(false)}
                className="text-blue-600 hover:text-blue-700 underline"
              >
                ← Geri Dön
              </button>
            </div>
          </div>
        )}

        {/* API Durumu */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              API Endpoint Durumu
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Hash Generation:</span>
                <span className="text-green-600">POST /api/payment/hash</span>
              </div>
              <div className="flex justify-between">
                <span>Payment Verification:</span>
                <span className="text-green-600">POST /api/payment/verify</span>
              </div>
              <div className="flex justify-between">
                <span>Success Callback:</span>
                <span className="text-green-600">/payment/success</span>
              </div>
              <div className="flex justify-between">
                <span>Fail Callback:</span>
                <span className="text-red-600">/payment/fail</span>
              </div>
            </div>
          </div>
        </div>

        {/* Environment Info */}
        <div className="mt-4 max-w-2xl mx-auto">
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Environment Bilgisi</h4>
            <p className="text-sm text-blue-700">
              Mevcut environment: <strong>{process.env.NODE_ENV}</strong><br />
              PaynKolay Environment: <strong>{process.env.NEXT_PUBLIC_NKOLAY_ENVIRONMENT || 'test'}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}