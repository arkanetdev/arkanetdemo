"use client";

import React from "react";
import { INDUSTRIES } from "@/lib/data";

export const IndustriesWeServe: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-subtle border border-borderline text-xs font-semibold text-navy mb-2">
            Domain Expertise
          </div>
          <h2 className="font-display font-bold text-3xl text-navy">Industries We Serve</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {INDUSTRIES.map((ind, idx) => (
            <div
              key={idx}
              className="bg-white border border-borderline hover:border-navy-mid rounded-xl p-4 text-center font-display font-semibold text-sm sm:text-base text-navy transition-all duration-200 hover:-translate-y-0.5 shadow-2xs flex items-center justify-center min-h-[70px]"
            >
              {ind}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
