"use client";

import Link from "next/link";
import { useState } from "react";

// YouTube Video Player Component
const YouTubePlayer = ({ videoId, title }: { videoId: string; title: string }) => (
  <div className="mt-4 mb-4">
    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
);

// SVG İkon bileşeni
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

// Test tube icon for kit usage
const TestTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0115 15.846m4.8-.546c.06.055.119.112.176.171a3.12 3.12 0 01.176 4.426c-.94 1.06-2.846 1.06-3.787 0-.94-1.06-.94-2.98 0-4.04.352-.389.94-.389 1.292 0z" />
  </svg>
);

// DNA icon for genetic tests
const DNAIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// Truck icon for shipping
const TruckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m6-3.75h10.125a1.125 1.125 0 011.125 1.125v5.25m0 0V21a.75.75 0 01-.75.75h-3.75m-1.5-9V10.5a.75.75 0 00-.75-.75H12m6.75 9a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0" />
  </svg>
);

// FAQ kategorileri ve soruları
const faqCategories = [
  {
    id: "kit-usage",
    title: "Swap (Tükürük Kiti) Uygulama",
    icon: TestTubeIcon,
    color: "from-blue-500/20 to-cyan-400/20",
    iconBg: "bg-blue-500/20",
    borderColor: "border-blue-400/30",
    questions: [
      {
        id: 1,
        question: "Kutudan Çıkan Swab (Tükürük Kiti) Nasıl Kullanılır?",
        answer: "Swab kullanımı oldukça basittir. Öncelikle ellerinizi iyice yıkayın. Swab çubuğunu ağzınızın iç yan yüzeyine dokundurup dairesel hareketlerle dudak içi ve yanak içi bölgelerinizi ovalayın. Çubuğun ucu tükürükle iyice ıslanmalıdır. Bu aşamada dikkatli olun; doğru uygulama, sonuçların güvenilirliği için kritik öneme sahiptir. Detaylı anlatım için kutu içerisinde yer alan broşüre göz atabilir veya tarafınıza iletilen eğitim videosunu izleyebilirsiniz. Uygulamaya başlamadan önce Aydınlatılmış Onam Formu&rsquo;nu dikkatlice okuyun ve formda belirtilen koşulları sağladığınızdan emin olun."
      },
      {
        id: 2,
        question: "Kit İçeriği ve Kullanımı",
        answer: "Kit; 2 adet swab çubuğu, 2 adet numune tüpü, 1 bilgilendirici broşür, 2 adet onam formu ve numunenin gönderimi için 1 kargo poşeti içerir. Öncelikle onam formunu okuyup imzalayın. Daha sonra broşürdeki talimatlara uyarak swab çubuğunu dudak ve yanak içi bölgelerinizde gezdirip tükürük örneğinizi alın. Swabı numune tüpüne yerleştirip tüpü sıkıca kapatın. Numuneyi ve imzalı onam formunu kargo poşetine koyarak belirtilen adrese gönderin.",
        hasVideo: true,
        videoId: "odjKbE_APDY"
      },
      {
        id: 3,
        question: "Numune Alırken Dikkat Edilmesi Gerekenler",
        answer: "Numune almadan önce besin ve tütün ürünleri tüketmeyin, diş fırçalamak gibi ağız florasını etkileyebilecek davranışlardan kaçının. Ellerinizi ve ağzınızı temiz tutun. Swab çubuğunun ağzınıza temas ettiğinden ve yeterli miktarda tükürük örneği aldığınızdan emin olun. Onam formunun bir kopyasını saklayın ve numuneyi gönderirken tüm adımların doğru uygulandığını kontrol edin. Broşürde bu adımlar detaylı şekilde açıklanmaktadır."
      },
      {
        id: 4,
        question: "Numune Alma Sırasında Rahatsızlık Olur mu?",
        answer: "Swab kullanımı ağrısız ve kolaydır. Bazı kişilerde swabın ağza teması hafif bir rahatsızlık hissi yaratabilir ancak bu geçicidir."
      },
      {
        id: 5,
        question: "Özel Hazırlık Gerekir mi?",
        answer: "Numune almadan önce özel bir hazırlık yapmanız gerekmez. Sadece el ve ağız hijyeninize dikkat etmeniz, besin ve tütün ürünlerinden uzak durmanız ve ağız florasını etkileyebilecek uygulamalardan kaçınmanız yeterlidir."
      },
      {
        id: 6,
        question: "Sağlık Uzmanı Desteği Gerekir mi?",
        answer: "Hayır, numune almak için bir sağlık uzmanına ihtiyacınız yoktur. İşlem oldukça basit olup kendi başınıza kolayca uygulanabilir."
      },
      {
        id: 7,
        question: "Numuneyi Gönderme Süreci",
        answer: "Numunenizi mümkün olan en kısa sürede gönderin. Bunun için kit ile gönderilen kargo poşetini kullanarak anlaşmalı kargo firmasına teslim edebilirsiniz."
      },
      {
        id: 8,
        question: "Sorun Yaşarsam Ne Yapmalıyım?",
        answer: "Numune alırken herhangi bir sorun yaşarsanız, kit ile birlikte verilen destek hattı veya iletişim bilgileri üzerinden bizimle iletişime geçebilirsiniz."
      },
      {
        id: 9,
        question: "Numune Alma Hatası Durumunda Ne Yapılır?",
        answer: "Bu tür durumlar için kitte 2 adet swab ve 2 adet tüp bulunmaktadır. İlk denemenizde hata yaparsanız, ikinci swabı ve tüpü kullanarak yeniden örnek alabilirsiniz. Gerekirse destek hattı ile iletişime geçerek yeni bir kit talep edebilirsiniz."
      },
      {
        id: 10,
        question: "Sonuçların Güvenilirliği",
        answer: "Numune alımı sırasında yapılan hatalar sonuçların güvenilirliğini etkileyebilir. Bu nedenle adımları eksiksiz uygulamanız önemlidir. Ancak laboratuvarlarımız olası sorunları tespit edebilecek kalite kontrol prosedürlerine sahiptir ve gerektiğinde ek numune talep edebilir."
      }
    ]
  },
  {
    id: "genetic-tests",
    title: "Genetik Testler ve Sonuçları",
    icon: DNAIcon,
    color: "from-emerald-500/20 to-green-400/20",
    iconBg: "bg-emerald-500/20",
    borderColor: "border-emerald-400/30",
    questions: [
      {
        id: 11,
        question: "18 Yaş Altı Bireylerde Test Uygulaması",
        answer: "Evet, 18 yaş altı bireylere genetik test yapılabilir."
      },
      {
        id: 12,
        question: "0-3 Yaş Arası Bebeklerde Test",
        answer: "0-3 yaş arası bebekler için özel olarak hazırlanmış test kitlerimiz mevcuttur. Testler son derece kolay uygulanır ve herhangi bir risk oluşturmaz. Bebeğiniz için test yaptırmak isterseniz, bebeğinize ait kimlik bilgilerini ve ebeveyn olduğunuzu kanıtlayacak bir belgeyi ekibimize iletmeniz gerekmektedir."
      },
      {
        id: 13,
        question: "Hamile Kadınlarda Test Uygulaması",
        answer: "Testlerimiz hamile kadınlarda da güvenle uygulanabilir, herhangi bir sakınca teşkil etmez."
      },
      {
        id: 14,
        question: "Test Sonuçlarının Hazırlanma ve Teslim Süresi",
        answer: "Numuneniz laboratuvara ulaştıktan sonra sonuçlar genellikle 2-5 hafta içerisinde hazırlanır. Sonuçlar, kullanıcıya güvenli elektronik ortamda teslim edilir."
      },
      {
        id: 15,
        question: "Genetik Yatkınlıkların Sağlık Durumuna Etkisi",
        answer: "Test sonuçlarındaki genetik yatkınlıklar, belirli hastalıklara veya durumlara karşı artmış risk veya koruyucu faktörlerinizi anlamanıza yardımcı olur. Ancak bu yatkınlıklar her bireyde farklı şekilde etki gösterebilir."
      },
      {
        id: 16,
        question: "Test Sonuçlarına Dayalı Sağlık Önlemleri",
        answer: "Test sonuçlarınıza göre alabileceğiniz sağlık önlemleri, genetik danışmanlık hizmetimiz aracılığıyla belirlenebilir. Sağlık uzmanları, genetik sonuçlarınızı ve kişisel sağlık geçmişinizi değerlendirerek size özel öneriler sunar."
      },
      {
        id: 17,
        question: "Test Sonuçlarının Yorumlanması",
        answer: "Test sonuçlarınızı anlamak ve sonraki adımları belirlemek için genetik danışmanlık hizmetimizden faydalanabilirsiniz. Danışmanlarımız, sonuçlarınızı açıklayarak risklerinizi değerlendirir ve hangi önlemleri almanız gerektiği konusunda yol gösterir."
      },
      {
        id: 18,
        question: "Kişisel Veri Güvenliği",
        answer: "Test sonuçlarınız ve kişisel verileriniz, yürürlükteki veri koruma yasalarına uygun şekilde saklanır. Bu süreçte gizlilik ve güvenlik ön planda tutulur."
      },
      {
        id: 19,
        question: "Hangi Hastalıkların Genetik Yatkınlık Testi Yapılabilir?",
        answer: "Birçok hastalığın genetik yatkınlık testi yapılabilir. FalconGene olarak, özellikle cilt genetiği ve beslenme genetiği alanlarında hazırladığımız paneller ile bu alanlardaki yatkınlıklarınızı değerlendirebiliyoruz. Testlerimiz yalnızca genetik yapınıza odaklanır ve teşhis amaçlı değildir; çünkü çevresel faktörler ve yaşam tarzı da sağlık durumunuzu etkileyen önemli unsurlardır."
      },
      {
        id: 20,
        question: "Test Sonuçlarının Sağlık Üzerindeki Etkisi",
        answer: "Test sonuçlarınızın sağlık durumunuza etkisi, taşıdığınız genetik yatkınlıklara ve çevresel faktörlere bağlıdır. Sonuçların kişiye özel olduğu unutulmamalıdır."
      },
      {
        id: 21,
        question: "Test Sonuçlarına Göre Sağlık Taramaları",
        answer: "Hangi sağlık taramalarını yaptırmanız gerektiği, genetik yatkınlıklarınıza ve kişisel sağlık durumunuza göre değişiklik gösterir. Sonuçlarınızı doktorunuzla paylaşarak uygun bir tarama planı oluşturabilirsiniz."
      }
    ]
  },
  {
    id: "shipping",
    title: "Nakliye ve Gönderim",
    icon: TruckIcon,
    color: "from-purple-500/20 to-pink-400/20",
    iconBg: "bg-purple-500/20",
    borderColor: "border-purple-400/30",
    questions: [
      {
        id: 22,
        question: "Raporların Teslim Süresi",
        answer: "Gönderdiğiniz numune laboratuvara ulaştıktan sonra, sonuçlar genellikle 3-6 hafta içerisinde hazırlanır. Sonuçlarınız hazır olduğunda size e-posta yoluyla bilgilendirme yapılır."
      },
      {
        id: 23,
        question: "Test Kitinin Teslim Süresi",
        answer: "Satın alma işleminizi tamamladıktan sonra test kitiniz, 24-72 saat içerisinde belirttiğiniz adrese kargolanır."
      },
      {
        id: 24,
        question: "Yurtdışına Teslimat",
        answer: "Evet, test kitlerimizi farklı ülkelere de gönderebiliyoruz. Kitin ulaşmasını istediğiniz ülke ve adresi açıkça belirtmeniz yeterlidir. Süreç ve teslimat süresi hakkında detaylı bilgi için bizimle iletişime geçebilirsiniz."
      },
      {
        id: 25,
        question: "Kargo Ücreti",
        answer: "Kargo süreci tamamen ücretsizdir. Test kitinin gönderimi ve numunenizin laboratuvara ulaştırılması için herhangi bir ücret ödemezsiniz."
      },
      {
        id: 26,
        question: "Ofise Gelmeme Gerek Var mı?",
        answer: "Hayır, ofisimize gelmenize gerek yoktur. Test kitiniz adresinize gönderilir ve testi evinizde, kendi başınıza kolayca uygulayabilirsiniz."
      }
    ]
  }
];

