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
        scale: 4,
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
      className="flex flex-col justify-center items-center h-[40vh] px-8 space-y-6 cursor-pointer"
    >
      <div className="relative transition-all duration-700 overflow-hidden grid grid-cols-1 items-center p-8 bg-primary/10 rounded-full">
        <div
          ref={circleRef}
          className="absolute opacity-0 z-0 bg-primary rounded-full inset-0 m-auto h-[32px] w-[32px]"
        ></div>
        <div
          className={cn(
            "z-10 transition-all duration-500",
            hovered ? "text-[#fafafa]" : "text-[#22b6af]"
          )}
        >
          {icon}
        </div>
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
