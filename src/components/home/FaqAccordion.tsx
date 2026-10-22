"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "@/lib/data";
import { Plus, Minus } from "lucide-react";

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-borderline text-xs font-semibold text-navy mb-2">
            Clear Answers
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white border rounded-xl transition-colors duration-200 ${
                  isOpen ? "border-navy-mid" : "border-borderline"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between font-display font-bold text-lg text-navy"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-navy-bright shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-navy-bright shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
