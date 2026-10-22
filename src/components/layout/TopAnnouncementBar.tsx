"use client";

import React, { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

interface TopAnnouncementBarProps {
  onOpenBooking: () => void;
}

export const TopAnnouncementBar: React.FC<TopAnnouncementBarProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const dismissed = sessionStorage.getItem("arkanet_topbar_dismissed");
      if (dismissed === "true") {
        setIsVisible(false);
      }
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("arkanet_topbar_dismissed", "true");
    }
  };

  if (!isVisible) return null;

  return (
    <div className="bg-navy text-white text-xs sm:text-sm py-2 px-4 relative z-50 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center">
        <span className="text-slate-200">Now booking Q1 project slots, get a free scope call</span>
        <button
          onClick={onOpenBooking}
          className="inline-flex items-center gap-1 font-semibold text-white underline hover:text-blue-300 transition-colors"
        >
          Book Scope Call <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
      <button
        onClick={handleDismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1 rounded-md transition-colors"
        aria-label="Dismiss announcement"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
