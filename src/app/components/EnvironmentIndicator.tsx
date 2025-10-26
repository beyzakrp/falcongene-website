'use client';

import { useEffect, useState } from 'react';

export default function EnvironmentIndicator() {
  const [isTestMode, setIsTestMode] = useState(false);
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    const testMode = process.env.NEXT_PUBLIC_NKOLAY_ENVIRONMENT === 'test';
    setIsTestMode(testMode);
  }, []);

  // Production'da gösterme
  if (!isTestMode) return null;

  if (!showIndicator) {
    return (
      <button
        onClick={() => setShowIndicator(true)}
        className="fixed bottom-4 right-4 z-50 bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-2 rounded-lg shadow-lg transition-all text-sm font-medium"
        title="Show environment info"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-yellow-500 text-black px-4 py-3 rounded-lg shadow-lg max-w-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2 flex-1">
          <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div className="flex-1">
            <p className="font-bold text-sm mb-1">🧪 Test Modu Aktif</p>
            <p className="text-xs leading-relaxed">
              PaynKolay test ortamı kullanılıyor. Gerçek para çekilmeyecek. 
              3D Secure test simülatörü gösterilecek.
            </p>
            <p className="text-xs mt-2 font-medium">
              Production'a geçmek için: <code className="bg-black/20 px-1 py-0.5 rounded">NKOLAY_ENVIRONMENT=production</code>
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowIndicator(false)}
          className="flex-shrink-0 hover:bg-black/10 rounded p-1 transition-colors"
          title="Hide"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
