"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testTypes = [
  {
    id: "nutrition",
    title: "Beslenme Testi",
    image: "/AdobeStock_451004383_Preview-2.jpeg",
    position: { top: "20%", left: "10%" },
    size: "w-20 h-20",
    delay: 0.2
  },
  {
    id: "skin", 
    title: "Cilt Analiz Testi",
    image: "/AdobeStock_560027450_Preview-2.jpeg", 
    position: { top: "60%", right: "15%" },
    size: "w-24 h-24",
    delay: 0.4
  },
  {
    id: "sports",
    title: "Spor Yatkınlık Testi", 
    image: "/AdobeStock_564613811_Preview-2.jpeg",
    position: { bottom: "25%", left: "8%" },
    size: "w-18 h-18",
    delay: 0.6
  },
  {
    id: "pharma",
    title: "İlaç Uyumluluk Testi",
    image: "/hero-cells.jpeg",
    position: { top: "35%", right: "8%" },
    size: "w-22 h-22", 
    delay: 0.8
  },
  {
    id: "genetics",
    title: "Genetik Profil",
    image: "/photo-1628432388803-2b4dfa2a0158.avif",
    position: { bottom: "15%", right: "7%" },
    size: "w-16 h-16",
    delay: 1.0
  }
];

export default function MissionSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-[#70929A] via-[#70929A]via-[#70929A]/40 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle gradient orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#4E7CA8]/10 to-[#2C5276]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#153656]/10 to-[#072441]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Mission Statement */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-block rounded-full bg-[#072441]/10 border border-[#072441]/20 px-4 py-2 text-sm font-medium text-[#072441] mb-6 backdrop-blur-sm">
              BİZİM MİSYONUMUZ
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0D1B2A] leading-tight max-w-4xl mx-auto"
          >
            Neden FalconGene?{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#1976D3] to-[#4E7CA8] bg-clip-text text-transparent">
                Genetiğe Ayrıcalıklı
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#153656] to-[#2C5276]"
              />
            </span>
            {" "}ve{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#1976D3] to-[#4E7CA8] bg-clip-text text-transparent">
                Bilimsel Bir Yaklaşım
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#153656] to-[#2C5276]"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-[#0D1B2A]/70 max-w-3xl mx-auto leading-relaxed"
          >
            FalconGene, genetik test hizmetlerinde kalite, hız ve kapsamlılığı bir araya getirerek fark yaratır. Bizim için bu üç ilke, sadece birer pazarlama vaadi değil, tüm operasyonumuzun temelini oluşturan standartlardır. Sürecin her aşamasında en son teknolojiyi, detaylı biyoinformatik analizleri ve uluslararası standartları temel alıyoruz.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10"
          >
            <button className="group relative rounded-full bg-gradient-to-r from-[#072441] to-[#153656] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              <span className="relative z-10">Genetik Yolculuğunu Başlat</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#153656] to-[#2C5276] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Test Type Images */}
      <div className="absolute inset-0 pointer-events-none">
        {testTypes.map((test) => (
          <motion.div
            key={test.id}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              duration: 0.6, 
              delay: test.delay,
              type: "spring",
              stiffness: 100 
            }}
            className={`absolute ${test.size} group`}
            style={test.position}
          >
            {/* Floating animation */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: test.delay
              }}
              className="relative w-full h-full"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4E7CA8]/20 to-[#2C5276]/20 blur-md scale-110 opacity-60" />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-3 border-white shadow-xl bg-white">
                <Image
                  src={test.image}
                  alt={test.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#072441]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Title on hover */}
                <div className="absolute inset-0 flex items-end justify-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-semibold text-white text-center leading-tight">
                    {test.title}
                  </span>
                </div>
              </div>

              {/* Pulse ring */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: test.delay + 2
                }}
                className="absolute inset-0 rounded-full border-2 border-[#4E7CA8]/40"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Connection lines between floating elements */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4E7CA8" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#2C5276" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#153656" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Animated connecting paths */}
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1.5 }}
          d="M200,150 Q400,200 600,180 Q800,160 900,200"
          stroke="url(#connection-gradient)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5,5"
        />
        
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 2 }}
          d="M150,400 Q300,350 500,380 Q700,410 850,380"
          stroke="url(#connection-gradient)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5,5"
        />
      </svg>
    </section>
  );
}
