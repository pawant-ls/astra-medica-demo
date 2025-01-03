import { cn } from "@/lib/utils";
import { FlaskConicalIcon } from "lucide-react";
import CustomButton from "../ui/CustomButton";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function LaboratoryServices() {
  return (
    <section className="relative flex flex-col py-16 sm:py-24 md:py-32 px-4 items-center justify-center space-y-6 sm:space-y-8 md:space-y-10 bg-gradient-to-r from-primary/15 via-primary/25 to-primary/60">
      <img
        className="absolute z-0 top-0 right-0 w-1/2 md:w-auto"
        src="https://azim.commonsupport.com/Laborex/assets/images/shape/shape-12.png"
        alt=""
      />
      <img
        className="absolute z-0 bottom-0 left-0 w-1/2 md:w-auto"
        src="https://azim.commonsupport.com/Laborex/assets/images/shape/shape-45.png"
        alt=""
      />
      <h6 className="font-heading font-semibold text-sm sm:text-md uppercase text-primary">
        Laboratory Services
      </h6>
      <h2 className="font-heading font-bold text-black text-2xl sm:text-3xl md:text-4xl text-center px-4">
        Reliable & High-Quality
        <br /> Laboratory Service
      </h2>
      <div className="container gap-4 sm:gap-6 md:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-8 sm:pt-12 md:pt-16">
        {Array.from({ length: 8 }).map((_, i) => (
          <LabCards key={i} />
        ))}
      </div>
    </section>
  );
}

const LabCards = () => {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [hovered, setHovered] = useState<boolean>(false);

  useGSAP(() => {
    if (!circleRef) return;
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(
      circleRef.current,
      {
        opacity: 1,
      },
      {
        height: "100%",
        opacity: 1,
        ease: "back",
        duration: 0.8,
      }
    );
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden flex flex-col justify-start items-start min-h-[300px] sm:h-[35vh] md:h-[40vh]  space-y-4 sm:space-y-6 cursor-pointer bg-white rounded-xl"
    >
      <div
        ref={circleRef}
        className="absolute opacity-0 bg-primary top-0 h-[0px] w-full"
      ></div>
      <div className="flex items-center justify-center py-2">
        <div
          className={cn(
            "z-10 transition-all duration-500",
            hovered ? "text-white" : "text-primary"
          )}
        >
          <FlaskConicalIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ml-4" />
        </div>
      </div>

      <h6
        className={cn(
          "z-10 font-heading font-bold text-lg sm:text-xl capitalize  ml-4",
          hovered ? "text-white" : "text-black"
        )}
      >
        Clinical Microbiology Tests
      </h6>
      <p
        className={cn(
          "z-10 font-body font-normal text-sm sm:text-md  m-4",
          hovered ? "text-white" : "text-black"
        )}
      >
        Excepteur sint ocecat pro dent sunt in culpa.
      </p>
      <CustomButton
        renderText="read more"
        className="text-sm sm:text-base !w-[90%] mx-2 bg-white !text-black hover:!text-white"
      />
    </div>
  );
};

export default LaboratoryServices;
