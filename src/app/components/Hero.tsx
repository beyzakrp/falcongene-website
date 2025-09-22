"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden text-white">
      {/* Background image */}
      <Image
        src="/cells-hero.png" /* Lütfen bu görseli public/hero-abstract.jpg olarak ekleyin */
        alt="Biyoteknoloji soyut arka plan"
        fill
        priority
        className="object-cover"
      />

      {/* Lighter dark overlay with gradient */}
      <div className="absolute inset-0 bg-[#0D1B2A]/40" />
      <div
        className="absolute inset-0 opacity-75"
        style={{
          background:
            "radial-gradient(40% 40% at 70% 30%, rgba(0,201,255,0.3) 0%, transparent 60%), radial-gradient(40% 40% at 30% 70%, rgba(154,0,255,0.25) 0%, transparent 60%), radial-gradient(40% 40% at 50% 50%, rgba(0,255,240,0.2) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Main content - left/center */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-3xl border border-white/20 bg-gradient-to-br from-white/15 via-white/10 to-white/5 p-8 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25),0_0_30px_rgba(214,245,227,0.1)] ring-1 ring-white/10"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
              Bilimin Güveni, Genetiğin Gücü.
              <span className="block text-[#D6F5E3]">Geleceğinize Genlerinizle Yön Verin.</span>
            </h1>

            <p className="mt-4 max-w-2xl text-[#E6E6E6] text-base sm:text-lg">
              FalconGene, kişiselleştirilmiş sağlık yolculuğunuzda size bilimsel bir yol haritası sunar. Sadece genetik verilerinizi değil, aynı zamanda bu verilerin hayat kalitenizi nasıl en üst düzeye çıkarabileceğini de anlamanızı sağlıyoruz. En ileri Yeni Nesil Dizileme (NGS) teknolojisi, modern ve anlaşılır raporlama yaklaşımları ve uzman desteğimizle genetik potansiyelinizi A'dan Z'ye ortaya çıkarıyoruz.
            </p>

           {/* <p className="mt-3 max-w-2xl text-[#E6E6E6]/90 text-sm sm:text-base">
              Kendi genetik haritanızı çıkararak "deneme-yanılma" dönemini hayatınızdan çıkarın. Beslenme alışkanlıklarınızı optimize ederek enerjinizi artırın, spor performansınızı zirveye taşıyarak hedeflerinize daha hızlı ulaşın, cilt sağlığınızı genetik yapınıza en uygun şekilde koruyarak yıllara meydan okuyun ve yaşam kalitenizi düşüren gıda intoleranslarınızı net bir şekilde keşfedin.
            </p>*/}

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/klinikler"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-[#0D1B2A] bg-[#D6F5E3] font-semibold hover:shadow-[0_0_24px_4px_rgba(214,245,227,0.3)] transition-shadow"
              >
                Kiti Satın Al
              </Link>
              <Link
                href="/testler"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-white/30 text-white hover:bg-white/10"
              >
                Testleri Keşfet
              </Link>
            </div>
          </motion.div>

          {/* Stats cards - right */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 via-[#D6F5E3]/5 to-white/5 p-6 backdrop-blur-md shadow-[0_0_20px_rgba(214,245,227,0.1)] hover:shadow-[0_0_30px_rgba(214,245,227,0.25)] transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D6F5E3]/20">
                  <svg className="h-6 w-6 text-[#D6F5E3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">%99.8</div>
                  <div className="text-sm text-white/70">Doğruluk Oranı</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 via-[#00C9FF]/5 to-white/5 p-6 backdrop-blur-md shadow-[0_0_20px_rgba(0,201,255,0.1)] hover:shadow-[0_0_30px_rgba(0,201,255,0.25)] transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D6F5E3]/20">
                  <svg className="h-6 w-6 text-[#D6F5E3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">7-14 Gün</div>
                  <div className="text-sm text-white/70">Hızlı Sonuç</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 via-[#9A00FF]/5 to-white/5 p-6 backdrop-blur-md shadow-[0_0_20px_rgba(154,0,255,0.1)] hover:shadow-[0_0_30px_rgba(154,0,255,0.25)] transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D6F5E3]/20">
                  <svg className="h-6 w-6 text-[#D6F5E3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-sm text-white/70">Test Çeşidi</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated DNA helix flowing */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute -left-20 top-1/4 h-96 w-96 opacity-20"
          viewBox="0 0 400 400"
          fill="none"
        >
          <defs>
            <linearGradient id="dna-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D6F5E3" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#00C9FF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#9A00FF" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M50,50 Q100,100 150,50 T250,50 T350,50"
            stroke="url(#dna-gradient)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="20 10"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 400,0; 0,0"
              dur="15s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M50,150 Q100,100 150,150 T250,150 T350,150"
            stroke="url(#dna-gradient)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="20 10"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -400,0; 0,0"
              dur="15s"
              repeatCount="indefinite"
            />
          </path>
        </svg>

        <svg
          className="absolute -right-20 bottom-1/4 h-96 w-96 opacity-15 rotate-180"
          viewBox="0 0 400 400"
          fill="none"
        >
          <path
            d="M50,50 Q100,100 150,50 T250,50 T350,50"
            stroke="url(#dna-gradient)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="15 15"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 300,0; 0,0"
              dur="20s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {[
          { left: 59.59, top: 25.88, duration: 4.2, delay: 0.8 },
          { left: 33.03, top: 12.83, duration: 3.6, delay: 1.4 },
          { left: 60.62, top: 95.20, duration: 4.8, delay: 0.2 },
          { left: 21.72, top: 58.81, duration: 3.2, delay: 1.8 },
          { left: 84.07, top: 22.04, duration: 4.5, delay: 0.6 },
          { left: 34.83, top: 92.75, duration: 3.8, delay: 1.2 },
          { left: 24.99, top: 99.89, duration: 4.1, delay: 0.4 },
          { left: 64.64, top: 77.69, duration: 3.9, delay: 1.6 },
          { left: 24.22, top: 73.44, duration: 4.3, delay: 0.9 },
          { left: 68.03, top: 25.14, duration: 3.7, delay: 1.1 },
          { left: 77.91, top: 62.52, duration: 4.0, delay: 0.7 },
          { left: 66.09, top: 59.24, duration: 3.5, delay: 1.5 }
        ].map((particle, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-[#D6F5E3]/30"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* soft divider bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#70929A] to-transparent" />
    </section>
  );
}


