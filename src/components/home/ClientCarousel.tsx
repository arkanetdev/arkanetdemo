"use client";

import React from "react";

const CLIENTS = [
  "APEX LABS",
  "VELOCE TECH",
  "NEXUS HEALTH",
  "COBALT SYSTEMS",
  "CREST ANALYTICS",
  "HORIZON MEDIA",
  "LUMINA AI",
  "STRATA GLOBAL",
];

export const ClientCarousel: React.FC = () => {
  return (
    <section className="py-16 bg-subtle border-y border-borderline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-borderline text-xs font-semibold text-navy mb-2">
            Client Network
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy">
            Trusted by Growing Teams
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {CLIENTS.map((client, idx) => (
            <div
              key={idx}
              className="bg-white border border-borderline rounded-xl p-5 flex items-center justify-center font-display font-bold text-base text-slate-400 select-none min-h-[80px]"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
