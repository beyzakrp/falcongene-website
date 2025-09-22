"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Professional Icon Component
function StatIcon({ type, className }: { type: string; className?: string }) {
  const icons = {
    dna: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C13.1 2 14 2.9 14 4V6C14 7.1 13.1 8 12 8C10.9 8 10 7.1 10 6V4C10 2.9 10.9 2 12 2ZM12 10C13.1 10 14 10.9 14 12V14C14 15.1 13.1 16 12 16C10.9 16 10 15.1 10 14V12C10 10.9 10.9 10 12 10ZM12 18C13.1 18 14 18.9 14 20V22C14 23.1 13.1 24 12 24C10.9 24 10 23.1 10 22V20C10 18.9 10.9 18 12 18Z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 4L16 20M16 4L8 20" />
      </svg>
    ),
    microscope: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* DNA Double Helix Strands */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 3 Q8 6 6 9 Q4 12 6 15 Q8 18 6 21" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 3 Q16 6 18 9 Q20 12 18 15 Q16 18 18 21" />
        {/* DNA Base Pairs */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 6h12M6 9h12M6 12h12M6 15h12M6 18h12" />
        {/* Nucleotide Points */}
        <circle cx="6" cy="6" r="1.5" fill="currentColor" />
        <circle cx="18" cy="6" r="1.5" fill="currentColor" />
        <circle cx="6" cy="12" r="1.5" fill="currentColor" />
        <circle cx="18" cy="12" r="1.5" fill="currentColor" />
        <circle cx="6" cy="18" r="1.5" fill="currentColor" />
        <circle cx="18" cy="18" r="1.5" fill="currentColor" />
      </svg>
    ),
    molecule: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
        <circle cx="6" cy="6" r="2" strokeWidth={1.5} />
        <circle cx="18" cy="6" r="2" strokeWidth={1.5} />
        <circle cx="6" cy="18" r="2" strokeWidth={1.5} />
        <circle cx="18" cy="18" r="2" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.5 8.5l3 3M15.5 8.5l-3 3M8.5 15.5l3-3M15.5 15.5l-3-3" />
      </svg>
    ),
    chart: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  };
  
  return icons[type as keyof typeof icons] || icons.chart;
}

const stats = [
  {
    value: 99.8,
    label: "DOĞRULUK ORANI",
    prefix: "%",
    suffix: "",
    iconType: "chart",
    color: "from-[#1976D3] to-[#115496]",
    bgGlow: "shadow-[0_0_30px_rgba(112,146,154,0.4)]",
    accentColor: "#70929A",
    image: "/happy-customer.jpg",
  },
  {
    value: 10,
    label: "FARKLI TEST ÇEŞİDİ",
    prefix: "",
    suffix: "+",
    iconType: "dna",
    color: "from-[#0C4072] to-[#08294A]",
    bgGlow: "shadow-[0_0_30px_rgba(78,124,168,0.4)]",
    accentColor: "#4E7CA8",
    image: "/test.jpg",
  },
  {
    value: 150,
    label: "GEN ANALİZİ",
    prefix: "",
    suffix: "+",
    iconType: "microscope",
    color: "from-[#2C5276] to-[#153656]",
    bgGlow: "shadow-[0_0_30px_rgba(44,82,118,0.4)]",
    accentColor: "#2C5276",
    image: "/gene.jpg",
  },
  {
    value: 200,
    label: "VARYANT ANALİZİ",
    prefix: "",
    suffix: "+",
    iconType: "molecule",
    color: "from-[#153656] to-[#072441]",
    bgGlow: "shadow-[0_0_30px_rgba(21,54,86,0.4)]",
    accentColor: "#153656",
    image: "/variant.jpg",
  },
];

