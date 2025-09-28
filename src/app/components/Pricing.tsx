"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Pricing() {

  return (
    <section id="pricing" className="relative bg-[#0D1B2A] py-16 sm:py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">Fiyatlandırma</h2>
          <p className="mt-2 text-white/70">Bireysel ve klinik çözümler</p>
        </div>



        {/* Coming Soon Message */}
        <div className="mt-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
          >
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#D6F5E3]/20 rounded-full mb-4">
                <svg className="w-10 h-10 text-[#D6F5E3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Fiyatlandırma Çok Yakında!
              </h3>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                Test paketlerimizin fiyatlandırması üzerinde son çalışmaları yapıyoruz. 
                Size en uygun fiyatları sunabilmek için detaylı bir çalışma yürütüyoruz.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-[#D6F5E3] font-semibold text-xl">
                Şimdilik satın almak için bizimle iletişime geçin
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/iletisim"
                  className="bg-[#D6F5E3] text-[#0D1B2A] px-8 py-3 rounded-full font-semibold hover:bg-[#D6F5E3]/90 transition-colors shadow-lg"
                >
                  İletişime Geçin
                </Link>
                <Link
                  href="tel:+905001234567"
                  className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  Hemen Arayın
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#D6F5E3]">24/7</div>
                  <div className="text-white/70 text-sm">Müşteri Desteği</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#D6F5E3]">Özel</div>
                  <div className="text-white/70 text-sm">Fiyat Teklifleri</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#D6F5E3]">Hızlı</div>
                  <div className="text-white/70 text-sm">Geri Dönüş</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-lg font-semibold text-white mb-6">
            Güvenli Ödeme Seçenekleri
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 opacity-80">
            <img 
              src="/payment-iyzico.svg" 
              alt="İyzico ile Öde" 
              className="h-10 w-auto bg-white rounded-lg p-1 hover:scale-105 transition-transform"
            />
            <img 
              src="/payment-visa.svg" 
              alt="Visa" 
              className="h-10 w-auto bg-white rounded-lg p-1 hover:scale-105 transition-transform"
            />
            <img 
              src="/payment-mastercard.svg" 
              alt="Mastercard" 
              className="h-10 w-auto bg-white rounded-lg p-1 hover:scale-105 transition-transform"
            />
            <img 
              src="/payment-amex.svg" 
              alt="American Express" 
              className="h-10 w-auto bg-white rounded-lg p-1 hover:scale-105 transition-transform"
            />
            <img 
              src="/payment-troy.svg" 
              alt="Troy" 
              className="h-10 w-auto bg-white rounded-lg p-1 hover:scale-105 transition-transform"
            />
          </div>
          <p className="text-white/60 text-sm mt-4">
            256-bit SSL şifreleme ile korumalı ödeme altyapısı
          </p>
        </motion.div>
      </div>

      {/* animated gradient band behind */}
      <div className="pointer-events-none absolute inset-x-0 -z-10 h-40 -translate-y-12 bg-[linear-gradient(90deg,#00C9FF_0%,#9A00FF_50%,#00FFF0_100%)] opacity-20 blur-3xl" />
    </section>
  );
}


