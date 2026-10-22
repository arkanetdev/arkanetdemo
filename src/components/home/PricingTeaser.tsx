"use client";

import React from "react";

interface PricingTeaserProps {
  onOpenBooking: () => void;
}

export const PricingTeaser: React.FC<PricingTeaserProps> = ({ onOpenBooking }) => {
  return (
    <section id="pricing-teaser" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-subtle border border-borderline rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xs">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-borderline text-xs font-semibold text-navy mb-3">
            Transparent Value
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4">
            Pay for a partner, not a project quote.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto mb-8">
            Choose a subscription that scales with you, from a single AI pilot to a full engineering team on retainer.
          </p>

          <button
            onClick={onOpenBooking}
            className="bg-navy-bright hover:bg-navy-hover text-white font-semibold text-base py-3.5 px-8 rounded-xl transition-all shadow-md hover:-translate-y-0.5"
          >
            See Plans &amp; Pricing
          </button>
        </div>
      </div>
    </section>
  );
};