export default function SSSPage() {
  const [openQuestions, setOpenQuestions] = useState<Record<number, boolean>>({});
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    "kit-usage": true // İlk kategori varsayılan olarak açık
  });

  const toggleQuestion = (questionId: number) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const toggleCategory = (categoryId: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  return (
    <section className="relative z-10 min-h-screen bg-gradient-to-br from-[#0D1B2A] via-[#1e293b] to-[#0f172a] text-white">
      <div className="mx-auto max-w-5xl px-6 pt-32 pb-20">
        <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">Sık Sorulan Sorular</h1>
        <p className="mt-3 text-white/70 max-w-2xl">Test kitlerinin kullanımı, genetik test süreçleri ve gönderim hakkında en sık merak edilenleri bu sayfada derledik.</p>

        <div className="mt-12 space-y-6">
          {faqCategories.map((category) => (
            <div key={category.id} className={`rounded-2xl bg-gradient-to-r ${category.color} border ${category.borderColor} backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}>
              {/* Kategori Başlığı */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-xl ${category.iconBg} backdrop-blur-sm`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">{category.title}</h2>
                </div>
                <ChevronDownIcon 
                  className={`w-6 h-6 text-white/70 transition-transform duration-200 ${
                    openCategories[category.id] ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Kategoriye Ait Sorular */}
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openCategories[category.id] ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-white/10">
                  {category.questions.map((faq) => (
                    <div key={faq.id} className="border-b border-white/5 last:border-b-0">
                      {/* Soru Başlığı */}
                      <button
                        onClick={() => toggleQuestion(faq.id)}
                        className="w-full px-6 py-4 text-left hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-white pr-4 group-hover:text-blue-200 transition-colors duration-300">{faq.question}</h3>
                          <ChevronDownIcon 
                            className={`w-5 h-5 text-white/70 transition-transform duration-200 flex-shrink-0 ${
                              openQuestions[faq.id] ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </button>

                      {/* Cevap */}
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        openQuestions[faq.id] ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="px-6 pb-4 bg-white/5 backdrop-blur-sm mx-6 mb-2 rounded-lg">
                          <div className="p-4">
                            <p className="text-white/90 leading-relaxed">
                              {faq.answer}
                              {faq.id === 12 && (
                                <>
                                  {" "}İletişim için: <Link href="mailto:info@falcongene.com" className="underline text-cyan-300 hover:text-cyan-200 transition-colors">info@falcongene.com</Link>
                                </>
                              )}
                            </p>
                            {(faq as any).hasVideo && (
                              <>
                                <div className="mt-4 mb-3">
                                  <h4 className="text-sm font-semibold text-cyan-200 mb-2">📹 Eğitim Videosu</h4>
                                  <p className="text-white/70 text-sm">Kit kullanımını adım adım gösteren detaylı eğitim videosunu izleyebilirsiniz:</p>
                                </div>
                                <YouTubePlayer 
                                  videoId={(faq as any).videoId} 
                                  title={faq.question}
                                />
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-sm text-white/60">
          Daha fazla bilgi için <Link href="#footer" className="underline text-cyan-300 hover:text-cyan-200 transition-colors">iletişim</Link> bölümümüze göz atabilirsiniz.
        </div>
      </div>
    </section>
  );
}