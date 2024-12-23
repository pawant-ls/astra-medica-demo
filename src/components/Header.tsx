"use client";

import React, { useRef, useEffect } from "react";
import CustomButton from "./ui/CustomButton";
import Link from "next/link";
import gsap from "gsap";

interface MenuItem {
  url: string;
  menu: string;
  id: string;
}

const NAVIGATION_ITEMS: MenuItem[] = [
  {
    id: "home",
    url: "/",
    menu: "home",
  },
  {
    id: "about",
    url: "/about",
    menu: "about",
  },
  {
    id: "research",
    url: "/research",
    menu: "research",
  },
  {
    id: "contact",
    url: "/contact",
    menu: "contact us",
  },
];

const ANIMATION_CONFIG = {
  initial: {
    y: -100,
    opacity: 0,
  },
  linkAnimation: {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "expo.inOut",
    stagger: 0.2,
  },
  headerAnimation: {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power1",
  },
} as const;

function Header() {
  const headRef = useRef<HTMLDivElement | null>(null);
  const linkRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!linkRef.current || !headRef.current) return;
    const el = gsap.utils.toArray(linkRef.current.children);

    gsap.set([headRef.current, ...el], ANIMATION_CONFIG.initial);

    gsap.to(el, ANIMATION_CONFIG.linkAnimation);

    gsap.to(headRef.current, ANIMATION_CONFIG.headerAnimation);
  }, []);

  return (
    <header
      ref={headRef}
      className="fixed top-0 left-0 right-0 opacity-0 z-20 bg-white shadow-sm"
    >
      <nav className="container flex justify-between items-center py-3">
        <h1 className="font-heading text-3xl font-black capitalize">
          Astra Pharma
        </h1>
        <div ref={linkRef} className="flex items-center space-x-6">
          {NAVIGATION_ITEMS?.map((menu) => (
            <Link
              className="text-md capitalize font-body font-semibold text-black hover:text-primary transition-colors duration-500"
              key={menu.id}
              href={menu?.url}
            >
              {menu?.menu}
            </Link>
          ))}
        </div>
        <CustomButton renderText="request a quote" />
      </nav>
    </header>
  );
}

export default Header;
