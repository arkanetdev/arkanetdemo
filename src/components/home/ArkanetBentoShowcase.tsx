"use client";

import React from "react";
import Link from "next/link";

interface ArkanetBentoShowcaseProps {
  onOpenBooking?: () => void;
}

interface ShowcaseProject {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  heightClass: string;
  widthClass?: string;
}

// ── LEFT COLUMN: 4 CARDS (MATCHING UPSTREAM -> CIRCA -> LEVVEL -> HABITA) ──
const LEFT_COLUMN_PROJECTS: ShowcaseProject[] = [
  // 1. Upstream Equivalent: Large / Tall web showcase
  {
    id: "website-development",
    title: "Website Development",
    subtitle: "Web Architecture, Conversion UX, Next.js & SEO",
    image: "/assets/images/webdevelopmenttwo.webp",
    href: "/capabilities/website-development",
    heightClass: "h-[300px] sm:h-[380px] lg:h-[450px] xl:h-[490px]",
    widthClass: "w-full",
  },
  // 3. Circa Equivalent: Medium landscape portal
  {
    id: "portal-development",
    title: "Portal Development",
    subtitle: "Client Dashboards, SaaS Platforms & Internal Ops",
    image: "/assets/images/App-development-three.webp",
    href: "/capabilities/portal-development",
    heightClass: "h-[250px] sm:h-[310px] lg:h-[360px] xl:h-[390px]",
    widthClass: "w-full",
  },
  // 5. Levvel Equivalent: Full column width
  {
    id: "digital-marketing-growth",
    title: "Digital Marketing & Growth",
    subtitle: "Performance Marketing, Paid Media & Funnels",
    image: "/assets/images/digital-marketing-two.jpg",
    href: "/capabilities/digital-marketing",
    heightClass: "h-[240px] sm:h-[300px] lg:h-[350px] xl:h-[380px]",
    widthClass: "w-full",
  },
  // 7. Habita Equivalent: Full column width
  {
    id: "business-automation-cloud",
    title: "Business Automation",
    subtitle: "Workflow Automation, Cloud DevOps & ERP Systems",
    image: "/assets/images/understand-digital.webp",
    href: "/capabilities/business-automation",
    heightClass: "h-[240px] sm:h-[300px] lg:h-[350px] xl:h-[380px]",
    widthClass: "w-full",
  },
];

// ── RIGHT COLUMN: 4 CARDS (MATCHING RIZZLE -> SIMBA -> TURO -> PUZZLE) ──
const RIGHT_COLUMN_PROJECTS: ShowcaseProject[] = [
  // 2. Rizzle Equivalent: Matched height with Digital Marketing & Growth
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    subtitle: "Native iOS & Android, React Native & Mobile UX",
    image: "/assets/images/appdevelopment.webp",
    href: "/capabilities/mobile-app-development",
    heightClass: "h-[240px] sm:h-[300px] lg:h-[350px] xl:h-[380px]",
    widthClass: "w-full",
  },
  // 4. Simba Equivalent: Matched height with Digital Marketing & Growth
  {
    id: "ecommerce-shopify-development",
    title: "E-Commerce & Shopify",
    subtitle: "Headless Commerce, High-Volume Stores & Custom Checkout",
    image: "/assets/images/webdevelopmentone.webp",
    href: "/capabilities/ecommerce-shopify-development",
    heightClass: "h-[240px] sm:h-[300px] lg:h-[350px] xl:h-[380px]",
    widthClass: "w-full",
  },
  // 6. Turo Equivalent: Tall portrait/angled showcase
  {
    id: "cloud-devops-hosting",
    title: "Cloud & DevOps Architecture",
    subtitle: "High-Availability Infrastructure, CI/CD & 99.9% Uptime",
    image: "/assets/images/team-colab.jpg",
    href: "/capabilities/cloud-devops-hosting",
    heightClass: "h-[290px] sm:h-[360px] lg:h-[420px] xl:h-[460px]",
    widthClass: "w-full",
  },
  // 8. Puzzle Equivalent: Wide landscape laptop stage (Pairs with Habita at bottom)
  {
    id: "ai-chatbot-platform",
    title: "AI & Conversational Agents",
    subtitle: "Autonomous LLM Agents, WhatsApp Bots & Helpdesk",
    image: "/assets/images/ai-chat-bottwo.webp",
    href: "/capabilities/ai-chatbot-automation",
    heightClass: "h-[270px] sm:h-[330px] lg:h-[380px] xl:h-[410px]",
    widthClass: "w-full",
  },
];

// ── REUSABLE CARD (MATCHING REFERENCE UI: REDUCED 14-16px RADIUS, TITLE AT REST, SUBTITLE ON HOVER) ──
const ShowcaseCard: React.FC<{ project: ShowcaseProject }> = ({ project }) => {
  return (
    <div className={`${project.widthClass || "w-full"} group`}>
      <Link href={project.href} className="block w-full text-left cursor-pointer">
        {/* Visual Image Container */}
        <div
          className={`relative w-full ${project.heightClass} rounded-[14px] sm:rounded-[16px] overflow-hidden bg-slate-200/80 shadow-xs group-hover:shadow-md transition-all duration-500`}
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />
        </div>

        {/* Heading only by default; subtitle smoothly appears on hover without layout shift */}
        <div className="relative pt-3 sm:pt-3.5 text-left">
          <h3 className="font-heading font-bold text-lg sm:text-xl lg:text-[21px] xl:text-[22px] tracking-tight text-[#0b1330] leading-snug">
            {project.title}
          </h3>

          <p className="absolute top-full left-0 right-0 pt-1 text-xs sm:text-sm text-slate-500 font-normal leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none line-clamp-2">
            {project.subtitle}
          </p>
        </div>
      </Link>
    </div>
  );
};

export const ArkanetBentoShowcase: React.FC<ArkanetBentoShowcaseProps> = () => {
  return (
    <section
      id="what-we-build"
      className="relative w-full bg-[#f4f6fb] pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-20 px-6 sm:px-8 lg:px-[40px] select-none"
    >
      <div className="w-full space-y-10 sm:space-y-12 lg:space-y-16">
        {/* Section Header (Preserved) */}
        <div className="w-full text-left space-y-2">
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

        {/* ── 2-COLUMN CONTINUOUS STAGGERED MASONRY GRID (8 CARDS TOTAL, UPSTREAM TO PUZZLE STYLE) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-start w-full">
          {/* LEFT COLUMN (4 Cards) */}
          <div className="flex flex-col gap-12 sm:gap-14 lg:gap-16 xl:gap-20 w-full items-start">
            {LEFT_COLUMN_PROJECTS.map((project) => (
              <ShowcaseCard key={project.id} project={project} />
            ))}
          </div>

          {/* RIGHT COLUMN (4 Cards) */}
          <div className="flex flex-col gap-12 sm:gap-14 lg:gap-16 xl:gap-20 w-full items-start">
            {RIGHT_COLUMN_PROJECTS.map((project) => (
              <ShowcaseCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
