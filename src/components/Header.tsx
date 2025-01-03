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
} as const;

function Header() {
  const pathName = usePathname();
  const headRef = useRef<HTMLDivElement | null>(null);
  const linkRef = useRef<HTMLDivElement | null>(null);
  const drawerCloseRef = useRef<HTMLButtonElement>(null);

  let classNameForActiveLink = "text-primary";

  const handleLinkClick = () => {
    drawerCloseRef.current?.click();
  };

  useEffect(() => {
    if (!linkRef.current || !headRef.current) return;
    const el = gsap.utils.toArray<HTMLDivElement>(linkRef.current.children);

    gsap.set([headRef.current, ...el], ANIMATION_CONFIG.initial);

    gsap.to(el, ANIMATION_CONFIG.linkAnimation);

    gsap.to(headRef.current, ANIMATION_CONFIG.headerAnimation);
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
            <Drawer>
              <DrawerTrigger asChild>
                <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
                  <Menu className="w-6 h-6" />
                </button>
              </DrawerTrigger>
              <DrawerContent className="h-[96%] bg-white">
                <DrawerHeader className="border-b border-border/40 pb-4">
                  <div className="flex items-center justify-between">
                    <DrawerTitle className="font-heading text-2xl">
                      Astra Pharma
                    </DrawerTitle>
                    <DrawerClose ref={drawerCloseRef} className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close</span>
                    </DrawerClose>
                  </div>
                </DrawerHeader>
                <div className="px-4">
                  <div className="flex flex-col gap-4 mt-8">
                    {NAVIGATION_ITEMS?.map((menu) => (
                      <Link
                        key={menu.id}
                        href={menu?.url}
                        className={cn(
                          "p-4 rounded-lg text-lg capitalize font-body font-semibold hover:bg-gray-100",
                          pathName === menu.url && "bg-primary/10 text-primary"
                        )}
                        onClick={handleLinkClick}
                      >
                        {menu?.menu}
                      </Link>
                    ))}
                    <div className="mt-4">
                      <CustomButton
                        renderText="request a quote"
                        className="w-full justify-center"
                        onClick={handleLinkClick}
                      />
                    </div>
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
