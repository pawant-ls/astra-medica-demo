import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  name: string;
  position: string;
  image: string;
  socialLinks: {
    facebook?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const teamData: TeamMember[] = [
  {
    name: "Dr. Sarah Johnson",
    position: "Chief Laboratory Officer",
    image:
      "https://azim.commonsupport.com/Laborex/assets/images/resource/testimonial-1.jpg",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Dr. Michael Chen",
    position: "Senior Researcher",
    image:
      "https://azim.commonsupport.com/Laborex/assets/images/gallery/project-2.jpg",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Dr. Emily Rodriguez",
    position: "Lab Director",
    image:
      "https://azim.commonsupport.com/Laborex/assets/images/gallery/project-3.jpg",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
];

interface TeamCardProps {
  name: string;
  position: string;
  image: string;
}

function OurTeam() {
  const elRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(elRef.current?.children || []);

    gsap.set(cards, {
      y: 20,
      opacity: 0,
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
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="flex flex-col py-40 items-center justify-center space-y-4 pt-40 px-4"
    >
      <h6 className="font-heading font-semibold text-md uppercase text-primary">
        Team Member
      </h6>
      <h2 className="font-heading font-bold text-black text-4xl">
        Focusing Your Mind, with The Best Expert.
      </h2>
      <div
        ref={elRef}
        className="container md:px-10 pt-10 grid md:grid-cols-3 grid-cols-1 items-center md:gap-10 gap-36"
      >
        {teamData.map((member, i) => (
          <TeamCard
            key={i}
            name={member.name}
            position={member.position}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
}

const TeamCard = ({ name, position, image }: TeamCardProps) => {
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
        scale: 20,
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
      className="relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-transparent overflow-hidden h-[30vh] md:h-[60vh] rounded-tr-[50%] rounded-tl-[50%] rounded-bl-[50%] rounded-br-3xl">
        <img
          src={image}
          alt={name}
          className={cn(
            "object-cover bg-cover scale-150 z-0",
            hovered && "scale-[1.6] transition-all duration-1000"
          )}
        />
      </div>
      <div className="md:-mt-32 -mt-12 absolute flex flex-col items-center justify-center space-y-4 left-10 rounded-[50px] md:h-[28vh] h-[20vh] w-[80%] bg-white shadow-2xl p-8">
        <h6
          className={cn(
            "font-heading font-bold text-xl capitalize z-10 transition-all duration-500 text-black"
          )}
        >
          {name}
        </h6>
        <p
          className={cn(
            "font-body font-normal text-mg text-black/50 capitalize z-10 transition-all duration-500"
          )}
        >
          {position}
        </p>
        <div className="flex items-center justify-center gap-4 z-10">
          <a href="#" className={cn("transition-colors text-black/50")}>
            <Facebook size={20} />
          </a>
          <a href="#" className={cn("transition-colors text-black/50")}>
            <Linkedin size={20} />
          </a>
          <a href="#" className={cn("transition-colors text-black/50")}>
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
