"use client";

import { Clock10Icon, LocateIcon, Plus } from "lucide-react";
import { AvatarCircles } from "../magicui/avatar-circles";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
];

interface EventCardProps {
  date: {
    day: string;
    month: string;
  };
  title: string;
  time: string;
  location: string;
  attendees: number;
}

const eventData: EventCardProps[] = [
  {
    date: { day: "20", month: "Mar" },
    title: "Laboratory Techniques Workshop",
    time: "10:00 AM - 12:30 PM",
    location: "Medical Center, New York",
    attendees: 45
  },
  {
    date: { day: "25", month: "Mar" },
    title: "Clinical Research Conference",
    time: "09:00 AM - 05:00 PM",
    location: "Medical Plaza, Boston",
    attendees: 120
  },
  {
    date: { day: "02", month: "Apr" },
    title: "Molecular Biology Symposium",
    time: "02:00 PM - 06:00 PM",
    location: "Life Sciences Lab, Chicago",
    attendees: 75
  },
  {
    date: { day: "15", month: "Apr" },
    title: "Healthcare Innovation Summit",
    time: "10:00 AM - 04:00 PM",
    location: "Medical Hub, San Francisco",
    attendees: 150
  }
];

function OurEvents() {
  const elRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(elRef.current?.children || []);
    
    gsap.set(cards, { 
      y: 40,
      opacity: 0 
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
        duration: 0.2,
        delay: index * 0.1,
        ease: "power3.out"
      });
    });
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="relative py-12 md:py-48 flex flex-col items-center justify-center space-y-8 bg-[url('https://azim.commonsupport.com/Laborex/assets/images/shape/shape-47.png')] bg-contain bg-repeat-y"
    >
      <img
        className="absolute z-0 top-0 right-0"
        src="https://azim.commonsupport.com/Laborex/assets/images/shape/shape-12.png"
        alt=""
      />
      <img
        className="absolute z-0 bottom-0 left-0"
        src="https://azim.commonsupport.com/Laborex/assets/images/shape/shape-45.png"
        alt=""
      />
      <h6 className="font-heading font-semibold text-md uppercase text-primary">
        Our Events
      </h6>
      <h2 className="font-heading font-bold text-center text-black text-4xl">
        Publication Opportunity in Conference <br /> Associated Event
      </h2>
      <div
        ref={elRef}
        className="container gap-40 md:gap-4 grid md:grid-cols-4 grid-cols-1 pt-16"
      >
        {eventData.map((event, i) => (
          <EventsCard key={i} {...event} />
        ))}
      </div>
    </section>
  );
}

const EventsCard = ({ date, title, time, location, attendees }: EventCardProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center h-[60vh] rounded-[50px] p-10 bg-white hover:shadow-2xl transition-all duration-700">
      {/* top circle */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-14 shadow-xl bg-white rounded-full h-32 w-32 flex items-center justify-center">
        <div className="h-28 w-28 bg-[#f2f3f5] rounded-full flex items-center justify-center">
          <div className="font-heading font-semi-bold text-2xl text-primary text-center">
            {date.day}
            <br />
            {date.month}
          </div>
        </div>
      </div>
      {/* top circle end */}
      <div className="grid grid-cols-1 items-start space-y-3 gap-2">
        <p className="font-heading font-bold capitalize text-2xl">
          {title}
        </p>
        <div className="flex items-start justify-start gap-2">
          <Clock10Icon />
          {time}
        </div>
        <div className="flex items-start justify-start gap-2">
          <LocateIcon />
          {location}
        </div>
        <AvatarCircles numPeople={attendees} avatarUrls={avatars} />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 shadow-2xl bg-white rounded-full h-16 w-16 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-700">
        <Plus size={42} />
      </div>
    </div>
  );
};

export default OurEvents;
