"use client";

import { useEffect, useState } from "react";
import { useFirebase } from "../../lib/FirebaseProvider";
import { useRouter } from "next/navigation";
import DashboardLayout from "./DashboardLayout";

// Chart component placeholder (you can later integrate with Chart.js or Recharts)
const MiniChart = ({ data, color = "blue" }: { data: number[]; color?: string }) => (
  <div className="flex items-end h-16 gap-1">
    {data.map((value, index) => (
      <div 
        key={index}
        className={`bg-${color}-200 rounded-sm flex-1 transition-all hover:bg-${color}-300`}
        style={{ height: `${(value / Math.max(...data)) * 100}%` }}
      />
    ))}
  </div>
);

// Mock data
const healthMetrics = {
  bloodStatus: { value: 120, unit: "mg/dL", status: "Normal", trend: [110, 115, 118, 120, 122, 119, 120] },
  hemoglobin: { value: 17.2, unit: "g/dL", status: "Normal", trend: [16.8, 17.0, 17.1, 17.2, 17.3, 17.1, 17.2] },
  heartRate: { value: 72, unit: "bpm", status: "Normal", trend: [68, 70, 72, 74, 71, 69, 72] },
};

const recentTests = [
  { name: "Beslenme Genetik Testi", date: "2024-09-15", status: "completed", result: "Sonuçlar hazır" },
  { name: "Cilt Genetik Analizi", date: "2024-09-10", status: "processing", result: "İşleniyor" },
  { name: "Genel Sağlık Paneli", date: "2024-08-28", status: "completed", result: "Sonuçlar hazır" },
];

const upcomingAppointments = [
  { doctor: "Dr. Ayşe Yılmaz", specialty: "Genetik Danışmanı", date: "2024-09-25", time: "14:30" },
  { doctor: "Dr. Mehmet Kaya", specialty: "İç Hastalıkları", date: "2024-10-02", time: "10:00" },
];

export default function DashboardPage() {
  const { user, loading } = useFirebase();
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-300 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Hoş geldiniz, {user?.displayName?.split(' ')[0] || 'Kullanıcı'}! 👋
              </h1>
              <p className="text-gray-600 mt-1">
                {currentTime.toLocaleDateString('tr-TR', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-600">
                {currentTime.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
              </p>
              <p className="text-sm text-gray-500">Güncel Saat</p>
            </div>
          </div>
        </div>

        {/* Health Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Blood Status */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Kan Şekeri</h3>
              <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Normal</span>
            </div>
            <div className="flex items-end gap-4">
              <div>
                <p className="text-3xl font-bold text-gray-900">{healthMetrics.bloodStatus.value}</p>
                <p className="text-sm text-gray-500">{healthMetrics.bloodStatus.unit}</p>
              </div>
              <div className="flex-1">
                <MiniChart data={healthMetrics.bloodStatus.trend} color="green" />
              </div>
            </div>
          </div>

          {/* Hemoglobin */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Hemoglobin</h3>
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">Normal</span>
            </div>
            <div className="flex items-end gap-4">
              <div>
                <p className="text-3xl font-bold text-gray-900">{healthMetrics.hemoglobin.value}</p>
                <p className="text-sm text-gray-500">{healthMetrics.hemoglobin.unit}</p>
              </div>
              <div className="flex-1">
                <MiniChart data={healthMetrics.hemoglobin.trend} color="blue" />
              </div>
            </div>
          </div>

          {/* Heart Rate */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Kalp Atışı</h3>
              <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">Normal</span>
            </div>
            <div className="flex items-end gap-4">
              <div>
                <p className="text-3xl font-bold text-gray-900">{healthMetrics.heartRate.value}</p>
                <p className="text-sm text-gray-500">{healthMetrics.heartRate.unit}</p>
              </div>
              <div className="flex-1">
                <MiniChart data={healthMetrics.heartRate.trend} color="red" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Tests */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Son Testler</h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Tümünü Gör →
              </button>
            </div>
            <div className="space-y-4">
              {recentTests.map((test, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      test.status === 'completed' ? 'bg-green-400' : 'bg-yellow-400'
                    }`} />
                    <div>
                      <p className="font-medium text-gray-900">{test.name}</p>
                      <p className="text-sm text-gray-500">{test.date}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    test.status === 'completed' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {test.result}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Yaklaşan Randevular</h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Tümünü Gör →
              </button>
            </div>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      {appointment.doctor.split(' ')[1][0]}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{appointment.doctor}</p>
                    <p className="text-sm text-gray-600">{appointment.specialty}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{appointment.date}</p>
                    <p className="text-sm text-gray-500">{appointment.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Hızlı İşlemler</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="flex flex-col items-center gap-2 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900">Yeni Test</span>
            </button>
            
            <button className="flex flex-col items-center gap-2 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900">Randevu Al</span>
            </button>
            
            <button className="flex flex-col items-center gap-2 p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900">Rapor İndir</span>
            </button>
            
            <button className="flex flex-col items-center gap-2 p-4 bg-orange-50 hover:bg-orange-100 rounded-xl transition-colors">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900">Destek</span>
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}