function AnimatedCounter({ value, prefix = "", suffix = "", duration = 2500, accentColor }: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  accentColor?: string;
}) {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;
    
    setIsAnimating(true);
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;

      if (progress < 1) {
        // Easing function for smoother animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(value * easeOutCubic);
        setCount(currentCount);
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
        setIsAnimating(false);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, value, duration]);

  return (
    <motion.span 
      ref={ref} 
      className="tabular-nums font-bold"
      animate={isAnimating ? {
        scale: [1, 1.05, 1],
        textShadow: [
          "0 0 0px rgba(255,255,255,0)",
          `0 0 20px ${accentColor}40`,
          "0 0 0px rgba(255,255,255,0)"
        ]
      } : {}}
      transition={{ duration: 0.3, repeat: isAnimating ? Infinity : 0, repeatDelay: 0.8 }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-20 sm:py-28 ">
      {/* Smooth transition from previous section */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#70929A] to-transparent opacity-20" />
      
      {/* Modern background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Subtle gradient orbs */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-gradient-to-r from-[#70929A]/3 to-[#4E7CA8]/2 blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side - Header Content */}
          <div className="lg:col-span-5">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#70929A]/10 border border-[#70929A]/20"
            >
              <svg className="w-4 h-4 text-[#70929A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
              <span className="text-sm font-semibold text-[#70929A] uppercase tracking-wider">Güvenilir Veriler</span>
        </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FFFFFF] leading-tight max-w-4xl mx-auto mb-6"
            >
              FalconGene&apos;i{" "}
              <span className="bg-gradient-to-r from-[#1976D3] via-[#4E7CA8] to-[#2C5276] bg-clip-text text-transparent">
                Rakamlarla
              </span>
              <br />
              <span className="text-[#FFFFFF]">Keşfedin</span>
          </motion.h2>
            
          <motion.p
              initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-white mb-8 leading-relaxed"
          >
              Bilimsel mükemmelliğimizin ve teknolojik üstünlüğümüzün kanıtı olan bu rakamlarla tanışın. Her bir rakam, size sunduğumuz hizmetin arkasındaki gücü temsil eder.
          </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="/testler" className="px-6 py-3 bg-[#1976D3] text-white rounded-full font-semibold hover:bg-[#1976D3] transition-colors shadow-lg hover:shadow-xl">Testleri İncele</a>
              <a href="/nasil-calisir" className="px-6 py-3 border border-gray-300 text-white rounded-full font-semibold hover:bg-gray-50/10 transition-colors">Daha Fazla Bilgi</a>
            </motion.div>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.1,
                    type: "spring",
                    bounce: 0.3
                  }}
                  whileHover={{ 
                    y: -6, 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className={`group relative p-8 rounded-2xl bg-white border border-gray-200/60 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#70929A]/30 overflow-hidden ${
                    index === 0 ? 'lg:translate-y-8' : 
                    index === 1 ? 'lg:-translate-y-4' : 
                    index === 2 ? 'lg:translate-y-12' : 
                    'lg:-translate-y-2'
                  }`}
                >
                  {/* Background Image with Fade Overlay */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <Image
                      src={stat.image}
                      alt={stat.label}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-80 transition-opacity duration-250"
                    />
                    {/* Fade overlay from center */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-white/0" />
                    {/* Additional fade from right-top corner */}
                    <div className="absolute inset-0 bg-gradient-to-bl from-white/10 via-white/20 to-transparent" />
                  </div>

                  {/* Subtle gradient background */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-3 transition-opacity duration-500 rounded-2xl`} 
                  />
                  
                  {/* Icon */}
                  <motion.div 
                    className={`relative z-10 flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-gradient-to-r ${stat.color} group-hover:scale-110 transition-all duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <StatIcon 
                      type={stat.iconType} 
                      className="w-6 h-6 text-white"
                    />
                  </motion.div>

                  {/* Counter */}
                  <div className="relative z-10 mb-3">
                    <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent leading-none`}>
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                        accentColor={stat.accentColor}
                        duration={1800 + index * 200}
                  />
                </div>
              </div>

                  {/* Label */}
                  <p className="relative z-10 text-md font-bold text-[#0D1B2A] uppercase tracking-wide leading-tight">
                    {stat.label}
                  </p>
            </motion.div>
          ))}
        </div>

            {/* Floating Elements */}
            <div className="relative">
              {/* App Store Style Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
                Sertifikalı Lab
              </motion.div>

              {/* Social Proof Icons */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="absolute bottom-4 right-4 flex gap-2"
              >
                {['ISO', 'FDA', 'CE'].map((cert) => (
                  <div key={cert} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
                    {cert}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
