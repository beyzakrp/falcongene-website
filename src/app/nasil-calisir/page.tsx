"use client";

import Steps from "../components/Steps";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NasilCalisirPage() {
  return (
    <div className="bg-gradient-to-br from-[#0D1B2A] via-[#153656] to-[#2C5276] min-h-screen">
      {/* Hero Section */}
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white mb-4">
            Genetik Yolculuğunuz: 5 Adımda Basit ve Şeffaf Süreç
          </h1>
          <p className="text-xl text-white/70 max-w-4xl mx-auto mb-8">
            Karmaşık ve teknik görünebilen genetik test sürecini, sizin için beş basit, şeffaf ve anlaşılır adıma indirdik. Evinizin konforunda, uzmanlığa ihtiyaç duymadan genetik haritanızı keşfedin.
          </p>
        </motion.div>
      </div>

      {/* Steps Component */}
      <Steps />

      {/* NGS Technology Section */}
      <div className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur rounded-3xl p-8 md:p-12 border border-white/10"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#1976D3] to-[#4E7CA8] text-white text-sm font-semibold mb-6">
                  Teknolojimiz
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                  NGS ile Bilimsel Güç ve Güvenilirlik
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  FalconGene olarak, geleneksel ve yavaş Sanger dizileme yönteminin aksine, genetik analizde altın standart kabul edilen Yeni Nesil Dizileme (NGS) teknolojisini kullanıyoruz.
                </p>
                <p className="text-white/70 text-base leading-relaxed mb-8">
                  Bu seçimi bir benzetmeyle açıklayabiliriz: Geleneksel yöntem, devasa bir kütüphanedeki tek bir kitabı kelime kelime okumak gibidir. Yavaş ve kısıtlıdır. NGS teknolojisi ise, kütüphanedeki tüm kitapları aynı anda binlerce kişiye okutup, hataları (genetik varyantları) karşılaştırarak bulmaya benzer.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">NGS Teknolojisinin Avantajları:</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Daha Kapsamlı",
                      desc: "Tek seferde yüzlerce, hatta binlerce geni analiz ederek çok daha geniş ve bütüncül bir perspektif sunar.",
                      icon: "🔬"
                    },
                    {
                      title: "Daha Hızlı",
                      desc: "Kitlesel paralel dizileme yeteneği sayesinde sonuçlar günler içinde hazır olur.",
                      icon: "⚡"
                    },
                    {
                      title: "Daha Hassas",
                      desc: "Düşük seviyedeki genetik varyantları bile %99.8'in üzerinde bir doğrulukla tespit eder.",
                      icon: "🎯"
                    }
                  ].map((advantage, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10"
                    >
                      <div className="text-2xl">{advantage.icon}</div>
                      <div>
                        <h4 className="font-semibold text-white text-lg mb-2">{advantage.title}</h4>
                        <p className="text-white/70">{advantage.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-[#1976D3]/10 to-[#4E7CA8]/10 rounded-xl border border-white/10">
              <p className="text-white/90 text-center font-medium">
                Bu üstün teknoloji, &quot;En Kapsamlı&quot; ve &quot;En Hızlı&quot; iddialarımızın bilimsel temelini oluşturur ve size en güvenilir, en eyleme geçirilebilir sonuçları sunmamızı garanti eder.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Data Security Section */}
      <div className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur rounded-3xl p-8 md:p-12 border border-white/10"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold mb-6">
                Güvenlik & Gizlilik
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Veri Güvenliği ve Gizlilik: Bilgileriniz Bizimle Güvende
              </h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">
                Genetik verilerinizin en mahrem kişisel bilgileriniz olduğunun farkındayız. Bu nedenle gizliliğinizi ve güvenliğinizi en üst düzeyde korumayı taahhüt ediyoruz.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "KVKK Uyumlu Raporlama",
                  desc: "Tüm süreçlerimiz, Kişisel Verilerin Korunması Kanunu'nun en katı standartlarına tam uyumludur.",
                  icon: "🛡️"
                },
                {
                  title: "Uçtan Uca Şifreleme",
                  desc: "Verileriniz bize ulaştığı andan raporlandığı ana kadar şifrelenir. Analiz sürecinde verileriniz kimlik bilgilerinizden ayrıştırılarak anonim hale getirilir.",
                  icon: "🔐"
                },
                {
                  title: "Size Özel Erişim Kodu",
                  desc: "Raporunuza yalnızca size özel oluşturulan güvenli bir kod ile erişebilirsiniz. Verileriniz, sizin açık ve net onayınız olmadan asla üçüncü partilerle paylaşılmaz.",
                  icon: "🔑"
                },
                {
                  title: "Fiziksel ve Dijital Güvenlik",
                  desc: "Laboratuvarlarımız ve veri merkezlerimiz, en güncel fiziksel ve dijital güvenlik protokolleri ile 7/24 korunmaktadır.",
                  icon: "🏛️"
                }
              ].map((security, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="text-3xl mb-4">{security.icon}</div>
                  <h3 className="font-semibold text-white text-xl mb-3">{security.title}</h3>
                  <p className="text-white/70 leading-relaxed">{security.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Online Reporting Section */}
      <div className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur rounded-3xl p-8 md:p-12 border border-white/10 text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold mb-6">
              Online Raporlama
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Sonuçlarınız Bir Tık Uzağınızda
            </h2>
            <p className="text-white/80 text-lg max-w-4xl mx-auto leading-relaxed">
              Test sonuçlarınıza, kullanıcı dostu ve interaktif online rapor sistemimiz üzerinden kolayca erişebilirsiniz. Size e-posta ile gönderilen güvenlik kodunuzla sisteme giriş yaparak, karmaşık genetik terimlerin anlaşılır açıklamalarını, kişiselleştirilmiş önerileri ve bilimsel referansları içeren dinamik raporunuzu dilediğiniz zaman görüntüleyebilirsiniz. Raporunuzu PDF olarak indirebilir ve doktorunuzla, diyetisyeninizle veya antrenörünüzle güvenle paylaşarak sağlık yönetiminizi bir ekip çalışmasına dönüştürebilirsiniz.
            </p>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-r from-[#1976D3] to-[#4E7CA8] rounded-3xl p-12 text-white"
          >
            <h3 className="text-3xl font-bold mb-4">FalconGene ile Geleceğe Bir Adım Önde Başlayın</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Sağlığınızı şansa veya başkalarının tavsiyelerine bırakmayın. Vücudunuzun kullanma kılavuzu olan genetik yapınızı tanıyarak daha bilinçli, daha sağlıklı ve daha verimli bir yaşam sürün.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/testler"
                className="py-4 px-8 bg-white text-[#1976D3] rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Testleri Keşfet
              </Link>
              <Link
                href="/klinikler"
                className="py-4 px-8 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Hemen Başla
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


