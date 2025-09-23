"use client";

import { useState } from "react";
import DashboardLayout from "../DashboardLayout";

// Mock order data
const orders = [
  {
    id: "ORD-2024-001",
    testName: "Beslenme Genetik Testi",
    orderDate: "2024-09-15",
    status: "completed",
    price: 899,
    trackingCode: "TRK123456789",
    estimatedDelivery: "2024-09-18",
    deliveryDate: "2024-09-17",
    sampleReceived: "2024-09-20",
    resultDate: "2024-09-22",
    description: "Beslenme alışkanlıklarınıza uygun genetik analiz raporu"
  },
  {
    id: "ORD-2024-002", 
    testName: "Cilt Genetik Analizi",
    orderDate: "2024-09-10",
    status: "processing",
    price: 699,
    trackingCode: "TRK987654321",
    estimatedDelivery: "2024-09-13",
    deliveryDate: "2024-09-12",
    sampleReceived: "2024-09-15",
    resultDate: null,
    description: "Cilt tipinize özel genetik analiz ve bakım önerileri"
  },
  {
    id: "ORD-2024-003",
    testName: "Kapsamlı Sağlık Paneli",
    orderDate: "2024-08-28",
    status: "shipped",
    price: 1299,
    trackingCode: "TRK456789123",
    estimatedDelivery: "2024-08-31",
    deliveryDate: null,
    sampleReceived: null,
    resultDate: null,
    description: "400+ genetik varyant analizi içeren kapsamlı sağlık raporu"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'bg-green-100 text-green-700';
    case 'processing': return 'bg-yellow-100 text-yellow-700';
    case 'shipped': return 'bg-blue-100 text-blue-700';
    case 'pending': return 'bg-gray-100 text-gray-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'completed': return 'Tamamlandı';
    case 'processing': return 'İşleniyor';
    case 'shipped': return 'Kargoda';
    case 'pending': return 'Beklemede';
    default: return 'Bilinmiyor';
  }
};

const OrderTimeline = ({ order }: { order: typeof orders[0] }) => {
  const steps = [
    { 
      title: 'Sipariş Alındı', 
      date: order.orderDate, 
      completed: true,
      description: 'Siparişiniz başarıyla alındı'
    },
    { 
      title: 'Test Kiti Gönderildi', 
      date: order.deliveryDate, 
      completed: !!order.deliveryDate,
      description: 'Test kiti kargo ile gönderildi'
    },
    { 
      title: 'Numune Alındı', 
      date: order.sampleReceived, 
      completed: !!order.sampleReceived,
      description: 'Numune laboratuvara ulaştı'
    },
    { 
      title: 'Sonuçlar Hazır', 
      date: order.resultDate, 
      completed: !!order.resultDate,
      description: 'Test sonuçları hazırlandı'
    }
  ];

  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className={`w-4 h-4 rounded-full mt-1 ${
            step.completed ? 'bg-green-500' : 'bg-gray-300'
          }`} />
          <div className="flex-1">
            <p className={`font-medium ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
              {step.title}
            </p>
            <p className="text-sm text-gray-600">{step.description}</p>
            {step.date && (
              <p className="text-xs text-gray-500 mt-1">
                {new Date(step.date).toLocaleDateString('tr-TR')}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default function OrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState<typeof orders[0] | null>(null);

  return (
    <DashboardLayout>
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Siparişlerim</h1>
          <p className="text-gray-600 mt-1">Test kit siparişlerinizi ve durumlarını takip edin</p>
        </div>

        {/* Orders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Orders List */}
          <div className="space-y-4">
            {orders.map((order) => (
              <div 
                key={order.id} 
                className={`bg-white rounded-2xl p-6 shadow-sm border cursor-pointer transition-all hover:shadow-md ${
                  selectedOrder?.id === order.id ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-100'
                }`}
                onClick={() => setSelectedOrder(order)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{order.testName}</h3>
                    <p className="text-sm text-gray-500">Sipariş No: {order.id}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {getStatusText(order.status)}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-4">{order.description}</p>

                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-gray-500">Sipariş Tarihi</p>
                    <p className="font-medium">{new Date(order.orderDate).toLocaleDateString('tr-TR')}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500">Tutar</p>
                    <p className="font-bold text-lg">₺{order.price}</p>
                  </div>
                </div>

                {order.trackingCode && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500">Takip Kodu</p>
                    <p className="text-sm font-mono">{order.trackingCode}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Order Details */}
          <div className="lg:sticky lg:top-6 lg:h-fit">
            {selectedOrder ? (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{selectedOrder.testName}</h2>
                    <p className="text-gray-600">Sipariş Detayları</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedOrder.status)}`}>
                    {getStatusText(selectedOrder.status)}
                  </span>
                </div>

                {/* Order Info */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Sipariş No</p>
                    <p className="font-medium">{selectedOrder.id}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Tutar</p>
                    <p className="font-bold text-lg">₺{selectedOrder.price}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Sipariş Tarihi</p>
                    <p className="font-medium">{new Date(selectedOrder.orderDate).toLocaleDateString('tr-TR')}</p>
                  </div>
                  {selectedOrder.trackingCode && (
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Takip Kodu</p>
                      <p className="font-mono text-sm">{selectedOrder.trackingCode}</p>
                    </div>
                  )}
                </div>

                {/* Timeline */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Sipariş Durumu</h3>
                  <OrderTimeline order={selectedOrder} />
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                  {selectedOrder.status === 'completed' && (
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      Raporu İndir
                    </button>
                  )}
                  
                  {selectedOrder.trackingCode && (
                    <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                      Kargoyu Takip Et
                    </button>
                  )}
                  
                  <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                    Destek Talebi Oluştur
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-gray-500">Detaylarını görmek için bir sipariş seçin</p>
              </div>
            )}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
            <p className="text-2xl font-bold text-blue-600">{orders.length}</p>
            <p className="text-sm text-gray-600">Toplam Sipariş</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
            <p className="text-2xl font-bold text-green-600">{orders.filter(o => o.status === 'completed').length}</p>
            <p className="text-sm text-gray-600">Tamamlanan</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
            <p className="text-2xl font-bold text-yellow-600">{orders.filter(o => o.status === 'processing').length}</p>
            <p className="text-sm text-gray-600">İşleniyor</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
            <p className="text-2xl font-bold text-gray-600">₺{orders.reduce((sum, o) => sum + o.price, 0)}</p>
            <p className="text-sm text-gray-600">Toplam Harcama</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}