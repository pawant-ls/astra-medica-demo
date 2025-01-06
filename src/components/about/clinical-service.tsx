"use client";

import { FlaskConicalIcon, FlaskRoundIcon, MicroscopeIcon } from "lucide-react";
import CustomButton from "../ui/CustomButton";
import { NumberTicker } from "../magicui/number-ticker";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ClinicalServiceType = {
  title: string;
  description: string;
  image: string;
};

type StatType = {
  value: number;
  label: string;
};

const clinicalServices: ClinicalServiceType[] = [
  {
    title: "Laboratory Testing",
    description:
      "Comprehensive diagnostic testing services using state-of-the-art equipment for accurate and timely results.",
    image:
      "https://azim.commonsupport.com/Laborex/assets/images/service/service-1.jpg",
  },
  {
    title: "Chemical Research",
    description:
      "Advanced chemical analysis and research services supporting pharmaceutical and clinical developments.",
    image:
      "https://azim.commonsupport.com/Laborex/assets/images/service/service-2.jpg",
  },
  {
    title: "Pathology Services",
    description:
      "Expert pathological analysis and diagnostics for various medical conditions and diseases.",
    image:
      "https://azim.commonsupport.com/Laborex/assets/images/service/service-3.jpg",
  },
  {
    title: "Genetic Testing",
    description:
      "Specialized genetic testing and analysis for hereditary conditions and personalized medicine.",
    image:
      "https://azim.commonsupport.com/Laborex/assets/images/service/service-3.jpg",
  },
  {
    title: "Microbiology Analysis",
    description:
      "Detailed microbiological testing and analysis for infectious diseases and environmental samples.",
    image:
      "https://azim.commonsupport.com/Laborex/assets/images/service/service-3.jpgs",
  },
  {
    title: "Immunology Testing",
    description:
      "Specialized immunological assessments for autoimmune disorders and immune system function.",
    image:
      "https://azim.commonsupport.com/Laborex/assets/images/service/service-6.jpg",
  },
];

const labStats: StatType[] = [
  {
    value: 320,
    label: "Permanent Staff",
  },
  {
    value: 878,
    label: "Lab Projects",
  },
  {
    value: 150,
    label: "Lab Locations",
  },
  {
    value: 990,
    label: "Happy Clients",
  },
  {
    value: 450,
    label: "Research Papers",
  },
  {
    value: 725,
    label: "Lab Equipment",
  },
];

function ClinicalService() {
  const elRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(elRef.current?.children || []);

    gsap.set(cards, {
      y: 40,
      opacity: 0,
    });

    cards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: index * 0.2,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="py-48 pb-80 flex flex-col items-center justify-center space-y-8"
    >
      <h6 className="font-heading font-semibold text-md uppercase text-primary">
        Clinical Services
      </h6>
      <h2 className="font-heading font-bold text-center text-black text-2xl md:text-4xl">
        Explore Our Main Services.
      </h2>
      <div
        ref={elRef}
        className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4"
      >
        {clinicalServices?.slice(0, 3).map((service, i) => (
          <ClinicalServiceCard {...service} key={"hello" + i} />
        ))}
      </div>
      <CustomButton renderText="more services" />
      <div className="h-full py-4 md:h-[40vh] bg-[url('https://azim.commonsupport.com/Laborex/assets/images/background/funfact-1.jpg')] container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4">
        {labStats.slice(0, 4).map((stat, i) => (
          <NumbersCard key={i} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}

interface NumbersCardProps {
  value: number;
  label: string;
}

const NumbersCard = ({ value, label }: NumbersCardProps) => {
  return (
    <div className="flex items-center justify-start gap-4 md:border-r last:border-none border-white">
      <MicroscopeIcon size={84} color="#22b6af" />
      <div>
        <h6 className="font-heading font-bold text-[50px] text-black">
          <NumberTicker value={value} />+
        </h6>
        <p className="font-body text-gray-600 text-md uppercase">{label}</p>
      </div>
    </div>
  );
};

const ClinicalServiceCard = ({
  title,
  description,
  image,
}: ClinicalServiceType) => {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [hovered, setHovered] = useState<boolean>(false);

  useGSAP(() => {
    if (!circleRef || !imageRef) return;
    const tl = gsap.timeline({ paused: true });

    // Circle animation
    tl.fromTo(
      circleRef.current,
      {
        opacity: 1,
        scale: 0,
      },
      {
        scale: 3.5,
        opacity: 1,
        ease: "back",
        duration: 0.8,
      }
    );

    // Image scale animation
    // tl.to(imageRef.current, {
    //   scale: 1.1,
    //   duration: 0.1,
    //   ease: "power2.out",
    // }, );

    tlRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    tlRef?.current?.play();
    setHovered(true);
  };

  const handleMouseLeave = () => {
    tlRef?.current?.reverse();
    setHovered(false);
  };

  return (
    <div
      className="cursor-pointer relative flex flex-col justify-center items-center space-y-7 p-8 shadow-lg rounded-3xl overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden rounded-2xl">
        <img
          // ref={imageRef}
          src={image}
          alt="women viewing microscope"
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            hovered ? "scale-110" : "scale-100"
          )}
        />
      </div>
      <div className=" absolute top-32 md:top-36 right-30">
        <div className="relative flex justify-center items-center p-8 bg-primary rounded-full overflow-hidden">
          <div
            ref={circleRef}
            className="absolute opacity-0 z-0 bg-black rounded-full inset-0 m-auto h-[32px] w-[32px]"
          ></div>
          <FlaskConicalIcon
            size={38}
            className={cn(
              "relative z-10 transition-colors duration-500",
              hovered ? "text-white" : "text-white"
            )}
          />
        </div>
      </div>

      <p className="font-body text-md font-normal text-black/50 text-center pt-12">
        {description}
      </p>
      <CustomButton renderText="Read More" />
    </div>
  );
};

export default ClinicalService;
