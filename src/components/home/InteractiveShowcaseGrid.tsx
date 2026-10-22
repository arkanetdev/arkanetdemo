"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface InteractiveShowcaseGridProps {
  onOpenBooking?: () => void;
}

interface ShowcaseCard {
  id: string;
  title: string;
  subtitle: string;
  techStack: string;
  image: string;
  hoverColor: string;
  href: string;
  isFullWidth?: boolean;
}

// ── BLOCK 1 CARDS (REAL ARKANET CAPABILITIES DATA) ──
const BLOCK1_LEFT_TOP: ShowcaseCard = {
  id: "website-development",
  title: "Website Development",
  subtitle: "Web Architecture, Conversion UX, Next.js & SEO",
  techStack: "Website Development",
  image: "/assets/images/web_showcase_bg.jpg",
  hoverColor: "#00bfa5",
  href: "/capabilities/website-development",
};

const BLOCK1_LEFT_BOTTOM: ShowcaseCard = {
  id: "portal-development",
  title: "Portal Development",
  subtitle: "Client Dashboards, SaaS Platforms & Internal Ops",
  techStack: "Portal Development",
  image: "/assets/images/App-development-three.webp",
  hoverColor: "#1d68f2",
  href: "/capabilities/portal-development",
};

// Spans the full height of the two left cards (96vh)
const BLOCK1_RIGHT_TALL: ShowcaseCard = {
  id: "mobile-app-development",
  title: "Mobile App Development",
  subtitle: "Native iOS & Android, React Native & Mobile UX",
  techStack: "Mobile App Development",
  image: "/assets/images/mobile_showcase_bg.jpg",
  hoverColor: "#0f172a",
  href: "/capabilities/mobile-app-development",
};

// ── BLOCK 2: CENTER FULL-WIDTH HERO BANNER (3360/1048 ASPECT RATIO) ──
const BLOCK2_FULL_WIDTH: ShowcaseCard = {
  id: "cloud-devops-hosting",
  title: "Cloud & DevOps Architecture",
  subtitle: "High-Availability Infrastructure, CI/CD & 99.9% Uptime",
  techStack: "Cloud & DevOps Architecture",
  image: "/assets/images/team-colab.jpg",
  hoverColor: "#0077c8",
  href: "/capabilities/cloud-devops-hosting",
  isFullWidth: true,
};

// ── BLOCK 3 CARDS (INVERTED: TALL ON LEFT, 2 STACKED ON RIGHT) ──
const BLOCK3_LEFT_TALL: ShowcaseCard = {
  id: "ai-chatbot-platform",
  title: "AI & Conversational Agents",
  subtitle: "Autonomous LLM Agents, WhatsApp Bots & Helpdesk",
  techStack: "AI & Conversational Agents",
  image: "/assets/images/ai-chat-bottwo.webp",
  hoverColor: "#4b1054",
  href: "/capabilities/ai-chatbot-automation",
};

const BLOCK3_RIGHT_TOP: ShowcaseCard = {
  id: "ecommerce-shopify-development",
  title: "E-Commerce & Shopify",
  subtitle: "Headless Commerce, High-Volume Stores & Custom Checkout",
  techStack: "E-Commerce & Shopify",
  image: "/assets/images/webdevelopmentone.webp",
  hoverColor: "#008060",
  href: "/capabilities/ecommerce-shopify-development",
};

const BLOCK3_RIGHT_BOTTOM: ShowcaseCard = {
  id: "digital-marketing-growth",
  title: "Digital Marketing & Growth",
  subtitle: "Performance Marketing, Paid Media & Conversion Funnels",
  techStack: "Digital Marketing & Growth",
  image: "/assets/images/digital-marketing-two.jpg",
  hoverColor: "#0e1c38",
  href: "/capabilities/digital-marketing",
};

interface ShowcaseCardItemProps {
  card: ShowcaseCard;
  aspectClass?: string;
  isTall?: boolean;
}

