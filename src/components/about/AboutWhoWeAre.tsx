"use client";

import React from "react";
import { motion } from "framer-motion";

const STATS = [
  {
    number: "20+",
    label: "Years combined tech expertise",
  },
  {
    number: "1000+",
    label: "Digital products & projects delivered",
  },
  {
    number: "100%",
    label: "In-house engineering team",
  },
];

export function AboutWhoWeAre() {
  return (
    <section className="pt-4 sm:pt-6 lg:pt-8 pb-4 sm:pb-6 lg:pb-8 px-6 sm:px-8 lg:px-[40px] bg-[#f4f6fb] select-none">
      <div className="w-full space-y-10 sm:space-y-14">
        
        {/* Section Heading & Lead Copy */}
        <div className="w-full text-left space-y-4 sm:space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="section-h2"
          >
            Who we are
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="hero-sub text-[#0b1330]/80 max-w-5xl pt-1 leading-relaxed"
          >
            Arkanet Technologies is a full-stack engineering team building software, AI systems, and automation for clients across Kerala, India, and the Gulf. We work across 6 practices, from custom software and mobile apps to conversational AI and business automation, so every project is handled by one team, not handed between vendors.
          </motion.p>
        </div>

        {/* 3 Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7 lg:gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white rounded-[24px] sm:rounded-[32px] p-8 sm:p-10 lg:p-12 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.06)] border border-slate-200/80 flex flex-col justify-center text-left"
            >
              <div className="font-display font-black text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl text-[#0b1330] tracking-tight mb-4">
                {stat.number}
              </div>
              <p className="text-base sm:text-lg lg:text-xl font-semibold text-[#526a83] leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
