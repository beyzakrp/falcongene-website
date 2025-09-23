"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TestlerPage() {
  const sections = useMemo(() => ([
    {
      id: "nutrigenetik",
      title: "Nutrigenetik (Beslenme Genetiği) Testleri",
      subtitle: "DNA'nızın Besinlere Verdiği Tepkileri Keşfedin",
      desc: "Genetik yapınız, hangi besinlerin size iyi geldiğini, kilo yönetimi stratejinizi ve kronik hastalıklara yatkınlığınızı belirler. Nutrigenetik testlerimizle DNA'nızın sırlarını çözerek size özel bir beslenme haritası oluşturun. Bu, diyet listelerinin ötesinde, ömür boyu sürecek sürdürülebilir bir beslenme bilincidir.",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      bullets: [
        "Vitamin ve Mineral Metabolizması: B12 vitaminini verimli kullanabiliyor musunuz? D vitamini eksikliğine genetik bir eğiliminiz var mı? Folat (B9) döngünüz ne kadar etkin? Bu soruların cevabıyla takviye ihtiyaçlarınızı netleştirin.",
        "Yağ ve Karbonhidrat İşlemeye Genetik Yatkınlık: Vücudunuz doymuş yağları nasıl işliyor? Düşük karbonhidratlı bir diyet sizin için gerçekten etkili mi? Metabolizmanızın hangi yakıt tipini tercih ettiğini öğrenin.",
        "Obezite, Diyabet ve Kalp Hastalıklarına Yatkınlık: Tokluk hissini düzenleyen genlerinizden, kolesterol ve trigliserit seviyelerinizi etkileyen genlere kadar birçok risk faktörünü önceden bilin ve önlem alın.",
        "Kafein, Laktoz ve Glüten Duyarlılığı: Kahvenin sizi neden uykusuz bıraktığını veya sütün neden şişkinlik yaptığını genetik düzeyde anlayın.",
        "Kişiselleştirilmiş Diyet Yanıtları: Akdeniz diyeti mi, Düşük Karbonhidratlı diyet mi? Hangi beslenme modelinin genetik yapınızla en uyumlu olduğunu keşfedin."
      ],
      expertSupport: "Premium paketimizle, iş ortağımız Heltia üzerinden ücretsiz online beslenme danışmanlığı alarak, raporunuzdaki bilimsel verileri günlük hayatınıza kolayca uygulayabileceğiniz pratik bir beslenme planına dönüştürebilirsiniz."
    },
    {
      id: "cilt",
      title: "Cilt (Dermatogenetik) Testleri",
      subtitle: "Cildinizin Genetik Haritasını Çıkarın",
      desc: "Cildinizin yaşlanma hızı, güneşe hassasiyeti, kolajen yıkım oranı ve akne gibi durumlara yatkınlığı genlerinizde saklıdır. Cilt Genetiği Testi ile cildinizin gerçek ihtiyaçlarını öğrenin, pahalı ama etkisiz ürünlere para harcamayı bırakın, doğru bakım ürünlerini seçin ve dermatolojik tedavilerinizin etkinliğini artırın.",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      bullets: [
        "Güneşe Hassasiyet ve Foto-yaşlanma Riski: Cildinizin UV ışınlarına karşı doğal savunması ne kadar güçlü? Güneş lekeleri ve kırışıklıklara karşı genetik bir eğiliminiz var mı?",
        "Antioksidan Savunma Kapasitesi: Vücudunuzun, cildi yaşlandıran serbest radikallerle savaşma yeteneği ne durumda? Hangi antioksidan içerikli ürünlere öncelik vermelisiniz?",
        "Akne, İltihaplanma ve Kızarıklık: Cildinizin inflamasyona (iltihaplanmaya) genetik yatkınlığını öğrenerek, bu durumu tetikleyebilecek faktörlerden kaçının ve doğru yatıştırıcı içerikleri seçin.",
        "Cilt Sağlığı İçin Kritik Vitaminler: Cildinizin kolajen üretimi için kritik olan C vitaminini veya hücre yenilenmesi için önemli olan B vitaminlerini ne kadar verimli kullandığını öğrenin.",
        "Glikasyon (Şeker Kaynaklı Yaşlanma) ve Varisli Damarlar: Şekerin cildinizin elastikiyetini sağlayan liflere zarar verme riskini ve damar duvarlarınızın genetik gücünü keşfedin."
      ],
      panels: "Testimiz; Dermal Tepki (cildin dış etkenlere yanıtı), Güneş ve Cilt (UV hasarı riskleri) ve Cilt Besleme (içeriden gelen sağlık) panelleriyle cildinize 360 derece bir bakış sunar."
    },
    {
      id: "spor",
      title: "Spor Genetiği Testleri",
      subtitle: "Performansınızı Zirveye Taşıyın",
      desc: "Genetik yapınız, hangi spora daha yatkın olduğunuzu, kas yapınızı (patlayıcı güç mü, dayanıklılık mı), enerji metabolizmanızı ve sakatlanma risklerinizi belirler. Antrenmanlarınızdan maksimum verim almak, platoları aşmak ve potansiyelinizi ortaya çıkarmak için bilimsel bir başlangıç yapın.",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      bullets: [
        "Kas Yapısı ve Performans: \"Sprinter geni\" olarak bilinen ACTN3 geniniz patlayıcı güç gerektiren sporlara mı, yoksa yavaş kasılan kas lifleriniz uzun mesafe koşuları gibi dayanıklılık sporlarına mı daha uygun?",
        "Enerji Metabolizması ve Oksijen Kapasitesi (VO2 max): Vücudunuzun antrenman sırasında enerjiyi nasıl ürettiğini ve oksijeni ne kadar verimli kullandığını belirleyen genetik faktörleri öğrenin.",
        "Sakatlanma Riskleri: Aşil tendonu (COL5A1 geni) veya ön çapraz bağ (ACL) yaralanmalarına karşı genetik bir yatkınlığınız var mı? Bu bilgiyi, koruyucu egzersizlerle sakatlık riskinizi azaltmak için kullanın.",
        "Kalp Sağlığı ve Biyobelirteçler: Yoğun antrenmanlara kalbinizin verdiği yanıtı ve genel kardiyovasküler sağlığınızı etkileyen genetik faktörleri anlayın."
      ],
      panels: "Antrenman ve Yetenekler, Sakatlanma Riski, Biyobelirteçler, ve Kalp Paneli ile size en uygun, güvenli, verimli ve hedef odaklı antrenman programını bilimsel verilerle oluşturun."
    },
    {
      id: "intolerans",
      title: "Gıda İntolerans Testi",
      subtitle: "Şişkinlik ve Sindirim Sorunlarınıza Bilimsel Çözüm",
      desc: "Farkında olmadan tükettiğiniz bazı gıdalar, şişkinlik, yorgunluk, beyin sisi, eklem ağrıları ve cilt sorunları gibi kronik rahatsızlıklara yol açabilir. Bu test, hayatı tehdit eden gıda alerjilerinden farklı olarak, yaşam kalitenizi düşüren gecikmeli tip gıda hassasiyetlerinizi ortaya çıkarır.",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      bullets: [
        "400+ Gıda ve Katkı Maddesine Karşı Biyorezonans Tepkisi: İşlenmiş gıdalardaki gizli içerikler de dahil olmak üzere, vücudunuzun hangi besinlere karşı inflamasyon ve intolerans yanıtı geliştirdiğini kapsamlı bir şekilde tarar.",
        "Tüm Besin Grupları: Süt ürünleri, tahıllar, etler, sebzeler, meyveler, kuruyemişler, baharatlar ve daha fazlası detaylı olarak analiz edilir.",
        "Çevresel İntoleranslar: Sadece gıdalar değil, aynı zamanda metal, toz ve yün gibi günlük hayatta maruz kaldığınız çevresel faktörlere karşı hassasiyetlerinizi de tespit edebilir."
      ],
      expertSupport: "Birkaç tutam saç veya kıl örneği ile numune alım kolaylığı! Test sonuçlarınızla birlikte, intoleranslarınıza uygun bir eliminasyon ve rotasyon diyeti oluşturmak için bir seans ücretsiz uzman diyetisyen danışmanlığı hediye! Bu danışmanlık, sonuçları yorumlamanıza ve hayatınıza kolayca adapte etmenize yardımcı olur.",
    }
  ]), []);

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
              Testlerimiz: Genetiğinizi Keşfetmenin Kapısı
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Sağlığınızı daha iyi yönetmenize, potansiyelinizi en üst düzeye çıkarmanıza ve yaşam kalitenizi artırmanıza yardımcı olmak üzere, her biri bilimsel temellere dayanan testlerimizle tanışın.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Tests Content */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`rounded-3xl border-2 ${section.borderColor} ${section.bgColor} p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center border-b border-gray-200 pb-6">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${section.color} text-white text-sm font-semibold mb-4`}>
                    {index + 1}. Test Türü
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-2">
                    {section.title}
                  </h2>
                  <h3 className={`text-xl font-semibold bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
                    {section.subtitle}
                  </h3>
                </div>

                {/* Description */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-[#0D1B2A]/80 leading-relaxed text-lg">
                    {section.desc}
                  </p>
                </div>

                {/* Test Analysis */}
                <div>
                  <h4 className="text-2xl font-bold text-[#0D1B2A] mb-4">Test Neleri Analiz Eder?</h4>
                  <div className="space-y-4">
                    {section.bullets.map((bullet, bulletIndex) => (
                      <motion.div
                        key={bulletIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: bulletIndex * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-lg bg-white/60 border border-gray-200"
                      >
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                          <span className="text-white text-sm font-bold">•</span>
                        </div>
                        <p className="text-[#0D1B2A]/90 text-base leading-relaxed">
                          {bullet}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                {section.panels && (
                  <div className="bg-white/80 rounded-lg p-6 border border-gray-200">
                    <h5 className="font-semibold text-[#0D1B2A] mb-2">Kapsamlı Panel Analizi:</h5>
                    <p className="text-[#0D1B2A]/80">{section.panels}</p>
                  </div>
                )}

                {section.expertSupport && (
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-6 border border-yellow-200">
                    <h5 className="font-semibold text-[#0D1B2A] mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      Uzman Desteği:
                    </h5>
                    <p className="text-[#0D1B2A]/80">{section.expertSupport}</p>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                  <Link
                    href="/klinikler"
                    className={`flex-1 text-center py-3 px-6 rounded-full bg-gradient-to-r ${section.color} text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                  >
                    Bu Testi Satın Al
                  </Link>
                  <Link
                    href="/nasil-calisir"
                    className="flex-1 text-center py-3 px-6 rounded-full border-2 border-gray-300 text-[#0D1B2A] font-semibold hover:bg-gray-50 transition-all duration-300"
                  >
                    Nasıl Çalışır?
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 p-12 bg-gradient-to-br from-[#0D1B2A] to-[#2C5276] rounded-3xl text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Genetik Potansiyelinizi Keşfetmeye Hazır mısınız?</h3>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Size en uygun test paketini seçin ve kişiselleştirilmiş sağlık yolculuğunuza bugün başlayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/klinikler"
              className="py-4 px-8 bg-white text-[#0D1B2A] rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Tüm Test Paketlerini Görüntüle
            </Link>
            <Link
              href="/iletisim"
              className="py-4 px-8 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Uzmanlarımızla İletişime Geç
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


