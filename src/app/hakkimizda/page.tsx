"use client";
import Image from "next/image";
import Link from "next/link";

export default function HakkimizdaPage() {
  return (
    <div className="bg-white text-[#0D1B2A] min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0D1B2A] via-[#153656] to-[#2C5276] text-white">
        <div className="mx-auto max-w-6xl px-6 pt-28 pb-16">
          <div
            className="text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4">
              Hakkımızda
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Genetik analizlerde yenilikçi çözümler sunan FALCONGENE, bilim ve teknolojinin gücüyle sağlık alanında fark yaratıyor.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-6 py-16">
       
          {/* Şirket Hakkında */}
          <section className="mb-16">
            <div
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-[#0D1B2A] mb-6">FALCONGENE Hakkında</h2>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 text-left">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    <strong className="text-[#0D1B2A]">Falcongene 2023 yılında</strong> alanında uzman bir kadro ile İstanbul'da kurulmuştur.
                  </p>
                  
                  <p>
                    FALCONGENE, kişiye özel genetik yatkınlık testi yaparak Türkiye ve uluslararası ölçekte hizmet veren bir merkezdir. Teknolojik alt yapısı ve bilimsel gelişmeleri yakından takip eden tam donanımlı genetik tanı laboratuvarları ile hizmet vermektedir.
                  </p>
                  
                  <p>
                    Tıbbi genetiğin en çağdaş test yöntemlerini <strong className="text-[#0D1B2A]">7'den 70'e ulaşılabilir kılmak</strong> ve herkesin anlayabileceği şekilde sunmak amacı ile yola çıkılmıştır. Sunmuş olduğumuz hizmetler yetkili kuruluşlar tarafından denetlenmektedir.
                  </p>
                  
                  <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl p-6">
                    <p className="text-blue-800 text-sm">
                      <strong>Önemli Not:</strong> Hizmet dahilinde yapılan testler, Türkiye Cumhuriyeti Sağlık Bakanlığı tarafından onaylı laboratuvarlarda yapılmakta ve teşhis, tanı veya tedavi vb. amaçlar için kullanılmamaktadır.
                    </p>
                  </div>
                  
                  <p className="text-lg font-semibold text-[#0D1B2A]">
                    Falcongene kaliteli, güvenilir ve ulaşılabilir hizmeti vermeyi kendine amaç edinmiş bir kurumdur.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Misyon */}
          <section className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 
                className="text-3xl font-bold text-[#0D1B2A] mb-6"
              >
                Misyonumuz
              </h2>
              <div
                className="space-y-4 text-gray-700 leading-relaxed"
              >
                <p>
                  FalconGene, genetik yatkınlık testleri alanında <strong className="text-[#0D1B2A]">en güncel bilimsel ve teknolojik yöntemleri</strong> kullanarak, bireylerin genetik yapısını anlamalarına ve sağlıklı yaşam seçimleri yapmalarına yardımcı olmayı misyon edinmiştir.
                </p>
                <p>
                  FalconGene, Türkiye genelindeki saygın laboratuvarlarla stratejik işbirlikleri sayesinde, anlaşılabilir ve güvenilir genetik test sonuçları sunarak <strong className="text-[#0D1B2A]">müşteri memnuniyetini en üst düzeye</strong> çıkarmayı amaçlamaktadır.
                </p>
                <p>
                  Etik değerlere bağlı kalarak, genetik veri güvenliğini en üst seviyede sağlamak ve kişiye özel genetik danışmanlık ile bireylerin genetik potansiyellerini maksimize etmelerine destek olmayı misyonun temel taşlarından biri olarak belirlemektedir.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                  <p className="text-green-800 text-sm">
                    FalconGene, ilerideki dönemlerde sektördeki yenilikleri takip ederek, teknolojik gelişmeleri benimseyip sürekli kendisini güncelleyerek, istihdam yaratma misyonunu sürdürmeyi ve genetik test hizmetlerinde <strong>dünya genelinde öncü bir konum</strong> elde etmeyi amaçlamaktadır.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative h-80 rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/labPhoto.avif"
                alt="GENOKS Laboratuvarı - Yenilikçi Teknoloji"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-[#D6F5E3] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#0D1B2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl">Yenilikçi Çözümler</h3>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">1.100 m² laboratuvar alanında, son teknoloji NGS cihazları ile 70+ uzman çalışanımızla genetik analizler gerçekleştiriyoruz</p>
              </div>
            </div>
          </section>

          {/* Vizyonumuz */}
          <section className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className="relative h-80 rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1"
            >
              <Image
                src="/labAnalysisPhoto.avif"
                alt="GENOKS Laboratuvarı - Analiz Süreci"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-[#E8F4FD] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#0D1B2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl">Vizyon Odaklı</h3>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">80.000+ NGS testi deneyimimizle Türkiye'de genetik test alanının öncüsü olmaya devam ediyoruz</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2
                className="text-3xl font-bold text-[#0D1B2A] mb-6"
              >
                Vizyonumuz
              </h2>
              <div
                className="space-y-4 text-gray-700 leading-relaxed"
              >
                <p>
                  FalconGene, genetik yatkınlık testleri ve kişiye özel genetik danışmanlık hizmetleri sunarak <strong className="text-[#0D1B2A]">Türkiye'nin ve dünyanın sağlık alanındaki öncü kuruluşları</strong> arasında yer almayı hedeflemektedir.
                </p>
                <p>
                  Geleceğin sağlık ihtiyaçlarına yönelik anlaşılır, güvenilir ve kaliteli genetik çözümler sunarak <strong className="text-[#0D1B2A]">bireylerin yaşam kalitesini artırmayı</strong> amaçlamaktadır.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                  <p className="text-blue-800 text-sm">
                    Türkiye'nin sağlık sektöründeki teknolojik dönüşümü destekleyerek, genetik testlerin günlük yaşamın bir parçası haline gelmesine öncülük etmeyi ve <strong>ülkemizi uluslararası alanda temsil etmeyi</strong> vizyonunun merkezine koymaktadır.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Değerlerimiz */}
          <section className="py-16 bg-gray-50 rounded-3xl px-8">
            <div
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">Değerlerimiz</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Çalışmalarımızda bizi yönlendiren temel değerler ve ilkelerimiz
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Güvenilirlik",
                  description: "Doğru ve tutarlı sonuçlar sunarak müşterilerimizin güvenini kazanıyoruz"
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Hızlılık",
                  description: "Modern teknoloji ile hızlı ve etkili çözümler üretiyoruz"
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  ),
                  title: "Bilimsellik",
                  description: "Kanıta dayalı yaklaşımla en doğru sonuçları elde ediyoruz"
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  ),
                  title: "Erişilebilirlik",
                  description: "Genetik testleri herkese ulaştırmak için çalışıyoruz"
                }
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="w-12 h-12 bg-[#D6F5E3] rounded-lg flex items-center justify-center text-[#0D1B2A] mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-[#0D1B2A] mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Laboratuvar Hakkında */}
          <section className="mb-16">
            <div
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-[#0D1B2A] mb-6">Laboratuvarımız: GENOKS</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                2008 yılından bu yana genetik araştırmaları alanında faaliyet gösteren, 
                Türkiye'nin önde gelen genetik test laboratuvarlarından biri olan GENOKS ile işbirlği yapıyoruz.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Sol Kolon - Geçmiş ve Deneyim */}
              <div
                className="space-y-6"
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-6m-2-5a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    Laboratuvar Tarihçesi
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Çalışmalarına <strong className="text-[#0D1B2A]">2008 yılında AR-GE laboratuvarı</strong> olarak başlayan GENOKS, 
                      2008-2010 yılları arasında moleküler biyoloji ve genetik araştırmalarında kullanılmak üzere 
                      PCR ve RT-PCR tabanlı tanı kitleri ve DNA izolasyon kitleri üretmiştir.
                    </p>
                    <p>
                      Faaliyete geçtiği 2008 yılından bu yana gerçekleştirdiği yatırımlar sayesinde 
                      <strong className="text-[#0D1B2A]"> toplamda 1.100 m² laboratuvar ve ofis alanına</strong> sahip olan GENOKS, 
                      yurt içinde ve yurt dışında, alanında uzman <strong className="text-[#0D1B2A]">70'i aşkın çalışanıyla</strong> hizmet vermeye devam etmektedir.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    Deneyim ve Başarılar
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white rounded-xl">
                      <div className="text-3xl font-bold text-green-600">80.000+</div>
                      <div className="text-sm text-gray-600">NGS Test</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl">
                      <div className="text-3xl font-bold text-blue-600">20 Yıl</div>
                      <div className="text-sm text-gray-600">Tecrübe</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl">
                      <div className="text-3xl font-bold text-purple-600">500+</div>
                      <div className="text-sm text-gray-600">Hastane</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl">
                      <div className="text-3xl font-bold text-indigo-600">3000+</div>
                      <div className="text-sm text-gray-600">Doktor</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sağ Kolon - Teknoloji ve Hizmetler */}
              <div
                className="space-y-6"
              >
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    Teknolojik Öncülük
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Yapmış olduğu teknoloji transferleri ile <strong className="text-[#0D1B2A]">Yeni Nesil Dizileme teknolojisini</strong> kullanarak 
                      <strong className="text-[#0D1B2A]"> Türkiye'de ilk kez NIPT testini</strong> rutinde çalışmaya başlayan 
                      Genetik Hastalıklar Değerlendirme Merkezi.
                    </p>
                    <div className="bg-white rounded-xl p-4">
                      <h4 className="font-semibold text-[#0D1B2A] mb-2">Sunulan Test Hizmetleri:</h4>
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span>Non-İnvaziv Prenatal Tarama (NIPT)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span>Tüm Genom/Ekzom Dizileme</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span>Kanser Genetiği</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span>Spor Genetiği & Farmakogenetik</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    Referanslar & İşbirlikleri
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Active Chemical Technology Organisation",
                      "Azerbaycan Milli Elmler Akademiyası", 
                      "Life Science",
                      "Bosphorus Genomics"
                    ].map((partner, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700 font-medium">{partner}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sertifikalar ve Kalite Güvencesi */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl px-8 mb-16">
            <div
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">Sertifikalar ve Akreditasyonlar</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Uluslararası standartlarda kaliteli ve güvenilir hizmet sunmak için sahip olduğumuz sertifikalar ve akreditasyonlar
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "EMQN Sertifikası",
                  desc: "NIPT ve Kalıtsal Yeni Nesil DNA Dizileme hizmetlerinde Avrupa Moleküler Genetik Kalite Ağı sertifikası",
                  icon: "🏅",
                  color: "from-yellow-400 to-orange-500"
                },
                {
                  title: "ISO 45001:2018",
                  desc: "İş sağlığı ve güvenliği yönetim sistemi standardı - çalışan güvenliği için uluslararası sertifika",
                  icon: "🛡️",
                  color: "from-green-400 to-emerald-500"
                },
                {
                  title: "ISO 27001:2022",
                  desc: "Bilgi güvenliği yönetimi standardı - tüm mali ve gizli bilgilerin korunması",
                  icon: "🔒",
                  color: "from-blue-400 to-indigo-500"
                },
                {
                  title: "ISO 14001:2015", 
                  desc: "Çevre yönetim sistemi standardı - çevreye duyarlı ve sürdürülebilir işletme sertifikası",
                  icon: "🌱",
                  color: "from-green-400 to-teal-500"
                },
                {
                  title: "ISO 13485:2016",
                  desc: "Tıbbi cihazlar için kalite yönetim sistemi - tıbbi cihaz sektörüne özel standart",
                  icon: "⚕️", 
                  color: "from-red-400 to-pink-500"
                },
                {
                  title: "ISO 9001:2015",
                  desc: "Kalite yönetim sistemi - müşteri memnuniyeti ve sürekli iyileştirme standardı",
                  icon: "⭐",
                  color: "from-purple-400 to-violet-500"
                }
              ].map((cert) => (
                <div
                  key={cert.title}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center text-2xl mb-4 mx-auto`}>
                    {cert.icon}
                  </div>
                  <h3 className="font-semibold text-[#0D1B2A] mb-2 text-center">{cert.title}</h3>
                  <p className="text-gray-600 text-sm text-center leading-relaxed">{cert.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-white rounded-2xl p-8 border border-blue-200">
                <h3 className="text-xl font-bold text-[#0D1B2A] mb-4">Kalite Güvencemiz</h3>
                <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  Tüm bu uluslararası standart ve sertifikalarla, genetik test hizmetlerimizin 
                  <strong className="text-[#0D1B2A]"> en yüksek kalite, güvenlik ve güvenilirlik</strong> standartlarında 
                  sunulduğunu garanti ediyoruz. 80.000'den fazla başarılı NGS testi deneyimimiz ve 
                  sürekli kalite kontrol süreçlerimizle size en doğru sonuçları sunuyoruz.
                </p>
              </div>
            </div>
          </section>

          {/* İletişim CTA */}
          <section className="text-center py-16 bg-gradient-to-r from-[#0D1B2A] to-[#2C5276] text-white rounded-3xl">
              <h2 className="text-3xl font-bold mb-4">
                Daha Fazla Bilgi Almak İster misiniz?
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                FALCONGENE ekibi olarak sorularınızı yanıtlamaya ve size en iyi hizmeti sunmaya hazırız.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/iletisim"
                  className="bg-[#D6F5E3] text-[#0D1B2A] px-6 py-3 rounded-full font-semibold hover:bg-[#D6F5E3]/90 transition-colors"
                >
                  İletişime Geçin
                </Link>
                <Link
                  href="/testler"
                  className="border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  Testlerimizi İnceleyin
                </Link>
              </div>
          </section>

          {/* Back to Top */}
          <div className="text-center pt-8">
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
    </div>
  );
}