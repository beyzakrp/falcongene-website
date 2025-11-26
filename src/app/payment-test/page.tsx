import { notFound } from 'next/navigation';
import PaymentTestClient from './PaymentTestClient';

export default function PaymentTestPage() {
  const nkEnvironment =
    process.env.NKOLAY_ENVIRONMENT ||
    process.env.NEXT_PUBLIC_NKOLAY_ENVIRONMENT ||
    'test';
  const isProdRuntime = process.env.NODE_ENV === 'production';

  // Production ortamında test sayfasını kapat
  if (nkEnvironment === 'production' || isProdRuntime) {
    return notFound();
  }

  return <PaymentTestClient />;
}
