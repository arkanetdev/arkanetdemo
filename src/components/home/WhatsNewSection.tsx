"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AboutCTA } from "@/components/about/AboutCTA";

interface WhatsNewSectionProps {
  onOpenBooking?: () => void;
}

interface CapabilityCard {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

const CAPABILITY_CARDS: CapabilityCard[] = [
  {
    id: "tech-strategy",
    number: "01",
    title: "Technology Strategy & Roadmapping",
    description: "We help decide what to build and in what order, so spend maps directly to a measurable business outcome.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    slug: "website-development",
  },
  {
    id: "applied-ai",
    number: "02",
    title: "Applied AI & Machine Learning",
    description: "Custom models trained on your data, evaluated against your actual business metrics and operational workflows.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    slug: "applied-ai-ml",
  },
  {
    id: "conversational-ai",
    number: "03",
    title: "Conversational AI & Virtual Agents",
    description: "Language-model-based assistants that hold real conversations and hand off to a human only when needed.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop",
    slug: "ai-chatbot-automation",
  },
  {
    id: "data-engineering",
    number: "04",
    title: "Data Engineering & Analytics",
    description: "Pipelines and warehouses that turn scattered data into something your entire team can query and trust.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    slug: "data-engineering",
  },
  {
    id: "legacy-modernisation",
    number: "05",
    title: "Legacy System Modernisation",
    description: "Modernising ageing systems that still run your business, without a risky or expensive rip-and-replace.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    slug: "portal-development",
  },
  {
    id: "uiux-design",
    number: "06",
    title: "Product & UI/UX Design",
    description: "Interfaces designed around real user behaviour, tested before a single line of production code is written.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop",
    slug: "graphic-design",
  },
  {
    id: "fullstack-dev",
    number: "07",
    title: "Full-Stack App Development",
    description: "Web, mobile, and desktop applications built on a single, maintainable codebase wherever that's the right call.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    slug: "mobile-app-development",
  },
];

// Duplicated for continuous looping sequence (Card 7 -> Card 1)
const LOOPED_CAPABILITY_CARDS = [...CAPABILITY_CARDS, ...CAPABILITY_CARDS];

export const WhatsNewSection: React.FC<WhatsNewSectionProps> = ({ onOpenBooking }) => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const flexRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  
  const [dragWidth, setDragWidth] = useState(0);

  // Scroll progress for the sticky pinned duration
  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start start", "end start"],
  });

  // Animated outer white margin: starts at 0px -> expands smoothly to 40px (12px mobile) on scroll
  const outerSideMargin = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    isMobile ? [0, 12, 12] : [0, 40, 40]
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (flexRef.current && containerRef.current) {
      setDragWidth(
        flexRef.current.scrollWidth - containerRef.current.offsetWidth
      );
    }
  }, []);

  const handleDragStart = () => {
    isDraggingRef.current = true;
  };

  const handleDragEnd = () => {
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 120);
  };

  const handleCardClick = (slug: string) => {
    if (isDraggingRef.current) return;
    router.push(`/capabilities/${slug}`);
  };

  return (
    <div className="relative w-full select-none bg-white">
      
      {/* Spacer wrapper */}
      <div ref={spacerRef} className="relative">
        
        {/* Sticky Outer Container with pure white background */}
        <motion.div
          style={{ paddingLeft: outerSideMargin, paddingRight: outerSideMargin }}
          className="w-full bg-white pt-0"
        >
          {/* COMBINED OFF-WHITE SECTION */}
          <div className="w-full bg-[#f4f6fb] text-[#0b1330] pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-12 rounded-t-none rounded-b-[40px] sm:rounded-b-[64px] shadow-sm border-none overflow-hidden">
            
            <div className="w-full space-y-8 sm:space-y-10 px-6 sm:px-8 lg:px-[40px]">
              
              {/* Heading */}
              <div className="text-left space-y-2">
                <Link href="/capabilities" className="inline-block">
                  <h2 className="section-h2">
                    Digital & AI Capabilities
                  </h2>
                </Link>
                <p className="hero-sub max-w-2xl">
                  Strategic technology engineering, applied machine learning, and high-performance digital platforms.
                </p>
              </div>

              {/* Freeform Drag Capability Card Slider with Continuous Looping */}
              <div
                ref={containerRef}
                draggable="false"
                className="w-full overflow-hidden pt-2"
              >
                <motion.div
                  ref={flexRef}
                  drag="x"
                  dragConstraints={{ left: -dragWidth, right: 0 }}
                  dragElastic={0.05}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  style={{ touchAction: "pan-y" }}
                  className="flex gap-5 sm:gap-6 pb-4 w-max cursor-grab active:cursor-grabbing"
                >
                  {LOOPED_CAPABILITY_CARDS.map((card, idx) => (
                    <motion.div
                      key={`${card.id}-${idx}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.7,
                        delay: (idx % 7) * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="shrink-0 w-[280px] sm:w-[320px] lg:w-[360px] relative aspect-[320/430] rounded-[28px] sm:rounded-[32px] overflow-hidden bg-[#0b1330] border-none transition-all duration-500 hover:shadow-2xl select-none group cursor-pointer"
                      onClick={() => handleCardClick(card.slug)}
                    >
                      {/* Background Visual Image */}
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        decoding="async"
                        draggable="false"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.85]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

                      {/* Top Right Action Arrow */}
                      <div className="absolute top-5 right-5 z-10">
                        <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white group-hover:bg-[#38bdf8] group-hover:text-[#0b1330] flex items-center justify-center transition-all duration-300 shadow-md">
                          <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                        </div>
                      </div>

                      {/* Bottom Overlay Title & Description */}
                      <div className="absolute inset-x-0 bottom-0 z-20 p-4 min-[400px]:p-6 sm:p-8 flex flex-col justify-end text-left space-y-1.5 min-[400px]:space-y-2 pointer-events-none">
                        <h3 className="capability-card-title text-white group-hover:text-[#38bdf8] transition-colors duration-300 line-clamp-2">
                          {card.title}
                        </h3>
                        <p className="capability-card-desc text-white/90 line-clamp-2 min-[400px]:line-clamp-3">
                          {card.description}
                        </p>
                      </div>

                    </motion.div>
                  ))}
                </motion.div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>

      {/* ROTATING-WORD CLOSING HEADLINE */}
      <AboutCTA onOpenBooking={() => onOpenBooking?.()} />

    </div>
  );
};
