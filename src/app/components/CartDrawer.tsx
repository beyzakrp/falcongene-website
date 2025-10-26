'use client';

import { Fragment, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../lib/CartContext';
import { useRouter } from 'next/navigation';

const CartDrawer = () => {
  const { state, removeItem, updateQuantity, clearCart, closeCart } = useCart();
  const router = useRouter();

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
      health: 'Gıda İntolerans Analizi'
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

  const handleCheckout = () => {
    console.log('Checkout button clicked!');
    console.log('Cart items:', state.items);
    console.log('Total:', state.total);
    
    if (state.items.length === 0) {
      console.log('Cart is empty, not proceeding to checkout');
      return;
    }

    try {
      console.log('Closing cart...');
      closeCart();
      
      // Cart bilgisini localStorage'a kaydet
      localStorage.setItem('checkout-items', JSON.stringify(state.items));
      localStorage.setItem('checkout-total', state.total.toString());
      
      // Multiple navigation attempts
      setTimeout(() => {
        console.log('Attempting navigation with router.push...');
        router.push('/checkout?checkout=true');
      }, 50);

      // Fallback navigation
      setTimeout(() => {
        console.log('Fallback navigation with window.location...');
        if (window.location.pathname === window.location.pathname) {
          window.location.href = '/checkout?checkout=true';
        }
      }, 200);

      console.log('Navigation methods initiated');
    } catch (error) {
      console.error('Navigation error:', error);
      // Last resort
      window.location.href = '/checkout?checkout=true';
    }
  };

  // Body scroll'ını engelle/serbest bırak
  useEffect(() => {
    if (state.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [state.isOpen]);

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998]"
            onClick={closeCart}
          />
          
          {/* Drawer */}
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              mass: 0.8 
            }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#0D1B2A] z-[9999] shadow-2xl border-l border-[#D6F5E3]/20"
          >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#D6F5E3]/20">
            <h2 className="text-lg font-semibold text-[#E6E6E6]">
              Sepetim ({state.itemCount} ürün)
            </h2>
            <button
              onClick={closeCart}
              className="p-2 hover:bg-[#D6F5E3]/10 rounded-full transition-colors"
            >
              <svg className="w-5 h-5 text-[#E6E6E6]/70 hover:text-[#E6E6E6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {state.items.length === 0 ? (
              /* Empty Cart */
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center h-full p-8 text-center"
              >
                <div className="w-16 h-16 bg-[#D6F5E3]/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#D6F5E3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#E6E6E6] mb-2">Sepetiniz boş</h3>
                <p className="text-[#E6E6E6]/70 mb-6">
                  Genetik testlerimizi keşfetmek için alışverişe başlayın
                </p>
                <button
                  onClick={() => {
                    closeCart();
                    router.push('/testler');
                  }}
                  className="bg-[#D6F5E3] text-[#0D1B2A] px-6 py-3 rounded-lg hover:bg-[#D6F5E3]/90 transition-colors font-semibold"
                >
                  Testleri Keşfet
                </button>
              </motion.div>
            ) : (
              /* Cart Items */
              <div className="p-4 space-y-4">
                {state.items.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="border border-[#D6F5E3]/30 rounded-lg p-4 hover:bg-[#D6F5E3]/5 hover:border-[#D6F5E3]/50 transition-all duration-200 bg-[#0D1B2A]/50"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#E6E6E6] mb-1">
                          {getTestName(item.type)}
                        </h3>
                        <p className="text-sm text-[#D6F5E3] mb-2">
                          {getPackageName(item.package)}
                        </p>
                        {item.description && (
                          <p className="text-xs text-[#E6E6E6]/60">
                            {item.description}
                          </p>
                        )}
                      </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 hover:bg-red-500/20 rounded-full transition-colors ml-2"
                        >
                          <svg className="w-4 h-4 text-red-400 hover:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <motion.button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-8 h-8 flex items-center justify-center border border-[#D6F5E3]/40 rounded-full hover:bg-[#D6F5E3]/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={item.quantity <= 1}
                        >
                          <svg className="w-4 h-4 text-[#E6E6E6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </motion.button>
                        <span className="font-medium text-[#E6E6E6] min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <motion.button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-8 h-8 flex items-center justify-center border border-[#D6F5E3]/40 rounded-full hover:bg-[#D6F5E3]/10 transition-colors"
                        >
                          <svg className="w-4 h-4 text-[#E6E6E6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </motion.button>
                      </div>

                      <div className="text-right">
                        {item.originalPrice && item.originalPrice !== item.price && (
                          <div className="text-xs text-[#E6E6E6]/50 line-through">
                            {formatPrice(item.originalPrice * item.quantity)}
                          </div>
                        )}
                        <div className="font-semibold text-[#D6F5E3]">
                          {formatPrice(item.price * item.quantity)}
                        </div>
                      </div>
                    </div>

                    {item.features && item.features.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-[#D6F5E3]/20">
                        <p className="text-xs text-[#E6E6E6]/70 mb-1">Paket içeriği:</p>
                        <ul className="text-xs text-[#E6E6E6]/80 space-y-1">
                          {item.features.slice(0, 2).map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <svg className="w-3 h-3 text-[#D6F5E3] mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                          {item.features.length > 2 && (
                            <li className="text-[#E6E6E6]/50">
                              +{item.features.length - 2} özellik daha...
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="border-t border-[#D6F5E3]/20 p-4 space-y-4"
            >
              {/* Total */}
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-[#E6E6E6]">Toplam:</span>
                <span className="text-xl font-bold text-[#D6F5E3]">
                  {formatPrice(state.total)}
                </span>
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <motion.button
                  onClick={handleCheckout}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={state.items.length === 0 || state.total === 0}
                  className="w-full bg-[#D6F5E3] text-[#0D1B2A] py-3 rounded-lg font-semibold hover:bg-[#D6F5E3]/90 focus:outline-none focus:ring-2 focus:ring-[#D6F5E3] focus:ring-offset-2 focus:ring-offset-[#0D1B2A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Ödemeye Geç ({formatPrice(state.total)})
                </motion.button>
                
                <button
                  onClick={() => {
                    closeCart();
                    router.push('/testler');
                  }}
                  className="w-full bg-[#D6F5E3]/10 text-[#D6F5E3] py-2 rounded-lg font-medium hover:bg-[#D6F5E3]/20 border border-[#D6F5E3]/30 transition-colors"
                >
                  Alışverişe Devam Et
                </button>

                <button
                  onClick={clearCart}
                  className="w-full text-red-400 py-2 text-sm hover:text-red-300 transition-colors"
                >
                  Sepeti Temizle
                </button>
              </div>

              {/* Security Notice */}
              <div className="bg-[#D6F5E3]/10 border border-[#D6F5E3]/30 rounded-lg p-3">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-[#D6F5E3] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-[#D6F5E3]">
                    Güvenli ödeme ile korumalı alışveriş
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
