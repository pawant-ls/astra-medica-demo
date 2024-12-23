import { ReactNode } from "react";
import HoverCard from "../HoverCard";
import { FlaskConicalIcon, HistoryIcon, MicroscopeIcon } from "lucide-react";

type Card = {
  title: string;
  description: string;
  icon: ReactNode;
};

const cards: Card[] = [
  {
    title: "Laboratory Services",
    description: "Excepteur sint occaecat pro dent sunt in culpa qui officia.",
    icon: <MicroscopeIcon />,
  },
  {
    title: "Professionals Area",
    description: "Excepteur sint occaecat pro dent sunt in culpa qui officia.",
    icon: <FlaskConicalIcon />,
  },
  {
    title: "Opening Hours",
    description: "Excepteur sint occaecat pro dent sunt in culpa qui officia.",
    icon: <HistoryIcon />,
  },
];

function DetailsSection() {
  return (
    <section className="flex items-center justify-center bg-white shadow-2xl rounded-3xl">
      {cards?.map((card, i) => (
        <HoverCard
          heading={card.title}
          para={card.description}
          icon={card.icon}
          key={i}
        />
      ))}
    </section>
  );
}

export default DetailsSection;
