"use client"

import About from "../home/about";
import OurTeam from "../home/team";
import SecondaryPageHero from "../secondary-hero";
import ClinicalService from "./clinical-service";
import ResearchTopic from "./research-topic";
import TestimonialsAbout from "./testimonials-about";

function AboutComponent() {
  return (
    <main className="overflow-x-hidden">
      <SecondaryPageHero heroText="About astra medica" />
      <div className="-mt-[20vh] sm:-mt-[15vh] md:-mt-[20vh]">
        <About />
      </div>
      <ResearchTopic />
      <div className="py-8 sm:py-12 md:py-16">
        <ClinicalService />
      </div>
      <TestimonialsAbout />
      <div className="py-8 sm:py-12 md:py-16">
        <OurTeam />
      </div>
    </main>
  );
}

export default AboutComponent;
