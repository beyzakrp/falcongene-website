"use client";

import Link from "next/link";
import { useState } from "react";

// SVG İkon bileşeni
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

// FAQ kategorileri ve soruları
const faqCategories = [
  {
    id: "kit-usage",
    title: "Swap (Tükürük Kiti) Uygulama",
    icon: "🧪",
    questions: [
      {
        id: 1,
        question: "Kutudan Çıkan Swab (Tükürük Kiti) Nasıl Kullanılır?",
        answer: "Swab kullanımı oldukça basittir. Öncelikle ellerinizi iyice yıkayın. Swab çubuğunu ağzınızın iç yan yüzeyine dokundurup dairesel hareketlerle dudak içi ve yanak içi bölgelerinizi ovalayın. Çubuğun ucu tükürükle iyice ıslanmalıdır. Bu aşamada dikkatli olun; doğru uygulama, sonuçların güvenilirliği için kritik öneme sahiptir. Detaylı anlatım için kutu içerisinde yer alan broşüre göz atabilir veya tarafınıza iletilen eğitim videosunu izleyebilirsiniz. Uygulamaya başlamadan önce Aydınlatılmış Onam Formu'nu dikkatlice okuyun ve formda belirtilen koşulları sağladığınızdan emin olun."
      },
      {
        id: 2,
        question: "Kit İçeriği ve Kullanımı",
        answer: "Kit; 2 adet swab çubuğu, 2 adet numune tüpü, 1 bilgilendirici broşür, 2 adet onam formu ve numunenin gönderimi için 1 kargo poşeti içerir. Öncelikle onam formunu okuyup imzalayın. Daha sonra broşürdeki talimatlara uyarak swab çubuğunu dudak ve yanak içi bölgelerinizde gezdirip tükürük örneğinizi alın. Swabı numune tüpüne yerleştirip tüpü sıkıca kapatın. Numuneyi ve imzalı onam formunu kargo poşetine koyarak belirtilen adrese gönderin."
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
    icon: "🧬",
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
    icon: "📦",
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
    <section className="relative z-10 min-h-screen bg-[#0D1B2A] text-white">
      <div className="mx-auto max-w-5xl px-6 pt-32 pb-20">
        <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">Sık Sorulan Sorular</h1>
        <p className="mt-3 text-white/70 max-w-2xl">Test kitlerinin kullanımı, genetik test süreçleri ve gönderim hakkında en sık merak edilenleri bu sayfada derledik.</p>

        <div className="mt-12 space-y-10">
          {/* Swap (Tükürük Kiti) Uygulama */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h2 className="text-2xl font-semibold">Swap (Tükürük Kiti) Uygulama</h2>
            <div className="mt-6 space-y-6 text-white/90 leading-relaxed">
              <div>
                <h3 className="font-semibold text-white">Kutudan Çıkan Swab (Tükürük Kiti) Nasıl Kullanılır?</h3>
                <p className="mt-2">Swab kullanımı oldukça basittir. Öncelikle ellerinizi iyice yıkayın. Swab çubuğunu ağzınızın iç yan yüzeyine dokundurup dairesel hareketlerle dudak içi ve yanak içi bölgelerinizi ovalayın. Çubuğun ucu tükürükle iyice ıslanmalıdır. Bu aşamada dikkatli olun; doğru uygulama, sonuçların güvenilirliği için kritik öneme sahiptir. Detaylı anlatım için kutu içerisinde yer alan broşüre göz atabilir veya tarafınıza iletilen eğitim videosunu izleyebilirsiniz. Uygulamaya başlamadan önce Aydınlatılmış Onam Formu’nu dikkatlice okuyun ve formda belirtilen koşulları sağladığınızdan emin olun.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Kit İçeriği ve Kullanımı</h3>
                <p className="mt-2">Kit; 2 adet swab çubuğu, 2 adet numune tüpü, 1 bilgilendirici broşür, 2 adet onam formu ve numunenin gönderimi için 1 kargo poşeti içerir. Öncelikle onam formunu okuyup imzalayın. Daha sonra broşürdeki talimatlara uyarak swab çubuğunu dudak ve yanak içi bölgelerinizde gezdirip tükürük örneğinizi alın. Swabı numune tüpüne yerleştirip tüpü sıkıca kapatın. Numuneyi ve imzalı onam formunu kargo poşetine koyarak belirtilen adrese gönderin.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Numune Alırken Dikkat Edilmesi Gerekenler</h3>
                <p className="mt-2">Numune almadan önce besin ve tütün ürünleri tüketmeyin, diş fırçalamak gibi ağız florasını etkileyebilecek davranışlardan kaçının. Ellerinizi ve ağzınızı temiz tutun. Swab çubuğunun ağzınıza temas ettiğinden ve yeterli miktarda tükürük örneği aldığınızdan emin olun. Onam formunun bir kopyasını saklayın ve numuneyi gönderirken tüm adımların doğru uygulandığını kontrol edin. Broşürde bu adımlar detaylı şekilde açıklanmaktadır.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Numune Alma Sırasında Rahatsızlık Olur mu?</h3>
                <p className="mt-2">Swab kullanımı ağrısız ve kolaydır. Bazı kişilerde swabın ağza teması hafif bir rahatsızlık hissi yaratabilir ancak bu geçicidir.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Özel Hazırlık Gerekir mi?</h3>
                <p className="mt-2">Numune almadan önce özel bir hazırlık yapmanız gerekmez. Sadece el ve ağız hijyeninize dikkat etmeniz, besin ve tütün ürünlerinden uzak durmanız ve ağız florasını etkileyebilecek uygulamalardan kaçınmanız yeterlidir.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Sağlık Uzmanı Desteği Gerekir mi?</h3>
                <p className="mt-2">Hayır, numune almak için bir sağlık uzmanına ihtiyacınız yoktur. İşlem oldukça basit olup kendi başınıza kolayca uygulanabilir.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Numuneyi Gönderme Süreci</h3>
                <p className="mt-2">Numunenizi mümkün olan en kısa sürede gönderin. Bunun için kit ile gönderilen kargo poşetini kullanarak anlaşmalı kargo firmasına teslim edebilirsiniz.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Sorun Yaşarsam Ne Yapmalıyım?</h3>
                <p className="mt-2">Numune alırken herhangi bir sorun yaşarsanız, kit ile birlikte verilen destek hattı veya iletişim bilgileri üzerinden bizimle iletişime geçebilirsiniz.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Numune Alma Hatası Durumunda Ne Yapılır?</h3>
                <p className="mt-2">Bu tür durumlar için kitte 2 adet swab ve 2 adet tüp bulunmaktadır. İlk denemenizde hata yaparsanız, ikinci swabı ve tüpü kullanarak yeniden örnek alabilirsiniz. Gerekirse destek hattı ile iletişime geçerek yeni bir kit talep edebilirsiniz.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Sonuçların Güvenilirliği</h3>
                <p className="mt-2">Numune alımı sırasında yapılan hatalar sonuçların güvenilirliğini etkileyebilir. Bu nedenle adımları eksiksiz uygulamanız önemlidir. Ancak laboratuvarlarımız olası sorunları tespit edebilecek kalite kontrol prosedürlerine sahiptir ve gerektiğinde ek numune talep edebilir.</p>
              </div>
            </div>
          </div>

          {/* Genetik Testler ve Sonuçları */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h2 className="text-2xl font-semibold">Genetik Testler ve Sonuçları</h2>
            <div className="mt-6 space-y-6 text-white/90 leading-relaxed">
              <div>
                <h3 className="font-semibold text-white">18 Yaş Altı Bireylerde Test Uygulaması</h3>
                <p className="mt-2">Evet, 18 yaş altı bireylere genetik test yapılabilir.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">0-3 Yaş Arası Bebeklerde Test</h3>
                <p className="mt-2">0-3 yaş arası bebekler için özel olarak hazırlanmış test kitlerimiz mevcuttur. Testler son derece kolay uygulanır ve herhangi bir risk oluşturmaz. Bebeğiniz için test yaptırmak isterseniz, bebeğinize ait kimlik bilgilerini ve ebeveyn olduğunuzu kanıtlayacak bir belgeyi ekibimize iletmeniz gerekmektedir. İletişim için: <Link href="mailto:info@falcongene.com" className="underline text-[#D6F5E3]">info@falcongene.com</Link></p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Hamile Kadınlarda Test Uygulaması</h3>
                <p className="mt-2">Testlerimiz hamile kadınlarda da güvenle uygulanabilir, herhangi bir sakınca teşkil etmez.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Test Sonuçlarının Hazırlanma ve Teslim Süresi</h3>
                <p className="mt-2">Numuneniz laboratuvara ulaştıktan sonra sonuçlar genellikle 2-5 hafta içerisinde hazırlanır. Sonuçlar, kullanıcıya güvenli elektronik ortamda teslim edilir.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Genetik Yatkınlıkların Sağlık Durumuna Etkisi</h3>
                <p className="mt-2">Test sonuçlarındaki genetik yatkınlıklar, belirli hastalıklara veya durumlara karşı artmış risk veya koruyucu faktörlerinizi anlamanıza yardımcı olur. Ancak bu yatkınlıklar her bireyde farklı şekilde etki gösterebilir.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Test Sonuçlarına Dayalı Sağlık Önlemleri</h3>
                <p className="mt-2">Test sonuçlarınıza göre alabileceğiniz sağlık önlemleri, genetik danışmanlık hizmetimiz aracılığıyla belirlenebilir. Sağlık uzmanları, genetik sonuçlarınızı ve kişisel sağlık geçmişinizi değerlendirerek size özel öneriler sunar.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Test Sonuçlarının Yorumlanması</h3>
                <p className="mt-2">Test sonuçlarınızı anlamak ve sonraki adımları belirlemek için genetik danışmanlık hizmetimizden faydalanabilirsiniz. Danışmanlarımız, sonuçlarınızı açıklayarak risklerinizi değerlendirir ve hangi önlemleri almanız gerektiği konusunda yol gösterir.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Kişisel Veri Güvenliği</h3>
                <p className="mt-2">Test sonuçlarınız ve kişisel verileriniz, yürürlükteki veri koruma yasalarına uygun şekilde saklanır. Bu süreçte gizlilik ve güvenlik ön planda tutulur.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Hangi Hastalıkların Genetik Yatkınlık Testi Yapılabilir?</h3>
                <p className="mt-2">Birçok hastalığın genetik yatkınlık testi yapılabilir. FalconGene olarak, özellikle cilt genetiği ve beslenme genetiği alanlarında hazırladığımız paneller ile bu alanlardaki yatkınlıklarınızı değerlendirebiliyoruz. Testlerimiz yalnızca genetik yapınıza odaklanır ve teşhis amaçlı değildir; çünkü çevresel faktörler ve yaşam tarzı da sağlık durumunuzu etkileyen önemli unsurlardır.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Test Sonuçlarının Sağlık Üzerindeki Etkisi</h3>
                <p className="mt-2">Test sonuçlarınızın sağlık durumunuza etkisi, taşıdığınız genetik yatkınlıklara ve çevresel faktörlere bağlıdır. Sonuçların kişiye özel olduğu unutulmamalıdır.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Test Sonuçlarına Göre Sağlık Taramaları</h3>
                <p className="mt-2">Hangi sağlık taramalarını yaptırmanız gerektiği, genetik yatkınlıklarınıza ve kişisel sağlık durumunuza göre değişiklik gösterir. Sonuçlarınızı doktorunuzla paylaşarak uygun bir tarama planı oluşturabilirsiniz.</p>
              </div>
            </div>
          </div>

          {/* Nakliye ve Gönderim */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h2 className="text-2xl font-semibold">Nakliye ve Gönderim</h2>
            <div className="mt-6 space-y-6 text-white/90 leading-relaxed">
              <div>
                <h3 className="font-semibold text-white">Raporların Teslim Süresi</h3>
                <p className="mt-2">Gönderdiğiniz numune laboratuvara ulaştıktan sonra, sonuçlar genellikle 3-6 hafta içerisinde hazırlanır. Sonuçlarınız hazır olduğunda size e-posta yoluyla bilgilendirme yapılır.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Test Kitinin Teslim Süresi</h3>
                <p className="mt-2">Satın alma işleminizi tamamladıktan sonra test kitiniz, 24-72 saat içerisinde belirttiğiniz adrese kargolanır.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Yurtdışına Teslimat</h3>
                <p className="mt-2">Evet, test kitlerimizi farklı ülkelere de gönderebiliyoruz. Kitin ulaşmasını istediğiniz ülke ve adresi açıkça belirtmeniz yeterlidir. Süreç ve teslimat süresi hakkında detaylı bilgi için bizimle iletişime geçebilirsiniz.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Kargo Ücreti</h3>
                <p className="mt-2">Kargo süreci tamamen ücretsizdir. Test kitinin gönderimi ve numunenizin laboratuvara ulaştırılması için herhangi bir ücret ödemezsiniz.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Ofise Gelmeme Gerek Var mı?</h3>
                <p className="mt-2">Hayır, ofisimize gelmenize gerek yoktur. Test kitiniz adresinize gönderilir ve testi evinizde, kendi başınıza kolayca uygulayabilirsiniz.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-sm text-white/60">
          Daha fazla bilgi için <Link href="#footer" className="underline text-[#D6F5E3]">iletişim</Link> bölümümüze göz atabilirsiniz.
        </div>
      </div>
    </section>
  );
}


