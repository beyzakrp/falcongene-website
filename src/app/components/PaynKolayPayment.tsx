'use client';

import React, { useState, useEffect } from 'react';
import useAuth from '../../lib/useAuth';

interface PaynKolayPaymentProps {
  amount: string;
  clientRefCode?: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
  testType?: string;
  packageType?: 'basic' | 'premium';
  packageName?: string;
}

export default function PaynKolayPayment({ 
  amount, 
  clientRefCode,
  onSuccess,
  onError,
  testType,
  packageType,
  packageName
}: PaynKolayPaymentProps) {
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  // Kullanıcı giriş yapmış ise email ve isim alanlarını otomatik doldur
  useEffect(() => {
    if (user) {
      if (user.email) {
        setCustomerEmail(user.email);
      }
      if (user.displayName && !customerName) {
        setCustomerName(user.displayName);
      }
    }
  }, [user, customerName]);

  const generateClientRefCode = () => {
    if (clientRefCode) return clientRefCode;
    
    // Unique reference code oluştur
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    return `${timestamp}|${random}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const generatedClientRefCode = generateClientRefCode();

      // Önce sipariş oluştur
      if (testType && packageType) {
        const orderResponse = await fetch('/api/orders/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            customerInfo: {
              name: customerName,
              email: customerEmail,
            },
            testType,
            packageType,
            clientRefCode: generatedClientRefCode,
            amount: parseFloat(amount)
          }),
        });

        if (!orderResponse.ok) {
          console.warn('Order creation failed, proceeding with payment');
        }
      }

      // Current base URL'i al
      const currentBaseUrl = `${window.location.protocol}//${window.location.host}`;

      // Ortak ödeme sayfası için hash oluştur
      const response = await fetch('/api/payment/hash', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount,
          clientRefCode: generatedClientRefCode,
          customerEmail: customerEmail,
          customerName: customerName,
          baseUrl: currentBaseUrl,
          isSharedPayment: true
        }),
      });

      if (!response.ok) {
        throw new Error('Payment hash generation failed');
      }

      const { formData: paymentFormData, paymentUrl } = await response.json();

      // PaynKolay ortak ödeme sayfasına POST için form oluştur ve submit et
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = paymentUrl;
      form.style.display = 'none';

      // Form verilerini ekle
      Object.entries(paymentFormData).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value as string;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();

    } catch (error) {
      console.error('Payment error:', error);
      setLoading(false);
      onError?.(error instanceof Error ? error.message : 'Payment failed');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Güvenli Ödeme
      </h2>
      
      <div className="mb-4 p-3 bg-blue-50 rounded-md">
        <p className="text-sm text-blue-700">
          <strong>Tutar:</strong> ₺{amount}
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-center">
          <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="text-sm font-semibold text-blue-900">Güvenli Ödeme</h3>
            <p className="text-xs text-blue-700">PaynKolay güvenli ödeme sayfasına yönlendirileceksiniz</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Email Adresiniz *
          </label>
          <input
            type="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            placeholder="ornek@email.com"
            className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <p className="text-xs text-gray-600 mt-2">Ödeme onayı ve rapor bu adrese gönderilecektir</p>
        </div>

        {/* Ad Soyad */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Ad Soyad *
          </label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Ahmet Yılmaz"
            className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <p className="text-xs text-gray-600 mt-2">Fatura ve sipariş bilgileri için kullanılacaktır</p>
        </div>

        {/* Ödeme Özeti */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Ödeme Özeti</h3>
          <div className="space-y-2 text-sm">
            {packageName && (
              <div className="flex justify-between">
                <span className="text-gray-600">Paket:</span>
                <span className="text-gray-900">{packageName}</span>
              </div>
            )}
            <div className="flex justify-between font-semibold text-lg border-t border-gray-300 pt-2">
              <span>Toplam:</span>
              <span className="text-blue-600">₺{amount}</span>
            </div>
          </div>
        </div>

        {/* Ödeme Butonu */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          {loading ? 'Yönlendiriliyor...' : 'Güvenli Ödemeye Geç'}
        </button>
      </form>

      {/* Güvenlik Bildirimi */}
      <div className="mt-4 p-3 bg-green-50 rounded-md">
        <p className="text-xs text-green-700 text-center">
          🔒 Ödemeniz SSL sertifikası ile korunmaktadır
        </p>
      </div>
    </div>
  );
}