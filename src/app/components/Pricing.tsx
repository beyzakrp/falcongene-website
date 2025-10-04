"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const testTypes = [
  {
    id: "nutrition",
    name: "Nutrigenetik Testi",
    subtitle: "Beslenme Genetiği",
    description: "DNA'nızın besinlere verdiği tepkileri keşfedin. Vitamin metabolizması, kilo yönetimi ve diyet uyumluluğunuzu öğrenin.",
    features: [
      "Vitamin ve mineral metabolizması",
      "Karbonhidrat ve yağ işleme",
      "Kafein, laktoz, glüten duyarlılığı",
      "Kişiselleştirilmiş diyet önerileri"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c-.862.863-2.002 1.033-2.85 1.033-.877 0-2.013-.175-3.021-.886s-1.965-.886-2.632-.886c-.668 0-1.606.175-2.632.886s-2.155.886-3.031.886c-.85 0-1.99-.17-2.85-1.033l5-5A2 2 0 0011 10.172V5L10 4" />
      </svg>
    )
  },
  {
    id: "skin",
    name: "Cilt Genetiği Testi",
    subtitle: "Dermatogenetik",
    description: "Cildinizin yaşlanma hızı, güneş hassasiyeti ve antioksidan ihtiyaçlarını genetik düzeyde anlayın.",
    features: [
      "Güneşe hassasiyet analizi",
      "Antioksidan savunma kapasitesi",
      "Akne ve iltihaplanma yatkınlığı",
      "Kolajen üretimi ve yaşlanma"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: "sport",
    name: "Spor Genetiği Testi",
    subtitle: "Performans Analizi",
    description: "Kas yapınızı, enerji metabolizmanızı ve sakatlanma risklerinizi öğrenerek antrenman planınızı optimize edin.",
    features: [
      "Kas yapısı ve performans tipi",
      "VO2 max ve enerji metabolizması",
      "Sakatlanma risk analizi",
      "Kalp sağlığı biyobelirteçleri"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: "intolerance",
    name: "Gıda İntolerans Testi",
    subtitle: "Besin Duyarlılık Haritası",
    description: "400+ gıda ve çevresel faktöre karşı gecikmeli tip hassasiyetlerinizi tespit edin.",
    features: [
      "400+ gıda hassasiyet analizi",
      "Tüm besin grupları taraması",
      "Çevresel intolerans testi",
      "Uzman diyetisyen danışmanlığı"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function Pricing() {
  const [selectedType, setSelectedType] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, "waitlist"), {
        email,
        testType: selectedType,
        createdAt: new Date(),
      });
      
      setSubmitted(true);
    } catch (error) {
      console.error("Error adding email to waitlist:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="pricing" className="relative bg-[#0D1B2A] py-16 sm:py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">Fiyatlandırma</h2>
          <p className="mt-2 text-white/70">Bireysel ve klinik çözümler</p>
        </div>

        {/* Test Type Selection */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-center mb-8">Test Tipinizi Seçin</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testTypes.map((type) => (
              <div
                key={type.id}
                className={`group relative overflow-hidden rounded-3xl bg-white/5 border-2 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full
                  ${selectedType === type.id 
                    ? 'border-[#D6F5E3] bg-[#D6F5E3]/10' 
                    : 'border-white/10 hover:border-white/20'}`}
              >
                {/* Image/Icon Header */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#D6F5E3]/20 to-transparent opacity-60`} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <div className={`p-4 rounded-xl mb-4 ${
                      selectedType === type.id ? 'bg-[#D6F5E3]/30 text-[#D6F5E3]' : 'bg-white/10 text-white'
                    }`}>
                      {type.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white text-center mb-1">{type.name}</h4>
                    <p className="text-[#D6F5E3] text-sm font-medium text-center">{type.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-6">
                  <p className="text-sm text-white/70 text-center mb-6">{type.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2 flex-1">
                    {type.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#D6F5E3]/20 flex items-center justify-center mt-0.5">
                          <span className="text-[#D6F5E3] text-xs">✓</span>
                        </div>
                        <span className="text-white/80 text-xs leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 space-y-3">
                    <button
                      onClick={() => setSelectedType(type.id)}
                      className={`w-full text-center py-3 px-4 rounded-full font-semibold transition-all duration-300 ${
                        selectedType === type.id
                          ? 'bg-[#D6F5E3] text-[#0D1B2A] hover:shadow-[0_0_20px_rgba(214,245,227,0.3)]'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {selectedType === type.id ? 'Seçildi' : 'Seç'}
                    </button>
                    <Link 
                      href={`/testler#${type.id}`}
                      className="w-full text-center py-2 px-4 rounded-full text-sm font-semibold border border-white/20 hover:bg-white/5 transition-colors block"
                    >
                      Detayları İncele
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Packages */}
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {/* Orta Paket */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 relative overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D6F5E3]/20 rounded-full mb-4">
                <svg className="w-8 h-8 text-[#D6F5E3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Orta Paket
              </h3>
              <div className="text-3xl font-bold text-[#D6F5E3] mb-4">
                ₺7.499
              </div>
              <div className="text-white/80 mb-6">
                6 Gen Analizi
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => setShowPopup(true)}
                disabled={!selectedType}
                className={`w-full px-8 py-3 rounded-full font-semibold transition-all shadow-lg text-center
                  ${!selectedType
                    ? 'bg-[#D6F5E3]/50 text-[#0D1B2A]/50 cursor-not-allowed'
                    : 'bg-[#D6F5E3] text-[#0D1B2A] hover:bg-[#D6F5E3]/90'
                  }`}
              >
                {selectedType ? 'Satın Al' : 'Lütfen Test Tipi Seçin'}
              </button>
            </div>
          </motion.div>

          {/* Büyük Paket */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 relative overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute top-4 right-4 bg-[#D6F5E3] text-[#0D1B2A] px-3 py-1 rounded-full text-sm font-semibold">
              En Kapsamlı
            </div>
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D6F5E3]/20 rounded-full mb-4">
                <svg className="w-8 h-8 text-[#D6F5E3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Büyük Paket
              </h3>
              <div className="text-3xl font-bold text-[#D6F5E3] mb-4">
                ₺11.250
              </div>
              <div className="text-white/80 mb-6">
                12 Gen Analizi
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => setShowPopup(true)}
                disabled={!selectedType}
                className={`w-full px-8 py-3 rounded-full font-semibold transition-all shadow-lg text-center
                  ${!selectedType
                    ? 'bg-[#D6F5E3]/50 text-[#0D1B2A]/50 cursor-not-allowed'
                    : 'bg-[#D6F5E3] text-[#0D1B2A] hover:bg-[#D6F5E3]/90'
                  }`}
              >
                {selectedType ? 'Satın Al' : 'Lütfen Test Tipi Seçin'}
              </button>
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
            <Image 
              src="/payment-visa.svg" 
              alt="Visa" 
              width={60}
              height={40}
              className="h-10 w-auto bg-white rounded-lg p-1 hover:scale-105 transition-transform"
            />
            <Image 
              src="/payment-mastercard.svg" 
              alt="Mastercard" 
              width={60}
              height={40}
              className="h-10 w-auto bg-white rounded-lg p-1 hover:scale-105 transition-transform"
            />
            <Image 
              src="/payment-amex.svg" 
              alt="American Express" 
              width={60}
              height={40}
              className="h-10 w-auto bg-white rounded-lg p-1 hover:scale-105 transition-transform"
            />
            <Image 
              src="/payment-troy.svg" 
              alt="Troy" 
              width={60}
              height={40}
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

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowPopup(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0D1B2A] rounded-3xl p-8 max-w-md w-full border border-white/10 relative"
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {!submitted ? (
                <>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D6F5E3]/20 rounded-full mb-4">
                      <svg className="w-8 h-8 text-[#D6F5E3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Çok Yakında!</h3>
                    <p className="text-white/70 mb-6">
                      Ödeme altyapımız yapım aşamasında. En yakın zamanda satın alabilmeniz için mail adresinizi bizimle paylaşın.
                    </p>
                  </div>

                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-posta adresiniz"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-[#D6F5E3]"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#D6F5E3] text-[#0D1B2A] px-8 py-3 rounded-full font-semibold hover:bg-[#D6F5E3]/90 transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? "Gönderiliyor..." : "Beni Haberdar Et"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D6F5E3]/20 rounded-full mb-4">
                    <svg className="w-8 h-8 text-[#D6F5E3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Teşekkürler!</h3>
                  <p className="text-white/70">
                    Mail listemize kaydoldunuz. Ödeme sistemi aktif olduğunda sizi bilgilendireceğiz.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}