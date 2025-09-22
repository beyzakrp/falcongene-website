"use client";

import Pricing from "../components/Pricing";
import { motion } from "framer-motion";
import Link from "next/link";

export default function KliniklerPage() {
  return (
    <div className="bg-white text-[#0D1B2A]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0D1B2A] via-[#153656] to-[#2C5276] text-white">
        <div className="mx-auto max-w-6xl px-6 pt-28 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4">
              Test Paketleri ve Fiyatlandırma
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Size en uygun genetik test paketini seçin ve kişiselleştirilmiş sağlık yolculuğunuza bugün başlayın. Kalite, hız ve kapsamlılık bir arada.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">
              Neden FalconGene Test Paketleri?
            </h2>
            <p className="text-lg text-[#0D1B2A]/70 max-w-3xl mx-auto">
              Her test paketimiz bilimsel mükemmellik standartlarımızla hazırlanmış ve size en değerli sonuçları sunmak üzere tasarlanmıştır.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "En Hızlı",
                desc: "7-14 gün gibi rekor sürede sonuçlarınız hazır. Hızımız, daha az bekleyiş ve sağlığınız için daha çabuk aksiyon almanız anlamına gelir."
              },
              {
                icon: "🔬",
                title: "En Kapsamlı",
                desc: "150+ gen ve 200+ varyant analizi ile yüzlerce genetik faktörü inceleyerek size bütünsel bir sağlık haritası sunuyoruz."
              },
              {
                icon: "🎯",
                title: "En Kaliteli",
                desc: "%99.8 doğruluk oranı ile ISO, FDA ve CE sertifikalı laboratuvarlarımızda en güvenilir sonuçları alıyorsunuz."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-[#0D1B2A] mb-3">{benefit.title}</h3>
                <p className="text-[#0D1B2A]/70">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Component */}
      <Pricing />

      {/* Process Overview */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">
              Basit 5 Adımda Sonuçlarınıza Ulaşın
            </h2>
            <p className="text-lg text-[#0D1B2A]/70">
              Evinizin konforunda, uzmanlığa ihtiyaç duymadan genetik haritanızı keşfedin.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Satın Al", desc: "Test paketinizi seçin" },
              { step: "2", title: "Numune Al", desc: "Swap ile kolay numune alma" },
              { step: "3", title: "NGS Analiz", desc: "Yeni nesil dizileme teknolojisi" },
              { step: "4", title: "Biyoinformatik", desc: "Uzman ekibimizin analizi" },
              { step: "5", title: "Raporunuz", desc: "Güvenli online erişim" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#1976D3] to-[#4E7CA8] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  {step.step}
                </div>
                <h3 className="font-semibold text-[#0D1B2A] mb-2">{step.title}</h3>
                <p className="text-sm text-[#0D1B2A]/70">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/nasil-calisir"
              className="inline-flex items-center text-[#1976D3] hover:text-[#115496] font-semibold"
            >
              Detaylı süreç hakkında bilgi alın
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Security & Certifications */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">
              Güvenlik ve Sertifikalarımız
            </h2>
            <p className="text-lg text-[#0D1B2A]/70">
              Verilerinizin güvenliği ve test kalitemiz uluslararası standartlarla garantilidir.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200"
            >
              <h3 className="text-xl font-bold text-[#0D1B2A] mb-4 flex items-center gap-2">
                <span className="text-2xl">🛡️</span>
                Veri Güvenliği
              </h3>
              <ul className="space-y-3 text-[#0D1B2A]/80">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  KVKK uyumlu veri işleme
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  Uçtan uca şifreleme
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  Size özel güvenli erişim kodu
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  7/24 fiziksel ve dijital güvenlik
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200"
            >
              <h3 className="text-xl font-bold text-[#0D1B2A] mb-4 flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                Kalite Sertifikaları
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">ISO</div>
                  <div>
                    <div className="font-semibold text-[#0D1B2A]">ISO Sertifikası</div>
                    <div className="text-sm text-[#0D1B2A]/70">Uluslararası kalite standardı</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">FDA</div>
                  <div>
                    <div className="font-semibold text-[#0D1B2A]">FDA Onayı</div>
                    <div className="text-sm text-[#0D1B2A]/70">ABD Gıda ve İlaç Dairesi</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold">CE</div>
                  <div>
                    <div className="font-semibold text-[#0D1B2A]">CE Marking</div>
                    <div className="text-sm text-[#0D1B2A]/70">Avrupa uygunluk belgesi</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Link */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">
              Sorularınız mı var?
            </h3>
            <p className="text-[#0D1B2A]/70 mb-6">
              Test süreçleri, numune alma, gönderim ve sonuçlar hakkında sık sorulan soruları inceleyebilir veya doğrudan bizimle iletişime geçebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sss"
                className="py-3 px-6 bg-[#0D1B2A] text-white rounded-full font-semibold hover:bg-[#153656] transition-colors"
              >
                Sık Sorulan Sorular
              </Link>
              <Link
                href="/iletisim"
                className="py-3 px-6 border-2 border-[#0D1B2A] text-[#0D1B2A] rounded-full font-semibold hover:bg-[#0D1B2A] hover:text-white transition-colors"
              >
                İletişime Geç
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


