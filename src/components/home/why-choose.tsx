"use client";

import { Atom, TestTube } from "lucide-react";
import HoverCard from "../HoverCard";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WhyChoose() {
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
      y: 100,
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
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h6 className="font-heading font-semibold text-sm sm:text-md uppercase text-primary mb-3">
            Why Choose
          </h6>
          <h2 className="font-heading font-bold text-black text-2xl sm:text-3xl md:text-4xl max-w-3xl mx-auto">
            We'll Ensure You Always Get The Best Results.
          </h2>
        </div>

        <div
          ref={wrapperRef}
          className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
        >
          {/* Image Section - Hidden on mobile, shown on lg screens */}
          <div className="hidden lg:block relative h-[50vh] xl:h-[60vh] order-2 lg:order-1">
            <img
              ref={img1Ref2}
              src="https://azim.commonsupport.com/Laborex/assets/images/resource/chooseus-1.jpg"
              alt="Laboratory equipment"
              className="absolute bottom-0 left-10 z-[1] rounded-[48px] w-3/4 h-auto object-cover shadow-lg"
            />
            <img
              ref={img1Ref1}
              src="https://azim.commonsupport.com/Laborex/assets/images/resource/chooseus-2.jpg"
              alt="Research scientist"
              className="absolute z-10 bottom-0 right-0 rounded-[48px] border-8 border-white w-3/4 h-auto object-cover shadow-xl"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <h6 className="font-heading font-semibold text-sm sm:text-md uppercase text-primary mb-2">
                Why choose
              </h6>
              <h2 className="font-heading font-bold text-black text-xl sm:text-2xl md:text-3xl mb-4">
                Reliable Agroscience & Soil Analysis Research.
              </h2>
              <p className="font-body text-base sm:text-lg text-black mb-4">
                Excepteur sint occaecat cupidatat non proident sunt culpa qui
                officia deserunt mollit anim id est laborum. sed spiciatis unde
                omnis natus error Inventore.
              </p>
              <p className="font-body text-sm sm:text-base text-black/50">
                quasi architebeat vitae dicta sunt explicabo nemo enim ipsam
                voluptatem quia voluptassit.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
              <HoverCard
                heading="Medical Research"
                para="Excepteur sint occaecat cupidatat non proident sunt culpa qui officia."
                icon={<TestTube size={42} className="sm:w-12 sm:h-12" />}
              />
              <HoverCard
                heading="Professional Team"
                para="Excepteur sint occaecat cupidatat non proident sunt culpa qui officia."
                icon={<Atom size={42} className="sm:w-12 sm:h-12" />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
