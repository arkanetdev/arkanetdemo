"use client";

import React from "react";
import { AI_CAPABILITIES } from "@/lib/data";

export const DigitalCapabilities: React.FC = () => {
  return (
    <section id="ai-capabilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-subtle border border-borderline text-xs font-semibold text-navy mb-3">
            Advanced Engineering
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy">
            Digital &amp; AI Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AI_CAPABILITIES.map((cap, idx) => (
            <div
              key={idx}
              className="bg-white border border-borderline hover:border-navy-mid rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 shadow-2xs"
            >
              <div className="text-xs font-bold text-navy-bright uppercase tracking-wider mb-2">
                0{idx + 1}
              </div>
              <h3 className="font-display font-bold text-xl text-navy mb-3">
                {cap.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
