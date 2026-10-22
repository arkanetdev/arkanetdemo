"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

import { HeroSection } from "@/components/home/HeroSection";

const AgencyStatement = dynamic(
  () => import("@/components/home/AgencyStatement").then((m) => m.AgencyStatement),
  { ssr: true }
);
const ArkanetBentoShowcase = dynamic(
  () => import("@/components/home/ArkanetBentoShowcase").then((m) => m.ArkanetBentoShowcase),
  { ssr: true }
);
const InteractiveShowcaseGrid = dynamic(
  () => import("@/components/home/InteractiveShowcaseGrid").then((m) => m.InteractiveShowcaseGrid),
  { ssr: true }
);
const OurProcess = dynamic(
  () => import("@/components/home/OurProcess").then((m) => m.OurProcess),
  { ssr: true }
);
const StudioPhilosophy = dynamic(
  () => import("@/components/home/StudioPhilosophy").then((m) => m.StudioPhilosophy),
  { ssr: true }
);
const ClientLogosSection = dynamic(
  () => import("@/components/home/ClientLogosSection").then((m) => m.ClientLogosSection),
  { ssr: true }
);
const WhatsNewSection = dynamic(
  () => import("@/components/home/WhatsNewSection").then((m) => m.WhatsNewSection),
  { ssr: true }
);
const Footer = dynamic(
  () => import("@/components/layout/Footer").then((m) => m.Footer),
  { ssr: true }
);
const ContactFormModal = dynamic(
  () => import("@/components/modals/ContactFormModal").then((m) => m.ContactFormModal),
  { ssr: false }
);
const BookingModal = dynamic(
  () => import("@/components/modals/BookingModal").then((m) => m.BookingModal),
  { ssr: false }
);

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenBooking = () => setContactModalOpen(true);

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f6fb]">


      {/* Main Homepage Flow */}
      <main className="flex-1">
        {/* 1. Hero Title */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* 1b. Agency Statement */}
        <AgencyStatement onOpenBooking={handleOpenBooking} />

        {/* 2. Bento Box Grid Showcase */}
        {/* <ArkanetBentoShowcase onOpenBooking={handleOpenBooking} /> */}

        {/* 2b. Interactive Showcase Grid (build.mp4 Reference) */}
        <InteractiveShowcaseGrid onOpenBooking={handleOpenBooking} />

        {/* 3. Engineering Process */}
        <OurProcess onOpenBooking={handleOpenBooking} />

        {/* 5. Studio Philosophy & Team Stats */}
        <StudioPhilosophy onOpenBooking={handleOpenBooking} />

        {/* 5b. Trusted By Client Logo Carousel */}
        <ClientLogosSection onOpenBooking={handleOpenBooking} />

        {/* 6. Digital & AI Capabilities Slider */}
        <WhatsNewSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Standalone Full-Screen Slide-Up Brief Modal */}
      <ContactFormModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
