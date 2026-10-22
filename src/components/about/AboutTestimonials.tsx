"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "The team at Arkanet are true professionals, masters in their field, with meticulous attention to detail.",
    author: "Vanessa Katsanevakis",
    role: "Director",
    company: "Sussex Taps",
  },
  {
    quote:
      "They brought rare clarity to a complex brief. From strategy through to delivery, every decision felt purposeful, considered, and commercially grounded.",
    author: "Maya Reynolds",
    role: "Chief Product Officer",
    company: "Northstar Ventures",
  },
  {
    quote:
      "The team quickly became an extension of ours. They combined strong product thinking with technical depth, helping us move from ambition to a platform we could confidently scale.",
    author: "Daniel Hart",
    role: "Managing Director",
    company: "Aster & Co.",
  },
  {
    quote:
      "What stood out was the quality of their thinking. They challenged assumptions, simplified the difficult parts, and delivered an experience our customers immediately noticed.",
    author: "Elena Brooks",
    role: "Director of Digital",
    company: "Meridian Group",
  },
];

const AUTO_SCROLL_INTERVAL = 6000;

export function AboutTestimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const hasMultiple = testimonials.length > 1;

  const goTo = useCallback(
    (index: number, dir: "left" | "right") => {
      setDirection(dir);
      setActive(index);
    },
    []
  );

  const previousTestimonial = useCallback(() => {
    goTo(
      active === 0 ? testimonials.length - 1 : active - 1,
      "left"
    );
  }, [active, goTo]);

  const nextTestimonial = useCallback(() => {
    goTo(
      active === testimonials.length - 1 ? 0 : active + 1,
      "right"
    );
  }, [active, goTo]);

  // Auto-scroll
  useEffect(() => {
    if (!hasMultiple) return;

    intervalRef.current = setInterval(() => {
      setDirection("right");
      setActive((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, AUTO_SCROLL_INTERVAL);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hasMultiple, active]);

  const testimonial = testimonials[active];

  return (
    <section className="pt-4 sm:pt-6 lg:pt-8 pb-4 sm:pb-6 lg:pb-8 px-6 sm:px-8 lg:px-[40px] bg-[#f4f6fb] select-none">
      <div className="w-full">
        {/* Muted Slate Blue Hero Card */}
        <div className="relative w-full bg-[#7299a9] text-white rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] p-10 sm:p-14 lg:p-16 2xl:p-20 shadow-[0_20px_50px_-12px_rgba(114,153,169,0.35)] overflow-hidden flex flex-col justify-between h-[560px] sm:h-[480px] lg:h-[520px]">
          
          {/* Subtle Ambient Glow inside card */}
          <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Top Quote Content with Fixed Height CSS Grid Stack (Zero jumping/shifting) */}
          <div className="relative z-10 w-full max-w-5xl my-auto">
            <div className="grid grid-cols-1 grid-rows-1 items-center h-[260px] sm:h-[220px] lg:h-[240px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{
                    opacity: 0,
                    x: direction === "right" ? 24 : -24,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{
                    opacity: 0,
                    x: direction === "right" ? -24 : 24,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="col-start-1 row-start-1 w-full"
                >
                  <h2 className="font-display font-medium text-[clamp(22px,3.2vw,48px)] leading-[1.24] tracking-[-0.025em] text-white">
                    &#8220;{testimonial.quote}&#8221;
                  </h2>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Footer: Author Details on Left + Pill Navigation Controls on Right */}
          <div className="relative z-10 pt-10 sm:pt-14 lg:pt-16 mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            
            {/* Left: Frosted Quote Badge + Author Details */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              {/* Sleek Frosted Quote Icon Badge */}
              <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white shrink-0 shadow-inner">
                <Quote className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-white text-white rotate-180" />
              </div>

              {/* Author and Subtitle */}
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <span className="text-white text-[9px] sm:text-[10px]">●</span>
                  <span className="text-sm sm:text-base font-bold text-white leading-tight">
                    {testimonial.author}
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-white/80 font-normal pl-4">
                  {testimonial.role ? `${testimonial.role} · ${testimonial.company}` : testimonial.company}
                </span>
              </div>
            </div>

            {/* Right: Frosted Pill Arrow Controls */}
            {hasMultiple && (
              <div className="flex items-center bg-white/20 backdrop-blur-md rounded-full p-1 sm:p-1.5 border border-white/25 shadow-inner">
                <button
                  type="button"
                  onClick={previousTestimonial}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-white hover:bg-white/25 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5" strokeWidth={2.2} />
                </button>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-white hover:bg-white/25 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <ArrowRight className="w-5 h-5" strokeWidth={2.2} />
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
