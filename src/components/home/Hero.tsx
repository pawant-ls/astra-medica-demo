"use client";

import React, { useCallback, useRef, useEffect } from "react";
import CustomButton from "../ui/CustomButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../shadcn/carousel";
import Autoplay from "embla-carousel-autoplay";
import DetailsSection from "./Details";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const slideContents = [
  {
    title: "Advanced Laboratory Testing & Research Excellence",
    description: "Providing comprehensive diagnostic solutions with state-of-the-art equipment and expert medical professionals.",
    image: "path/to/lab-image-1.jpg"
  },
  {
    title: "Precision Diagnostics for Better Healthcare",
    description: "Offering accurate and timely test results with our advanced molecular diagnostics and pathology services.",
    image: "path/to/lab-image-2.jpg"
  },
  {
    title: "Research-Driven Medical Laboratory",
    description: "Leading innovation in clinical diagnostics through continuous research and development.",
    image: "path/to/lab-image-3.jpg"
  }
];

function Hero() {
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi | null>(null);

  const arrowImgRef = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
    gsap.to(arrowImgRef.current, {
      y: -20,
      duration: 1,
      ease: "power2",
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <section className="relative h-full md:h-[100vh] grid grid-cols-1 items-center md:bg-contain bg-cover bg-repeat-x w-full bg-[url('https://azim.commonsupport.com/Laborex/assets/images/shape/shape-33.png')]">
      <img
        className="absolute z-0 top-32"
        src="https://azim.commonsupport.com/Laborex/assets/images/shape/shape-36.png"
        alt="dotted-line-svg"
      />
      <img
        className="absolute z-0 bottom-20 right-0"
        src="https://azim.commonsupport.com/Laborex/assets/images/shape/shape-39.png"
        alt=""
      />

      <img
        ref={arrowImgRef}
        className="absolute z-0 top-32 left-[50%]"
        src="https://azim.commonsupport.com/Laborex/assets/images/shape/shape-37.png"
        alt=""
      />
      <Carousel
        setApi={setCarouselApi}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        opts={{
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 6 }).map((_, i) => (
            <CarouselItem key={`slide-${i}`} className="">
              <Slide index={i} carouselApi={carouselApi} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute top-[90%] md:-bottom-52 w-[80%] translate-x-[12%]">
        <DetailsSection />
      </div>
    </section>
  );
}

function Slide({
  index,
  carouselApi,
}: {
  index: number;
  carouselApi: CarouselApi | null;
}) {
  const boxRef1 = useRef(null);
  const boxRef2 = useRef<HTMLDivElement | null>(null);

  const animateSlide = useCallback(() => {
    if (boxRef1.current && boxRef2.current) {
      gsap.killTweensOf([boxRef1.current.children, boxRef2.current]);

      const elements = gsap.utils.toArray<HTMLDivElement>(
        boxRef1.current.children
      );

      gsap.set(elements, {
        y: (index) => index + 50,
        opacity: 0,
      });

      gsap.set(boxRef2.current, {
        x: 100,
        opacity: 0,
      });

      // Animate children of boxRef1
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.4,
        ease: "power2.out",
      });
      setTimeout(() => {
        gsap.to(elements, {
          opacity: 0,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        });
      }, 3000);

      // Animate boxRef2
      gsap.to(boxRef2.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });

      setTimeout(() => {
        gsap.to(boxRef2.current, {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      }, 3000);
    }
  }, []);

  // effect to run animation when carousel changes
  useEffect(() => {
    if (carouselApi) {
      const handleSelect = () => {
        animateSlide();
      };

      carouselApi.on("select", handleSelect);

      // Initial animation
      animateSlide();

      return () => {
        carouselApi.off("select", handleSelect);
      };
    }
  }, [carouselApi, animateSlide]);

  return (
    <div
      key={`slide-container-${index}`}
      className="container grid grid-cols-1 md:grid-cols-2 gap-6 py-32 items-center z-10"
    >
      <div
        ref={boxRef1}
        className="flex flex-col items-start justify-between space-y-10"
      >
        <h1 className="font-heading opacity-0 font-bold text-4xl md:text-6xl capitalize text-black">
          we are responsible for the safety of cosmetics testing{" "}
        </h1>
        <p className="font-body opacity-0 font-regular w-[80%] text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex
          eveniet quo modi
        </p>
        <div className="grid opacity-0 grid-cols-1 md:grid-cols-2 items-center gap-6">
          <CustomButton renderText="our services" />
          <CustomButton renderText="discover" />
        </div>
      </div>
      <img
        ref={boxRef2}
        className="h-full md:h-[75vh] opacity-0 w-auto bg-contain"
        src="https://azim.commonsupport.com/Laborex/assets/images/banner/banner-img-8.png"
        alt=""
      />
    </div>
  );
}

export default Hero;
