"use client";

import React from "react";
import Image from "next/image";
import { PORTFOLIO_ITEMS } from "@/lib/data";

interface PortfolioStripProps {
  onOpenBooking: () => void;
}

export const PortfolioStrip: React.FC<PortfolioStripProps> = ({ onOpenBooking }) => {
  return (
    <section id="portfolio-strip" className="py-16 bg-subtle border-y border-borderline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-borderline text-xs font-semibold text-navy mb-2">
            Case Studies &amp; Outcomes
          </div>
          <h2 className="font-display font-bold text-3xl text-navy">
            Production Proof &amp; Selected Work
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={onOpenBooking}
              className="group cursor-pointer bg-white border border-borderline hover:border-emerald-500 rounded-xl p-4 transition-all duration-200 hover:-translate-y-1 shadow-2xs"
            >
              <div className="relative aspect-16/10 rounded-lg overflow-hidden border border-borderline mb-4 bg-slate-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-display font-bold text-lg text-navy group-hover:text-emerald-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs font-semibold text-stone-500 mt-1">
                {item.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
