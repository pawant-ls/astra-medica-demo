import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../shadcn/tabs";
import {
  Microscope,
  FlaskConical,
  TestTube2,
  Atom,
  Beaker,
  LucideIcon,
} from "lucide-react";
import CustomButton from "../ui/CustomButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const tabsData = [
  {
    value: "mTesting",
    label: "Molecular Testing",
    icon: Microscope,
  },
  {
    value: "testingTraces",
    label: "Testing for Traces",
    icon: FlaskConical,
  },
  {
    value: "mbTests",
    label: "Microbiology Tests",
    icon: TestTube2,
  },
  {
    value: "bcTests",
    label: "Biochemistry Tests",
    icon: Beaker,
  },
  {
    value: "hsTests",
    label: "Histopatology Tests",
    icon: Atom,
  },
] as const;

type TabContentType = {
  title: string;
  description: string;
  features: string[];
  image: string;
};

const tabContents: Record<(typeof tabsData)[number]["value"], TabContentType> =
  {
    mTesting: {
      title: "Molecular Testing Research",
      description:
        "Our molecular testing services provide comprehensive DNA and RNA analysis using cutting-edge technology and advanced methodologies for precise genetic diagnostics.",
      features: [
        "DNA Sequencing Analysis",
        "PCR Testing",
        "Genetic Mutation Screening",
        "Molecular Diagnostics",
      ],
      image:
        "https://azim.commonsupport.com/Laborex/assets/images/resource/about-2.jpg",
    },
    testingTraces: {
      title: "Testing for Traces Analysis",
      description:
        "Specialized in detecting and analyzing trace elements and compounds with high precision and accuracy for research and diagnostic purposes.",
      features: [
        "Heavy Metal Analysis",
        "Environmental Contaminants",
        "Residue Testing",
        "Trace Element Detection",
      ],
      image:
        "https://azim.commonsupport.com/Laborex/assets/images/resource/about-1.jpg",
    },
    mbTests: {
      title: "Microbiology Testing Lab",
      description:
        "Comprehensive microbiology testing services for identifying and analyzing various microorganisms, ensuring safety and quality control.",
      features: [
        "Bacterial Culture Analysis",
        "Antimicrobial Testing",
        "Fungal Testing",
        "Pathogen Detection",
      ],
      image:
        "https://azim.commonsupport.com/Laborex/assets/images/resource/about-3.jpg",
    },
    bcTests: {
      title: "Biochemistry Analysis Services",
      description:
        "Advanced biochemical testing and analysis services for understanding cellular processes and metabolic functions.",
      features: [
        "Enzyme Analysis",
        "Protein Profiling",
        "Metabolic Testing",
        "Hormone Analysis",
      ],
      image:
        "https://azim.commonsupport.com/Laborex/assets/images/resource/about-4.jpg",
    },
    hsTests: {
      title: "Histopathology Research Lab",
      description:
        "Expert histopathological examination services using state-of-the-art equipment for accurate tissue analysis and disease diagnosis.",
      features: [
        "Tissue Analysis",
        "Cancer Diagnostics",
        "Microscopic Examination",
        "Digital Pathology",
      ],
      image:
        "https://azim.commonsupport.com/Laborex/assets/images/resource/about-5.jpg",
    },
  };

function TabContent({ content }: { content: TabContentType }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const decorImageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      imageRef.current,
      { y: 0 },
      {
        scrollTrigger: {
          trigger: contentRef.current,
          scrub: true,
          toggleActions: "play none none none",
        },
        y: -80,
        duration: 1,
      }
    );

    gsap.fromTo(
      decorImageRef.current,
      { y: 0 },
      {
        scrollTrigger: {
          trigger: contentRef.current,
          scrub: true,
          toggleActions: "play none none none",
        },
        y: 80,
        duration: 1,
      }
    );
  }, [content]); // Re-run when content changes

  return (
    <div
      ref={contentRef}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
    >
      <div className="space-y-6">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy-900">
          {content.title}
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          {content.description}
        </p>
        <ul className="space-y-3">
          {content.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-gray-600 text-sm md:text-base"
            >
              <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <CustomButton renderText="Learn More" />
      </div>
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
        <img
          ref={imageRef}
          src={content.image}
          alt={content.title}
          className="absolute z-10 rounded-3xl border-8 border-white shadow-xl object-cover w-full h-full"
        />
        <img
          ref={decorImageRef}
          src="https://azim.commonsupport.com/Laborex/assets/images/shape/shape-40.png"
          alt=""
          className="absolute bottom-0 left-0 z-0 w-24 md:w-32 lg:w-auto"
        />
      </div>
    </div>
  );
}

function LabService() {
  return (
    <section className="relative flex flex-col py-10 md:py-20 items-center justify-center space-y-6 md:space-y-8 bg-gradient-to-r from-primary/5 to-primary/10 overflow-hidden">
      <img
        className="absolute z-0 top-0 right-0 w-32 md:w-auto"
        src="https://azim.commonsupport.com/Laborex/assets/images/shape/shape-12.png"
        alt=""
      />
      <img
        className="absolute z-0 bottom-0 left-0 w-32 md:w-auto"
        src="https://azim.commonsupport.com/Laborex/assets/images/shape/shape-45.png"
        alt=""
      />
      <h6 className="font-heading font-semibold text-xs md:text-sm uppercase text-primary tracking-wider">
        Laboratory Services
      </h6>
      <h2 className="font-heading font-bold text-navy-900 text-2xl md:text-4xl text-center max-w-2xl px-4">
        Reliable & High-Quality
        <br /> Laboratory Service
      </h2>

      <Tabs
        defaultValue="mTesting"
        className="w-full max-w-5xl mx-auto mt-4 md:mt-8 px-4"
      >
        <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3 p-1 bg-transparent w-full">
          {tabsData.map(({ value, label, icon: Icon }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:translate-y-0 
              flex flex-col items-center justify-center gap-2 md:gap-3 bg-white p-3 md:p-6 rounded-lg shadow-sm 
              hover:bg-primary hover:text-white group transition-all duration-300 ease-in-out
              hover:-translate-y-2 hover:shadow-lg w-full text-center"
            >
              <div
                className="p-2 md:p-3 bg-primary/5 rounded-full 
                group-hover:bg-white/20 group-data-[state=active]:bg-white/20 
                transition-all duration-300 ease-in-out
                group-hover:scale-110 group-data-[state=active]:scale-110"
              >
                <Icon
                  className="w-4 h-4 md:w-6 md:h-6 text-primary group-hover:text-white group-data-[state=active]:text-white 
                  transition-all duration-300 ease-in-out"
                />
              </div>
              <span
                className="font-heading text-xs md:text-sm transition-all duration-300 ease-in-out
                group-hover:font-semibold group-data-[state=active]:font-semibold"
              >
                {label}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="mt-64 md:mt-32 lg:mt-44">
          {tabsData.map(({ value }) => (
            <TabsContent key={value} value={value}>
              <TabContent content={tabContents[value]} />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  );
}

export default LabService;
