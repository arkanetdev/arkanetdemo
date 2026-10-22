"use client";

import React from "react";
import Image from "next/image";

export function AboutHero() {
  return (
    <>
      {/* ══ HERO SECTION (HOMEPAGE MODEL) ══ */}
      <section className="relative bg-[#f4f6fb] text-[#0b1330] select-none pt-28 lg:pt-36 pb-4 sm:pb-6 overflow-hidden">
        {/* Soft Navy-to-Blue Radial Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Content Container */}
        <div className="w-full px-6 sm:px-8 lg:px-[40px] relative z-10 text-left">
          {/* Headline */}
          <div className="mb-6 text-left">
            <h1 className="hero-h1 text-left block">
              Powerful Products, <br />
              <span>Genuine Impact</span>
            </h1>
          </div>

          {/* Sub-headline */}
          <div className="mt-5 mb-6 sm:mb-8 max-w-3xl text-left">
            <p className="text-lg sm:text-xl md:text-2xl text-[#0b1330] font-medium leading-relaxed">
              Passionate tech enthusiasts and engineers crafting websites, apps, and AI systems built for real performance.
            </p>
          </div>
        </div>
      </section>

      {/* ══ SINGLE FULL-WIDTH HERO IMAGE BANNER ══ */}
      <section className="bg-[#f4f6fb] px-6 sm:px-8 lg:px-[40px] pb-4 sm:pb-6 lg:pb-8 select-none">
        <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9] min-h-[260px] sm:min-h-[380px] lg:min-h-[440px] rounded-[24px] sm:rounded-[36px] overflow-hidden shadow-xl group">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=85"
            alt="Arkanet Team & Engineering Workspace"
            loading="eager"
            className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />
        </div>
      </section>
    </>
  );
}

