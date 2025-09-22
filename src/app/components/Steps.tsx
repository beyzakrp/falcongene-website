"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    stepNumber: "01",
    title: "TESTİNİZİ SATIN ALIN",
    subtitle: "İhtiyacınıza uygun testi seçin",
    content: "Web sitemizdeki testlerimizi inceleyin, ihtiyacınıza ve merak ettiklerinize en uygun olanı seçin ve güvenli ödeme altyapımızla kolayca sipariş verin.",
    labels: ["SATIN AL", "GENETİK TEST"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="9" cy="21" r="1" strokeWidth="1.5"/>
        <circle cx="20" cy="21" r="1" strokeWidth="1.5"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    stepNumber: "02",
    title: "NUMUNENİZİ GÖNDERİN",
    subtitle: "Kit gönderimi ve hazırlık",
    content: "Kit içeriğindeki basit yönergeleri izleyerek, acısız ve pratik bir yöntem olan swap çubuğu ile yapın. Örnek, DNA'nın stabil bir kaynağıdır. Hazırladığınız numuneyi, ön ödemeli ve güvenli geri gönderim paketiyle anlaşmalı kargomuza teslim edin.",
    labels: ["NUMUNE", "GÖNDERİM"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 10l5-5 5 5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 15V5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    stepNumber: "03",
    title: "GENOM DİZİLİMİ (NGS TEKNOLOJİSİ)",
    subtitle: "En ileri teknolojik analiz",
    content: "Numuneniz son teknoloji laboratuvarımıza ulaştığında, uzmanlarımız DNA'nızı kıl kökü hücrelerinden dikkatlice ayrıştırır (ekstraksiyon) ve Yeni Nesil Dizileme (NGS) teknolojisi ile genetik kodunuzu adeta harf harf okur.",
    labels: ["NGS", "DİZİLEME", "EKSTRAKSİYON"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M6 3 Q8 6 6 9 Q4 12 6 15 Q8 18 6 21" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 3 Q16 6 18 9 Q20 12 18 15 Q16 18 18 21" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 6h12M6 9h12M6 12h12M6 15h12M6 18h12" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    stepNumber: "04",
    title: "BİYOINFORMATİK ANALİZ",
    subtitle: "Ham verinin bilgeliğe dönüştüğü yer",
    content: "Bu aşama, ham verinin bilgeliğe dönüştüğü yerdir. Uzman ekibimiz, milyonlarca veri noktasını gelişmiş algoritmalarla analiz eder, bilimsel veritabanlarıyla karşılaştırır ve ham genetik veriyi sizin için anlamlı, eyleme geçirilebilir bilgilere dönüştürür.",
    labels: ["ANALİZ", "ALGORİTMA", "VERİTABANI"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2v6h6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 13H8M16 17H8M10 9H8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    stepNumber: "05",
    title: "RAPORUNUZA ULAŞIN",
    subtitle: "Güvenli online rapor sistemi",
    content: "Analiz tamamlandığında, size özel oluşturulan güvenli bir kod ile online sistemimize giriş yaparak detaylı raporunuza ulaşırsınız. Raporunuz, hem sizin anlayabileceğiniz sadelikte hem de bir sağlık profesyonelinin değerlendirebileceği derinlikte tasarlanmıştır.",
    labels: ["RAPOR", "GÜVENLİ ERİŞİM", "ÖNERİLER"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2v6h6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 13H8M16 17H8M10 9H8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Steps() {
  const [openStep, setOpenStep] = useState<number | null>(0);

  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? null : index);
  };

  return (
    <section id="how" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Nasıl <span className="bg-gradient-to-r from-[#1976D3] to-[#4E7CA8] bg-clip-text text-transparent">Çalışır</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Beş basit adımda genetik analiz sürecinizi keşfedin
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleStep(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  openStep === index 
                    ? 'bg-gradient-to-r from-[#1976D3] to-[#4E7CA8] text-white border-transparent shadow-lg' 
                    : 'bg-white/5 border-white/10 text-white hover:border-white/20 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Step Number */}
                    <div className={`flex items-center justify-center w-12 h-12 rounded-xl font-bold text-lg transition-colors ${
                      openStep === index 
                        ? 'bg-white/20 text-white' 
                        : 'bg-white/10 text-[#D6F5E3]'
                    }`}>
                      {step.stepNumber}
                    </div>
                    
                    {/* Icon */}
                    <div className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
                      openStep === index 
                        ? 'text-white' 
                        : 'text-[#D6F5E3]'
                    }`}>
                      {step.icon}
                    </div>
                    
                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="font-display text-xl font-bold">{step.title}</h3>
                      <p className={`text-sm mt-1 ${
                        openStep === index ? 'text-white/80' : 'text-white/60'
                      }`}>
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  {/* Expand Icon */}
                  <motion.div
                    animate={{ rotate: openStep === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={openStep === index ? 'text-white' : 'text-white/50'}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {openStep === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white/5 border border-white/10 border-t-0 rounded-b-2xl">
                      <div className="max-w-3xl">
                        {/* Labels */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {step.labels.map((label, labelIndex) => (
                            <span 
                              key={labelIndex}
                              className="px-3 py-1 bg-gradient-to-r from-[#1976D3] to-[#4E7CA8] text-white text-xs font-semibold rounded-full"
                            >
                              {label}
                            </span>
                          ))}
                        </div>
                        
                        {/* Content */}
                        <p className="text-white/90 leading-relaxed text-lg">
                          {step.content}
                        </p>

                        {/* Special ending for last step */}
                        {index === steps.length - 1 && (
                          <div className="mt-6 p-4 bg-gradient-to-r from-[#1976D3]/10 to-[#4E7CA8]/10 rounded-xl border border-white/10">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-r from-[#1976D3] to-[#4E7CA8] rounded-full flex items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white">
                                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" strokeWidth="2"/>
                                  <path d="M14 2v6h6" strokeWidth="2"/>
                                </svg>
                              </div>
                              <span className="font-semibold text-white">Rapor</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


