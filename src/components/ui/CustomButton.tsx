"use client";

import { useGSAP } from "@gsap/react";
import { Button } from "../shadcn/ShadButton";
import { useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

interface IButtonProps {
  renderText: string;
  variant?: string;
}

function CustomButton({ renderText }: IButtonProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const btnSpnRef = useRef(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    if (!btnSpnRef.current) return;

    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      btnSpnRef.current,
      {
        y: -350,
        opacity: 1,
        scale: 1,
      },
      {
        y: -70,
        opacity: 1,
        duration: 4.5,
        scale: 3,
        ease: "power3.out",
      }
    );

    tlRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    tlRef.current?.play();
    setHovered(true);
  };

  const handleMouseLeave = () => {
    tlRef.current?.reverse();
    setHovered(false);
  };

  return (
    <Button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden w-[264px] rounded-full h-[48px] transition-all duration-1000 text-white`}
    >
      <span
        ref={btnSpnRef}
        className="absolute z-0 top-0 opacity-0 !min-w-[100%] !min-h-[214px] rounded-[100%] !bg-black"
      ></span>
      <Link className="font-body capitalize font-semibold text-lg z-10" href={"#"}>
        {renderText}
      </Link>
    </Button>
  );
}

export default CustomButton;
