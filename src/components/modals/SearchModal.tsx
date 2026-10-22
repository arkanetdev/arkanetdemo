"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { X, Search } from "lucide-react";
import { FEATURED_SERVICES, AI_CAPABILITIES } from "@/lib/data";

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
      className="group absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-slate-100 hover:bg-[#0b1330] flex items-center justify-center cursor-pointer transition-colors duration-300 overflow-hidden shrink-0 shadow-sm"
      aria-label="Close search"
    >
      <motion.div
        animate={{ rotate: isHovered ? 90 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="text-slate-600 group-hover:text-white transition-colors duration-300"
      >
        <X className="w-4 h-4" strokeWidth={2.5} />
      </motion.div>
    </motion.button>
  );
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const allItems = [
    ...FEATURED_SERVICES.map((s) => ({ title: s.title, desc: s.description, link: "#featured-services" })),
    ...AI_CAPABILITIES.map((a) => ({ title: a.title, desc: a.desc, link: "#ai-capabilities" })),
  ];

  const filtered = query.trim()
    ? allItems.filter(
        (i) =>
          i.title.toLowerCase().includes(query.toLowerCase()) ||
          i.desc.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-navy/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 relative shadow-2xl border border-borderline">
        <MagneticCloseButton onClick={onClose} />

        <h3 className="font-display font-bold text-xl text-navy mb-4">
          Search Arkanet Services
        </h3>

        <div className="relative mb-4">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            autoFocus
            placeholder="Type a service or AI capability (e.g. Website, Mobile, Agent)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-borderline rounded-xl text-sm focus:outline-none focus:border-navy-bright bg-subtle/50"
          />
        </div>

        {query.trim() && (
          <div className="max-h-60 overflow-y-auto space-y-2">
            {filtered.length > 0 ? (
              filtered.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  onClick={onClose}
                  className="block p-3 rounded-lg hover:bg-subtle transition-colors border border-transparent hover:border-borderline"
                >
                  <div className="font-semibold text-sm text-navy">{item.title}</div>
                  <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">{item.desc}</div>
                </a>
              ))
            ) : (
              <div className="text-sm text-slate-400 py-4 text-center">
                No matching services found for "{query}"
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
