"use client";

import { motion } from "framer-motion";

export default function FlowingLines() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Main flowing line */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="flowing-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4E7CA8" stopOpacity="0.6">
              <animate attributeName="stop-color" values="#4E7CA8;#2C5276;#153656;#4E7CA8" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="33%" stopColor="#2C5276" stopOpacity="0.4">
              <animate attributeName="stop-color" values="#2C5276;#153656;#072441;#2C5276" dur="6s" repeatCount="indefinite" />
            </stop>
            <stop offset="66%" stopColor="#153656" stopOpacity="0.6">
              <animate attributeName="stop-color" values="#153656;#1A2D40;#4E7CA8;#153656" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#1A2D40" stopOpacity="0.3">
              <animate attributeName="stop-color" values="#1A2D40;#072441;#2C5276;#1A2D40" dur="7s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          
          <linearGradient id="flowing-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#072441" stopOpacity="0.4">
              <animate attributeName="stop-color" values="#072441;#1A2D40;#153656;#072441" dur="9s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#153656" stopOpacity="0.6">
              <animate attributeName="stop-color" values="#153656;#2C5276;#4E7CA8;#153656" dur="5s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#4E7CA8" stopOpacity="0.3">
              <animate attributeName="stop-color" values="#4E7CA8;#072441;#1A2D40;#4E7CA8" dur="11s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>

        {/* Primary flowing path */}
        <path
          d="M-200,600 C200,500 400,300 600,400 C800,500 1000,200 1400,300"
          stroke="url(#flowing-gradient-1)"
          strokeWidth="3"
          fill="none"
          opacity="0.8"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 100,-50; 0,0"
            dur="20s"
            repeatCount="indefinite"
          />
        </path>

        {/* Secondary flowing path */}
        <path
          d="M-100,100 C300,150 500,50 700,200 C900,350 1100,100 1300,250"
          stroke="url(#flowing-gradient-2)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; -80,40; 0,0"
            dur="25s"
            repeatCount="indefinite"
          />
        </path>

        {/* Third flowing path */}
        <path
          d="M-50,400 C250,350 450,550 650,450 C850,350 1050,550 1250,450"
          stroke="url(#flowing-gradient-1)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 60,80; 0,0"
            dur="30s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      {/* Floating connection nodes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full"
          style={{
            left: `${10 + (i * 12)}%`,
            top: `${20 + Math.sin(i) * 30}%`,
            background: `linear-gradient(45deg, #${['4E7CA8', '2C5276', '153656', '1A2D40', '072441'][i % 5]}, #${['2C5276', '153656', '1A2D40', '072441', '4E7CA8'][i % 5]})`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
