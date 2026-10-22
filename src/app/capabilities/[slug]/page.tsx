"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Code,
  Monitor,
  RefreshCw,
  Smartphone,
  Bot,
  BarChart,
  BarChart3,
  Award,
  Settings,
  Users,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  MessageSquare,
  Layout,
  Database,
  Cpu,
  BookOpen,
  Layers,
  Target,
  GitBranch,
  Server,
  Palette,
  Clock,
  ClipboardList,
  FileSearch,
  UserCheck,
  Search,
  Shield,
  CreditCard,
  Lock,
  ShoppingBag,
  DollarSign,
  Split,
  MapPin,
  ShieldAlert,
  FileCheck,
  Activity,
  Share2,
  Cloud,
  FileCode,
  GitPullRequest,
  Eye,
  HelpCircle,
  ShoppingCart,
  Globe,
  Inbox,
  FileText,
  Printer,
  CheckSquare,
  Languages,
  PhoneCall,
  Headphones,
  Link as LinkIcon,
  AlertCircle,
  Bell,
  Video,
  FileCheck2,
  Radio,
  Ticket,
  QrCode,
  FileSpreadsheet,
  Boxes,
  Briefcase,
  PieChart,
  Fingerprint,
  Camera,
  Package,
  Compass,
  Presentation,
  Wrench,
} from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import { AboutCTA } from "@/components/about/AboutCTA";
import { CAPABILITIES_DATA } from "@/lib/capabilitiesData";

const ICON_MAP: Record<string, React.ElementType> = {
  FileSearch,
  Database,
  Code,
  CheckCircle2,
  Award,
  Settings,
  UserCheck,
  Search,
  Lightbulb,
  Users,
  ShieldCheck,
  TrendingUp,
  Shield,
  CreditCard,
  Lock,
  BarChart3,
  ShoppingBag,
  DollarSign,
  Layers,
  Split,
  MapPin,
  ShieldAlert,
  FileCheck,
  Activity,
  Share2,
  Zap,
  RefreshCw,
  Cloud,
  GitBranch,
  FileCode,
  GitPullRequest,
  Smartphone,
  Target,
  Eye,
  Bot,
  MessageSquare,
  HelpCircle,
  ShoppingCart,
  Globe,
  Inbox,
  FileText,
  Printer,
  CheckSquare,
  Clock,
  Languages,
  Sparkles,
  Server,
  PhoneCall,
  Headphones,
  ClipboardList,
  Link: LinkIcon,
  AlertCircle,
  Bell,
  BookOpen,
  Video,
  FileCheck2,
  Radio,
  Ticket,
  QrCode,
  FileSpreadsheet,
  Boxes,
  Briefcase,
  PieChart,
  Fingerprint,
  Camera,
  Package,
  Monitor,
  Compass,
  Layout,
  Palette,
  Presentation,
  Wrench,
  Cpu,
  BarChart,
};