const ShowcaseCardItem: React.FC<ShowcaseCardItemProps> = ({
  card,
  aspectClass,
  isTall = false,
}) => {
  return (
    <div className="flex flex-col w-full h-full flex-1 min-h-0">
      {/* Interactive Card with Full Image Rest State & Solid Hover State */}
      <Link
        href={card.href}
        className={`group relative w-full rounded-[20px] sm:rounded-[28px] overflow-hidden border border-black/[0.09] hover:border-black/[0.20] shadow-[0_0_16px_0_rgba(47,48,51,0.05),0_32px_72px_0_rgba(47,48,51,0.07)] hover:shadow-2xl transition-all duration-500 cursor-pointer block bg-slate-100 ${
          card.isFullWidth
            ? "aspect-[4/3] sm:aspect-[16/10] md:aspect-[3360/1048] min-h-[160px]"
            : isTall
            ? "aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:min-h-0 flex-1"
            : aspectClass || "aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:min-h-0 flex-1"
        }`}
      >
        {/* 1. REST STATE: Full-Bleed Image */}
        <img
          src={card.image}
          alt={card.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* 2. HOVER STATE: Solid Color Overlay with Single Heading + Subtitle + "Explore service →" */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-5 sm:p-8 lg:p-10 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10"
          style={{ backgroundColor: card.hoverColor }}
        >
          <h3
            className={`font-bold tracking-tight text-white leading-tight ${
              card.isFullWidth
                ? "text-2xl sm:text-4xl lg:text-5xl"
                : isTall
                ? "text-2xl sm:text-3xl lg:text-4xl"
                : "text-xl sm:text-2xl lg:text-3xl"
            }`}
          >
            {card.title}
          </h3>

          <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm lg:text-base text-white/90 font-normal leading-relaxed max-w-md">
            {card.subtitle}
          </p>

          <div className="mt-4 sm:mt-5 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white tracking-wide">
            <span>Explore service</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </div>
        </div>
      </Link>

      {/* 3. REAL TECH STACK TAGS (Underneath card) */}
      <div className="pt-2 px-1 text-left shrink-0">
        <span className="text-xs sm:text-[13px] font-medium text-slate-500 tracking-wide font-sans">
          {card.techStack}
        </span>
      </div>
    </div>
  );
};

export const InteractiveShowcaseGrid: React.FC<InteractiveShowcaseGridProps> = () => {
  return (
    <section
      id="interactive-showcase"
      className="relative w-full bg-[#f4f6fb] pt-4 sm:pt-6 lg:pt-8 pb-10 sm:pb-12 lg:pb-16 px-6 sm:px-8 lg:px-[40px] select-none"
    >
      <div className="w-full space-y-[1.5rem]">
        {/* Section Header */}
        <div className="w-full text-left space-y-2 pb-2">
          <Link href="/capabilities" className="inline-block group">
            <h2 className="section-h2 text-2xl sm:text-3xl lg:text-4xl text-[#0b1330]">
              What We Build
            </h2>
          </Link>
          <p className="hero-sub max-w-2xl text-[#0b1330]/80 text-sm sm:text-base">
            Digital products designed to grow your business, engage your users,
            and scale with your vision.
          </p>
        </div>

        {/* ── SELLEO-INSPIRED 3-BLOCK BENTO GRID (REAL DATA, HEIGHT 96VH, GAP 1.5REM) ── */}
        <div className="space-y-[1.5rem] w-full">
          {/* ══ BLOCK 1: 2 Stacked on Left, 1 Tall on Right (Height 96vh) ══ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] w-full md:h-[96vh] md:min-h-[580px] items-stretch">
            {/* Left Column: 2 Stacked Cards */}
            <div className="flex flex-col gap-[1.5rem] justify-between h-full">
              <ShowcaseCardItem card={BLOCK1_LEFT_TOP} />
              <ShowcaseCardItem card={BLOCK1_LEFT_BOTTOM} />
            </div>

            {/* Right Column: 1 Tall Card Spanning 96vh */}
            <div className="flex flex-col h-full">
              <ShowcaseCardItem card={BLOCK1_RIGHT_TALL} isTall />
            </div>
          </div>

          {/* ══ BLOCK 2: Center Full-Width Hero Banner (3360/1048 Aspect Ratio) ══ */}
          <div className="w-full flex flex-col">
            <ShowcaseCardItem card={BLOCK2_FULL_WIDTH} />
          </div>

          {/* ══ BLOCK 3: 1 Tall on Left, 2 Stacked on Right (Height 96vh, Inverted) ══ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] w-full md:h-[96vh] md:min-h-[580px] items-stretch">
            {/* Left Column: 1 Tall Card Spanning 96vh */}
            <div className="flex flex-col h-full">
              <ShowcaseCardItem card={BLOCK3_LEFT_TALL} isTall />
            </div>

            {/* Right Column: 2 Stacked Cards */}
            <div className="flex flex-col gap-[1.5rem] justify-between h-full">
              <ShowcaseCardItem card={BLOCK3_RIGHT_TOP} />
              <ShowcaseCardItem card={BLOCK3_RIGHT_BOTTOM} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
