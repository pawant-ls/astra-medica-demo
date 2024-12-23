"use client";

import { Atom, TestTube } from "lucide-react";
import HoverCard from "../HoverCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
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
      y: -80,
      duration: 1,
    });
  });
  return (
    <section
      ref={wrapperRef}
      className="container grid grid-cols-2 items-center gap-8 px-28 mt-48 py-32"
    >
      {/* section1 */}
      <div className="flex relative h-[80vh]">
        <img
          ref={img1Ref1}
          src="https://azim.commonsupport.com/Laborex/assets/images/resource/about-2.jpg"
          alt=""
          className="absolute bottom-10 left-10 z-[1]  rounded-[48px]"
        />
        <img
          ref={img1Ref2}
          src="https://azim.commonsupport.com/Laborex/assets/images/resource/about-1.jpg"
          alt=""
          className="absolute z-10 top-10 right-0  rounded-[48px] border-8 border-white"
        />

        <img
          src="https://azim.commonsupport.com/Laborex/assets/images/shape/shape-40.png"
          alt=""
          className="h-[24vh] absolute bottom-0 left-0"
        />
        <img
          src="https://azim.commonsupport.com/Laborex/assets/images/shape/shape-40.png"
          alt=""
          className="h-[24vh] absolute bottom-10 right-0"
        />
      </div>
      {/* section2 */}
      <div className="flex flex-col items-start space-y-4">
        <h6 className="font-heading font-semibold text-md uppercase text-primary">
          About research
        </h6>
        <h2 className="font-heading font-bold text-black text-4xl">
          Reliable Agroscience & Soil Analysis Research.
        </h2>
        <p className="font-body font-normal text-lg text-black">
          Excepteur sint occaecat cupidatat non proident sunt culpa qui officia
          deserunt mollit anim id est laborum. sed spiciatis unde omnis natus
          error Inventore.
        </p>
        <p className="font-body font-normal text-sm text-black/50">
          quasi architebeat vitae dicta sunt explicabo nemo enim ipsam
          voluptatem quia voluptassit.
        </p>
        <div className="grid grid-cols-2 gap-6">
          <HoverCard
            heading="Medical Research"
            icon={<Atom />}
            para="Excepteur sint ocecat pro dent sunt in culpa qui."
          />
          <HoverCard
            heading="Blood Resources"
            icon={<TestTube />}
            para="Excepteur sint ocecat pro dent sunt in culpa qui."
          />
        </div>
      </div>
    </section>
  );
}

export default About;
