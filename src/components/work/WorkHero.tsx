"use client";

import React from "react";
import Image from "next/image";

export const WorkHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-16 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none overflow-hidden font-sans flex flex-col justify-center">
      {/* ── CINEMATIC AMBIENT BACKGROUND: MULTI-DEVICE DIGITAL PLATFORMS ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/assets/images/work-multidevice-hero.png"
          alt="Arkanet Digital Platforms & Multi-Device Engineering Portfolio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right opacity-50 sm:opacity-60 lg:opacity-65 brightness-[1.02] contrast-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/20 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1400px] w-full mx-auto my-auto space-y-6">
        <div className="max-w-3xl space-y-5 text-left">
          <h1 className="hero-h1 font-heading font-extrabold text-[#202B61] text-4xl sm:text-6xl lg:text-[68px] tracking-tight leading-[1.05] text-balance">
            Digital Platforms Engineered for Scale
          </h1>
          <p className="font-sans text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl text-pretty pt-1">
            Explore our portfolio of production websites, native mobile applications, applied AI architectures, and enterprise cloud solutions deployed for industry leaders.
          </p>

          <div className="pt-4 flex items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#202B61] text-white font-heading font-bold text-sm tracking-wide shadow-md hover:bg-[#151E48] hover:shadow-lg transition-all duration-200"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

