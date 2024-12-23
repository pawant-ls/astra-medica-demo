"use client";

import { useGSAP } from "@gsap/react";
import { MicroscopeIcon } from "lucide-react";
import React, { ReactNode, useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

type HoverProps = {
  heading: string;
  para: string;
  icon: ReactNode;
};

function HoverCard({ heading, para, icon }: HoverProps) {
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
        scale: 0,
      },
      {
        opacity: 1,
        scale: 64,
        duration: 0.5,
        ease: "none",
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
      className="flex flex-col justify-center items-center h-[40vh] px-8 space-y-6"
    >
      <div className="relative transition-all duration-700 overflow-hidden grid grid-cols-1 items-center p-8 bg-primary/10 rounded-full">
        <div
          ref={circleRef}
          className="absolute opacity-0 z-0 bg-primary rounded-full top-1/2 right-1/2 h-[2px] w-[2px] -translate-x-1/4 -translate-y-1/4"
        ></div>
        <div
          className={cn(
            "z-10 text-[48px]",
            hovered ? "text-[#fafafa]" : "text-[#22b6af]"
          )}
        >
          {icon}
        </div>
        {/* <MicroscopeIcon
          className="z-10"
          color={}
          size={48}
        /> */}
      </div>

      <h6 className="font-heading font-bold text-xl capitalize text-black">
        {heading}
      </h6>
      <p className="text-center font-body font-normal text-md text-black">
        {para}
      </p>
    </div>
  );
}

export default HoverCard;
