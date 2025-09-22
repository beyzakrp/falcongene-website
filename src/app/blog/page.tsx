"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogPage() {
  const comingSoonFeatures = [
    {
      icon: "🧬",
      title: "Genetik Bilim Makaleleri",
      desc: "En güncel genetik araştırmaları ve bilimsel gelişmeleri"
    },
    {
      icon: "🍎",
      title: "Beslenme ve Genetik",
      desc: "DNA'nıza uygun beslenme rehberleri ve pratik öneriler"
    },
    {
      icon: "💪",
      title: "Spor ve Genetik",
      desc: "Genetik yapınıza göre antrenman programları ve performans ipuçları"
    },
    {
      icon: "✨",
      title: "Cilt Sağlığı",
      desc: "Genetik faktörlere dayalı cilt bakım önerileri"
    },
    {
      icon: "📊",
      title: "Test Sonuçları Rehberi",
      desc: "Genetik test sonuçlarınızı nasıl okuyacağınız ve uygulayacağınız"
    },
    {
      icon: "🔬",
      title: "Teknoloji ve İnovasyon",
      desc: "NGS teknolojisi ve genetik alandaki en son gelişmeler"
    }
  ];

  return (
    <div className="bg-white text-[#0D1B2A] min-h-screen">
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
              FalconGene Blog
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Genetik, sağlık ve kişiselleştirilmiş yaşam tarzı hakkında uzman görüşleri ve pratik rehberler. Yakında yayında!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Coming Soon Content */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#1976D3] to-[#4E7CA8] text-white font-semibold mb-8">
            🚀 Yakında Yayında
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6">
            Genetik Dünyasından En Güncel İçerikler Geliyor
          </h2>
          <p className="text-lg text-[#0D1B2A]/70 max-w-3xl mx-auto leading-relaxed">
            FalconGene blog sayfası, genetik testlerin günlük hayata nasıl entegre edileceği, bilimsel gelişmeler ve uzman önerileri ile dolu içeriklerle yakında sizlerle olacak. Genetik potansiyelinizi en iyi şekilde kullanmanız için kapsamlı rehberler hazırlıyoruz.
          </p>
        </motion.div>

        {/* Coming Soon Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {comingSoonFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#0D1B2A] mb-3">{feature.title}</h3>
              <p className="text-[#0D1B2A]/70">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-[#0D1B2A] to-[#2C5276] rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            İlk Yazılarımızdan Haberdar Olmak İster misiniz?
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Blog yazılarımız yayına başladığında, genetik sağlık ipuçları ve özel içeriklerden ilk sizin haberiniz olsun. E-posta listemize katılın.
          </p>
          
          <div className="max-w-md mx-auto">
            <Link
              href="/iletisim"
              className="inline-flex items-center px-8 py-4 bg-white text-[#0D1B2A] rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              İletişime Geç
            </Link>
          </div>
        </motion.div>

        {/* Current Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-[#0D1B2A] mb-8">
            Bu Arada, Mevcut Kaynaklarımızı Keşfedin
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/testler"
              className="group p-6 bg-green-50 border border-green-200 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-4">🧪</div>
              <h4 className="font-semibold text-[#0D1B2A] mb-2">Test Paketlerimiz</h4>
              <p className="text-[#0D1B2A]/70 text-sm">4 farklı genetik test türümüzü detaylı olarak inceleyin</p>
              <span className="inline-flex items-center mt-3 text-green-600 group-hover:text-green-700">
                Keşfet
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </Link>

            <Link
              href="/nasil-calisir"
              className="group p-6 bg-blue-50 border border-blue-200 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-4">⚙️</div>
              <h4 className="font-semibold text-[#0D1B2A] mb-2">Nasıl Çalışır</h4>
              <p className="text-[#0D1B2A]/70 text-sm">5 adımda genetik test sürecini ve NGS teknolojisini öğrenin</p>
              <span className="inline-flex items-center mt-3 text-blue-600 group-hover:text-blue-700">
                Öğren
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </Link>

            <Link
              href="/sss"
              className="group p-6 bg-purple-50 border border-purple-200 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-4">❓</div>
              <h4 className="font-semibold text-[#0D1B2A] mb-2">Sık Sorulan Sorular</h4>
              <p className="text-[#0D1B2A]/70 text-sm">Test süreçleri hakkında merak edilenlerin yanıtları</p>
              <span className="inline-flex items-center mt-3 text-purple-600 group-hover:text-purple-700">
                Oku
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


