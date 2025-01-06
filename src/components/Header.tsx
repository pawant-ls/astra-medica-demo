"use client";

import React, { useRef, useEffect, useState } from "react";
import CustomButton from "./ui/CustomButton";
import Link from "next/link";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "./shadcn/drawer";
import { Menu, X } from "lucide-react";

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

const PATHS = ["/", "/about", "/research", "/contact"];

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
  closeButtonAnimation: {
    rotate: 360,
    duration: 2,
    ease: "power1",
  },
} as const;

function Header() {
  const pathName = usePathname();
  const headRef = useRef<HTMLDivElement | null>(null);
  const linkRef = useRef<HTMLDivElement | null>(null);
  const drawerCloseRef = useRef<HTMLButtonElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const closeIconRef = useRef<HTMLDivElement | null>(null);

  let classNameForActiveLink = "text-primary";

  const handleLinkClick = () => {
    drawerCloseRef.current?.click();
  };

  useEffect(() => {
    if (!linkRef.current || !headRef.current) return;
    const el = gsap.utils.toArray<HTMLDivElement>(linkRef.current.children);
    const tl = gsap.timeline({ paused: true });

    gsap.set([headRef.current, ...el], ANIMATION_CONFIG.initial);

    gsap.to(el, ANIMATION_CONFIG.linkAnimation);

    gsap.to(headRef.current, ANIMATION_CONFIG.headerAnimation);
    tl.to(closeIconRef.current, ANIMATION_CONFIG.closeButtonAnimation);
    tlRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <header
      ref={headRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm opacity-0"
    >
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-xl md:text-2xl font-bold">
            Astra Medica
          </Link>

          <div
            ref={linkRef}
            className="hidden md:flex items-center justify-center flex-1 space-x-8 px-8"
          >
            {NAVIGATION_ITEMS?.map((menu) => (
              <Link
                className={cn(
                  "text-md capitalize font-body font-semibold text-black hover:text-primary transition-colors duration-500",
                  pathName === menu.url && classNameForActiveLink
                )}
                key={menu.id}
                href={menu?.url}
              >
                {menu?.menu}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Drawer
              onOpenChange={() => tlRef.current?.play()}
              direction="right"
            >
              <DrawerTrigger asChild>
                <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
                  <Menu className="w-6 h-6" />
                </button>
              </DrawerTrigger>
              <DrawerContent className="h-screen bg-[#0B1B35] text-white data-[side=left]:slide-in-from-left">
                <DrawerHeader className="border-b border-white/10 pb-4">
                  <div className="flex items-center justify-between px-4">
                    <div className="flex items-center gap-2">
                      <DrawerTitle className="font-heading text-2xl text-white">
                        Astra Medica
                      </DrawerTitle>
                    </div>
                    <DrawerClose ref={drawerCloseRef}>
                      <X ref={closeIconRef} className="h-6 w-6 text-white" />
                      <span className="sr-only">Close</span>
                    </DrawerClose>
                  </div>
                </DrawerHeader>

                {/* Navigation Menu */}
                <div className="flex flex-col p-4">
                  {NAVIGATION_ITEMS?.map((menu) => (
                    <Link
                      key={menu.id}
                      href={menu?.url}
                      className={cn(
                        "py-4 px-2 border-b border-white/10 text-lg capitalize font-body font-semibold text-white/80 hover:text-white flex items-center justify-between",
                        pathName === menu.url && "text-primary"
                      )}
                      onClick={handleLinkClick}
                    >
                      {menu?.menu}
                      <span className="text-white/50">→</span>
                    </Link>
                  ))}
                </div>

                {/* Contact Info Section */}
                <div className="mt-auto p-4">
                  <h3 className="text-xl font-heading mb-4">Contact Info</h3>
                  <div className="space-y-4 text-white/80">
                    <p>Panvel, Navi Mumbai, Maharashtra, India</p>
                    <p>+91-923-458-8595</p>
                    <p>info@astra-medica.in</p>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
            <CustomButton
              renderText="request a quote"
              className="hidden md:flex"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
