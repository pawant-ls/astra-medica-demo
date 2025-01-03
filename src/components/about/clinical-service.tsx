"use client";

import { FlaskConicalIcon, FlaskRoundIcon, MicroscopeIcon } from "lucide-react";
import CustomButton from "../ui/CustomButton";
import { NumberTicker } from "../magicui/number-ticker";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

function ClinicalService() {
  return (
    <section className="py-48 pb-80 flex flex-col items-center justify-center space-y-8">
      <h6 className="font-heading font-semibold text-md uppercase text-primary">
        Clinical Services
      </h6>
      <h2 className="font-heading font-bold text-center text-black text-4xl">
        Explore Our Main Services.
      </h2>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <ClinicalServiceCard key={"hello" + i} />
        ))}
      </div>
      <CustomButton renderText="more services" />
      <div className="h-full py-8 md:h-[40vh] bg-[url('https://azim.commonsupport.com/Laborex/assets/images/background/funfact-1.jpg')] container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <NumbersCard key={"hello" + i} />
        ))}
      </div>
    </section>
  );
}

const NumbersCard = () => {
  return (
    <div className="flex items-center justify-start gap-4 md:border-r last:border-none border-white">
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

const ClinicalServiceCard = () => {
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
          src="https://azim.commonsupport.com/Laborex/assets/images/service/service-1.jpg"
          alt="women viewing microscope"
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            hovered ? "scale-110" : "scale-100"
          )}
        />
      </div>
      <div className=" absolute top-24 md:top-36 right-30">
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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
        maxime odio facilis recusandae sit.
      </p>
      <CustomButton renderText="Read More" />
    </div>
  );
};

export default ClinicalService;
