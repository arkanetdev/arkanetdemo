"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export const CertAndNewsletterBand: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-subtle border border-borderline rounded-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Certification Stack */}
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-borderline text-xs font-semibold text-navy mb-3">
              Quality Certified
            </div>
            <h3 className="font-display font-bold text-2xl text-navy mb-4">
              ISO Certified Standards
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-white border border-borderline px-3.5 py-2 rounded-lg font-mono font-bold text-xs text-navy shadow-2xs">
                ISO 9001:2015
              </span>
              <span className="bg-white border border-borderline px-3.5 py-2 rounded-lg font-mono font-bold text-xs text-navy shadow-2xs">
                IAF ACCREDITED
              </span>
              <span className="bg-white border border-borderline px-3.5 py-2 rounded-lg font-mono font-bold text-xs text-navy shadow-2xs">
                EGAC CERTIFIED
              </span>
            </div>
          </div>

          {/* Newsletter Capture */}
          <div>
            <h3 className="font-display font-bold text-xl text-navy mb-2">
              Join Our Newsletter
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Get occasional insights on software engineering, AI deployment, and tech roadmaps.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  required
                  className="flex-1 px-4 py-3 border border-borderline rounded-xl text-sm focus:outline-none focus:border-navy-bright bg-white"
                />
                <button
                  type="submit"
                  className="bg-navy-bright hover:bg-navy-hover text-white font-semibold text-sm py-3 px-6 rounded-xl transition-colors shadow-sm"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm bg-emerald-50 border border-emerald-200 p-3 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Thanks for subscribing! You are on the list.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
