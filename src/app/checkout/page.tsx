'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCart } from '../../lib/CartContext';
import useAuth from '../../lib/useAuth';
import PaynKolayPayment from '../components/PaynKolayPayment';
import { motion, AnimatePresence } from 'framer-motion';

import Image from "next/image";
import Link from "next/link";

interface Address {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  district: string;
  postalCode: string;
  isDefault: boolean;
}

interface CheckoutStep {
  id: number;
  title: string;
  description: string;
}

export default function CheckoutPage() {
  const { state, clearCart } = useCart();
  const { user, loading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [checkoutItems, setCheckoutItems] = useState(state.items);
  const [checkoutTotal, setCheckoutTotal] = useState(state.total);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [userAddresses, setUserAddresses] = useState<Address[]>([]);
  const [newAddress, setNewAddress] = useState<Partial<Address>>({
    title: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    district: '',
    postalCode: ''
  });

  const steps: CheckoutStep[] = [
    {
      id: 1,
      title: 'Giriş Yap',
      description: 'Hesap bilgileri'
    },
    {
      id: 2, 
      title: 'Adres Bilgileri',
      description: 'Teslimat adresi'
    },
    {
      id: 3,
      title: 'Ödeme',
      description: 'Ödeme bilgileri'
    }
  ];

  useEffect(() => {
    // URL'den checkout parametresini kontrol et
    const isCheckout = searchParams?.get('checkout') === 'true';
    
    if (isCheckout) {
      // localStorage'dan checkout bilgilerini al
      const savedItems = localStorage.getItem('checkout-items');
      const savedTotal = localStorage.getItem('checkout-total');
      
      if (savedItems && savedTotal) {
        setCheckoutItems(JSON.parse(savedItems));
        setCheckoutTotal(parseInt(savedTotal));
      }
    }
    
    // Eğer sepet boşsa ve localStorage'da da bilgi yoksa ana sayfaya yönlendir
    if (state.items.length === 0 && !localStorage.getItem('checkout-items')) {
      router.push('/');
    }
  }, [searchParams, state.items, router]);

  // User durumuna göre step belirle
  useEffect(() => {
    if (!loading && user) {
      // Kullanıcı giriş yapmışsa mock addresses yükle ama step'i değiştirme
      // Mock addresses - gerçekte Firebase'dan gelecek
      setUserAddresses([
        {
          id: '1',
          title: 'Ev Adresim',
          firstName: 'Ahmet',
          lastName: 'Yılmaz',
          phone: '+90 532 123 45 67',
          email: user.email || '',
          address: 'Atatürk Caddesi No:123 Daire:5',
          city: 'İstanbul',
          district: 'Kadıköy',
          postalCode: '34710',
          isDefault: true
        }
      ]);
    }
  }, [user, loading]);

  // Step navigation functions
  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGuestContinue = () => {
    setCurrentStep(2); // Adres adımına geç
  };

  const handleAddressSelect = (address: Address) => {
    setSelectedAddress(address);
    nextStep(); // Ödeme adımına geç
  };

  const handleNewAddressSubmit = (address: Address) => {
    setSelectedAddress(address);
    nextStep(); // Ödeme adımına geç
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY'
    }).format(price);
  };

  const getTestName = (type: string) => {
    const names = {
      skin: 'Cilt Genetik Analizi',
      nutrition: 'Beslenme Genetik Analizi', 
      fitness: 'Fitness Genetik Analizi',
      health: 'Sağlık Genetik Analizi'
    };
    return names[type as keyof typeof names] || type;
  };

  const getPackageName = (pkg: string) => {
    const names = {
      basic: 'Basic Paket',
      orta: 'Orta Paket', 
      premium: 'Premium Paket'
    };
    return names[pkg as keyof typeof names] || pkg;
  };

  const handlePaymentSuccess = () => {
    // Checkout tamamlandığında sepeti temizle ve localStorage'ı temizle
    clearCart();
    localStorage.removeItem('checkout-items');
    localStorage.removeItem('checkout-total');
    
    // Success sayfasına yönlendir
    router.push('/payment/success');
  };

  const handlePaymentError = (error: string) => {
    console.error('Payment error:', error);
    // Error sayfasına yönlendir
    router.push('/payment/fail');
  };

  const paymentData = {
    amount: checkoutTotal,
    items: checkoutItems,
    customerInfo: selectedAddress ? {
      email: selectedAddress.email,
      phone: selectedAddress.phone,
      name: `${selectedAddress.firstName} ${selectedAddress.lastName}`
    } : {
      email: user?.email || 'guest@example.com',
      phone: '+905551234567',
      name: user?.displayName || 'Misafir Kullanıcı'
    }
  };

  if (checkoutItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sepetiniz Boş</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">Ödeme yapabilmek için sepetinizde ürün bulunmalıdır.</p>
          <button
            onClick={() => router.push('/')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Alışverişe Devam Et
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="">
        {/* Header - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border-b border-gray-200 px-8 py-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-3">
                 <Link href="/" className="flex items-center gap-2">
              <Image src="/logo-falcongene-dark.svg" alt="FalconGene" width={140} height={32} className="h-6 w-auto" />
            </Link>
                {/* Fallback Icon - DNA Helix */}
                
              </div>
            </div>
            
            {/* Mini Stepper */}
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex items-center">
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                      ${currentStep >= step.id 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-500'
                      }
                    `}>
                      {currentStep > step.id ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        step.id
                      )}
                    </div>
                    <span className={`ml-2 text-sm font-medium ${
                      currentStep >= step.id ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-0.5 mx-4 ${
                      currentStep > step.id ? 'bg-blue-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Ana İçerik - Sol Taraf */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white px-8 py-12 lg:py-16"
          >
            <div className="max-w-md mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {steps.find(step => step.id === currentStep)?.title}
                </h2>
                <p className="text-gray-600">
                  {steps.find(step => step.id === currentStep)?.description}
                </p>
              </div>
            
              <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="auth"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  
                  {user ? (
                    // Giriş yapmış kullanıcı için butonlar
                    <div className="space-y-4">
                      <button
                        onClick={() => setCurrentStep(2)}
                        className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
                      >
                        Üye Olarak Devam Et ({user.email})
                      </button>
                      <button
                        onClick={handleGuestContinue}
                        className="w-full bg-gray-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300"
                      >
                        Misafir Olarak Devam Et
                      </button>
                    </div>
                  ) : (
                    // Giriş yapmamış kullanıcı için butonlar
                    <div className="space-y-4">
                      <button
                        onClick={handleGuestContinue}
                        className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
                      >
                        Misafir Olarak Devam Et
                      </button>
                      <button
                        onClick={() => router.push('/auth')}
                        className="w-full bg-gray-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300"
                      >
                        Üye Ol / Giriş Yap
                      </button>
                    </div>
                  )}
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="address"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  {/* Adres Formu */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-1">First Name*</label>
                        <input
                          type="text"
                          placeholder="First name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-1">Last Name*</label>
                        <input
                          type="text"
                          placeholder="Last name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-1">Email*</label>
                      <input
                        type="email"
                        placeholder="mail@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-1">Billing Address 1*</label>
                      <input
                        type="text"
                        placeholder="Street address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-1">Billing Address 2</label>
                      <input
                        type="text"
                        placeholder="Building, Floor, Apt, Suite, etc..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-1">Country*</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option>Türkiye</option>
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-1">City*</label>
                        <input
                          type="text"
                          placeholder="City"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-1">State*</label>
                        <input
                          type="text"
                          placeholder="State"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-1">Zip Code</label>
                      <input
                        type="text"
                        placeholder="Zip Code"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  <button
                    onClick={nextStep}
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
                  >
                    Continue to Payment
                  </button>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <PaynKolayPayment
                    testType={checkoutItems[0]?.type || 'health'}
                    packageType={checkoutItems[0]?.package === 'orta' ? 'basic' : 'premium'}
                    packageName={getPackageName(checkoutItems[0]?.package || 'premium')}
                    clientRefCode={`CHECKOUT-${Date.now()}`}
                    amount={checkoutTotal.toString()}
                    onSuccess={handlePaymentSuccess}
                    onError={handlePaymentError}
                  />
                </motion.div>
              )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Sipariş Özeti - Sağ Dark Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-900 px-8 py-12 lg:py-16"
          >
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Your Order</h2>
              
              {/* Ürünler */}
              <div className="space-y-6 mb-8">
                {checkoutItems.map((item, index) => (
                  <div key={item.id} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.78 0-2.678-2.153-1.415-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-sm">{getTestName(item.type)}</h3>
                        <p className="text-slate-400 text-xs">#{item.id}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <select className="bg-slate-700 text-white text-sm rounded px-2 py-1 mr-3 border border-slate-600">
                        <option value={item.quantity}>{item.quantity}</option>
                      </select>
                      <span className="text-white font-bold">{formatPrice(item.price)}</span>
                      <button className="ml-2 text-slate-400 hover:text-white">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fiyat Detayları */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-slate-300">
                  <span>Subtotal</span>
                  <span>{formatPrice(checkoutTotal)}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Shipping</span>
                  <span className="text-green-400">Free Delivery</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>VAT (18%)</span>
                  <span>{formatPrice(Math.round(checkoutTotal * 0.18))}</span>
                </div>
                <div className="border-t border-slate-700 pt-4">
                  <div className="flex justify-between">
                    <span className="text-xl font-bold text-white">Total</span>
                    <span className="text-2xl font-bold text-white">{formatPrice(checkoutTotal)}</span>
                  </div>
                </div>
              </div>

              {/* Güvenlik Badge */}
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <div className="text-white font-medium text-sm">Secure Payment</div>
                    <div className="text-slate-400 text-xs">256-bit SSL encryption</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

              {/* Navigation - Sol alt köşede */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                {currentStep > 1 && (
                  <button
                    onClick={prevStep}
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Return to previous step
                  </button>
                )}
              </div>
        
        {/* Footer */}
        <div className="bg-white border-t border-gray-200 px-8 py-4">
          <div className="flex justify-center items-center text-xs text-gray-500">
            <span>© 2024 FalconGene. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
}