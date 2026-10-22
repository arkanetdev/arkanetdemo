"use client";

import React from "react";
import Link from "next/link";
import { Globe, Twitter, Instagram, Linkedin, Github } from "lucide-react";

interface FooterProps {
  onOpenBooking?: () => void;
  bgColor?: string;
  hideTopColumns?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, bgColor, hideTopColumns }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`relative text-[#0b1330] pt-6 sm:pt-14 pb-10 overflow-hidden select-none ${bgColor && bgColor !== "bg-white" ? bgColor : "bg-[#f4f6fb]"}`}>
      <div className="w-full px-6 sm:px-8 lg:px-[40px] relative z-10">
        
        {/* Top Info Section & Signature Ribbon Graphic Container */}
        {!hideTopColumns && (
          <div className="relative flex flex-col md:flex-row items-start justify-between gap-6 sm:gap-12 pb-6 sm:pb-16">
            
            {/* Top Info Columns */}
            <div className="flex flex-col sm:flex-row items-start gap-12 lg:gap-24 z-10">
              
              {/* Column 1: Global & Brief */}
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#0b1330]">
                  <Globe className="w-4 h-4 text-slate-500" />
                  <span>We work globally</span>
                </div>
                <div>
                  <button
                    onClick={onOpenBooking}
                    className="font-display font-semibold text-[20px] sm:text-[21px] text-[#0b1330] hover:text-[#3b82f6] underline underline-offset-4 transition-colors block text-left cursor-pointer"
                  >
                    Submit a brief &rarr;
                  </button>
                </div>
                <div className="text-base font-semibold text-[#0b1330]">
                  <a href="mailto:info@arkanet.in" className="hover:underline">
                    info@arkanet.in
                  </a>
                </div>
              </div>

              {/* Column 2: India Office */}
              <div className="space-y-2 text-left">
                <h4 className="font-display font-semibold text-[20px] sm:text-[21px] text-[#0b1330]">India</h4>
                <p className="text-sm text-slate-700 leading-relaxed max-w-xs font-medium">
                  Room No. 227K, Benny Complex,<br />
                  Kelakam, Kannur Dt, Kerala
                </p>
                <div className="text-sm pt-1 flex flex-col gap-1">
                  <a href="mailto:info@arkanet.in" className="font-semibold text-[#0b1330] hover:underline">
                    info@arkanet.in
                  </a>
                  <a href="tel:+919074104372" className="text-slate-700 font-medium hover:underline">
                    +91 90741 04372
                  </a>
                </div>
              </div>

            </div>


          </div>
        )}

        {/* Hairline Divider */}
        <div className="w-full border-t border-slate-200 my-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 text-sm font-medium text-[#0b1330] pt-2">
          
          {/* Left: Brand, Copyright, Blog & Privacy */}
          <div className="flex flex-wrap items-baseline justify-center sm:justify-start gap-4 sm:gap-6 text-sm text-[#0b1330]">
            <Link href="/" className="font-display font-black text-base text-[#0b1330] tracking-tight hover:text-[#38bdf8] transition-colors leading-none">
              arkanet
            </Link>
            <span className="text-slate-600 font-medium leading-none">© {currentYear} Privacy</span>
            <Link href="/blog" className="font-display font-semibold text-[#0b1330] hover:text-[#3b82f6] underline underline-offset-4 transition-colors leading-none">
              Blog
            </Link>
            <Link href="#" className="font-display font-semibold text-[#0b1330] hover:text-[#3b82f6] underline underline-offset-4 transition-colors leading-none">
              Arkanet &amp; AI
            </Link>
          </div>

          {/* Right: Clean Social Links with Cyan Icons */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm font-semibold text-[#0b1330]">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-display font-semibold text-[#0b1330] hover:text-[#3b82f6] hover:underline transition-colors group"
            >
              <Twitter className="w-3.5 h-3.5 text-[#38bdf8] group-hover:scale-110 transition-transform shrink-0" />
              <span>Twitter X</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-display font-semibold text-[#0b1330] hover:text-[#3b82f6] hover:underline transition-colors group"
            >
              <Instagram className="w-3.5 h-3.5 text-[#38bdf8] group-hover:scale-110 transition-transform shrink-0" />
              <span>Instagram</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-display font-semibold text-[#0b1330] hover:text-[#3b82f6] hover:underline transition-colors group"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#38bdf8] group-hover:scale-110 transition-transform shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-display font-semibold text-[#0b1330] hover:text-[#3b82f6] hover:underline transition-colors group"
            >
              <Github className="w-3.5 h-3.5 text-[#38bdf8] group-hover:scale-110 transition-transform shrink-0" />
              <span>GitHub</span>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};
