'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import FlowingLines from './FlowingLines';
import CartDrawer from './CartDrawer';
import { CartProvider } from '../../lib/CartContext';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  
  // Dashboard sayfalarında navbar ve footer'ı gizle
  const isDashboard = pathname?.startsWith('/dashboard');
  const isAuth = pathname?.startsWith('/auth');
  const isCheckout = pathname?.startsWith('/checkout');
  
  return (
    <CartProvider>
      {isDashboard ? (
        // Dashboard sayfaları için sadece içerik
        <div className="bg-gray-50 text-gray-900">
          {children}
        </div>
      ) : isAuth ? (
        // Auth sayfaları için sadece içerik (auth sayfası kendi background'ını ayarlıyor)
        <>{children}</>
      ) : isCheckout ? (
        // Checkout sayfaları için sadece içerik (kendi styling'ı var)
        <>{children}</>
      ) : (
        // Diğer sayfalar için normal layout
        <div className="bg-[#0D1B2A] text-white">
          <FlowingLines />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
          <CartDrawer />
        </div>
      )}
    </CartProvider>
  );
}