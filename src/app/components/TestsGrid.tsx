"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const tests = [
  {
    id: "nutrigenetik",
    title: "Nutrigenetik Testi",
    subtitle: "Beslenme Genetiği",
    description: "DNA'nızın besinlere verdiği tepkileri keşfedin. Vitamin metabolizması, kilo yönetimi ve diyet uyumluluğunuzu öğrenin.",
    imageUrl: "https://images.unsplash.com/photo-1555243896-c709bfa0b564?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    features: [
      "Vitamin ve mineral metabolizması",
      "Karbonhidrat ve yağ işleme",
      "Kafein, laktoz, glüten duyarlılığı",
      "Kişiselleştirilmiş diyet önerileri"
    ]
  },
  {
    id: "cilt",
    title: "Cilt Genetiği Testi", 
    subtitle: "Dermatogenetik",
    description: "Cildinizin yaşlanma hızı, güneş hassasiyeti ve antioksidan ihtiyaçlarını genetik düzeyde anlayın.",
    imageUrl: "https://images.unsplash.com/photo-1551184451-76b762941ad6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50", 
    borderColor: "border-pink-200",
    features: [
      "Güneşe hassasiyet analizi",
      "Antioksidan savunma kapasitesi",
      "Akne ve iltihaplanma yatkınlığı",
      "Kolajen üretimi ve yaşlanma"
    ]
  },
  {
    id: "spor",
    title: "Spor Genetiği Testi",
    subtitle: "Performans Analizi", 
    description: "Kas yapınızı, enerji metabolizmanızı ve sakatlanma risklerinizi öğrenerek antrenman planınızı optimize edin.",
    imageUrl: "https://images.unsplash.com/photo-1728486144678-95cb7c5f7463?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    features: [
      "Kas yapısı ve performans tipi",
      "VO2 max ve enerji metabolizması", 
      "Sakatlanma risk analizi",
      "Kalp sağlığı biyobelirteçleri"
    ]
  },
  {
    id: "intolerans",
    title: "Gıda İntolerans Testi",
    subtitle: "Besin Duyarlılık Haritası",
    description: "400+ gıda ve çevresel faktöre karşı gecikmeli tip hassasiyetlerinizi tespit edin.",
    imageUrl: "https://images.unsplash.com/photo-1676291920753-dd019397927a?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-orange-500 to-red-600", 
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    features: [
      "400+ gıda hassasiyet analizi",
      "Tüm besin grupları taraması",
      "Çevresel intolerans testi",
      "Uzman diyetisyen danışmanlığı"
    ]
  }
];

export default function TestsGrid() {
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#1976D3] to-[#4E7CA8] text-white text-sm font-semibold mb-6">
            Test Paketlerimiz
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0D1B2A] mb-4">
            Genetik <span className="bg-gradient-to-r from-[#1976D3] to-[#4E7CA8] bg-clip-text text-transparent">Potansiyelinizi</span> Keşfedin
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sağlığınızı daha iyi yönetmenize, potansiyelinizi en üst düzeye çıkarmanıza yardımcı olan bilimsel temelli test paketlerimiz
          </p>
        </motion.div>

        {/* Tests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tests.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl bg-white border-2 ${test.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={test.imageUrl}
                  alt={test.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${test.color} opacity-60`} />
                
                {/* Title Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {test.title}
                  </h3>
                  <p className="text-white/90 text-sm font-medium">
                    {test.subtitle}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Description */}
                <p className="text-[#0D1B2A]/70 text-sm leading-relaxed mb-6">
                  {test.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {test.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <div className={`flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-r ${test.color} flex items-center justify-center mt-0.5`}>
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-[#0D1B2A]/80 text-xs leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="space-y-3">
                  <Link
                    href="/testler"
                    className={`w-full text-center py-3 px-4 rounded-full bg-gradient-to-r ${test.color} text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 block`}
                  >
                    Detayları İncele
                  </Link>
                  <Link
                    href="/klinikler"
                    className="w-full text-center py-2 px-4 rounded-full border-2 border-gray-300 text-[#0D1B2A] font-semibold hover:bg-gray-50 transition-all duration-300 block text-sm"
                  >
                    Satın Al
                  </Link>
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${test.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#0D1B2A] to-[#2C5276] rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Hangi Test Size Uygun?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Genetik ihtiyaçlarınızı belirlemek ve size en uygun test paketini seçmek için uzmanlarımızla konuşun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/testler"
                className="px-8 py-4 bg-white text-[#0D1B2A] rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Tüm Testleri Karşılaştır
              </Link>
              <Link
                href="/iletisim"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Uzman Danışmanlığı
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Features Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: "🎯",
              title: "Bilimsel Doğruluk",
              desc: "%99.8 doğruluk oranı ile NGS teknolojisi"
            },
            {
              icon: "⚡",
              title: "Hızlı Sonuç",
              desc: "7-14 gün içinde detaylı raporunuz hazır"
            },
            {
              icon: "🛡️",
              title: "Güvenli Raporlama",
              desc: "KVKK uyumlu, şifreli online rapor sistemi"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h4 className="font-bold text-[#0D1B2A] mb-2">{feature.title}</h4>
              <p className="text-[#0D1B2A]/70 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


