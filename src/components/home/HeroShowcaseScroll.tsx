"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Play, Pause } from "lucide-react";

interface HeroShowcaseScrollProps {
  onOpenBooking?: () => void;
}

export const HeroShowcaseScroll: React.FC<HeroShowcaseScrollProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setLoadVideo(true);
      return;
    }
    const timer = setTimeout(() => {
      setLoadVideo(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, [isMobile]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Respect OS prefers-reduced-motion setting
  const shouldReduceMotion = useReducedMotion();

  // Scroll trigger over container (desktop only)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.0, 1.0],
    ["#f4f6fb", "#f4f6fb"]
  );

  const scale = useTransform(
    scrollYProgress,
    [0.0, 0.45, 0.65, 1.0],
    [0.95, 1.0, 1.0, 0.95]
  );

  const width = useTransform(
    scrollYProgress,
    [0.0, 0.45, 0.65, 1.0],
    ["calc(100% - 80px)", "100vw", "100vw", "calc(100% - 80px)"]
  );

  const height = useTransform(
    scrollYProgress,
    [0.0, 0.45, 0.65, 1.0],
    ["80vh", "100vh", "100vh", "80vh"]
  );

  const borderRadius = useTransform(
    scrollYProgress,
    [0.0, 0.45, 0.65, 1.0],
    [24, 0, 0, 24]
  );

  const shadowOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.45, 0.65, 1.0],
    [0.35, 0, 0, 0.35]
  );

  // Dedicated Lightweight Mobile Card View (Refined Clean Layout)
  if (isMobile) {
    return (
      <div className="w-full px-6 pt-3 pb-8 select-none" id="cinematic-showcase">
        <div className="relative w-full aspect-[16/11] rounded-[28px] overflow-hidden bg-[#0b1330] shadow-[0_20px_45px_rgba(0,0,0,0.18)] flex flex-col justify-end p-5">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.82] contrast-[1.05]"
          >
            {loadVideo && <source src="/assets/hero-video.webm" type="video/webm" />}
          </video>

          {/* Theme Vignette Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

          {/* Clean Text Layout (No Badge Box) */}
          <div className="relative z-10 space-y-1 text-left pointer-events-none pr-12 pb-0.5">
            <h3 className="showcase-heading text-white">
              Shaping Next Gen Digital Applications &amp; AI
            </h3>
            <p className="hero-sub font-medium !text-white/90 max-w-2xl">
              Scroll down to explore our production engineering reel.
            </p>
          </div>

          {/* Sleek Play/Pause Toggle Pill Button */}
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="absolute bottom-5 right-5 z-20 w-9 h-9 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white backdrop-blur-md flex items-center justify-center shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-white translate-x-[0.5px]" />
            )}
          </button>
        </div>
      </div>
    );
  }

  // Cinematic Desktop Showcase
  return (
    <motion.div
      ref={containerRef}
      style={shouldReduceMotion ? { backgroundColor: "#f4f6fb" } : { backgroundColor }}
      className="relative w-full h-[300vh] select-none transition-colors duration-300"
      id="cinematic-showcase"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={
            shouldReduceMotion
              ? {
                  width: "calc(100% - 80px)",
                  height: "80vh",
                  borderRadius: "24px",
                }
              : {
                  scale,
                  width,
                  height,
                  borderRadius,
                  boxShadow: `0 25px 60px -10px rgba(0, 0, 0, ${shadowOpacity.get()})`,
                }
          }
          className="relative overflow-hidden bg-[#0b1330] shadow-2xl flex items-center justify-center transition-shadow duration-300"
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.7] contrast-[1.1]"
          >
            {loadVideo && <source src="/assets/hero-video.webm" type="video/webm" />}
            Your browser does not support HTML5 video.
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1330]/90 via-[#0b1330]/40 to-[#0b1330]/60 pointer-events-none" />

          <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl space-y-3 sm:space-y-4 pointer-events-none mx-auto">
            <h2 className="showcase-heading text-white text-center max-w-4xl mx-auto">
              Shaping Next Gen Digital<br />Applications &amp; AI.
            </h2>
            <p className="hero-sub font-medium !text-white/90 max-w-2xl mx-auto text-center">
              Scroll down to explore our production engineering reel.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
