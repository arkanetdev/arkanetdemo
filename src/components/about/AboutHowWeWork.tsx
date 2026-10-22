"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Compass, Rocket, ShieldCheck, ArrowRight } from "lucide-react";

interface AboutHowWeWorkProps {
  onOpenBooking?: () => void;
}

const STEPS = [
  {
    step: "01",
    title: "Understand",
    icon: Search,
    description:
      "We listen closely to your objectives, constraints, and the outcomes that matter most: discovery, not a sales conversation.",
    deliverable: "Goals, user journeys & technical baseline",
  },
  {
    step: "02",
    title: "Architect",
    icon: Compass,
    description:
      "We translate your goals into a defined roadmap: clear scope, sequencing, and solid technical decisions made upfront.",
    deliverable: "Wireframes, technical spec & delivery roadmap",
  },
  {
    step: "03",
    title: "Deliver",
    icon: Rocket,
    description:
      "Our team executes with transparent, continuous reporting and rigorous testing, so you always know where the work stands.",
    deliverable: "Production-ready build, tested & deployed",
  },
  {
    step: "04",
    title: "Sustain",
    icon: ShieldCheck,
    description:
      "Delivery starts the relationship. We stay engaged through ongoing support, monitoring, performance tuning, and scaling.",
    deliverable: "Long-term monitoring, fixes & optimisation",
  },
];

export function AboutHowWeWork({ onOpenBooking }: AboutHowWeWorkProps) {
  return (
    <section className="py-10 sm:py-16 lg:py-24 px-6 sm:px-8 lg:px-[40px] bg-[#f4f6fb] select-none">
      <div className="w-full space-y-8 sm:space-y-12">
        {/* Section Heading & Sub-Content */}
        <div className="w-full text-left space-y-4">
          <h2 className="section-h2">
            How We Work
          </h2>

          <p className="hero-sub text-[#0b1330]/80 max-w-5xl pt-1">
            We build technology partnerships designed to last, not projects designed to end at handoff. Every engagement is shaped around one principle: the right technology environment is secure, dependable, and built to your specifications.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_40px_-8px_rgba(7,0,53,0.14)] hover:-translate-y-1 transition-all duration-300 border border-slate-200/80 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top row: step number + icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl sm:text-3xl font-black text-[#070035]/20 select-none">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/10 text-[#3b82f6] flex items-center justify-center group-hover:bg-[#3b82f6] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-[#070035] tracking-tight group-hover:text-[#3b82f6] transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#526a83] font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Key Deliverable Footer */}
                <div className="pt-4 mt-6 border-t border-slate-100">
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#3b82f6] mb-1">
                    Key Outcome
                  </p>
                  <p className="text-xs font-semibold text-[#070035] leading-snug">
                    {step.deliverable}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        {onOpenBooking && (
          <div className="pt-2 flex items-center">
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-3 bg-[#070035] text-[#38bdf8] hover:bg-[#0b1330] font-bold uppercase tracking-wider text-xs sm:text-sm py-3.5 px-7 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
