"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_ITEMS } from "@/lib/data";

interface FlagshipProjectsProps {
  onOpenBooking: () => void;
}

/**
 * FlagshipProjects
 * -----------------
 * Vertical list of project names. On hover, a floating image panel
 * fades/clips into view and follows the cursor with a smooth,
 * lerped motion (via GSAP quickTo).
 */
export const FlagshipProjects: React.FC<FlagshipProjectsProps> = ({
  onOpenBooking,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const titleRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Quick-to tweens for the floating image position (created once, reused every move)
  const quickX = useRef<gsap.QuickToFunc | null>(null);
  const quickY = useRef<gsap.QuickToFunc | null>(null);

  // TUNE: cursor offset so the image doesn't sit dead-center on the pointer
  const OFFSET_X = 24;
  const OFFSET_Y = 24;

  // TUNE: how "quick" the follow feels, lower duration = snappier, more duration = floatier
  const FOLLOW_DURATION = 0.5;
  const FOLLOW_EASE = "power3.out";

  useEffect(() => {
    const section = sectionRef.current;
    const imageWrap = imageWrapRef.current;
    if (!section || !imageWrap) return;

    // Set up the follow tweens once
    quickX.current = gsap.quickTo(imageWrap, "x", {
      duration: FOLLOW_DURATION,
      ease: FOLLOW_EASE,
    });
    quickY.current = gsap.quickTo(imageWrap, "y", {
      duration: FOLLOW_DURATION,
      ease: FOLLOW_EASE,
    });

    const handleMouseMove = (e: MouseEvent) => {
      const bounds = section.getBoundingClientRect();
      const x = e.clientX - bounds.left + OFFSET_X;
      const y = e.clientY - bounds.top + OFFSET_Y;
      quickX.current?.(x);
      quickY.current?.(y);
    };

    section.addEventListener("mousemove", handleMouseMove);

    // Page-load stagger reveal for the title list
    gsap.set(titleRefs.current, { clipPath: "inset(100% 0 0 0)", y: 24 });
    gsap.to(titleRefs.current, {
      clipPath: "inset(0% 0 0 0)",
      y: 0,
      duration: 0.9,
      ease: "expo.out",
      stagger: 0.1,
    });

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const imageWrap = imageWrapRef.current;
    if (!imageWrap) return;

    if (activeIndex !== null) {
      gsap.to(imageWrap, {
        opacity: 1,
        clipPath: "inset(0% 0 0 0)",
        scale: 1,
        duration: 0.6,
        ease: "expo.out",
      });
    } else {
      gsap.to(imageWrap, {
        opacity: 0,
        clipPath: "inset(100% 0 0 0)",
        scale: 0.96,
        duration: 0.4,
        ease: "expo.out",
      });
    }
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      id="flagship-projects"
      className="relative py-24 sm:py-32 bg-subtle border-y border-borderline overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-borderline text-xs font-semibold text-navy mb-3">
            Featured Flagship Projects
          </div>
          <h2 className="font-display font-bold text-3xl text-navy max-w-xl">
            Production Proof &amp; Selected Work
          </h2>
        </div>

        {/* Title list, hover target */}
        <nav className="flex flex-col">
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              ref={(el) => {
                titleRefs.current[idx] = el;
              }}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={onOpenBooking}
              className={`group text-left border-b border-borderline py-6 sm:py-8 flex items-center justify-between
                transition-colors duration-300 cursor-pointer`}
              style={{ willChange: "clip-path, transform" }}
            >
              <span
                className={`font-display font-bold uppercase tracking-tight
                  text-3xl sm:text-5xl lg:text-6xl transition-all duration-300
                  ${
                    activeIndex === idx
                      ? "text-emerald-700 translate-x-3"
                      : activeIndex === null
                      ? "text-navy"
                      : "text-stone-300"
                  }`}
                style={{
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {item.title}
              </span>
              <ArrowUpRight
                className={`w-6 h-6 sm:w-8 sm:h-8 shrink-0 transition-all duration-300
                  ${
                    activeIndex === idx
                      ? "opacity-100 translate-x-0 translate-y-0 text-emerald-700"
                      : "opacity-0 -translate-x-2 translate-y-2 text-navy"
                  }`}
              />
            </button>
          ))}
        </nav>
      </div>

      {/* Floating cursor-follower image panel */}
      <div
        ref={imageWrapRef}
        className="pointer-events-none fixed top-0 left-0 z-50 w-[320px] h-[220px] sm:w-[380px] sm:h-[260px] rounded-2xl overflow-hidden shadow-2xl opacity-0"
        style={{
          clipPath: "inset(100% 0 0 0)",
          transform: "scale(0.96)",
        }}
      >
        {activeIndex !== null && (
          <img
            src={PORTFOLIO_ITEMS[activeIndex].image}
            alt={PORTFOLIO_ITEMS[activeIndex].title}
            className="w-full h-full object-cover"
          />
        )}
        {activeIndex !== null && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-md px-4 py-3">
            <p className="text-white text-xs font-semibold tracking-wide">
              {PORTFOLIO_ITEMS[activeIndex].result}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
