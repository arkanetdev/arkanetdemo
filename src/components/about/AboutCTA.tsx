"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface AboutCTAProps {
  onOpenBooking: () => void;
}

export function AboutCTA({ onOpenBooking }: AboutCTAProps) {
  return (
    <section className="relative z-20 bg-white text-[#070035] py-6 sm:py-8 lg:py-10 px-6 sm:px-8 lg:px-[40px] text-left select-none">
      <div className="space-y-4 sm:space-y-8">
        
        <div className="group cursor-pointer inline-block" onClick={onOpenBooking}>
          <h2 className="hero-h1 text-[#070035] group-hover:text-[#3b82f6] transition-colors duration-500">
            <span>Let&apos;s make</span>
            {" "}
            <span className="inline-block text-[#3b82f6] mx-1 sm:mx-2.5 font-normal align-middle text-[0.88em] group-hover:translate-x-3 transition-transform duration-500 ease-out">
              →
            </span>
            <br />
            <span>something engaging</span>
          </h2>
        </div>

        {/* CTA Row */}
        <div className="pt-1 sm:pt-4 flex flex-wrap items-center gap-6">
          <button
            onClick={onOpenBooking}
            className="group inline-flex items-center gap-3 bg-[#0b1330] text-white hover:bg-[#3b82f6] font-extrabold uppercase text-xs sm:text-sm md:text-base py-4 px-8 sm:py-5 sm:px-10 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 text-[#38bdf8] group-hover:text-white" />
          </button>
        </div>

      </div>
    </section>
  );
}
