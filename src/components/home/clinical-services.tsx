"use client";

import { MicroscopeIcon, TestTubeIcon, FlaskConicalIcon, AtomIcon, UserIcon, CheckCircleIcon, ClockIcon } from "lucide-react";
import { NumberTicker } from "../magicui/number-ticker";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../shadcn/carousel";
import Autoplay from "embla-carousel-autoplay";

function ClinicalServices() {
  return (
    <section className="flex flex-col md:py-40 py-12 px-4 items-center justify-center space-y-4 bg-gradient-to-r from-primary/15 via-primary/25 to-primary/60">
      <h6 className="font-heading font-semibold text-md uppercase text-primary">
        Clinical Services
      </h6>
      <h2 className="font-heading font-bold text-center text-black text-4xl">
        Laboratory Priority Services Delivered
        <br />
        We Have Great Skills
      </h2>
      <div className="container grid md:grid-cols-4 grid-cols-1 items-center gap-7 pt-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <NumbersCard key={i} />
        ))}
      </div>
      <Carousel
        className="pt-12"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="w-full">
          {Array.from({ length: 4 }).map((_, i) => (
            <CarouselItem key={i} className="basis-10/12 md:basis-1/2 lg:basis-1/3">
              <HoverCards />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

const NumbersCard = () => {
  return (
    <div className="flex items-center justify-start gap-4">
      <MicroscopeIcon size={84} color="#22b6af" />
      <div>
        <h6 className="font-heading font-bold text-[50px] text-black">
          <NumberTicker value={320} />+
        </h6>
        <p className="font-body text-gray-600 text-md uppercase">
          Permanent Staff
        </p>
      </div>
    </div>
  );
};

const HoverCards = () => {
  const boxRef = useRef(null);
  const hoverRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    if (!boxRef) return;
    const tl = gsap.timeline({ paused: true });
    tl.to(boxRef.current, {
      scale: 1,
      opacity: 1,
      ease: "back",
      duration: 0.8,
    });
    hoverRef.current = tl;
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      onMouseEnter={() => hoverRef.current?.play()}
      onMouseLeave={() => hoverRef.current?.reverse()}
      className="rounded-3xl overflow-hidden h-[40vh] w-full flex items-center justify-center bg-[url('https://azim.commonsupport.com/Laborex/assets/images/gallery/project-1.jpg')] bg-cover bg-no-repeat"
    >
      <div
        ref={boxRef}
        className="bg-gray-500/50 rounded-3xl w-full h-full scale-0 opacity-0 flex items-center justify-center"
      >
        <div className="bg-white rounded-3xl w-[80%] h-[80%] flex flex-col items-center justify-center">
          <NumbersCard />
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Molecular Diagnostics",
    description: "Advanced genetic testing and molecular analysis for precise disease diagnosis and treatment planning.",
    icon: <MicroscopeIcon size={48} />
  },
  {
    title: "Clinical Pathology",
    description: "Comprehensive laboratory testing of blood, urine, and other body fluids for disease diagnosis.",
    icon: <TestTubeIcon size={48} />
  },
  {
    title: "Microbiology Testing",
    description: "Identification and analysis of microorganisms for infection diagnosis and treatment.",
    icon: <FlaskConicalIcon size={48} />
  },
  {
    title: "Immunology Services",
    description: "Specialized testing for immune system disorders and autoimmune conditions.",
    icon: <AtomIcon size={48} />
  }
];

const stats = [
  {
    value: 50000,
    label: "Tests Performed Monthly",
    icon: <TestTubeIcon />
  },
  {
    value: 150,
    label: "Expert Scientists",
    icon: <UserIcon />
  },
  {
    value: 98,
    label: "Accuracy Rate",
    suffix: "%",
    icon: <CheckCircleIcon />
  },
  {
    value: 24,
    label: "Hour Service",
    suffix: "/7",
    icon: <ClockIcon />
  }
];

export default ClinicalServices;
