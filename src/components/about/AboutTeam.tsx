"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { team } from "@/lib/aboutData";

function SafeImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} loading="lazy" className={`w-full h-full object-cover ${className}`} />;
}

export function AboutTeam() {
  const [isMobile, setIsMobile] = useState(false);
  const spacerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll progress for the sticky pinned section transition
  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start start", "end end"],
  });

  // Dynamic outer margin: expands smoothly to 40px (12px mobile) matching site grid
  const outerSideMargin = useTransform(
    scrollYProgress,
    [0, 0.65, 1],
    isMobile ? [0, 0, 12] : [0, 0, 40]
  );

  return (
    <div className="relative w-full select-none bg-white">
      {/* Spacer wrapper controls sticky scroll progress duration */}
      <div ref={spacerRef} className="relative min-h-[110vh] sm:min-h-[115vh]">
        
        {/* Sticky Outer Container with pure white background */}
        <motion.div
          style={{ paddingLeft: outerSideMargin, paddingRight: outerSideMargin }}
          className="sticky top-0 z-10 w-full bg-white pt-0 will-change-[padding]"
        >
          {/* COMBINED TEAM SECTION, Light sky blue container over pure white background */}
          <div className="w-full bg-[#f4f6fb] text-[#070035] pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-8 lg:pb-10 rounded-t-none rounded-b-[40px] sm:rounded-b-[64px] shadow-sm border-none overflow-hidden px-6 sm:px-8 lg:px-[40px]">
            
            {/* Section Header */}
            <div className="w-full mb-[clamp(40px,5vw,80px)] space-y-4 text-left">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0284c7]">
                Our People
              </p>
              <h2 className="section-h2">
                One team, start to finish
              </h2>
              <div className="hero-sub max-w-4xl !text-[#526a83] space-y-4">
                <p>
                  Arkanet is a team of engineers, designers, and strategists working across web, mobile, AI, and digital marketing, one team, not four separate specialists handed off between projects.
                </p>
                <p>
                  We measure success the way our clients do, not by what shipped, but by what kept working. That&apos;s why our engagement doesn&apos;t end at launch. Ongoing support, monitoring, and optimisation are part of how we work, not an upsell after the fact.
                </p>
              </div>
            </div>

            {/* Team Grid */}
            <div className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-7 lg:gap-8 items-start">
                {team.map((member, index) => {
                  const firstName = member.name.split(" ")[0];
                  // Staggered vertical offset
                  const isStaggered = index % 2 === 1;
                  // Alternating Female (odd index) vs Male (even index)
                  const isFemale = index % 2 === 1;

                  return (
                    <div
                      key={member.name}
                      className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#dce7f0] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                        isStaggered ? "mt-6 sm:mt-12 lg:mt-16" : "mt-0"
                      }`}
                    >
                      {/* Photo aspect ratio */}
                      <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                        <SafeImage
                          src={member.image}
                          alt={member.name}
                          className="group-hover:scale-105 transition-transform duration-500 ease-out"
                        />

                        {/* Floating pill badge */}
                        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex justify-start z-10 pointer-events-none">
                          <div className="inline-flex items-center bg-white p-1 rounded-full shadow-md border border-white/60 max-w-full">
                            {/* Name capsule */}
                            <span
                              className={`text-white text-xs sm:text-sm font-bold px-3 py-1 sm:py-1.5 rounded-full shrink-0 transition-colors ${
                                isFemale ? "bg-[#b76e79]" : "bg-[#070035]"
                              }`}
                            >
                              {firstName}
                            </span>
                            {/* Role label */}
                            <span className="text-[#070035] text-xs sm:text-sm font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 truncate">
                              {member.role}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
