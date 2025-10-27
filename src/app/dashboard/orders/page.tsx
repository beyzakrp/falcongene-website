'use client';

import { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import useAuth from '../../../lib/useAuth';
import { useRouter } from 'next/navigation';


interface Order {
  id: string;
  clientRefCode: string;
  customerInfo: {
    name: string;
    email: string;
  };
  testType: string;
  packageType: string;
  amount: number;
  status: string;
  createdAt: any;
}

export default function OrdersPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
    const [orders, setOrders] = useState<Order[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (!user) return;

    const ordersRef = collection(db, 'orders');
    // Basit sorgu - sadece email filtresi, sıralamayı client-side yapalım
    const q = query(
      ordersRef, 
      where('customerInfo.email', '==', user.email)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
              const ordersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })) as Order[];
      
      // Client-side'da tarihe göre sırala
      const sortedOrders = ordersData.sort((a, b) => {
        const dateA = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt);
        const dateB = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt);
        return dateB.getTime() - dateA.getTime();
      });
      
      setOrders(sortedOrders);
      setOrdersLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const formatDate = (timestamp: any) => {
    if (!timestamp) return '';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY'
    }).format(amount / 100);
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'pending': { color: 'bg-yellow-100 text-yellow-800', text: 'Ödeme Bekliyor' },
      'completed': { color: 'bg-green-100 text-green-800', text: 'Tamamlandı' },
      'processing': { color: 'bg-blue-100 text-blue-800', text: 'İşleniyor' },
      'cancelled': { color: 'bg-red-100 text-red-800', text: 'İptal Edildi' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
        {config.text}
      </span>
    );
  };

  const getTestTypeName = (testType: string) => {
    const testNames = {
      'skin': 'Cilt Genetik Analizi',
      'nutrition': 'Beslenme Genetik Analizi',
      'fitness': 'Fitness Genetik Analizi',
      'health': 'Sağlık Genetik Analizi'
    };
    return testNames[testType as keyof typeof testNames] || testType;
  };

  const getPackageTypeName = (packageType: string) => {
    const packageNames = {
      'basic': 'Basic Paket',
      'orta': 'Orta Paket',
      'premium': 'Premium Paket'
    };
    return packageNames[packageType as keyof typeof packageNames] || packageType;
  };

  if (loading || ordersLoading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-1/4 mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-20 bg-gray-300 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Siparişlerim</h1>
        <p className="text-gray-600 mt-2">
          Geçmiş ve aktif siparişlerinizi buradan takip edebilirsiniz.
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Henüz sipariş yok</h3>
          <p className="text-gray-600 mb-6">
            Genetik analiz testlerimizi keşfetmek için aşağıdaki butona tıklayın.
          </p>
          <button
            onClick={() => router.push('/testler')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Testleri Keşfet
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {getTestTypeName(order.testType)}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Sipariş No: {order.clientRefCode}
                  </p>
                </div>
                {getStatusBadge(order.status)}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Paket Türü</label>
                  <p className="text-sm text-gray-900">{getPackageTypeName(order.packageType)}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Tutar</label>
                  <p className="text-sm text-gray-900 font-semibold">{formatPrice(order.amount)}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Sipariş Tarihi</label>
                  <p className="text-sm text-gray-900">{formatDate(order.createdAt)}</p>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                {order.status === 'completed' && (
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                    Raporu İndir
                  </button>
                )}
                <button className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors">
                  Detayları Gör
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
