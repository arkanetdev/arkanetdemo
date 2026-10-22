"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ClientLogosSectionProps {
  onOpenBooking?: () => void;
}

interface ClientLogo {
  id: string;
  src: string;
  alt: string;
}

const CLIENT_GROUPS: ClientLogo[][] = [
  [
    { id: "1", src: "/assets/clinet-logo/1.png", alt: "Al Ras" },
    { id: "2", src: "/assets/clinet-logo/2.png", alt: "Arbitralis" },
    { id: "3", src: "/assets/clinet-logo/3.png", alt: "B&G Store" },
    { id: "4", src: "/assets/clinet-logo/4.png", alt: "Decorpoint International" },
  ],
  [
    { id: "5", src: "/assets/clinet-logo/5.png", alt: "Dual Investments" },
    { id: "6", src: "/assets/clinet-logo/6.png", alt: "Ebonite" },
    { id: "7", src: "/assets/clinet-logo/7.png", alt: "Emirates National Holdings" },
    { id: "8", src: "/assets/clinet-logo/8.png", alt: "MCH Global" },
  ],
  [
    { id: "9", src: "/assets/clinet-logo/9.png", alt: "Filipino Institute" },
    { id: "10", src: "/assets/clinet-logo/10.png", alt: "GDS Prestige" },
    { id: "11", src: "/assets/clinet-logo/11.png", alt: "Client Partner 11" },
    { id: "12", src: "/assets/clinet-logo/12.png", alt: "Client Partner 12" },
  ],
  [
    { id: "13", src: "/assets/clinet-logo/13.png", alt: "Client Partner 13" },
    { id: "14", src: "/assets/clinet-logo/14.png", alt: "Client Partner 14" },
    { id: "15", src: "/assets/clinet-logo/15.png", alt: "Client Partner 15" },
    { id: "1-1", src: "/assets/clinet-logo/1-1.png", alt: "Client Partner 16" },
  ],
  [
    { id: "2-1", src: "/assets/clinet-logo/2-1.png", alt: "Client Partner 17" },
    { id: "3-1", src: "/assets/clinet-logo/3-1.png", alt: "Client Partner 18" },
    { id: "4-1", src: "/assets/clinet-logo/4-1.png", alt: "Client Partner 19" },
    { id: "5-1", src: "/assets/clinet-logo/5-1.png", alt: "Client Partner 20" },
  ],
  [
    { id: "6-1", src: "/assets/clinet-logo/6-1.png", alt: "Client Partner 21" },
    { id: "7-1", src: "/assets/clinet-logo/7-1.png", alt: "Client Partner 22" },
    { id: "1-rep", src: "/assets/clinet-logo/1.png", alt: "Al Ras" },
    { id: "2-rep", src: "/assets/clinet-logo/2.png", alt: "Arbitralis" },
  ],
];

const ROTATION_INTERVAL = 3500;

export const ClientLogosSection: React.FC<ClientLogosSectionProps> = () => {
  const [activeGroup, setActiveGroup] = useState(0);
  const isPausedRef = useRef(false);

  useEffect(() => {
    // Preload logos to prevent loading flicker
    CLIENT_GROUPS.flat().forEach((logo) => {
      const img = new Image();
      img.src = logo.src;
    });

    const interval = setInterval(() => {
      if (!isPausedRef.current) {
        setActiveGroup((prev) => (prev + 1) % CLIENT_GROUPS.length);
      }
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#f4f6fb] text-[#0b1330] select-none pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14 lg:pb-16 overflow-hidden">
      <div className="w-full px-6 sm:px-12 lg:px-20 max-w-[1500px] mx-auto">
        {/* Eyebrow */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <span className="lg:text-4xl text-xl font-bold tracking-[0.28em] text-[#0b1330]/70">
            Trusted By
          </span>
        </div>

        {/* Pure Minimal Logo Stage */}
        <div
          onMouseEnter={() => {
            isPausedRef.current = true;
          }}
          onMouseLeave={() => {
            isPausedRef.current = false;
          }}
          className="relative flex items-center justify-center py-0"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 w-full items-center justify-items-center"
            >
              {CLIENT_GROUPS[activeGroup].map((logo, idx) => (
                <motion.div
                  key={`${activeGroup}-${logo.id}`}
                  initial={{ opacity: 0, scale: 0.94, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="w-full h-24 sm:h-28 md:h-32 flex items-center justify-center group cursor-pointer"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="eager"
                    style={{ mixBlendMode: "multiply" }}
                    className="max-h-16 sm:max-h-24 md:max-h-28 lg:max-h-36 xl:max-h-40 max-w-[200px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px] w-auto h-auto object-contain grayscale opacity-65 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};