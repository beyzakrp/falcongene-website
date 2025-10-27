'use client';

import { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import useAuth from '../../../lib/useAuth';
import { useRouter } from 'next/navigation';

interface TestResult {
  id: string;
  orderId: string;
  clientRefCode: string;
  testType: string;
  packageType: string;
  status: 'processing' | 'ready' | 'delivered';
  reportUrl?: string;
  completedAt?: any;
  customerInfo: {
    name: string;
    email: string;
  };
}

export default function ResultsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [results, setResults] = useState<TestResult[]>([]);
  const [resultsLoading, setResultsLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (!user) return;

    // Get completed orders from Firebase
    const ordersRef = collection(db, 'orders');
    const completedOrdersQuery = query(
      ordersRef,
      where('customerInfo.email', '==', user.email),
      where('orderStatus', 'in', ['completed', 'analyzing', 'sample_received'])
    );

    const unsubscribe = onSnapshot(completedOrdersQuery, (snapshot) => {
      const orders = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        })) as any[];
      
      // Convert orders to test results format
      const testResults: TestResult[] = orders.map(order => ({
        id: order.id,
        orderId: order.id,
        clientRefCode: order.clientRefCode || `FG-${order.id.slice(0, 8)}`,
        testType: order.testType || 'health',
        packageType: order.packageType || 'basic',
        status: order.orderStatus === 'completed' ? 'ready' : 
               order.orderStatus === 'analyzing' ? 'processing' : 'processing',
        completedAt: order.orderStatus === 'completed' ? 
                    (order.updatedAt?.toDate ? order.updatedAt.toDate() : new Date()) : undefined,
        customerInfo: order.customerInfo || {
          name: user.displayName || 'Kullanıcı',
          email: user.email || ''
        }
      }));
      
      setResults(testResults);
      setResultsLoading(false);
    }, (error) => {
      console.error('Error fetching test results:', error);
      // Fallback to empty results on error
      setResults([]);
      setResultsLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const formatDate = (timestamp: any) => {
    if (!timestamp) return '';
    const date = timestamp instanceof Date ? timestamp : new Date(timestamp);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'processing': { color: 'bg-blue-100 text-blue-800', text: 'Analiz Ediliyor', icon: '🔬' },
      'ready': { color: 'bg-green-100 text-green-800', text: 'Hazır', icon: '✅' },
      'delivered': { color: 'bg-gray-100 text-gray-800', text: 'Teslim Edildi', icon: '📄' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.processing;
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
        <span className="mr-1">{config.icon}</span>
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

  if (loading || resultsLoading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-1/3 mb-6"></div>
          <div className="space-y-4">
            {[1, 2].map(i => (
              <div key={i} className="h-32 bg-gray-300 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Test Sonuçlarım</h1>
        <p className="text-gray-600 mt-2">
          Genetik analiz sonuçlarınızı buradan görüntüleyebilir ve indirebilirsiniz.
        </p>
      </div>

      {results.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Henüz sonuç yok</h3>
          <p className="text-gray-600 mb-6">
            Test sonuçlarınız hazır olduğunda burada görünecektir.
          </p>
          <button
            onClick={() => router.push('/dashboard/orders')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Siparişlerime Git
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {results.map((result) => (
            <div key={result.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {getTestTypeName(result.testType)}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Referans No: {result.clientRefCode}
                  </p>
                  <p className="text-sm text-gray-600">
                    {getPackageTypeName(result.packageType)}
                  </p>
                </div>
                {getStatusBadge(result.status)}
              </div>

              {result.status === 'ready' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">
                        Raporunuz hazır! 🎉
                      </p>
                      <p className="text-xs text-green-600 mt-1">
                        Genetik analiz sonuçlarınızı inceleyebilirsiniz.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {result.status === 'processing' && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="animate-spin w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-blue-800">
                        Analiz devam ediyor
                      </p>
                      <p className="text-xs text-blue-600 mt-1">
                        Genetik verileriniz laboratuvarımızda analiz ediliyor. Sonuçlar 7-10 gün içinde hazır olacak.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {result.completedAt && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Tamamlanma Tarihi</label>
                    <p className="text-sm text-gray-900">{formatDate(result.completedAt)}</p>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Durum</label>
                  <p className="text-sm text-gray-900">
                    {result.status === 'processing' && 'Laboratuvarda analiz ediliyor'}
                    {result.status === 'ready' && 'İndirilmeye hazır'}
                    {result.status === 'delivered' && 'Teslim edildi'}
                  </p>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                {result.status === 'ready' && (
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Raporu İndir
                  </button>
                )}
                <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                  Detayları Gör
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Info Section */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">ℹ️ Test Süreci Hakkında</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Genetik analiz süreci genellikle 7-10 gün sürmektedir</li>
          <li>• Raporunuz hazır olduğunda email ile bilgilendirileceksiniz</li>
          <li>• Raporlarınızı bu sayfadan güvenli bir şekilde indirebilirsiniz</li>
          <li>• Sorularınız için destek ekibimizle iletişime geçebilirsiniz</li>
        </ul>
      </div>
    </div>
  );
}
