"use client"

import About from "../home/about";
import OurTeam from "../home/team";
import SecondaryPageHero from "../secondary-hero";
import ClinicalService from "./clinical-service";
import ResearchTopic from "./research-topic";
import TestimonialsAbout from "./testimonials-about";

function AboutComponent() {
  return (
    <main>
      <SecondaryPageHero heroText="About astra medica" />
      <div className="-mt-[20vh]">
        <About />
      </div>
      <ResearchTopic />
      <ClinicalService />
      <TestimonialsAbout />

      <OurTeam />
    </main>
  );
}

export default AboutComponent;
