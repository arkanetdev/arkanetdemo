"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  ChevronDown,
  ArrowUpRight,
  Layout,
  Smartphone,
  ShieldCheck,
  Palette,
  TrendingUp,
  Cpu,
  Brain,
  Bot,
  Database,
  Layers,
  ShoppingBag,
  Cloud,
  Globe,
  PhoneCall,
  Boxes,
  MessageCircle,
} from "lucide-react";

interface HeaderProps {
  onOpenBooking?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isHomeActive = pathname === "/";
  const isCapabilitiesActive = pathname.startsWith("/capabilities") || pathname.startsWith("/services");
  const isAboutActive = pathname === "/about";
  const isWorkActive = pathname === "/work" || pathname.startsWith("/work");
  const isBlogActive = pathname === "/blog" || pathname.startsWith("/blog");
  const isContactActive = pathname === "/contact";

  const handleNavClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setActiveMenu(null);
  };

  const handleMenuEnter = (menuName: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuName);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const toggleCapabilities = (e?: React.SyntheticEvent) => {
    if (e) e.stopPropagation();
    setActiveMenu((prev) => (prev === "services" ? null : "services"));
  };

  const engineeringItems = [
    { label: "Website Development", href: "/capabilities/website-development", icon: Layout, color: "text-cyan-500", glow: "rgba(6,182,212,0.35)" },
    { label: "Mobile App Development", href: "/capabilities/mobile-app-development", icon: Smartphone, color: "text-sky-500", glow: "rgba(14,165,233,0.35)" },
    { label: "SaaS Product Dev", href: "/capabilities/saas-product-development", icon: Layers, color: "text-blue-500", glow: "rgba(59,130,246,0.35)" },
    { label: "E-Commerce & Shopify", href: "/capabilities/ecommerce-shopify-development", icon: ShoppingBag, color: "text-emerald-500", glow: "rgba(16,185,129,0.35)" },
    { label: "Portal Development", href: "/capabilities/portal-development", icon: ShieldCheck, color: "text-teal-500", glow: "rgba(20,184,166,0.35)" },
    { label: "Cloud & DevOps", href: "/capabilities/cloud-devops-hosting", icon: Cloud, color: "text-cyan-600", glow: "rgba(8,145,178,0.35)" },
  ];

  const aiItems = [
    { label: "Applied AI & ML", href: "/capabilities/applied-ai-ml", icon: Brain, color: "text-violet-500", glow: "rgba(139,92,246,0.35)" },
    { label: "Conversational AI & Agents", href: "/capabilities/ai-chatbot-automation", icon: Bot, color: "text-fuchsia-500", glow: "rgba(217,70,239,0.35)" },
    { label: "Multilingual AI Solutions", href: "/capabilities/multilingual-ai-solutions", icon: Globe, color: "text-purple-500", glow: "rgba(168,85,247,0.35)" },
    { label: "Data Engineering", href: "/capabilities/data-engineering", icon: Database, color: "text-indigo-500", glow: "rgba(99,102,241,0.35)" },
    { label: "Voice AI & IVR Systems", href: "/capabilities/voice-ai-ivr-systems", icon: PhoneCall, color: "text-indigo-600", glow: "rgba(79,70,229,0.35)" },
  ];

  const designItems = [
    { label: "UI/UX & Graphic Design", href: "/capabilities/graphic-design", icon: Palette, color: "text-pink-500", glow: "rgba(236,72,153,0.35)" },
    { label: "Digital Marketing", href: "/capabilities/digital-marketing", icon: TrendingUp, color: "text-rose-500", glow: "rgba(244,63,94,0.35)" },
    { label: "Business Process Automation", href: "/capabilities/business-automation", icon: Cpu, color: "text-amber-500", glow: "rgba(245,158,11,0.35)" },
    { label: "WhatsApp Commerce", href: "/capabilities/whatsapp-social-commerce-automation", icon: MessageCircle, color: "text-emerald-500", glow: "rgba(16,185,129,0.35)" },
    { label: "ERP & Business Systems", href: "/capabilities/erp-business-management", icon: Boxes, color: "text-orange-500", glow: "rgba(249,115,22,0.35)" },
  ];

  const renderColumn = (
    title: string,
    items: { label: string; href: string; icon: React.ElementType; color: string; glow: string }[]
  ) => (
    <div className="space-y-0.5">
      <div className="text-[11px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-slate-400 mb-2 sm:mb-3.5 px-2.5">
        {title}
      </div>
      {items.map(({ label, href, icon: Icon, color, glow }) => (
        <Link
          key={label}
          href={href}
          onClick={handleNavClick}
          className="group relative flex items-center gap-3 sm:gap-3 px-2 sm:px-2.5 py-2 sm:py-2 rounded-xl overflow-hidden transition-colors duration-300 hover:bg-slate-50"
        >
          <span className="relative flex items-center justify-center w-5 h-5 sm:w-5 sm:h-5 shrink-0">
            <span
              aria-hidden
              className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-[2] transition-all duration-500"
              style={{ background: glow }}
            />
            <Icon
              className={`relative w-4.5 h-4.5 sm:w-4 sm:h-4 ${color} transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-125 group-hover:-rotate-6`}
              strokeWidth={2}
            />
          </span>

          <span className="relative flex-1 text-[13.5px] sm:text-sm font-semibold text-slate-800 group-hover:text-slate-950 transition-all duration-300 group-hover:translate-x-0.5">
            {label}
          </span>

          <ArrowUpRight
            className={`w-3.5 h-3.5 sm:w-3.5 sm:h-3.5 ${color} opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}
            strokeWidth={2.5}
          />
        </Link>
      ))}
    </div>
  );

  return (
    <>
      <div className="absolute top-[4.8rem] left-6 sm:top-8 sm:left-10 z-50 pointer-events-auto block">
        <Link href="/" onClick={handleNavClick} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-xl bg-[#0b1330] text-[#38bdf8] font-bold flex items-center justify-center text-sm shadow-sm group-hover:bg-[#070035] group-hover:text-[#38bdf8] transition-all">
            A
          </div>
          <span className="font-display font-extrabold text-xl lg:text-2xl text-[#0b1330] tracking-tight group-hover:text-[#38bdf8] transition-colors">
            Arkanet
          </span>
        </Link>
      </div>

      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-slate-900/10 backdrop-blur-[1px] cursor-pointer"
            onClick={() => setActiveMenu(null)}
            onTouchEnd={() => setActiveMenu(null)}
          />
        )}
      </AnimatePresence>

      <header className="fixed top-2.5 sm:top-4 left-0 right-0 z-50 pointer-events-none flex justify-center">
        <LayoutGroup id="header-nav">
          <div
            onMouseLeave={() => setHoveredTab(null)}
            className="relative pointer-events-auto bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.08)] rounded-full px-2 min-[360px]:px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 flex items-center justify-between sm:justify-center sm:gap-2 w-[calc(100vw-36px)] max-w-[440px] sm:max-w-fit sm:w-auto mx-auto"
          >

            {/* Home Link */}
            <Link
              href="/"
              onClick={handleNavClick}
              onMouseEnter={() => setHoveredTab("home")}
              className="relative px-2 min-[360px]:px-2.5 sm:px-4 py-1.5 sm:py-1.5 rounded-full text-[10.5px] min-[360px]:text-[11px] min-[390px]:text-xs sm:text-sm font-bold shrink-0 transition-colors flex items-center justify-center"
            >
              {isHomeActive && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-[#0b1330] rounded-full shadow-xs"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {hoveredTab === "home" && !isHomeActive && (
                <motion.div
                  layoutId="hover-nav-pill"
                  className="absolute inset-0 bg-slate-100/80 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 transition-colors duration-200 ${
                  isHomeActive ? "text-[#38bdf8]" : "text-slate-900 hover:text-slate-950"
                }`}
              >
                Home
              </span>
            </Link>

            {/* Capabilities Dropdown Trigger */}
            <div
              className="shrink-0 relative"
              onMouseEnter={() => {
                setHoveredTab("capabilities");
                handleMenuEnter("services");
              }}
              onMouseLeave={handleMenuLeave}
            >
              {hoveredTab === "capabilities" && !isCapabilitiesActive && activeMenu !== "services" && (
                <motion.div
                  layoutId="hover-nav-pill"
                  className="absolute inset-0 bg-slate-100/80 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <button
                type="button"
                onClick={toggleCapabilities}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  toggleCapabilities(e);
                }}
                className={`relative z-10 flex items-center gap-0.5 min-[360px]:gap-1 rounded-full font-bold text-[10.5px] min-[360px]:text-[11px] min-[390px]:text-xs sm:text-sm px-1.5 min-[360px]:px-2 sm:px-3 py-1.5 sm:py-1.5 transition-all duration-200 cursor-pointer select-none ${
                  activeMenu === "services"
                    ? "bg-slate-100/90 text-slate-950 font-bold"
                    : "text-slate-900 hover:text-slate-950"
                }`}
              >
                Capabilities
                <ChevronDown
                  className={`w-2.5 h-2.5 min-[380px]:w-3 min-[380px]:h-3 sm:w-3.5 sm:h-3.5 text-slate-600 transition-transform duration-200 ${
                    activeMenu === "services" ? "rotate-180 text-slate-900" : ""
                  }`}
                />
              </button>
            </div>

            {/* Mega-Menu Dropdown Panel (anchored directly to outer nav pill container) */}
            <AnimatePresence>
              {activeMenu === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, x: "-50%", scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                  exit={{ opacity: 0, y: 6, x: "-50%", scale: 0.97 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => handleMenuEnter("services")}
                  onMouseLeave={handleMenuLeave}
                  className="absolute top-full pt-2 sm:pt-3 z-50 left-1/2 w-[calc(100vw-24px)] max-w-[calc(100vw-2rem)] md:w-[760px] lg:w-[840px] pointer-events-auto"
                >
                  <div className="w-full bg-white rounded-[22px] md:rounded-[28px] border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-4 sm:p-6 lg:p-7 text-left max-h-[calc(100vh-4.8rem)] overflow-y-auto overscroll-contain no-scrollbar md:max-h-none md:overflow-visible">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-7 pb-3 md:pb-0">
                      {renderColumn("Engineering", engineeringItems)}
                      {renderColumn("Artificial Intelligence", aiItems)}
                      {renderColumn("Design & Growth", designItems)}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* About Link */}
            <Link
              href="/about"
              onClick={handleNavClick}
              onMouseEnter={() => setHoveredTab("about")}
              className="relative rounded-full font-bold text-[10.5px] min-[360px]:text-[11px] min-[390px]:text-xs sm:text-sm px-2 min-[360px]:px-2.5 sm:px-3.5 py-1.5 sm:py-1.5 transition-colors shrink-0 flex items-center justify-center"
            >
              {isAboutActive && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-[#0b1330] rounded-full shadow-xs"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {hoveredTab === "about" && !isAboutActive && (
                <motion.div
                  layoutId="hover-nav-pill"
                  className="absolute inset-0 bg-slate-100/80 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 transition-colors duration-200 ${
                  isAboutActive ? "text-[#38bdf8]" : "text-slate-900 hover:text-slate-950"
                }`}
              >
                About
              </span>
            </Link>

            {/* Work Link */}
            <Link
              href="/work"
              onClick={handleNavClick}
              onMouseEnter={() => setHoveredTab("work")}
              className="relative rounded-full font-bold text-[10.5px] min-[360px]:text-[11px] min-[390px]:text-xs sm:text-sm px-2 min-[360px]:px-2.5 sm:px-3.5 py-1.5 sm:py-1.5 transition-colors shrink-0 flex items-center justify-center"
            >
              {isWorkActive && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-[#0b1330] rounded-full shadow-xs"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {hoveredTab === "work" && !isWorkActive && (
                <motion.div
                  layoutId="hover-nav-pill"
                  className="absolute inset-0 bg-slate-100/80 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 transition-colors duration-200 ${
                  isWorkActive ? "text-[#38bdf8]" : "text-slate-900 hover:text-slate-950"
                }`}
              >
                Work
              </span>
            </Link>

            {/* Contact Link */}
            <Link
              href="/contact"
              onClick={handleNavClick}
              onMouseEnter={() => setHoveredTab("contact")}
              className="relative rounded-full font-bold text-[10.5px] min-[360px]:text-[11px] min-[390px]:text-xs sm:text-sm px-2 min-[360px]:px-2.5 sm:px-4 py-1.5 sm:py-1.5 transition-colors shrink-0 flex items-center justify-center"
            >
              {isContactActive && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-[#0b1330] rounded-full shadow-xs"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {hoveredTab === "contact" && !isContactActive && (
                <motion.div
                  layoutId="hover-nav-pill"
                  className="absolute inset-0 bg-slate-100/80 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 transition-colors duration-200 ${
                  isContactActive ? "text-[#38bdf8]" : "text-slate-900 hover:text-slate-950"
                }`}
              >
                Contact
              </span>
            </Link>
          </div>
        </LayoutGroup>
      </header>
    </>
  );
};