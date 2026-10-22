"use client";

import React from "react";

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-navy text-white text-center border-t border-navy-mid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
          Have something in mind?
        </h2>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Send us a brief, a sketch, or just a problem you haven't solved yet, we'll tell you plainly whether AI or a rebuild is the right call.
        </p>
        <button
          onClick={onOpenBooking}
          className="bg-navy-bright hover:bg-navy-hover text-white font-semibold text-base py-3.5 px-8 rounded-xl transition-all shadow-lg hover:-translate-y-0.5"
        >
          Book a Free Call
        </button>
      </div>
    </section>
  );
};
