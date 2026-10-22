"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Volume2, VolumeX, Sparkles, ArrowRight, ArrowUpRight } from "lucide-react";

interface ArkanetProjectCard {
  id: string;
  title: string;
  badgeLabel: string;
  headline: string;
  description: string;
  features: { label: string; detail: string }[];
  ctaText: string;
  videoSrc: string;
  poster: string;
  bgGradient: string;
}

const ARKANET_PROJECTS: ArkanetProjectCard[] = [
  {
    id: "pique",
    title: "PIQUE",
    badgeLabel: "PIQUE",
    headline: "Building options",
    description: "Choose one of our three building options to bring your designer modular home to life as easily and stress-free as possible.",
    features: [
      { label: "Supply Only", detail: "We'll design and manufacture your custom home and you look after the rest." },
      { label: "Owner-builder", detail: "Whilst we manufacture your modular home, engage with your local builders." },
      { label: "PIQUE Build & Install", detail: "Covers everything from initial design right through to installation." },
    ],
    ctaText: "Our Process",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-code-animation-on-a-computer-screen-41544-large.mp4",
    poster: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    bgGradient: "from-[#1b2545] to-[#0b1330]",
  },
  {
    id: "sussex-taps",
    title: "SUSSEX TAPS",
    badgeLabel: "SUSSEX TAPS",
    headline: "Crafted brassware",
    description: "An immersive e-commerce experience showcasing hand-crafted Australian tapware built for architects and luxury home builders.",
    features: [
      { label: "Bespoke Finishes", detail: "Custom color configurator rendering 30+ artisan brass finishes in real-time." },
      { label: "Architect Portal", detail: "Direct CAD download hub and specification tools for commercial developers." },
      { label: "Sustainable Foundry", detail: "100% recycled brass manufacturing process tracked from foundry to home." },
    ],
    ctaText: "Explore Collection",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-circuit-board-loop-animation-41545-large.mp4",
    poster: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    bgGradient: "from-[#241a3a] to-[#0b1330]",
  },
  {
    id: "chaleit",
    title: "CHALEIT",
    badgeLabel: "CHALEIT",
    headline: "Alpine sanctuary",
    description: "A mobile-first reservation system and guest experience portal for luxury private alpine chalets in the Australian Alps.",
    features: [
      { label: "Instant Concierge", detail: "In-app ski pass booking, private chef scheduling, and equipment rental." },
      { label: "Interactive Chalet Map", detail: "High-resolution 3D walkthroughs of luxury mountain suites and amenities." },
      { label: "Keyless Entry", detail: "Encrypted mobile bluetooth key integration for seamless arrival." },
    ],
    ctaText: "Discover Retreat",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-41546-large.mp4",
    poster: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
    bgGradient: "from-[#1e3448] to-[#0b1330]",
  },
  {
    id: "exposing-surveillance",
    title: "EXPOSING SURVEILLANCE",
    badgeLabel: "EXPOSING SURVEILLANCE",
    headline: "Digital transparency",
    description: "An award-winning interactive data intelligence visualization platform investigating global surveillance technologies.",
    features: [
      { label: "Global Network Graph", detail: "Interactive node visualization tracking corporate vendor data pipelines." },
      { label: "Public Database", detail: "Open-source research archive accessible to journalists and policymakers." },
      { label: "Real-Time Tracking", detail: "Live updates documenting facial recognition deployment in public space." },
    ],
    ctaText: "Explore Data Map",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-with-green-screen-41547-large.mp4",
    poster: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    bgGradient: "from-[#2b2545] to-[#0b1330]",
  },
];

