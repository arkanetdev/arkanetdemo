"use client";

import React from "react";

interface AgencyStatementProps {
  onOpenBooking?: () => void;
}

export const AgencyStatement: React.FC<AgencyStatementProps> = () => {
  return (
    <section className="relative w-full bg-[#f4f6fb] px-6 sm:px-8 lg:px-[40px] pt-2 sm:pt-4 pb-6 sm:pb-8 lg:pb-10 select-none">
      <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9] min-h-[260px] sm:min-h-[360px] lg:min-h-[440px] rounded-[22px] sm:rounded-[30px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group">
        <img
          src="/assets/images/about-s.png"
          alt="Arkanet Studio & Engineering Workspace"
          loading="eager"
          className="w-full h-full object-cover object-[center_18%] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
        />
      </div>
    </section>
  );
};
