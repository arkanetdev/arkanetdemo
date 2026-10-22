"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";

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
      className="group absolute top-6 right-6 sm:top-8 sm:right-8 z-30 w-11 h-11 rounded-full bg-slate-100 hover:bg-[#0b1330] flex items-center justify-center cursor-pointer transition-colors duration-300 overflow-hidden shrink-0 shadow-md"
      aria-label="Close booking modal"
    >
      <motion.div
        animate={{ rotate: isHovered ? 90 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="text-[#0b1330] group-hover:text-white transition-colors duration-300"
      >
        <X className="w-[18px] h-[18px]" strokeWidth={2.5} />
      </motion.div>
    </motion.button>
  );
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", brief: "" });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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

          {/* Slide-Up Panel Shell */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`fixed bottom-0 z-50 bg-white text-[#0b1330] shadow-[0_-20px_80px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isScrolled
                ? "inset-x-0 top-0 rounded-t-none"
                : "inset-x-0 sm:inset-x-8 xl:inset-x-[40px] top-[80px] sm:top-[140px] lg:top-[180px] rounded-t-[28px] sm:rounded-t-[48px]"
            }`}
          >
            {/* Close (X) Button */}
            <MagneticCloseButton onClick={onClose} />

            {/* Scrollable Content Body */}
            <div
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto pt-10 sm:pt-14 pb-16 px-6 sm:px-12 lg:px-16 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              <div className="max-w-2xl mx-auto text-left space-y-6">
                {!submitted ? (
                  <div>
                    <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-[#0b1330] mb-3 tracking-tight">
                      Book a Free Scope Call
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 mb-8 font-medium">
                      Select a time for a 15-minute technical discovery call with our engineering team.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-xs font-extrabold text-[#0b1330] uppercase tracking-wider mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Sarah Jenkins"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-5 py-3.5 border-2 border-slate-200 focus:border-[#38bdf8] rounded-2xl text-base outline-none bg-slate-50 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold text-[#0b1330] uppercase tracking-wider mb-2">
                          Work Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="sarah@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-5 py-3.5 border-2 border-slate-200 focus:border-[#38bdf8] rounded-2xl text-base outline-none bg-slate-50 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold text-[#0b1330] uppercase tracking-wider mb-2">
                          Project Summary
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Tell us briefly what you're looking to build..."
                          value={formData.brief}
                          onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                          className="w-full px-5 py-3.5 border-2 border-slate-200 focus:border-[#38bdf8] rounded-2xl text-base outline-none bg-slate-50 transition-colors"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#0b1330] hover:bg-[#070035] text-[#38bdf8] font-extrabold text-base sm:text-lg py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl cursor-pointer"
                      >
                        Submit Request
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="text-center py-12 space-y-4">
                    <CheckCircle2 className="w-16 h-16 text-[#38bdf8] mx-auto mb-2" />
                    <h4 className="font-display font-bold text-2xl sm:text-3xl text-[#0b1330]">
                      Request Received!
                    </h4>
                    <p className="text-base text-slate-600 max-w-md mx-auto">
                      We will review your brief and follow up via email within 2 business hours.
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-6 bg-[#0b1330] text-[#38bdf8] font-bold py-3 px-8 rounded-full cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
