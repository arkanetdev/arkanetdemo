"use client";

import React from "react";
import { MessageSquare, Phone, Clock } from "lucide-react";

export const MidPageCtaBand: React.FC = () => {
  return (
    <section className="w-full bg-[#f4f6fb] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 select-none">
      <div className="w-full mx-auto bg-white border border-black/[0.06] rounded-[28px] sm:rounded-[36px] shadow-[0_2px_8px_rgba(0,0,0,0.02),0_16px_48px_-16px_rgba(11,19,48,0.1)] px-6 sm:px-10 lg:px-12 py-12 sm:py-14 lg:py-16 transition-all duration-500 hover:shadow-[0_4px_16px_rgba(0,0,0,0.03),0_24px_64px_-16px_rgba(11,19,48,0.15)]">
        
        <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-12">
          
          {/* Left Column: Headline + Live Status Pill */}
          <div className="text-left space-y-6 max-w-4xl">
            <h3 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] tracking-tight leading-[1.05] text-[#0b1330] hover:text-[#3b82f6] transition-colors duration-500 cursor-pointer">
              Have a brief? Send it over , 
              <br className="hidden sm:block" />
              we&apos;ll tell you what it takes.
            </h3>
            
            {/* Response Status Pill */}
            <div className="inline-flex items-center gap-2.5 bg-[#0b1330] border border-[#0b1330] rounded-full px-4 py-2 shadow-sm group/pill hover:bg-[#070035] transition-colors duration-300 cursor-pointer">
              <Clock className="w-4 h-4 text-[#38bdf8] group-hover/pill:rotate-12 group-hover/pill:scale-110 transition-transform duration-300 shrink-0" />
              <p className="font-sans text-xs sm:text-sm text-white font-medium tracking-normal">
                Usually reply in under 15 min <span className="text-white/30 mx-1.5">|</span> 9 AM, 10 PM IST
              </p>
            </div>
          </div>

          {/* Right Column: CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 w-full lg:w-auto shrink-0 pt-2 lg:pt-0">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919074104372"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3.5 bg-[#0b1330] hover:bg-[#070035] text-white hover:text-[#38bdf8] font-sans text-base sm:text-lg font-extrabold py-3.5 px-8 sm:py-4 sm:px-9 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 active:translate-y-0 active:scale-95 cursor-pointer w-full sm:w-auto"
            >
              <MessageSquare className="w-5 h-5 text-[#38bdf8] group-hover:scale-110 transition-all duration-300" />
              <span>WhatsApp</span>
            </a>

            {/* Call Button */}
            <a
              href="tel:+919074104372"
              className="group inline-flex items-center justify-center gap-3.5 bg-white border-2 border-[#0b1330]/15 hover:border-[#0b1330] hover:bg-[#0b1330] text-[#0b1330] hover:text-white font-sans text-base sm:text-lg font-extrabold py-3.5 px-8 sm:py-4 sm:px-9 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:scale-95 cursor-pointer w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 text-[#0b1330] group-hover:text-[#38bdf8] group-hover:rotate-12 transition-all duration-300" />
              <span>Call us</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};