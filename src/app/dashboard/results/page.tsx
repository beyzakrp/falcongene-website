"use client";

import { useState } from "react";
import DashboardLayout from "../DashboardLayout";

// Mock test results data
const testResults = [
  {
    id: "RPT-2024-001",
    testName: "Beslenme Genetik Testi",
    completedDate: "2024-09-22",
    category: "nutrition",
    score: 85,
    status: "completed",
    keyFindings: [
      "Karbonhidrat metabolizması: Orta hızlı",
      "Kafein hassasiyeti: Düşük",
      "Alkol toleransı: Yüksek",
      "Vitamin D ihtiyacı: Ortalama üstü"
    ],
    recommendations: [
      "Akdeniz diyeti uygulanması önerilir",
      "Günde 2-3 fincan kahve tüketilebilir",
      "D vitamini takviyesi önerilir",
      "Düzenli egzersiz yapınız"
    ]
  },
  {
    id: "RPT-2024-002",
    testName: "Cilt Genetik Analizi",
    completedDate: "2024-09-15",
    category: "skincare",
    score: 78,
    status: "completed",
    keyFindings: [
      "Kollajen üretimi: Orta düzeyde",
      "UV hassasiyeti: Yüksek",
      "Antioksidan ihtiyacı: Yüksek",
      "Yaşlanma hızı: Ortalama"
    ],
    recommendations: [
      "SPF 30+ güneş kremi kullanın",
      "Vitamin C serumu önerilir",
      "Retinol kullanımı faydalı olacaktır",
      "Bol su tüketin"
    ]
  }
];

const upcomingTests = [
  {
    id: "ORD-2024-003",
    testName: "Kapsamlı Sağlık Paneli",
    estimatedDate: "2024-10-15",
    status: "processing"
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'nutrition': return 'bg-green-100 text-green-700';
    case 'skincare': return 'bg-pink-100 text-pink-700';
    case 'fitness': return 'bg-blue-100 text-blue-700';
    case 'health': return 'bg-purple-100 text-purple-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'nutrition':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case 'skincare':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case 'fitness':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
  }
};

const ScoreCircle = ({ score }: { score: number }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="relative w-24 h-24">
      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#E5E7EB"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#3B82F6"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold text-gray-900">{score}</span>
      </div>
    </div>
  );
};

export default function ResultsPage() {
  const [selectedResult, setSelectedResult] = useState<typeof testResults[0] | null>(null);

  return (
    <DashboardLayout>
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Test Sonuçlarım</h1>
          <p className="text-gray-600 mt-1">Genetik test sonuçlarınızı inceleyin ve önerilerinizi görün</p>
        </div>

        {/* Results Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{testResults.length}</p>
                <p className="text-sm text-gray-600">Tamamlanan Test</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{upcomingTests.length}</p>
                <p className="text-sm text-gray-600">Bekleyen Test</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.round(testResults.reduce((sum, r) => sum + r.score, 0) / testResults.length)}
                </p>
                <p className="text-sm text-gray-600">Ortalama Skor</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Results List */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Tamamlanan Testler</h2>
            
            {testResults.map((result) => (
              <div 
                key={result.id} 
                className={`bg-white rounded-2xl p-6 shadow-sm border cursor-pointer transition-all hover:shadow-md ${
                  selectedResult?.id === result.id ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-100'
                }`}
                onClick={() => setSelectedResult(result)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getCategoryColor(result.category)}`}>
                      {getCategoryIcon(result.category)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{result.testName}</h3>
                      <p className="text-sm text-gray-500">
                        {new Date(result.completedDate).toLocaleDateString('tr-TR')}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 relative">
                        <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#E5E7EB"
                            strokeWidth="2"
                          />
                          <path
                            d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="2"
                            strokeDasharray={`${result.score}, 100`}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-bold text-gray-900">{result.score}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Temel Bulgular</p>
                    <p className="font-medium">{result.keyFindings.length} önemli bulgu</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Öneriler</p>
                    <p className="font-medium">{result.recommendations.length} kişisel öneri</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Upcoming Tests */}
            {upcomingTests.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Bekleyen Testler</h2>
                {upcomingTests.map((test) => (
                  <div key={test.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{test.testName}</h3>
                        <p className="text-sm text-gray-500">
                          Tahmini tamamlanma: {new Date(test.estimatedDate).toLocaleDateString('tr-TR')}
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                        İşleniyor
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Result Details */}
          <div className="lg:sticky lg:top-6 lg:h-fit">
            {selectedResult ? (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{selectedResult.testName}</h2>
                    <p className="text-gray-600">Test Detayları</p>
                  </div>
                  <ScoreCircle score={selectedResult.score} />
                </div>

                {/* Test Info */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500 uppercase tracking-wide text-xs">Test ID</p>
                      <p className="font-medium">{selectedResult.id}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 uppercase tracking-wide text-xs">Tarih</p>
                      <p className="font-medium">{new Date(selectedResult.completedDate).toLocaleDateString('tr-TR')}</p>
                    </div>
                  </div>
                </div>

                {/* Key Findings */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Temel Bulgular</h3>
                  <div className="space-y-2">
                    {selectedResult.keyFindings.map((finding, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-gray-700">{finding}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Kişisel Öneriler</h3>
                  <div className="space-y-2">
                    {selectedResult.recommendations.map((recommendation, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-green-100 rounded flex items-center justify-center mt-0.5 flex-shrink-0">
                          <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-700">{recommendation}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Detaylı Raporu İndir
                  </button>
                  <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                    Uzmanla Görüş
                  </button>
                  <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                    Paylaş
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-gray-500">Detaylarını görmek için bir test sonucu seçin</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}