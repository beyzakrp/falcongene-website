"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function IadePolitikasiPage() {
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
              Teslimat ve İade Politikası
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Son güncelleme: 26 Eylül 2025
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-lg max-w-none"
        >
          {/* Introduction */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <p className="text-lg leading-relaxed mb-4">
              <strong>FalconGene</strong>'den alışveriş yaptığınız için teşekkür ederiz.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              Herhangi bir nedenle satın aldığınız üründen tam olarak memnun kalmazsanız, 
              Sizi para iadesi ve iadelere ilişkin politikamızı incelemeye davet ediyoruz. 
              Aşağıdaki koşullar Bizden satın aldığınız tüm ürünler için geçerlidir.
            </p>
          </div>

          {/* Definitions */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">Yorum ve Tanımlar</h2>
            
            <h3 className="text-xl font-semibold text-[#0D1B2A] mb-4">Tanımlar</h3>
            <p className="mb-4">Bu İade ve Geri Ödeme Politikasının amaçları doğrultusunda:</p>
            
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Şirket</strong> (bu Sözleşmede "Şirket", "Biz", "Bizi" veya "Bizim" olarak anılacaktır) 
                <strong> FALCONGENE BİYOTEKNOLOJİ ANONİM ŞİRKETİ</strong> anlamına gelir.
              </li>
              <li><strong>Mallar,</strong> Hizmette satışa sunulan ürünleri ifade eder.</li>
              <li><strong>Siparişler,</strong> Bizden Mal satın almanız yönündeki talebiniz anlamına gelir.</li>
              <li><strong>Hizmet</strong> Web Sitesini ifade eder.</li>
              <li>
                <strong>Web sitesi,</strong> <Link href="/" className="text-[#0D1B2A] hover:underline">www.falcongene.com</Link> adresinden 
                erişilebilen FALCONGENE anlamına gelir.
              </li>
              <li>
                <strong>Siz,</strong> Hizmete erişen veya Hizmeti kullanan bireyi veya söz konusu kişinin adına 
                Hizmete erişen veya Hizmeti kullanan şirketi veya diğer tüzel kişiyi ifade edersiniz.
              </li>
            </ul>
          </section>

          {/* Cancellation Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">Sipariş İptal Haklarınız</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#0D1B2A] mb-3">14 Gün İptal Hakkı</h3>
              <p className="text-gray-700 leading-relaxed">
                Siparişinizi <strong>14 gün içerisinde</strong> hiçbir gerekçe göstermeksizin iptal etme hakkına sahipsiniz.
              </p>
            </div>
            
            <p className="mb-4">
              Bir Siparişi iptal etmek için son tarih, Malları teslim aldığınız veya taşıyıcı olmayan, 
              atadığınız üçüncü bir tarafın teslim edilen ürünü teslim aldığı tarihten itibaren 14 gündür.
            </p>
            
            <p className="mb-4">
              Cayma hakkınızı kullanabilmeniz için, kararınızı açık bir beyanla Bize bildirmeniz gerekmektedir. 
              Kararınızı bize şu şekilde bildirebilirsiniz:
            </p>
            
            <p className="mb-6">
              <strong>E-posta:</strong> <a href="mailto:info@falcongene.com" className="text-[#0D1B2A] hover:underline">info@falcongene.com</a>
            </p>
            
            <p className="mb-0">
              İade edilen Malları aldığımız günden itibaren <strong>en geç 14 gün içinde</strong> Size geri ödeme yapacağız. 
              Sipariş için kullandığınız ödeme yönteminin aynısını kullanacağız ve bu tür bir geri ödeme için 
              sizden herhangi bir ücret alınmayacaktır.
            </p>
          </section>

          {/* Return Conditions */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">İade Koşulları</h2>
            
            <h3 className="text-xl font-semibold text-[#0D1B2A] mb-4">İadeye Uygun Ürünler İçin:</h3>
            <div className="mb-6">
              <p className="mb-3 font-medium text-gray-800">Malların iadeye uygun olabilmesi için lütfen aşağıdakilerden emin olun:</p>
              <ul className="space-y-2 ml-6 text-gray-700">
                <li>• Mallar son 14 gün içinde satın alındı</li>
                <li>• Satın alma makbuzunuz veya kanıtınız var</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-[#0D1B2A] mb-4">İade Edilemeyen Ürünler:</h3>
            <div className="mb-6">
              <p className="mb-3 font-medium text-gray-800">Aşağıdaki Ürünler iade edilemez:</p>
              <ul className="space-y-3 ml-6 text-gray-700">
                <li>
                  • Sizin spesifikasyonlarınıza göre yapılmış veya açıkça kişiselleştirilmiş malların 
                  <strong>(laboratuvara iletilmiş örnek, yapılmış test)</strong> tedariki.
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>Niteliği itibarıyla iade edilmeye uygun olmayan, hızla bozulan veya son kullanma tarihi geçmiş malların teslimi.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>Sağlığın korunması veya hijyen açısından iadeye uygun olmayan ve teslimattan sonra ambalajı açılmış Ürünlerin temini.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>Teslimattan sonra niteliğine göre diğer ürünlerle ayrılmaz bir şekilde karıştırılan malların temini.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>
                    <strong>Hataya bağlı olarak alınan örneği kargoya geç verme ve DNA bozulması durumunda</strong> 
                    iade kabul edilmez ücretsiz bir şekilde yeniden örnek kutusu size gönderilir.
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800 mb-0">
                <strong>Önemli:</strong> Tamamen kendi takdirimize bağlı olarak yukarıdaki iade koşullarını karşılamayan 
                herhangi bir ürünün iadesini reddetme hakkımızı saklı tutuyoruz. Yalnızca normal fiyatlı ürünler iade edilebilir. 
                Ne yazık ki, satışa sunulan malların iadesi mümkün değildir.
              </p>
            </div>
          </section>

          {/* Return Process */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">İade Edilen Mallar</h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium text-blue-800 mb-2">İade Sorumluluğu</p>
                  <p className="text-blue-700">
                    Malları Bize iade etmenin maliyeti ve riskinden siz sorumlusunuz. 
                    <strong> Adres satın alınan ürüne bağlı olacaktır.</strong>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-medium text-red-800 mb-2">Uyarı</p>
                  <p className="text-red-700">
                    İade nakliyesinde hasar gören veya kaybolan mallardan sorumlu tutulamayız. 
                    Bu nedenle <strong>sigortalı ve izlenebilir bir posta hizmeti</strong> öneriyoruz. 
                    Malların fiilen teslim alınması veya iade teslimatının alındığına dair kanıt olmadan para iadesi yapamayız.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Gifts */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">Hediyeler</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="font-semibold text-purple-800 mb-3">Hediye Olarak İşaretlenen Ürünler</h4>
                <p className="text-purple-700 text-sm">
                  Ürünler satın alındığında hediye olarak işaretlendiyse ve doğrudan size gönderildiyse, 
                  iadenizin değeri kadar bir hediye kredisi alacaksınız. İade edilen ürün teslim alındıktan 
                  sonra tarafınıza hediye sertifikası gönderilecektir.
                </p>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="font-semibold text-orange-800 mb-3">Normal Satın Alımlar</h4>
                <p className="text-orange-700 text-sm">
                  Ürünler satın alındığında hediye olarak işaretlenmemişse veya hediyeyi veren kişi, 
                  Siparişi daha sonra Size vermek üzere kendisine göndermişse, geri ödemeyi hediyeyi verene göndereceğiz.
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-0 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">Bize Ulaşın</h2>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-[#0D1B2A]">İade ve Geri Ödeme Politikamız Hakkında Sorularınız mı Var?</h3>
              <p className="mb-6 text-gray-600">Lütfen bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <p className="text-gray-700">
                  <strong>E-posta:</strong> <a href="mailto:info@falcongene.com" className="text-[#0D1B2A] hover:underline">info@falcongene.com</a>
                </p>
                <span className="hidden sm:block text-gray-400">|</span>
                <p className="text-gray-700">
                  <Link href="/iletisim" className="text-[#0D1B2A] hover:underline">İletişim Formu</Link>
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>

      {/* Back to Top */}
      <div className="text-center pb-8">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-2 text-[#0D1B2A] hover:text-blue-600 font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          Başa Dön
        </button>
      </div>
    </div>
  );
}