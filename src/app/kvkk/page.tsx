"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function KVKKPage() {
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
              KVKK Aydınlatma Metni
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Kişisel Verilerin Korunması Kanunu Kapsamında Bilgilendirme
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
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">
              FALCONGENE BİYOTEKNOLOJİ ANONİM ŞİRKETİ Hakkında Aydınlatma Metni
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>FALCONGENE BİYOTEKNOLOJİ ANONİM ŞİRKETİ (FALCONGENE)</strong> kişisel verilerinizi 
                korumak için azami özeni göstermektedir.
              </p>
              <p>
                FALCONGENE, ilişkili olduğu tüm şahıslara ait her türlü kişisel veriyi 
                <strong> 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVK Kanunu")</strong>'na uygun 
                bir şekilde işleyerek, muhafaza etmektedir.
              </p>
              <p>
                FALCONGENE, KVK Kanunu kapsamında tanımlı <strong>"Veri Sorumlusu"</strong> sıfatıyla, 
                kişisel verilerinizi aşağıda izah edildiği şekilde ve mevzuata uygun olarak işlemektedir.
              </p>
              <p>
                <strong>Amacımız:</strong> 6698 sayılı "Kişisel Verilerin Korunması Kanunu" 10. Maddesi gereğince, 
                kişisel verilerinizin alınma şekilleri, işlenme amaçları, hukuki nedenleri ve haklarınız konularında 
                sizi bilgilendirmektir.
              </p>
            </div>
          </section>

          {/* Data Collection */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#0D1B2A] mb-4">Veri Toplama Yöntemleri</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Web sitemize yapılan yazılı/dijital başvurular</li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Sosyal medya platformları</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>E-posta iletişimi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Matbu formlar</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Web sitesi üzerinde gezinme hareketleri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>SGK kayıtları</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>PTT kayıtları</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>İletişim kanalları</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-blue-800">
                <strong>Saklama Süresi:</strong> Kişisel verileriniz yasal süresi boyunca saklanmaktadır. 
                FALCONGENE ile ilişkiniz devam ettiği müddetçe oluşturularak ve güncellenerek işlenebilir.
              </p>
              <p className="text-blue-800 mt-2">
                Bu yöntemlerle toplanan kişisel verileriniz <strong>Kanun'un 5. ve 6. Maddelerinde</strong> 
                belirtilen kişisel veri işleme şartları ve amaçları dahilinde işlenecektir.
              </p>
            </div>
          </section>

          {/* Processing Purposes */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">Kişisel Verilerin Hangi Amaçla İşleneceği</h2>
            
            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-4 leading-relaxed">
                Kişisel verileriniz, her türlü sözlü, yazılı ya da elektronik ortamda, aşağıda yer verilen 
                amaçlar doğrultusunda hizmetlerimizin sunulabilmesi ve bu kapsamda şirketimizin sözleşme, 
                taahhütname ve yasadan doğan mesuliyetlerini eksiksiz ve doğru bir şekilde yerine getirebilmesi 
                amacı ile edinilir:
              </p>
            </div>

            <div className="space-y-4">
              {[
                "FALCONGENE tarafından yürütülen faaliyetlerin gerçekleştirilmesi için ilgili iş birimlerimiz tarafından gerekli çalışmaların yapılması ve buna bağlı iş süreçlerinin yürütülmesi",
                "FALCONGENE'in Operasyonel, Ticari ve İş Stratejilerinin Planlanması ve İcrası",
                "FALCONGENE'in ve FALCONGENE ile iş ilişkisi içerisinde olan ilgili kişilerin hukuki, teknik ve ticari-iş güvenliğinin temin edilmesi",
                "FALCONGENE tarafından sunulan hizmetlerden ilgili kişileri faydalandırmak için gerekli çalışmaların iş birimlerimiz tarafından yapılması ve ilgili iş süreçlerinin yürütülmesi",
                "FALCONGENE'in insan kaynakları politikaları ve süreçlerinin planlanması ve icra edilmesi",
                "FALCONGENE tarafından program ve hizmetlerinin ilgili kişilerin beğenisine sunulması, önerilmesi ve tanıtılması için gerekli olan aktivitelerin planlanması ve icrası",
                "Şirketimizin hizmetlerinden faydalanmanız için gerekli çalışmaların ilgili birimlerce yapılması",
                "Çalışanlarının/ziyaretçilerinin can ve mal güvenliğinin korunması ve yasal yükümlülüklerin yerine getirilmesi",
                "Şirketimizin hizmetlerini geliştirmek ve pazar araştırması yapmak amacıyla iletişim kurulması",
                "İş Kanunu, Sosyal Güvenlik Kanunu ve diğer mevzuat çerçevesinde yükümlülüklerin yerine getirilmesi"
              ].map((purpose, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-800">{purpose}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Data Sharing */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#0D1B2A] mb-3">
                  a) İş Ortakları ve Üçüncü Taraflar
                </h3>
                <p className="text-gray-700">
                  Toplanan kişisel verileriniz; şirketimiz tarafından sunulan ürün ve hizmetlerden sizleri 
                  faydalandırmak, kişiselleştirmek ve güvenlik temini amacıyla iş ortaklarımıza, 
                  tedarikçilerimize, şirket yetkililerine, hissedarlarımıza ve kanunen yetkili kurumlara 
                  KVK Kanunu'nun 8. ve 9. maddelerinde belirtilen şartlar çerçevesinde aktarılabilecektir.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#0D1B2A] mb-3">
                  b) Teknik Altyapı ve Arşivleme
                </h3>
                <p className="text-gray-700">
                  Veriler, gerekli güvenlik ve hukuki önlemler alınarak bilgi işlem altyapılarına, 
                  bulut bilişim sistemlerine aktarılabilir, elektronik veya fiziki ortamlarda yasal 
                  yükümlülüklerin yerine getirilmesi amacıyla arşivlenebilir. Gerekli olması halinde 
                  kanunen yetkili kamu kurumları ve özel kişilerle paylaşılabilecektir.
                </p>
              </div>
            </div>
          </section>

          {/* Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">Kişisel Veri Sahibinin Hakları</h2>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <p className="text-green-800 font-medium mb-4">
                6698 sayılı Kanun'un 11. Maddesinde sayılan haklarınıza ilişkin taleplerinizi aşağıda düzenlenen 
                yöntemlerle FALCONGENE'e iletmeniz durumunda, talebin niteliğine göre en kısa sürede ve 
                <strong> en geç otuz gün içinde ücretsiz</strong> olarak sonuçlandıracaktır.
              </p>
              <p className="text-green-700 text-sm">
                <strong>Not:</strong> İşlemin ayrıca bir maliyeti gerektirmesi halinde, Kişisel Verileri Koruma 
                Kurulu'nca belirlenen tarifedeki ücret alınacaktır.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-[#0D1B2A] mb-4">Kişisel veri sahipleri olarak haklarınız:</h3>
            
            <div className="grid gap-4">
              {[
                {
                  title: "Bilgi Alma Hakkı",
                  items: [
                    "Kişisel veri işlenip işlenmediğini öğrenme",
                    "Kişisel verileri işlenmişse buna ilişkin bilgi talep etme",
                    "Kişisel verilerin işlenme amacını öğrenme"
                  ]
                },
                {
                  title: "Şeffaflık Hakkı",
                  items: [
                    "Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme",
                    "Amacına uygun kullanılıp kullanılmadığını öğrenme"
                  ]
                },
                {
                  title: "Düzeltme Hakkı",
                  items: [
                    "Kişisel verilerin eksik veya yanlış işlenmiş olması halinde düzeltilmesini isteme",
                    "Yapılan işlemin üçüncü kişilere bildirilmesini isteme"
                  ]
                },
                {
                  title: "Silme ve İtiraz Hakkı",
                  items: [
                    "İşlenmesini gerektiren sebeplerin ortadan kalkması halinde silme/yok edilmesini isteme",
                    "Otomatik sistemler vasıtasıyla analiz sonucuna itiraz etme",
                    "Kanuna aykırı işleme sebebiyle zarara uğraması halinde giderilmesini talep etme"
                  ]
                }
              ].map((right, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-[#0D1B2A] mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    {right.title}
                  </h4>
                  <ul className="space-y-2">
                    {right.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Application Process */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">Başvuru Usulü ve Kanalları</h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Başvuru Şartları</h3>
              <p className="text-blue-700 mb-4">
                6698 sayılı Kanunu'nun 13. maddesinin 1. fıkrası gereğince, haklarınızı kullanmak ile ilgili 
                talebinizi yazılı veya Kişisel Verileri Koruma Kurulu'nun belirlediği diğer yöntemlerle 
                şirketimize iletebilirsiniz.
              </p>
              <div className="bg-blue-100 border border-blue-300 rounded p-4">
                <p className="text-blue-800 text-sm">
                  <strong>Önemli:</strong> Kişisel Verileri Koruma Kurulu, şu aşamada herhangi bir yöntem 
                  belirlemediği için, başvurunuzu 6698 sayılı Kanun gereğince <strong>yazılı olarak</strong> 
                  şirketimize iletmeniz gerekmektedir.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Başvuru Formu ile
                </h4>
                <p className="text-green-700 text-sm">
                  Web Sitesinde yer alan Başvuru Formu doldurarak ve formun imzalı bir nüshasını 
                  <strong> noter kanalıyla</strong> veya 6698 sayılı Kanun'da belirtilen diğer yöntemler ile gönderebilirsiniz.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  E-posta ile
                </h4>
                <p className="text-purple-700 text-sm mb-3">
                  İlgili formu <strong>güvenli elektronik imzalı</strong> olarak aşağıdaki adrese iletebilirsiniz:
                </p>
                <a 
                  href="mailto:info@falcongene.com" 
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@falcongene.com
                </a>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
              <h4 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Başvuru İçeriği
              </h4>
              <p className="text-yellow-800 text-sm">
                Başvurunuzda <strong>kimliğinizi tespit edici gerekli bilgiler</strong> ile 6698 sayılı Kanunu'n 
                11. maddesinde belirtilen haklarınızdan <strong>kullanmayı talep ettiğiniz hakkınıza yönelik 
                açıklamalarınızı</strong> içermelidir.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-0 pt-8 border-t border-gray-200">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-[#0D1B2A]">KVKK ile İlgili Sorularınız mı Var?</h3>
              <p className="mb-6 text-gray-600">
                Kişisel verilerinizin korunması konusunda daha fazla bilgi almak için bizimle iletişime geçin.
              </p>
              
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