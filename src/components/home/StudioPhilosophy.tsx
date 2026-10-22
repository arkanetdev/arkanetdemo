"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface StudioPhilosophyProps {
  onOpenBooking?: () => void;
}


// Word-by-Word & Character-by-Character Reveal Component
interface WordByWordTextProps {
  text: string;
  className?: string;
  staggerMs?: number;
  wordClassName?: string;
}

const WordByWordText: React.FC<WordByWordTextProps> = ({
  text,
  className = "",
  staggerMs = 60,
  wordClassName = "",
}) => {
  const words = text.trim().split(/\s+/);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerMs / 1000,
        delayChildren: 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.22 },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`inline-block ${className}`}
    >
      {words.map((word, wIdx) => {
        const chars = word.split("");
        return (
          <span
            key={wIdx}
            className={`overflow-hidden inline-block align-baseline py-0 me-[0.28em] ${wordClassName}`}
          >
            <motion.span variants={wordVariants} className="inline-block align-baseline">
              {chars.map((char, cIdx) => (
                <motion.span key={cIdx} variants={charVariants} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
};

const STATS_DATA = [
  {
    number: "20+",
    label: "Years of combined technology expertise",
  },
  {
    number: "1000+",
    label: "Digital products & projects delivered",
  },
  {
    number: "100%",
    label: "Dedicated in-house engineering team",
  },
];

export const StudioPhilosophy: React.FC<StudioPhilosophyProps> = ({ onOpenBooking }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative bg-[#f4f6fb] text-[#0b1330] select-none pt-4 sm:pt-6 lg:pt-8 pb-4 sm:pb-6 lg:pb-8 min-h-screen lg:min-h-0 flex flex-col justify-center overflow-hidden">
      <div className="w-full px-6 sm:px-8 lg:px-[40px] space-y-6 sm:space-y-8 lg:space-y-8 max-w-[1700px] mx-auto">
        
        {/* Top 2-Column Split: Headline + Narrative on Left, Full-Width Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center text-left">
          
          {/* Left Column: Headline, Paragraphs, About Us Button */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4 sm:space-y-6 text-left">
            {/* Large Word-by-Word Animating Headline */}
            <div className="text-left w-full">
              <h2 className="section-h2">
                <WordByWordText
                  text="Same team,"
                  className="whitespace-nowrap"
                  staggerMs={isMobile ? 40 : 65}
                />
                <br />
                <WordByWordText
                  text="start to finish"
                  className="whitespace-nowrap"
                  staggerMs={isMobile ? 40 : 65}
                />
              </h2>
            </div>

            {/* Paragraph Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#0b1330] font-normal text-[15px] md:text-[16.5px] lg:text-[18px] xl:text-[20px] leading-relaxed max-w-xl space-y-3"
            >
              <p>
                Arkanet is a team of engineers, designers, and strategists working across web, mobile, AI, and digital marketing: one team, not four separate specialists handed off between projects.
              </p>
              <p>
                We measure success the way our clients do, not by what shipped, but by what kept working. That&apos;s why our engagement doesn&apos;t end at launch. Ongoing support, monitoring, and optimisation are part of how we work, not an upsell after the fact.
              </p>
            </motion.div>

            {/* Responsive Pill CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="pt-1"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 bg-[#0b1330] text-[#38bdf8] hover:bg-[#070035] font-extrabold uppercase text-xs sm:text-sm md:text-base py-3 px-6 md:py-3.5 md:px-7 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
              >
                <span>About Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Full-Width Image (No Empty White Space in Center) */}
          <div className="lg:col-span-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl border border-black/10 group"
            >
              <img
                src="https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg"
                alt="People in creative office workspace"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-[center_18%] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
            </motion.div>
          </div>

        </div>

        {/* Bottom: 3-Column Stats Row (Fully Visible within 100vh) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 pt-6 sm:pt-7 border-t border-slate-200/90 max-w-full">
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center gap-4 sm:gap-5"
            >
              <div className="font-display font-medium text-[36px] sm:text-[44px] lg:text-[54px] xl:text-[64px] leading-none text-[#0b1330] tracking-tight shrink-0">
                {stat.number}
              </div>
              <div className="font-sans font-semibold text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[17px] leading-snug text-[#0b1330] text-left flex-1 max-w-[240px]">
                <WordByWordText text={stat.label} staggerMs={35} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