export const HorizontalVideoGallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => track.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const viewportCenter = window.innerWidth / 2;
            const maxDist = window.innerWidth * 0.45;
            let closestIdx = 0;
            let minDistance = Infinity;

            cardRefs.current.forEach((card, idx) => {
              if (!card) return;
              const rect = card.getBoundingClientRect();
              const cardCenter = rect.left + rect.width / 2;
              const distFromCenter = Math.abs(viewportCenter - cardCenter);

              if (distFromCenter < minDistance) {
                minDistance = distFromCenter;
                closestIdx = idx;
              }

              const normalizedDist = Math.min(1, distFromCenter / maxDist);
              const padding = gsap.utils.mapRange(0, 1, 0, 32, normalizedDist);
              const borderRadius = gsap.utils.mapRange(0, 1, 0, 24, normalizedDist);
              const scale = gsap.utils.mapRange(0, 1, 1.0, 0.95, normalizedDist);

              const innerCard = card.querySelector(".card-inner-box");
              if (innerCard) {
                gsap.set(innerCard, {
                  padding: `${padding}px`,
                  borderRadius: `${borderRadius}px`,
                  scale: scale,
                });
              }
            });

            setActiveCardIndex(closestIdx);
          },
        },
      });

      tl.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
      });
    }, section);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    videoRefs.current.forEach((v) => {
      if (v) observer.observe(v);
    });

    return () => {
      ctx.revert();
      observer.disconnect();
    };
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    videoRefs.current.forEach((v) => {
      if (v) v.muted = !isMuted;
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0b1330] text-white overflow-hidden select-none"
      id="horizontal-video-gallery"
    >
      {/* Top Header Overlay Bar */}
      <div className="absolute top-8 left-6 sm:left-10 right-6 sm:right-10 z-30 flex items-center justify-between pointer-events-auto">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-mono font-bold uppercase tracking-widest text-[#38bdf8]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>GREAT WORK FOR GREAT PEOPLE • [{activeCardIndex + 1} / {ARKANET_PROJECTS.length}]</span>
        </div>

        <button
          onClick={toggleMute}
          className="p-3 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 backdrop-blur-md transition-all text-white"
          aria-label={isMuted ? "Unmute videos" : "Mute videos"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#38bdf8]" />}
        </button>
      </div>

      {/* Pinned Viewport Stage */}
      <div className="h-screen w-full flex items-center justify-start overflow-hidden relative">
        
        {/* Horizontal Moving Track */}
        <div
          ref={trackRef}
          className="flex items-center gap-6 sm:gap-10 px-6 sm:px-12 lg:px-[40px] will-change-transform"
        >
          {ARKANET_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              ref={(el) => { cardRefs.current[idx] = el; }}
              className="relative shrink-0 w-[92vw] sm:w-[82vw] lg:w-[72vw] xl:w-[66vw] h-[82vh] sm:h-[86vh] flex items-center justify-center"
            >
              {/* Card Container with Background Image/Video Canvas */}
              <div
                className={`card-inner-box w-full h-full relative overflow-hidden bg-gradient-to-br ${project.bgGradient} border border-white/15 shadow-2xl transition-all duration-75 flex items-center justify-center`}
                style={{ padding: "32px", borderRadius: "24px", transform: "scale(0.95)" }}
              >
                {/* Background Environment Image / Video Stream */}
                <video
                  ref={(el) => { videoRefs.current[idx] = el; }}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="metadata"
                  poster={project.poster}
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                >
                  <source src={project.videoSrc} type="video/mp4" />
                </video>

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-black/30 pointer-events-none" />

                {/* Signature White Floating Mockup Card (Matches Image 1 screenshot) */}
                <div className="relative z-20 w-full max-w-4xl bg-[#f4f2eb] text-[#1a1a1a] rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 flex flex-col justify-between border border-white/40">
                  
                  {/* Top Bar of Floating Card */}
                  <div className="flex items-center justify-between pb-6 border-b border-black/10 text-xs font-mono font-bold tracking-widest text-[#1a1a1a]">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-sm bg-[#1a1a1a]" />
                      <span>MENU</span>
                    </div>
                    <span className="font-display font-black text-xl sm:text-2xl tracking-tighter uppercase text-[#1a1a1a]">
                      {project.title}
                    </span>
                    <div className="flex items-center gap-1">
                      <span>◀ CONTACT</span>
                    </div>
                  </div>

                  {/* Main Interior Split Content */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 py-6 items-center">
                    
                    {/* Left Column: Headline & Specifications */}
                    <div className="md:col-span-6 space-y-4 text-left">
                      <h3 className="font-serif font-normal text-3xl sm:text-4xl text-[#1a1a1a] tracking-tight leading-tight">
                        {project.headline}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#1a1a1a]/75 leading-relaxed font-sans">
                        {project.description}
                      </p>

                      {/* Feature Bullets */}
                      <div className="space-y-3 pt-2">
                        {project.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs text-left">
                            <span className="w-2.5 h-2.5 rounded-xs bg-[#3b82f6] shrink-0 mt-1" />
                            <div>
                              <span className="font-bold text-[#1a1a1a] block">{feat.label}</span>
                              <span className="text-[#1a1a1a]/70 font-sans">{feat.detail}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Action Pill Button */}
                      <div className="pt-3">
                        <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#e8e4d8] hover:bg-[#1a1a1a] text-[#1a1a1a] hover:text-white border border-black/10 text-xs font-sans font-semibold transition-colors duration-300 shadow-sm">
                          <span>{project.ctaText}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Right Column: High-Def Interior UI Media Box */}
                    <div className="md:col-span-6">
                      <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-lg border border-black/10 group">
                        <img
                          src={project.poster}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md text-white text-[10px] font-mono px-3 py-1.5 rounded-full flex items-center gap-1.5">
                          <span>HIGH-RES SHOWCASE</span>
                          <ArrowUpRight className="w-3 h-3 text-[#38bdf8]" />
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Signature Cyan Badge Pill in Bottom-Left Corner */}
                <div className="absolute bottom-8 left-8 z-30 pointer-events-auto">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#38bdf8] text-[#0b1330] font-mono font-black text-xs uppercase tracking-wider shadow-lg">
                    <span>{project.badgeLabel}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
