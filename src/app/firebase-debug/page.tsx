import { notFound } from 'next/navigation';

export default function FirebaseDebugPage() {
  const nkEnvironment = process.env.NKOLAY_ENVIRONMENT || 'test';
  const env = process.env.NODE_ENV;

  // Production'da debug sayfasını kapat
  if (env === 'production' || nkEnvironment === 'production') {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Firebase Debug</h1>
      <p className="text-gray-600">
        Bu sayfa yalnızca geliştirme ve test ortamlarında Firebase bağlantısını doğrulamak için kullanılır.
      </p>
    </div>
  );
}
