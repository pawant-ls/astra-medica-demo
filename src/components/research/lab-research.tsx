"use client";

import { Atom, TestTube } from "lucide-react";
import HoverCard from "../HoverCard";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function LabResearch() {
  const img1Ref1 = useRef(null);
  const img1Ref2 = useRef(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    gsap.to(img1Ref1.current, {
      scrollTrigger: {
        trigger: wrapperRef.current,
        scrub: true,
        toggleActions: "play none none none",
      },
      y: 80,
      duration: 1,
    });
    gsap.to(img1Ref2.current, {
      scrollTrigger: {
        trigger: wrapperRef.current,
        scrub: true,
        toggleActions: "play none none none",
      },
      y: -20,
      duration: 0.5,
    });
  });
  return (
    <section
      ref={wrapperRef}
      className="py-16 sm:py-24 md:py-32 lg:py-44 px-4 sm:px-6 md:px-8 lg:px-32 flex flex-col items-center justify-center space-y-6 sm:space-y-8"
    >
      <h6 className="font-heading font-semibold text-sm sm:text-md uppercase text-primary">
        Laboratory Research
      </h6>
      <h2 className="font-heading font-bold text-black text-2xl sm:text-3xl md:text-4xl text-center px-4">
        Laboratory Research for The Professionals
      </h2>
      <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12">
        {/* section1 */}
        <div className="hidden lg:flex relative h-[50vh] lg:h-[80vh]">
          <img
            ref={img1Ref2}
            src="https://azim.commonsupport.com/Laborex/assets/images/resource/about-6.jpg"
            alt="Laboratory equipment"
            className="absolute bottom-10 left-10 z-[1] rounded-[48px] w-3/4 h-auto object-cover"
          />
          <img
            ref={img1Ref1}
            src="https://azim.commonsupport.com/Laborex/assets/images/resource/about-7.jpg"
            alt="Research facility"
            className="absolute z-10 bottom-0 right-0 rounded-[48px] border-8 border-white w-3/4 h-auto object-cover"
          />
        </div>
        {/* section2 */}
        <div className="flex flex-col items-start space-y-4 sm:space-y-6">
          <p className="font-body font-normal text-base sm:text-lg text-black">
            Quasi architebeat vitae dicta sunt explicabo nemo enim ipsam volup
            quia voluptassit aspernatur aut odit fugit sed quia consequuntur
            magni dolores eos qui ratione voluptam sequi nescuntneque porro
            quisquam dolorem ipsum quia dolor sit amet consectetur adipiscing
            velit sed quia numquam eius modi tempora incidunt ut labore et
            dolore consectetur adipisicing elit sed do eiusmod tempor
            incididunt.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            <HoverCard
              heading="Medical Research"
              icon={<Atom className="w-8 h-8 sm:w-10 sm:h-10" />}
              para="Excepteur sint ocecat pro dent sunt in culpa qui."
            />
            <HoverCard
              heading="Blood Resources"
              icon={<TestTube className="w-8 h-8 sm:w-10 sm:h-10" />}
              para="Excepteur sint ocecat pro dent sunt in culpa qui."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LabResearch;
