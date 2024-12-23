"use client"

import About from "./about";
import Articles from "./articles";
import ClinicalServices from "./clinical-services";
import DetailsSection from "./Details";
import OurEvents from "./events";
import Hero from "./Hero";
import LabService from "./lab-service";
import OurTeam from "./team";
import Testimonials from "./testimonials";
import WhyChoose from "./why-choose";

function HomeComponent() {
  return (
    <>
      <Hero />
      {/* <DetailsSection /> */}
      <About />
      <LabService />
      <WhyChoose />
      <OurEvents />
      <Testimonials />
      <OurTeam />
      <ClinicalServices />
      <Articles />
    </>
  );
}

export default HomeComponent;
