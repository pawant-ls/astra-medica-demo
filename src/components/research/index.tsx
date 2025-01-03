"use client";

import OurTeam from "../home/team";
import WhyChoose from "../home/why-choose";
import SecondaryPageHero from "../secondary-hero";
import LabResearch from "./lab-research";
import LaboratoryServices from "./laboratory-services";

function ResearchPageComponent() {
  return (
    <main className="overflow-x-hidden">
      <SecondaryPageHero heroText="research" />
      <div className="py-8 sm:py-12 md:py-0">
        <LaboratoryServices />
      </div>
      <div className="py-8 sm:py-12 md:py-16 -mt-[15vh] md:-mt-[25vh]">
        <LabResearch />
      </div>
      <div className="py-8 sm:py-12 md:py-16 -mt-[15vh] md:-mt-[25vh]">
        <WhyChoose />
      </div>
      <div className="py-8 sm:py-12 md:py-16  -mt-[15vh] md:-mt-[25vh]">
        <OurTeam />
      </div>
    </main>
  );
}

export default ResearchPageComponent;
