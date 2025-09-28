"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function IletisimPage() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS service configuration
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID', // EmailJS Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID', // EmailJS Template ID  
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY' // EmailJS Public Key
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };
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
              İletişim
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Genetik testlerimiz hakkında sorularınız mı var? Size yardımcı olmaktan mutluluk duyarız. Bizimle iletişime geçin.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-[#0D1B2A] mb-6">Bizimle İletişime Geçin</h2>
              <p className="text-lg text-[#0D1B2A]/70 leading-relaxed mb-8">
                FalconGene ekibi olarak, genetik testlerimiz hakkındaki tüm sorularınızı yanıtlamak ve size en iyi hizmeti sunmak için buradayız. Uzman ekibimiz, test süreçlerinden sonuçların yorumlanmasına kadar her aşamada size destek olmaya hazır.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-blue-50 border border-blue-200"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0D1B2A] text-lg mb-2">E-posta ile İletişim</h3>
                  <p className="text-[#0D1B2A]/70 mb-3">
                    En hızlı yanıt için e-posta gönderebilirsiniz. Sorularınızı detaylı bir şekilde aktarın, 24 saat içinde size dönüş yapalım.
                  </p>
                  <a 
                    href="mailto:info@falcongene.com" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    info@falcongene.com
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-green-50 border border-green-200"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0D1B2A] text-lg mb-2">Sık Sorulan Sorular</h3>
                  <p className="text-[#0D1B2A]/70 mb-3">
                    Test süreçleri, numune alma, gönderim ve sonuçlar hakkında merak ettiklerinizi SSS sayfamızda bulabilirsiniz.
                  </p>
                  <Link 
                    href="/sss" 
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
                  >
                    SSS Sayfasını Ziyaret Et
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-purple-50 border border-purple-200"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0D1B2A] text-lg mb-2">Uzman Danışmanlık</h3>
                  <p className="text-[#0D1B2A]/70 mb-3">
                    Test sonuçlarınızın yorumlanması ve genetik danışmanlık hizmetlerimiz hakkında bilgi almak için iletişime geçin.
                  </p>
                  <Link 
                    href="/testler" 
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
                  >
                    Danışmanlık Hizmetlerimiz
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Contact Form or Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0D1B2A] to-[#2C5276] rounded-3xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Bizimle İletişime Geç</h3>
            
            {/* Contact Form */}
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#D6F5E3] focus:ring-2 focus:ring-[#D6F5E3]/20 transition-colors"
                    placeholder="Adınızı ve soyadınızı girin"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#D6F5E3] focus:ring-2 focus:ring-[#D6F5E3]/20 transition-colors"
                    placeholder="0555 123 45 67"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                  E-posta *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#D6F5E3] focus:ring-2 focus:ring-[#D6F5E3]/20 transition-colors"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/90 mb-2">
                  Konu *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#D6F5E3] focus:ring-2 focus:ring-[#D6F5E3]/20 transition-colors"
                >
                  <option value="" className="text-gray-900">Konu seçin</option>
                  <option value="test-bilgisi" className="text-gray-900">Test Hakkında Bilgi</option>
                  <option value="siparis-sorunu" className="text-gray-900">Sipariş Sorunu</option>
                  <option value="sonuc-yorumlama" className="text-gray-900">Sonuç Yorumlama</option>
                  <option value="teknik-destek" className="text-gray-900">Teknik Destek</option>
                  <option value="fiyat-bilgisi" className="text-gray-900">Fiyat Bilgisi</option>
                  <option value="genetik-danismanlik" className="text-gray-900">Genetik Danışmanlık</option>
                  <option value="diger" className="text-gray-900">Diğer</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                  Mesajınız *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#D6F5E3] focus:ring-2 focus:ring-[#D6F5E3]/20 transition-colors resize-none"
                  placeholder="Mesajınızı detaylı bir şekilde yazın..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#D6F5E3] text-[#0D1B2A] px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Mesaj Gönder
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-green-400 font-medium">Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.</span>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-red-400 font-medium">Mesaj gönderilemedi. Lütfen tekrar deneyin veya info@falcongene.com adresine e-posta gönderin.</span>
                  </div>
                </motion.div>
              )}
            </form>

            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="space-y-4 text-sm text-white/80">
                <div>
                  <h4 className="font-semibold text-lg mb-2">🕒 Yanıt Sürelerimiz</h4>
                  <p>
                    E-posta sorularınızı genellikle <strong>24 saat</strong> içinde yanıtlıyoruz. Daha karmaşık teknik sorular için 48 saat sürebilir.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">🛡️ Gizlilik Garantisi</h4>
                  <p>
                    Tüm iletişimleriniz KVKK uyumlu olarak işlenir ve kişisel bilgileriniz maksimum güvenlik ile korunur.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center p-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl border border-blue-200"
        >
          <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">
            Genetik Yolculuğunuza Bugün Başlayın
          </h3>
          <p className="text-[#0D1B2A]/70 mb-8 max-w-2xl mx-auto">
            Test paketlerimizi incelemek veya size en uygun genetik analizi seçmek için uzmanlarımızla konuşmak ister misiniz?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/testler"
              className="py-3 px-8 bg-[#0D1B2A] text-white rounded-full font-semibold hover:bg-[#153656] transition-colors"
            >
              Test Paketlerini İncele
            </Link>
            <Link
              href="/nasil-calisir"
              className="py-3 px-8 border-2 border-[#0D1B2A] text-[#0D1B2A] rounded-full font-semibold hover:bg-[#0D1B2A] hover:text-white transition-colors"
            >
              Süreç Hakkında Bilgi Al
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


