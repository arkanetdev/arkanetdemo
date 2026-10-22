"use client";

import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative w-full overflow-hidden bg-[#f4f6fb] text-[#0b1330] select-none">
      {/* ── BACKGROUND VIDEO (SUBTLE AMBIENT PLAYBACK WITH OLD LIGHT THEME) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-[0.25] brightness-[1.02] contrast-[1.05]"
        >
          <source src="/assets/hero-video.webm" type="video/webm" />
          <source src="/assets/images/compressed-hero-video.mp4" type="video/mp4" />
        </video>

        {/* Soft Vignette & Directional Overlay to preserve effortless text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4f6fb]/70 via-[#f4f6fb]/30 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f4f6fb] via-transparent to-[#f4f6fb]/50 pointer-events-none" />
      </div>

      {/* Soft Navy-to-Blue Radial Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none z-1"></div>

      {/* ── HERO CONTENT WITH ORIGINAL FONT & COLORS ── */}
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-[40px] pt-32 lg:pt-44 pb-6 sm:pb-8 lg:pb-10 text-left">
        <div className="space-y-4 sm:space-y-6 text-left max-w-5xl xl:max-w-6xl">
          <h1 className="hero-h1 text-[#0b1330] text-left">
            Building Intelligent<br />
            Digital Products
          </h1>

          <p className="hero-sub font-medium text-[#0b1330] leading-relaxed max-w-5xl xl:max-w-6xl">
            We engineer high performance websites, mobile apps, and intelligent AI systems.<br className="hidden sm:inline" />{" "}
            Delivering scalable digital products built to perform and grow your business.
          </p>


        </div>
      </div>
    </section>
  );
};
