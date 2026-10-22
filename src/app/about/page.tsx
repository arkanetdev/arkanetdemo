"use client";

import { useState } from "react";

import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutWhoWeAre } from "@/components/about/AboutWhoWeAre";
import { AboutClients } from "@/components/about/AboutClients";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { AboutTeam } from "@/components/about/AboutTeam";
import { AboutCTA } from "@/components/about/AboutCTA";

export default function AboutPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  return (
    <main className="min-h-screen bg-[#f4f6fb] text-[#0b1330] selection:bg-[#0b1330] selection:text-white overflow-x-hidden font-sans">

      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      <AboutHero />
      <AboutWhoWeAre />
      <AboutClients />
      <AboutTestimonials />
      <AboutTeam />
      <AboutCTA onOpenBooking={openContact} />

      <Footer onOpenBooking={openContact} bgColor="bg-white" />
    </main>
  );
}