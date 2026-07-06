"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import WhatWeDo from "@/components/WhatWeDo";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import Approach from "@/components/Approach";
import Pricing from "@/components/Pricing";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
      <div className=" w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <WhatWeDo />
        <WhoThisIsFor />
        <Approach />
        <Pricing />
        <ServicesSection />
        <AboutSection />
        <SocialProof />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
