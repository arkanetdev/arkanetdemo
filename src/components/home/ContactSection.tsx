"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ContactFormModal } from "@/components/modals/ContactFormModal";

export const ContactSection: React.FC = () => {
  const [briefModalOpen, setBriefModalOpen] = useState(false);

  return (
    <div className="w-full bg-[#f4f6fb] text-[#0b1330] px-6 sm:px-8 lg:px-[40px] pt-28 lg:pt-36 pb-16 sm:pb-24 select-none relative overflow-hidden">
      {/* Soft Navy-to-Blue Radial Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Section: Left Text + Right Contact Visual */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start z-20 relative">

        {/* Left Column: Headline & Action Buttons */}
        <div className="lg:col-span-6 text-left">
          <div className="mb-6 text-left">
            <h1 className="hero-h1 text-left block">
              Something great <br />
              <span>starts here</span>
            </h1>
          </div>

          <div className="mt-6 space-y-6 max-w-xl text-left">
            <p className="text-lg sm:text-xl md:text-2xl text-[#0b1330] font-medium leading-relaxed">
              Have a project brief, a question, or a business problem to solve? Reach out directly via our form or start a quick conversation on WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2">
              {/* Submit Brief Button */}
              <button
                onClick={() => setBriefModalOpen(true)}
                className="group inline-flex items-center justify-center gap-3 bg-[#0b1330] text-[#38bdf8] hover:bg-[#070035] font-bold uppercase tracking-wider text-xs sm:text-sm py-4 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer w-full sm:w-auto"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Direct WhatsApp Button */}
              <a
                href="https://wa.me/919074104372?text=Hi%20Arkanet%20Team,%20I'd%20like%20to%20discuss%20a%20project!"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-white text-[#0b1330] hover:bg-slate-50 font-bold uppercase tracking-wider text-xs sm:text-sm py-4 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 border border-black/10 w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Visual Artwork */}
        <div className="lg:col-span-6 flex justify-center items-center pt-2 lg:pt-0">
          <div className="relative w-full max-w-[360px] sm:max-w-[480px] lg:max-w-[540px] aspect-square rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-2xl border border-black/10 group bg-white/60">
            <Image
              src="/assets/images/contact-us.webp"
              alt="Arkanet Contact Visual Artwork"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
              unoptimized
            />
          </div>
        </div>

      </div>

      {/* Standalone Slide-Up ContactFormModal */}
      <ContactFormModal
        isOpen={briefModalOpen}
        onClose={() => setBriefModalOpen(false)}
      />

    </div>
  );
};
