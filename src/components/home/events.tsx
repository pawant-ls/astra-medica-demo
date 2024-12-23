import { Clock10Icon, LocateIcon, Plus } from "lucide-react";
import { AvatarCircles } from "../magicui/avatar-circles";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
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

function OurEvents() {
  const elRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    const el = gsap.utils.toArray(elRef.current);
    gsap.set([...el], { y: 50 });
    gsap.to(el, {
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom center",
        toggleActions: "play none none none",
      },
      y: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 1,
    });
  });
  return (
    <section
      ref={wrapperRef}
      className="py-48 pb-80 flex flex-col items-center justify-center space-y-8 bg-[url('https://azim.commonsupport.com/Laborex/assets/images/shape/shape-47.png')] bg-contain bg-repeat-y"
    >
      <h6 className="font-heading font-semibold text-md uppercase text-primary">
        Our Events
      </h6>
      <h2 className="font-heading font-bold text-center text-black text-4xl">
        Publication Opportunity in Conference <br /> Associated Event
      </h2>
      <div
        ref={elRef}
        className="container gap-4 grid grid-cols-4 pt-16 opacity-0"
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <EventsCard key={i} />
        ))}
      </div>
    </section>
  );
}

const EventsCard = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-[60vh] rounded-[50px] p-10 bg-white hover:shadow-2xl transition-all duration-700">
      {/* top circle */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-14 shadow-xl bg-white rounded-full h-32 w-32 flex items-center justify-center">
        <div className="h-28 w-28 bg-[#f2f3f5] rounded-full flex items-center justify-center">
          <div className="font-heading font-semi-bold text-2xl text-primary text-center">
            20
            <br />
            Mar
          </div>
        </div>
      </div>
      {/* top circle end */}
      <div className="grid grid-cols-1 items-start space-y-3 gap-2">
        <p className="font-heading font-bold capitalize text-2xl">
          project management with scrum
        </p>
        <div className="flex items-start justify-start gap-2">
          <Clock10Icon />
          10 AM - 12:30PM
        </div>
        <div className="flex items-start justify-start gap-2">
          <LocateIcon />
          Panvel, Maharashtra
        </div>
        <AvatarCircles numPeople={99} avatarUrls={avatars} />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 shadow-2xl bg-white rounded-full h-16 w-16 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-700">
        <Plus size={42} />
      </div>
    </div>
  );
};

export default OurEvents;
