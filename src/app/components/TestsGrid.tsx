"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const processSteps = [
  {
    title: "SATIN AL",
    summary: "Online olarak test kitinizi sipariş edin ve evde kolayca örneğinizi verin.",
    desc: "Test siparişinizi verin. Size en uygun olan genetik testi ister kendiniz, ister uzman doktorunuza danışarak satın alın. Dikkate almamız gereken bir sorun, uzman doktorunuzun bir talebi veya satın alırken yaşadığınız bir sorunu info@falcongene.com üzerinden veya Bize Ulaşın kısmından bizlere belirtebilirsiniz.",
    image: "/buy.jpg",
    step: "01",
    color: "from-[#1976D3] to-[#4E7CA8]",
    icon: "🛒",
  },
  {
    title: "NUMUNEYİ GÖNDER",
    summary: "Test kitinizi talimatları takip ederek hazırlayın ve güvenle bize gönderin.",
    desc: "Sizlere gönderdiğimiz test kitlerimizin içinde bulunan broşürümüzdeki yönergeleri kullanarak tekrar paketleyiniz. Kit kutunuzun içerisinde bulunan belgeleri imzalayıp onayladıktan sonra yönergeleri izleyerek bize tekrar kargolayınız. Kargonuz anlaşmalarımız sayesinde zarar görmez ve en hızlı şekilde bize ulaşır.",
    image: "/sample.jpg",
    step: "02",
    color: "from-[#4E7CA8] to-[#2C5276]",
    icon: "📦",
  },
  {
    title: "GENOM DİZİLİMİ",
    summary: "Gelişmiş laboratuvarımızda DNA analizi ve genom dizilimi işlemleri gerçekleşir.",
    desc: "Numuneniz ve belgeleriniz bize ulaştıktan sonra numuneye giriş yapılır ve DNA ekstraksiyonu yapılır. Ardından üstün teknolojili anlaşmalı laboratuvarlarımız ve uzmanlarımız ile biyoinformatik teknikleri kullanılarak genom dizilimi tamamlanır. Raporlama için son çalışmalara geçilir.",
    image: "/genom.jpg",
    step: "03",
    color: "from-[#2C5276] to-[#153656]",
    icon: "🧬",
  },
  {
    title: "TARAMA",
    summary: "Genetik varyantlar analiz edilir ve uzmanlarımız tarafından yorumlanır.",
    desc: "DNA, titiz kalite kontrol standartlarıyla kontrol edilir ve sekanslanır, ardından uzmanlarımız tarafından varyantlara öncelik verilir. Genlerinizdeki spesifik alanlarda oluşan varyantlara göre sizde veya çocuğunuzda bulunan genetik yatkınlıkları tarar, genetik uzmanları tarafından oluşan ekibimizle yorumlarız sizinle en hızlı ve güvenilir şekilde buluştururuz.",
    image: "/scanning.jpg",
    step: "04",
    color: "from-[#153656] to-[#072441]",
    icon: "🔬",
  },
  {
    title: "SONUÇ",
    summary: "Detaylı rapor hazırlanır ve size güvenli şekilde teslim edilir.",
    desc: "Genetikçilerden oluşan ekibimiz, varyantları hastanın semptomlarıyla doğrular ve yorumlar. Sonuç raporu size ve isteğinize ve onayınıza bağlı hekime teslim edilir. Online Rapor sayfasından size gönderdiğimiz kodu girerek özenle ve titizlikle, KVKK kanunlarına uyarak size ulaştırır ve görüntülemenizi sağlarız.",
    image: "/result.jpg",
    step: "05",
    color: "from-[#072441] to-[#1976D3]",
    icon: "📋",
    isReport: true,
  },
];

export default function TestsGrid() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  return (
    <section id="tests" className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0D1B2A] mb-4">
            Süreç <span className="bg-gradient-to-r from-[#1976D3] to-[#4E7CA8] bg-clip-text text-transparent">Adımları</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Genetik test sürecinizde size eşlik edecek 5 adımı keşfedin
          </p>
        </motion.div>

        {/* Horizontal Stepper */}
        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gray-200 rounded-full">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-[#1976D3] to-[#4E7CA8] rounded-full"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {processSteps.map((step, index) => {
              const isExpanded = expandedStep === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Step Number Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative mx-auto w-12 h-12 mb-6 flex items-center justify-center bg-white rounded-full border-4 border-[#1976D3] shadow-lg z-10"
                  >
                    <span className="text-[#1976D3] font-bold text-lg">{step.step}</span>
                    <div className="absolute inset-0 bg-[#1976D3] rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </motion.div>

                  {/* Step Card */}
                  <div className="bg-white rounded-2xl border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Card Image */}
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${step.color} opacity-70`} />
                      
                      {/* Icon Badge */}
                      <div className="absolute top-3 left-3">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                          <span className="text-xl">{step.icon}</span>
                        </div>
                      </div>

                      {/* Report Badge */}
                      {step.isReport && (
                        <div className="absolute top-3 right-3">
                          <div className="px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full">
                            RAPOR
                          </div>
                        </div>
                      )}

                      {/* Title */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="font-display text-lg font-bold text-white leading-tight">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4">
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        {step.summary}
                      </p>

                      {/* Toggle Button */}
                      <button
                        onClick={() => toggleStep(index)}
                        className={`w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          isExpanded 
                            ? 'bg-[#1976D3] text-white' 
                            : 'bg-gray-50 text-gray-700 hover:bg-[#1976D3] hover:text-white'
                        }`}
                      >
                        {isExpanded ? 'Kapat' : 'Detay'}
                        <motion.svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </motion.svg>
                      </button>
                    </div>
                  </div>

                  {/* Expanded Details Modal */}
                  <AnimatePresence>
                    {isExpanded && (
                      <>
                        {/* Backdrop */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                          onClick={() => setExpandedStep(null)}
                        />
                        
                        {/* Modal */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 20 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: 20 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
                        >
                          {/* Modal Header */}
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={step.image}
                              alt={step.title}
                              fill
                              className="object-cover"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${step.color} opacity-80`} />
                            
                            {/* Close Button */}
                            <button
                              onClick={() => setExpandedStep(null)}
                              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors"
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white">
                                <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </button>

                            {/* Modal Title */}
                            <div className="absolute bottom-6 left-6">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-3xl">{step.icon}</span>
                                <span className="text-white/80 font-semibold">ADIM {step.step}</span>
                              </div>
                              <h3 className="font-display text-3xl font-bold text-white">
                                {step.title}
                              </h3>
                            </div>
                          </div>

                          {/* Modal Content */}
                          <div className="p-6">
                            <p className="text-gray-700 leading-relaxed">
                              {step.desc}
                            </p>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">Sürecimizle ilgili sorularınız mı var?</p>
          <Link 
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1976D3] to-[#4E7CA8] text-white font-semibold rounded-full hover:shadow-lg transition-shadow duration-300"
          >
            Uzmanlarımızla Konuşun
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


