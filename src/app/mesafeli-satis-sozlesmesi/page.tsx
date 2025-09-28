"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MesafeliSatisSozlesmesiPage() {
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
              Mesafeli Satış Sözleşmesi
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              FALCONGENE Biyoteknoloji Anonim Şirketi - Mesafeli Satış Sözleşmesi Koşulları
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
          {/* Taraflar */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">
              1. TARAFLAR
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                İşbu Sözleşme aşağıdaki taraflar arasında aşağıda belirtilen hüküm ve şartlar çerçevesinde imzalanmıştır.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-[#0D1B2A] mb-3">A. 'ALICI' (sözleşmede bundan sonra "ALICI" olarak anılacaktır)</h3>
                <div className="ml-4 space-y-1 text-gray-600">
                  <p><strong>AD-SOYAD:</strong> [Sipariş sırasında belirtilecektir]</p>
                  <p><strong>ADRES:</strong> [Sipariş sırasında belirtilecektir]</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-[#0D1B2A] mb-3">B. 'SATICI' (sözleşmede bundan sonra "SATICI" olarak anılacaktır)</h3>
                <div className="ml-4 space-y-1 text-gray-700">
                  <p><strong>UNVAN:</strong> FALCONGENE BİYOTEKNOLOJİ ANONİM ŞİRKETİ</p>
                  <p><strong>ADRES:</strong> Kazlıçeşme Mah, 245. Sk. No:5, Zeytinburnu/İstanbul, Biruni Teknopark</p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="text-yellow-800">
                  İş bu sözleşmeyi kabul etmekle ALICI, sözleşme konusu siparişi onayladığı takdirde sipariş konusu bedeli ve varsa kargo ücreti, vergi gibi belirtilen ek ücretleri ödeme yükümlülüğü altına gireceğini ve bu konuda bilgilendirildiğini peşinen kabul eder.
                </p>
              </div>
            </div>
          </section>

          {/* Tanımlar */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">2. TANIMLAR</h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 mb-6">
                İşbu sözleşmenin uygulanmasında ve yorumlanmasında aşağıda yazılı terimler karşılarındaki yazılı açıklamaları ifade edeceklerdir.
              </p>

              <div className="grid gap-4">
                {[
                  { term: "BAKAN", definition: "Gümrük ve Ticaret Bakanı'nı" },
                  { term: "BAKANLIK", definition: "Gümrük ve Ticaret Bakanlığı'nı" },
                  { term: "KANUN", definition: "6502 sayılı Tüketicinin Korunması Hakkında Kanun'u" },
                  { term: "YÖNETMELİK", definition: "Mesafeli Sözleşmeler Yönetmeliği'ni (RG:27.11.2014/29188)" },
                  { term: "HİZMET", definition: "Bir ücret veya menfaat karşılığında yapılan ya da yapılması taahhüt edilen mal sağlama dışındaki her türlü tüketici işleminin konusunu" },
                  { term: "SATICI", definition: "Ticari veya mesleki faaliyetleri kapsamında tüketiciye mal sunan veya mal sunan adına veya hesabına hareket eden şirketi" },
                  { term: "ALICI", definition: "Bir mal veya hizmeti ticari veya mesleki olmayan amaçlarla edinen, kullanan veya yararlanan gerçek ya da tüzel kişiyi" },
                  { term: "SİTE", definition: "SATICI'ya ait internet sitesini" },
                  { term: "SİPARİŞ VEREN", definition: "Bir mal veya hizmeti SATICI'ya ait internet sitesi üzerinden talep eden gerçek ya da tüzel kişiyi" },
                  { term: "TARAFLAR", definition: "SATICI ve ALICI'yı" },
                  { term: "SÖZLEŞME", definition: "SATICI ve ALICI arasında akdedilen işbu sözleşmeyi" },
                  { term: "MAL", definition: "Alışverişe konu olan taşınır eşyayı ve elektronik ortamda kullanılmak üzere hazırlanan yazılım, ses, görüntü ve benzeri gayri maddi malları ifade eder" }
                ].map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        •
                      </div>
                      <div>
                        <span className="font-semibold text-[#0D1B2A]">{item.term}:</span>{" "}
                        <span className="text-gray-700">{item.definition}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Konu */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">3. KONU</h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                İşbu Sözleşme, ALICI'nın, SATICI'ya ait internet sitesi üzerinden elektronik ortamda siparişini verdiği aşağıda nitelikleri ve satış fiyatı belirtilen ürünün satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmelere Dair Yönetmelik hükümleri gereğince tarafların hak ve yükümlülüklerini düzenler.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-blue-800">
                  <strong>Fiyat Bilgisi:</strong> Listelenen ve sitede ilan edilen fiyatlar satış fiyatıdır. İlan edilen fiyatlar ve vaatler güncelleme yapılana ve değiştirilene kadar geçerlidir. Süreli olarak ilan edilen fiyatlar ise belirtilen süre sonuna kadar geçerlidir.
                </p>
              </div>
            </div>
          </section>

          {/* Satıcı Bilgileri */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">4. SATICI BİLGİLERİ</h2>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="space-y-2 text-green-800">
                <p><strong>Unvanı:</strong> FALCONGENE BİYOTEKNOLOJİ ANONİM ŞİRKETİ</p>
                <p><strong>Adres:</strong> Kazlıçeşme Mah, 245. Sk. No:5, Zeytinburnu/İstanbul, Biruni Teknopark</p>
                <p><strong>E-posta:</strong> <a href="mailto:info@falcongene.com" className="text-green-600 hover:underline">info@falcongene.com</a></p>
              </div>
            </div>
          </section>

          {/* Alıcı ve Sipariş Veren Bilgileri */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">5. ALICI BİLGİLERİ</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-[#0D1B2A] mb-3">Teslimat Bilgileri</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Teslim edilecek kişi</li>
                  <li>• Teslimat Adresi</li>
                  <li>• Telefon</li>
                  <li>• Faks</li>
                  <li>• E-posta/kullanıcı adı</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-[#0D1B2A] mb-3">Sipariş Veren Bilgileri</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ad/Soyad/Unvan</li>
                  <li>• Adres</li>
                  <li>• Telefon</li>
                  <li>• Faks</li>
                  <li>• E-posta/kullanıcı adı</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sözleşme Konusu Ürün */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">7. SÖZLEŞME KONUSU ÜRÜN/ÜRÜNLER BİLGİLERİ</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#0D1B2A] mb-4">7.1. Ürün Özellikleri</h3>
                <p className="text-gray-700">
                  Malın/Ürün/Ürünlerin/Hizmetin temel özelliklerini (türü, miktarı, marka/modeli, rengi, adedi) SATICI'ya ait internet sitesinde yayınlanmaktadır. Satıcı tarafından kampanya düzenlenmiş ise ilgili ürünün temel özelliklerini kampanya süresince inceleyebilirsiniz. Kampanya tarihine kadar geçerlidir.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0D1B2A] mb-4">7.2. Fiyat Bilgileri</h3>
                <p className="text-gray-700">
                  Listelenen ve sitede ilan edilen fiyatlar satış fiyatıdır. İlan edilen fiyatlar ve vaatler güncelleme yapılana ve değiştirilene kadar geçerlidir. Süreli olarak ilan edilen fiyatlar ise belirtilen süre sonuna kadar geçerlidir.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0D1B2A] mb-4">7.3. Sipariş Özet Bilgileri</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div><strong>Ürün Açıklaması:</strong> Sipariş sırasında belirtilir</div>
                    <div><strong>Adet:</strong> Sipariş sırasında belirtilir</div>
                    <div><strong>Birim Fiyatı:</strong> Sipariş sırasında belirtilir</div>
                    <div><strong>Ara Toplam (KDV Dahil):</strong> Sipariş sırasında hesaplanır</div>
                    <div><strong>Kargo Tutarı:</strong> Sipariş sırasında belirtilir</div>
                    <div><strong>Toplam:</strong> Sipariş sırasında hesaplanır</div>
                    <div><strong>Ödeme Şekli ve Planı:</strong> Sipariş sırasında seçilir</div>
                    <div><strong>Teslimat Adresi:</strong> Sipariş sırasında belirtilir</div>
                    <div><strong>Sipariş Tarihi:</strong> Sipariş anında oluşturulur</div>
                    <div><strong>Teslimat Tarihi:</strong> Sipariş onayı sonrası belirtilir</div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <p className="text-orange-800">
                  <strong>7.4. Kargo Ücreti:</strong> Ürün sevkiyat masrafı olan kargo ücreti ALICI tarafından ödenecektir.
                </p>
              </div>
            </div>
          </section>

          {/* Fatura Bilgileri */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">8. FATURA BİLGİLERİ</h2>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <div className="space-y-2 text-purple-800">
                <p><strong>Ad/Soyad/Unvan:</strong> Sipariş sırasında belirtilir</p>
                <p><strong>Adres:</strong> Sipariş sırasında belirtilir</p>
                <p><strong>Telefon:</strong> Sipariş sırasında belirtilir</p>
                <p><strong>Faks:</strong> Sipariş sırasında belirtilir (opsiyonel)</p>
                <p><strong>E-posta/kullanıcı adı:</strong> Sipariş sırasında belirtilir</p>
              </div>
              <div className="mt-4 pt-4 border-t border-purple-300">
                <p className="text-purple-700 text-sm">
                  <strong>Fatura Teslim:</strong> Fatura sipariş teslimatı sırasında fatura adresine sipariş ile birlikte teslim edilecektir. Orijinal e-fatura mail adresine iletilecektir.
                </p>
              </div>
            </div>
          </section>

          {/* Genel Hükümler */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">9. GENEL HÜKÜMLER</h2>
            
            <div className="space-y-6">
              {[
                {
                  section: "9.1",
                  content: "ALICI, SATICI'ya ait internet sitesinde sözleşme konusu ürünün temel nitelikleri, satış fiyatı ve ödeme şekli ile teslimata ilişkin ön bilgileri okuyup, bilgi sahibi olduğunu, elektronik ortamda gerekli teyidi verdiğini kabul, beyan ve taahhüt eder."
                },
                {
                  section: "9.2",
                  content: "Sözleşme konusu her bir ürün, 30 günlük yasal süreyi aşmamak kaydı ile ALICI'nın yerleşim yeri uzaklığına bağlı olarak internet sitesindeki ön bilgiler kısmında belirtilen süre zarfında ALICI veya ALICI'nın gösterdiği adresteki kişi ve/veya kuruluşa teslim edilir."
                },
                {
                  section: "9.3",
                  content: "SATICI, Sözleşme konusu ürünü eksiksiz, siparişte belirtilen niteliklere uygun ve varsa garanti belgeleri, kullanım kılavuzları işin gereği olan bilgi ve belgeler ile teslim etmeyi, her türlü ayıptan arı olarak yasal mevzuat gereklerine göre sağlam, standartlara uygun bir şekilde işi doğruluk ve dürüstlük esasları dâhilinde ifa etmeyi kabul, beyan ve taahhüt eder."
                },
                {
                  section: "9.4",
                  content: "SATICI, sözleşmeden doğan ifa yükümlülüğünün süresi dolmadan ALICI'yı bilgilendirmek ve açıkça onayını almak suretiyle eşit kalite ve fiyatta farklı bir ürün tedarik edebilir."
                },
                {
                  section: "9.5",
                  content: "SATICI, sipariş konusu ürün veya hizmetin yerine getirilmesinin imkânsızlaşması halinde sözleşme konusu yükümlülüklerini yerine getiremezse, bu durumu, öğrendiği tarihten itibaren 7 gün içinde yazılı olarak tüketiciye bildireceğini, 30 günlük süre içinde toplam bedeli ALICI'ya iade edeceğini kabul, beyan ve taahhüt eder."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {item.section}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cayma Hakkı */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">10. CAYMA HAKKI</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">10.1. Cayma Hakkının Kullanımı</h3>
                <p className="text-green-700 text-sm leading-relaxed">
                  ALICI; mesafeli sözleşmenin mal satışına ilişkin olması durumunda, ürünün kendisine veya gösterdiği adresteki kişi/kuruluşa teslim tarihinden itibaren <strong>14 (on dört) gün içerisinde</strong>, SATICI'ya bildirmek şartıyla hiçbir hukuki ve cezai sorumluluk üstlenmeksizin ve hiçbir gerekçe göstermeksizin malı reddederek sözleşmeden cayma hakkını kullanabilir.
                </p>
                <p className="text-green-700 text-sm leading-relaxed mt-3">
                  <strong>Önemli:</strong> Cayma hakkının kullanımından kaynaklanan masraflar ALICI'ya aittir. ALICI, iş bu sözleşmeyi kabul etmekle, cayma hakkı konusunda bilgilendirildiğini peşinen kabul eder.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0D1B2A] mb-4">10.2. Cayma Hakkı Şartları</h3>
                <p className="text-gray-700 mb-4">
                  Cayma hakkının kullanılması için 14 (ondört) günlük süre içinde SATICI'ya iadeli taahhütlü posta, faks veya e-posta ile yazılı bildirimde bulunulması ve ürünün işbu sözleşmede düzenlenen "Cayma Hakkı Kullanılamayacak Ürünler" hükümleri çerçevesinde kullanılmamış olması şarttır.
                </p>

                <div className="grid gap-4">
                  {[
                    "3. kişiye veya ALICI'ya teslim edilen ürünün faturası (İade edilmek istenen ürünün faturası kurumsal ise, iade ederken kurumun düzenlemiş olduğu iade faturası ile birlikte gönderilmesi gerekmektedir)",
                    "İade formu",
                    "İade edilecek ürünlerin kutusu, ambalajı, varsa standart aksesuarları ile birlikte eksiksiz ve hasarsız olarak teslim edilmesi",
                    "SATICI, cayma bildiriminin kendisine ulaşmasından itibaren en geç 10 günlük süre içerisinde toplam bedeli ALICI'ya iade etmek ve 14 günlük süre içerisinde malı iade almakla yükümlüdür",
                    "ALICI'nın kusurundan kaynaklanan bir nedenle malın değerinde bir azalma olursa veya iade imkânsızlaşırsa ALICI kusuru oranında SATICI'nın zararlarını tazmin etmekle yükümlüdür"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {String.fromCharCode(97 + index)}
                      </div>
                      <p className="text-gray-800 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Cayma Hakkı Kullanılamayacak Ürünler */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">11. CAYMA HAKKI KULLANILAMAYACAK ÜRÜNLER</h2>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-red-800 text-sm leading-relaxed mb-4">
                Aşağıdaki ürün kategorilerinde cayma hakkı kullanılamaz:
              </p>
              
              <ul className="space-y-2 text-red-700 text-sm">
                <li>• ALICI'nın isteği veya açıkça kişisel ihtiyaçları doğrultusunda hazırlanan ve geri gönderilmeye müsait olmayan ürünler</li>
                <li>• İç giyim alt parçaları, mayo ve bikini altları</li>
                <li>• Makyaj malzemeleri, tek kullanımlık ürünler</li>
                <li>• Çabuk bozulma tehlikesi olan veya son kullanma tarihi geçme ihtimali olan mallar</li>
                <li>• ALICI'ya teslim edilmesinin ardından ALICI tarafından ambalajı açıldığı takdirde iade edilmesi sağlık ve hijyen açısından uygun olmayan ürünler</li>
                <li>• Teslim edildikten sonra başka ürünlerle karışan ve doğası gereği ayrıştırılması mümkün olmayan ürünler</li>
                <li>• Gazete ve dergi gibi süreli yayınlara ilişkin mallar (abonelik sözleşmesi kapsamında sağlananlar dışında)</li>
                <li>• Elektronik ortamda anında ifa edilen hizmetler veya tüketiciye anında teslim edilen gayri maddi mallar</li>
                <li>• Ses veya görüntü kayıtları, kitap, dijital içerik, yazılım programları, veri kayıt ve depolama cihazları, bilgisayar sarf malzemeleri (ambalajı ALICI tarafından açılmış olması halinde)</li>
              </ul>

              <div className="mt-4 pt-4 border-t border-red-300">
                <p className="text-red-700 text-sm">
                  <strong>Not:</strong> Kozmetik ve kişisel bakım ürünleri, iç giyim ürünleri, mayo, bikini, kitap, kopyalanabilir yazılım ve programlar, DVD, VCD, CD ve kasetler ile kırtasiye sarf malzemeleri iade edilebilmesi için ambalajlarının açılmamış, denenmemiş, bozulmamış ve kullanılmamış olmaları gerekir.
                </p>
              </div>
            </div>
          </section>

          {/* Temerrüt Hali */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">12. TEMERRÜT HALİ VE HUKUKİ SONUÇLARI</h2>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <p className="text-orange-800 text-sm leading-relaxed">
                ALICI, ödeme işlemlerini kredi kartı ile yaptığı durumda temerrüde düştüğü takdirde, kart sahibi banka ile arasındaki kredi kartı sözleşmesi çerçevesinde faiz ödeyeceğini ve bankaya karşı sorumlu olacağını kabul, beyan ve taahhüt eder. Bu durumda ilgili banka hukuki yollara başvurabilir; doğacak masrafları ve vekâlet ücretini ALICI'dan talep edebilir ve her koşulda ALICI'nın borcundan dolayı temerrüde düşmesi halinde, ALICI, borcun gecikmeli ifasından dolayı SATICI'nın uğradığı zarar ve ziyanını ödeyeceğini kabul, beyan ve taahhüt eder.
              </p>
            </div>
          </section>

          {/* Yetkili Mahkeme */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">13. YETKİLİ MAHKEME</h2>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                İşbu sözleşmeden doğan uyuşmazlıklarda şikayet ve itirazlar, aşağıdaki kanunda belirtilen parasal sınırlar dâhilinde tüketicinin yerleşim yerinin bulunduğu veya tüketici işleminin yapıldığı yerdeki tüketici sorunları hakem heyetine veya tüketici mahkemesine yapılacaktır.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-800 mb-3">Parasal Sınırlar (28/05/2014 tarihinden itibaren geçerli)</h3>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li><strong>a)</strong> 6502 sayılı Kanun'un 68. Maddesi gereği değeri 2.000,00 TL'nin altında olan uyuşmazlıklarda <strong>ilçe tüketici hakem heyetlerine</strong></li>
                  <li><strong>b)</strong> Değeri 3.000,00 TL'nin altında bulunan uyuşmazlıklarda <strong>il tüketici hakem heyetlerine</strong></li>
                  <li><strong>c)</strong> Büyükşehir statüsündeki illerde değeri 2.000,00 TL ile 3.000,00 TL arasındaki uyuşmazlıklarda <strong>il tüketici hakem heyetlerine</strong> başvuru yapılmaktadır.</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 text-center font-medium">
                  İşbu Sözleşme <strong>ticari amaçlarla</strong> yapılmaktadır.
                </p>
              </div>
            </div>
          </section>

          {/* Yürürlük */}
          <section className="mb-0 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">14. YÜRÜRLÜK</h2>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                ALICI, Site üzerinden verdiği siparişe ait ödemeyi gerçekleştirdiğinde işbu sözleşmenin tüm şartlarını kabul etmiş sayılır. SATICI, siparişin gerçekleşmesi öncesinde işbu sözleşmenin sitede ALICI tarafından okunup kabul edildiğine dair onay alacak şekilde gerekli yazılımsal düzenlemeleri yapmakla yükümlüdür.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="text-center space-y-2">
                  <p className="text-green-800 font-semibold">SATICI: FALCONGENE BİYOTEKNOLOJİ ANONİM ŞİRKETİ</p>
                  <p className="text-green-700">ALICI: [Sipariş sırasında belirtilecektir]</p>
                  <p className="text-green-700">TARİH: [Sipariş tarihi]</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-0 pt-8 border-t border-gray-200">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-[#0D1B2A]">Mesafeli Satış Sözleşmesi ile İlgili Sorularınız mı Var?</h3>
              <p className="mb-6 text-gray-600">
                Sözleşme koşulları hakkında daha fazla bilgi almak için bizimle iletişime geçin.
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