"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { X, CheckCircle2, Sparkles, Layers, Calendar, UserCheck, ArrowRight } from "lucide-react";

function MagneticCloseButton({ onClick }: { onClick: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.88 }}
      className="group absolute top-6 right-6 sm:top-8 sm:right-8 z-50 w-11 h-11 rounded-full bg-[#282828] hover:bg-[#383838] flex items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden shrink-0 shadow-lg border border-white/10"
      aria-label="Close modal"
    >
      <motion.div
        animate={{ rotate: isHovered ? 90 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="text-white transition-colors duration-300"
      >
        <X className="w-4 h-4" strokeWidth={2.5} />
      </motion.div>
    </motion.button>
  );
}

export interface WorkProjectDetail {
  id: string;
  category: string;
  title: string;
  description: string;
  outerImage: string;
  innerImage: string;
  detail?: {
    client: string;
    year: string;
    services: string[];
    overview: string;
    challenge: string;
    solution: string;
    impact: string[];
    techStack: string[];
  };
}

export interface WorkDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: WorkProjectDetail | null;
  allProjects?: WorkProjectDetail[];
  onSelectProject?: (proj: WorkProjectDetail) => void;
}

export const WorkDetailModal: React.FC<WorkDetailModalProps> = ({
  isOpen,
  onClose,
  project,
  allProjects = [],
  onSelectProject,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentProject, setCurrentProject] = useState<WorkProjectDetail | null>(null);

  useEffect(() => {
    if (project) setCurrentProject(project);
  }, [project]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsScrolled(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop > 20) {
      if (!isScrolled) setIsScrolled(true);
    } else {
      if (isScrolled) setIsScrolled(false);
    }
  };

  if (!currentProject) return null;

  const details = currentProject.detail || {
    client: "Enterprise Partner",
    year: "2026",
    services: [currentProject.category, "Custom Software", "UI/UX Architecture"],
    overview: currentProject.description,
    challenge: "Operational friction and legacy tool silos restricted scalability and customer conversion.",
    solution: "Designed and engineered a high-performance modern web application built for speed, security, and effortless user adoption.",
    impact: [
      "+130% Measurable performance improvement",
      "Sub-second average loading latency",
      "99.9% System reliability under load",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Vercel Enterprise"],
  };

  const currentIndex = allProjects.findIndex((p) => p.id === currentProject.id);
  const nextProject = allProjects.length > 0 && currentIndex !== -1
    ? allProjects[(currentIndex + 1) % allProjects.length]
    : null;

  const handleNextProject = () => {
    if (nextProject && onSelectProject) {
      onSelectProject(nextProject);
      const scrollEl = document.getElementById("work-modal-scroll");
      if (scrollEl) scrollEl.scrollTop = 0;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 cursor-pointer"
          />

          {/* Slide-Up Panel, matching ArticleDetailModal shell */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`fixed bottom-0 z-50 bg-[#121212] text-white shadow-[0_-20px_80px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isScrolled
                ? "inset-x-0 top-0 rounded-t-none"
                : "inset-x-0 sm:inset-x-8 xl:inset-x-[40px] top-[80px] sm:top-[140px] lg:top-[180px] rounded-t-[28px] sm:rounded-t-[48px]"
            }`}
          >
            {/* Close (X) Button */}
            <MagneticCloseButton onClick={onClose} />

            {/* Scrollable Content Body */}
            <div
              id="work-modal-scroll"
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {/* DARK HERO SECTION matching ArticleDetailModal */}
              <div className="px-5 sm:px-8 lg:px-10 pt-5 sm:pt-8 lg:pt-[60px] pb-0 lg:pb-[40px]">
                <div className="max-w-[1350px] mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[#1a1a1a]">
                    
                    {/* Left: Project Hero Mockup Image */}
                    <div className="relative w-full aspect-[4/3] sm:aspect-auto sm:min-h-[340px] lg:min-h-[440px] overflow-hidden bg-slate-900">
                      <img
                        src={currentProject.outerImage}
                        alt={currentProject.title}
                        className="w-full h-full object-cover brightness-90"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-6">
                        <div className="relative w-[80%] h-[75%] rounded-xl overflow-hidden shadow-2xl border border-white/20">
                          <img
                            src={currentProject.innerImage}
                            alt={`${currentProject.title} detail`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Right: Title + Category/Year + Description */}
                    <div className="flex flex-col justify-center gap-5 bg-[#1a1a1a] px-7 sm:px-10 lg:px-12 py-9 sm:py-10 lg:py-14">
                      
                      {/* Title */}
                      <h1 className="modal-hero-h1 text-white">
                        {currentProject.title}
                      </h1>

                      {/* Category ✳ Year */}
                      <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-white/60">
                        <span className="font-bold text-white">{currentProject.category}</span>
                        <span className="text-[#38bdf8] text-lg">✳</span>
                        <span>{details.year}</span>
                      </div>

                      {/* Description */}
                      <p className="modal-hero-sub text-white/80">
                        {currentProject.description}
                      </p>

                      {/* Client info badge */}
                      <div className="flex items-center gap-3 pt-2">
                        <div className="w-8 h-8 rounded-full bg-[#38bdf8] flex items-center justify-center text-[#0b1330] font-bold text-xs shrink-0">
                          {details.client.charAt(0)}
                        </div>
                        <div className="text-xs sm:text-sm">
                          <p className="font-bold text-white">{details.client}</p>
                          <p className="text-white/50">{details.services.join(" • ")}</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* LIGHT CONTENT CONTAINER, matching site theme model */}
              <div className="mt-8 lg:mt-12 bg-[#f4f6fb] text-[#070035] px-5 sm:px-8 lg:px-10 py-12 sm:py-16">
                <div className="max-w-[1350px] mx-auto space-y-12">
                  
                  {/* OVERVIEW & CHALLENGE GRID */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <div className="space-y-4">
                      <h3 className="modal-section-h2 text-[#070035]">
                        Project Overview
                      </h3>
                      <p className="modal-body-p text-[#526a83]">
                        {details.overview}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="modal-section-h2 text-[#070035]">
                        The Challenge
                      </h3>
                      <p className="modal-body-p text-[#526a83]">
                        {details.challenge}
                      </p>
                    </div>
                  </div>

                  {/* ENGINEERING & SOLUTION */}
                  <div className="space-y-4 pt-6 border-t border-[#d8e5f0]">
                    <h3 className="modal-section-h2 text-[#070035]">
                      Engineering Strategy &amp; Solution
                    </h3>
                    <p className="modal-body-p text-[#526a83] max-w-4xl">
                      {details.solution}
                    </p>
                  </div>
{/* ═══════════════════════════════════════════════════════════════
    ✨ IMPACT & RESULTS, White, Minimal, Skilled
═══════════════════════════════════════════════════════════════ */}
{/* ═══════════════════════════════════════════════════════════════
    ✨ IMPACT & RESULTS, White, Minimal, Clean
═══════════════════════════════════════════════════════════════ */}
<div className="my-6 rounded-[28px] sm:rounded-[36px] bg-white border border-[#e5ecf3]">
  <div className="p-8 sm:p-10 lg:p-14">
    {/* ─── Header ─── */}
    <div className="mb-12 sm:mb-14">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0b1330] mb-4">
        Impact &amp; Results
      </p>
      <h3 className="modal-section-h2 text-[#070035]">
        Key Business Impact
      </h3>
    </div>

    {/* ─── Metrics, Divider layout ─── */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
      {details.impact.map((item, idx) => {
        const parts = item.match(/^([\$\+]?[\d\.\,\%\/\★]+[a-zA-Z\+]?)\s+(.*)$/);
        const stat = parts ? parts[1] : null;
        const label = parts ? parts[2] : item;

        return (
          <div
            key={idx}
            className={`flex flex-col md:px-8 first:md:pl-0 ${
              idx !== 0 ? "md:border-l md:border-[#070035]/10" : ""
            }`}
          >
            {stat ? (
              <>
                <div className="font-display text-5xl sm:text-6xl lg:text-[68px] font-bold text-[#070035] tracking-[-0.03em] leading-[0.95] mb-5">
                  {stat}
                </div>
                <p className="text-sm text-[#526a83] leading-relaxed max-w-[240px]">
                  {label}
                </p>
              </>
            ) : (
              <p className="text-sm font-medium text-[#070035] leading-relaxed">
                {item}
              </p>
            )}
          </div>
        );
      })}
    </div>
  </div>
</div>

                  {/* TECHNOLOGIES USED */}
                  <div className="space-y-4 pt-2">
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#526a83]">
                      Tech Stack &amp; Architecture
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {details.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-white text-[#070035] text-xs sm:text-sm font-bold px-4 py-2 rounded-full border border-[#d8e5f0] shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* NEXT PROJECT FOOTER BUTTON */}
                  {nextProject && (
                    <div className="pt-10 border-t border-[#d8e5f0] flex justify-end">
                      <button
                        onClick={handleNextProject}
                        className="group inline-flex items-center gap-3 bg-[#0b1330] text-[#38bdf8] hover:bg-[#070035] px-8 py-4 rounded-full font-extrabold uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-0.5"
                      >
                        <span>Next Project: {nextProject.title}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#38bdf8]" />
                      </button>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