export default function CapabilityDetailPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "website-development";
  const [contactOpen, setContactOpen] = useState(false);
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
    offset: ["start start", "end start"],
  });

  // Dynamic outer margin: stays 0px until scrolling past half of Section 6 -> expands smoothly to 80px (12px mobile) at bottom
  const outerSideMargin = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    isMobile ? [0, 0, 12] : [0, 0, 80]
  );

  const openContact = () => setContactOpen(true);

  // Fallback to website-development if slug not found
  const data = CAPABILITIES_DATA[slug] || CAPABILITIES_DATA["website-development"];

  return (
    <main className="min-h-screen bg-white text-[#070035] selection:bg-[#0b1330] selection:text-white overflow-x-hidden font-sans">

      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ── STICKY CONTAINER WITH DYNAMIC PADDING EXPANSION ── */}
      <div className="relative w-full select-none bg-white">
        <div ref={spacerRef} className="relative min-h-[140vh] sm:min-h-[150vh]">
          
          <motion.div
            style={{ paddingLeft: outerSideMargin, paddingRight: outerSideMargin }}
            className="sticky top-0 z-10 w-full bg-white pt-0"
          >
            {/* Combined Capabilities Content Container with rounded bottom */}
            <div className="w-full bg-[#f4f6fb] text-[#0b1330] rounded-t-none rounded-b-[40px] sm:rounded-b-[64px] shadow-sm border-none overflow-hidden pb-16 sm:pb-24 relative">
              
              {/* ── SECTION 1: HERO SECTION ── */}
              <section className="pt-28 lg:pt-36 pb-6 sm:pb-12 px-6 sm:px-8 lg:px-[40px] relative overflow-hidden text-left">
                {/* Soft Navy-to-Blue Radial Ambient Glow */}
                <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

                <div className="relative z-10">
                  
                  {/* Badge & Headline */}
                  <div className="mb-6">
                    <div className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#0b1330] text-[#38bdf8] text-xs sm:text-sm font-extrabold uppercase tracking-[0.22em] shadow-sm mb-6 border border-[#38bdf8]/30">
                      {data.badge}
                    </div>
                    
                    <h1 className="hero-h1 text-left block">
                      {data.title} <br />
                      <span>{data.highlightText}</span>
                    </h1>

                    {data.subtitle && (
                      <p className="mt-6 text-lg sm:text-xl md:text-2xl text-[#0b1330] font-medium leading-relaxed max-w-3xl">
                        {data.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Device Mockups Banner Showcase, Single image on mobile, 3-image grid on desktop */}
                  <div className="relative w-full rounded-3xl sm:rounded-[36px] bg-[#dce7f0]/70 p-4 sm:p-10 lg:p-14 overflow-hidden border border-[#d8e5f0] shadow-lg group">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                      
                      {/* Left Mockup (Desktop only) */}
                      <div className="hidden md:block relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-white/40 group-hover:-translate-y-1 transition-transform duration-500">
                        <img src={data.heroImages.left} alt="Left preview" className="w-full h-full object-cover" />
                      </div>

                      {/* Center Main Hero Mockup (Single image shown on mobile) */}
                      <div className="relative aspect-[16/10] sm:aspect-[4/5] md:aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/60 md:scale-105 group-hover:scale-[1.07] transition-transform duration-500 z-10">
                        <img src={data.heroImages.center} alt="Center preview" className="w-full h-full object-cover" />
                      </div>

                      {/* Right Mockup (Desktop only) */}
                      <div className="hidden md:block relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-white/40 group-hover:-translate-y-1 transition-transform duration-500">
                        <img src={data.heroImages.right} alt="Right preview" className="w-full h-full object-cover" />
                      </div>

                    </div>
                  </div>

                </div>
              </section>

              {/* ── SECTION 2: HUMAAN-STYLE OPEN MINIMAL HIGHLIGHTS GRID ── */}
              <section className="w-full pt-6 sm:pt-14 pb-6 sm:pb-32 px-6 sm:px-10 lg:px-[60px]">
                <div>
                  <div className="max-w-5xl mb-3 sm:mb-16 space-y-3 sm:space-y-6">
                    <h2 className="section-h2 whitespace-pre-line">
                      {data.section2Headline}
                    </h2>
                    <p className="text-lg sm:text-xl font-medium text-[#526a83] leading-relaxed max-w-2xl">
                      {data.section2Subtitle}
                    </p>
                  </div>

                  {/* 4-Column Open Minimalist Grid with Micro-Interactions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10">
                    {data.highlights.map((item, idx) => {
                      const IconComponent: React.ElementType = ICON_MAP[item.icon] || Zap;

                      return (
                        <div
                          key={idx}
                          className="group/item relative py-2 px-4 sm:p-6 -m-2 rounded-2xl transition-all duration-300 hover:bg-white/70 hover:shadow-sm border border-transparent hover:border-white/80 cursor-pointer space-y-3 sm:space-y-4"
                        >
                          <div className="w-10 h-10 flex items-center justify-start text-[#0b1330] group-hover/item:text-[#3b82f6] group-hover/item:-translate-y-1 transition-all duration-300">
                            <IconComponent className="w-7 h-7 stroke-[1.75]" />
                          </div>
                          
                          <div className="space-y-2">
                            <h3 className="text-xl sm:text-2xl font-bold text-[#0b1330] group-hover/item:text-[#3b82f6] transition-colors duration-300 tracking-tight">
                              {item.title}
                            </h3>
                            <div className="w-4 h-0.5 bg-[#3b82f6] opacity-0 group-hover/item:opacity-100 group-hover/item:w-10 transition-all duration-300 rounded-full" />
                          </div>

                          <p className="text-sm sm:text-base text-[#526a83] font-medium leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* ── SECTION 3: FEATURE ROWS WITH ALTERNATING POSITIONS ── */}
              <section className="w-full py-6 sm:py-24 px-6 sm:px-10 lg:px-[60px] border-t border-black/5">
                <div className="space-y-8 sm:space-y-36">
                  {data.featureRows.map((row, idx) => (
                    <div
                      key={idx}
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-center ${
                        row.imagePosition === "right" ? "" : "lg:[&>*:first-child]:order-2"
                      }`}
                    >
                      <div className="space-y-6 text-left">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1330] tracking-tight leading-snug">
                          {row.title}
                        </h3>
                        <p className="text-base sm:text-lg text-[#526a83] font-medium leading-relaxed">
                          {row.description}
                        </p>
                      </div>

                      <div className="relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-white/60 group hover:shadow-2xl transition-all duration-500">
                        <img
                          src={row.image}
                          alt={row.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── SECTION 4: TECH SHOWCASE CARD ── */}
              <section className="w-full py-6 sm:py-16 px-6 sm:px-10 lg:px-[60px]">
                <div>
                  
                  {/* Large Dark Tech Showcase Card */}
                  <div className="relative p-8 sm:p-14 lg:p-18 bg-[#0b1330] text-white rounded-[32px] sm:rounded-[44px] shadow-2xl overflow-hidden border border-[#38bdf8]/30 group hover:border-[#38bdf8]/60 hover:shadow-[0_30px_90px_rgba(11,19,48,0.35)] transition-all duration-500">
                    {/* Ambient Background Glows */}
                    <div className="absolute -top-28 -right-28 w-80 h-80 bg-blue-500/25 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-500/35 transition-all duration-700" />
                    <div className="absolute -bottom-28 -left-28 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
                      
                      <div className="space-y-6 text-left">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                          {data.techShowcase.title}
                        </h3>
                        
                        <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-xl">
                          {data.techShowcase.description}
                        </p>

                        <div className="pt-2">
                          <button
                            onClick={openContact}
                            className="inline-flex items-center gap-2 bg-[#38bdf8] text-[#0b1330] hover:bg-white font-extrabold text-sm px-7 py-3.5 rounded-full transition-all duration-300 cursor-pointer shadow-md hover:scale-105"
                          >
                            <span>Explore Architecture</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Right Image Mockup */}
                      <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20 group-hover:scale-[1.03] transition-transform duration-700 ease-out">
                        <img src={data.techShowcase.image} alt={data.techShowcase.title} className="w-full h-full object-cover" />
                      </div>

                    </div>
                  </div>

                </div>
              </section>

            </div>
          </motion.div>

        </div>
      </div>

      {/* ── SECTION 7: CLOSING ANIMATED CTA SECTION ── */}
      <AboutCTA onOpenBooking={openContact} />

      {/* ── SECTION 8: FOOTER ── */}
      <Footer onOpenBooking={openContact} bgColor="bg-white" />
    </main>
  );
}
