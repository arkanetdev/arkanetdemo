"use client";

import React from "react";

export const ByTheNumbers: React.FC = () => {
  return (
    <section id="statsSection" className="py-16 bg-subtle border-y border-borderline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-borderline text-xs font-semibold text-navy mb-2">
            Track Record
          </div>
          <h2 className="font-display font-bold text-3xl text-navy">By the Numbers</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white border border-borderline rounded-xl p-6 shadow-2xs">
            <div className="font-display font-extrabold text-4xl lg:text-5xl text-navy-bright mb-2">
              40+
            </div>
            <div className="font-semibold text-navy text-base mb-1">Projects Delivered</div>
            <p className="text-xs text-slate-500">Shipped to production, not just prototyped</p>
          </div>

          <div className="bg-white border border-borderline rounded-xl p-6 shadow-2xs">
            <div className="font-display font-extrabold text-4xl lg:text-5xl text-navy-bright mb-2">
              6 Domains
            </div>
            <div className="font-semibold text-navy text-base mb-1">Technology Domains</div>
            <p className="text-xs text-slate-500">Web, mobile, portals, automation, data, AI</p>
          </div>

          <div className="bg-white border border-borderline rounded-xl p-6 shadow-2xs">
            <div className="font-display font-extrabold text-4xl lg:text-5xl text-navy-bright mb-2">
              &lt;2 hrs
            </div>
            <div className="font-semibold text-navy text-base mb-1">Average First Response</div>
            <p className="text-xs text-slate-500">Typical time to first enquiry reply</p>
          </div>

          <div className="bg-white border border-borderline rounded-xl p-6 shadow-2xs">
            <div className="font-display font-extrabold text-4xl lg:text-5xl text-navy-bright mb-2">
              90%
            </div>
            <div className="font-semibold text-navy text-base mb-1">Client Retention</div>
            <p className="text-xs text-slate-500">Share of clients on repeat projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};
