"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Cpu, Zap, Layers } from "lucide-react";

const PILLARS = [
  {
    step: "01",
    icon: Layers,
    title: "Dual-Hub Engineering Synergy",
    desc: "We combine strategic client discovery at our Dubai headquarters with the rapid velocity of our dedicated engineering and R&D centers located across India.",
    highlight: "Dubai Strategy + India Velocity",
  },
  {
    step: "02",
    icon: Cpu,
    title: "Applied AI & Automation",
    desc: "We build production-ready retrieval pipelines, fine-tuned domain models, and intelligent workflows that integrate directly into core enterprise databases.",
    highlight: "Enterprise RAG & Domain Models",
  },
  {
    step: "03",
    icon: Zap,
    title: "Speed with Production Rigor",
    desc: "Two-week agile sprints, continuous integration pipelines, strict TypeScript typing, and preview environments guarantee fast delivery with zero technical debt.",
    highlight: "Two-Week Sprints, Zero Tech Debt",
  },
  {
    step: "04",
    icon: Shield,
    title: "Enterprise Security & IP",
    desc: "All client intellectual property belongs entirely to you. We enforce mutual confidentiality, encrypted credential vaults, and SOC2-ready protocols.",
    highlight: "100% IP Ownership & SOC2 Protocols",
  },
];

export function AboutPrinciples() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-[#f4f6fb] border-b border-slate-200/80 text-left select-none overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto space-y-12 sm:space-y-14">
        {/* Section Heading & Subtitle */}
        <div className="max-w-3xl space-y-3 text-left">
          <span className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#202B61]/65">
            Operating Framework
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#202B61] tracking-tight leading-tight">
            Our Core Operating Principles
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#202B61]/80 leading-relaxed font-normal">
            How we approach every architectural decision, engineering sprint, and client commitment.
          </p>
        </div>

        {/* 2x2 Balanced Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white rounded-xl border border-slate-200/90 p-7 sm:p-9 shadow-none flex flex-col justify-between h-full space-y-6 text-left hover:border-slate-300 transition-colors duration-200"
              >
                <div className="space-y-4">
                  {/* Top row: Icon and Step number */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-lg bg-[#202B61]/5 border border-[#202B61]/10 text-[#202B61] flex items-center justify-center">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#202B61]/25 select-none tracking-tight">
                      {pillar.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#202B61] tracking-tight leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[15px] sm:text-base text-[#202B61]/80 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                {/* Commitment Tag Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-heading font-semibold uppercase tracking-wider text-[#202B61]/50">
                    Standard
                  </span>
                  <span className="text-xs font-sans font-medium text-[#202B61] bg-[#f4f6fb] px-3 py-1 rounded-md border border-slate-200/70">
                    {pillar.highlight}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
