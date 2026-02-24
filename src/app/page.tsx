"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { MethodSection } from "@/components/sections/Method";
import { ServicesSection } from "@/components/sections/Services";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/Contact";
import { StatsSection } from "@/components/sections/Stats";
import { ClientsSection } from "@/components/sections/Clients";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-primary/30">
      <Header />
      <HeroSection />
      <AboutSection />
      <MethodSection />
      <StatsSection />
      <ClientsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
