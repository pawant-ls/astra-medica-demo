"use client";

import Autoplay from "embla-carousel-autoplay";
import { StarIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "../shadcn/carousel";

function Testimonials() {
  return (
    <section className="-mt-32 md:translate-x-[14%] translate-x-0 md:w-[80%] w-full">
      <div className="container grid md:grid-cols-2 grid-cols-1 items-center justify-start bg-white rounded-[50px] shadow-2xl">
        <div className="h-full md:space-y-4 p-4 pt-8 md:p-10">
          <h6 className="font-heading font-semibold text-md uppercase text-primary">
            Testimonials
          </h6>
          <h2 className="font-heading font-bold text-start text-black text-4xl">
            What Our Patient Say?
          </h2>
          <div className="pt-10">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              opts={{
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {Array.from({ length: 6 }).map((_, i) => (
                  <CarouselItem key={`slide-${i}`}>
                    <TestimonialsCard />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src="https://azim.commonsupport.com/Laborex/assets/images/resource/testimonial-1.jpg"
            alt="lady-with-microscope"
            className="bg-cover object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
}

const TestimonialsCard = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start justify-start gap-1 flex-wrap">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} size={24} color="#ffab01" fill="#ffab01" />
        ))}
      </div>
      <p className="font-body font-normal text-lg md:w-[80%] text-black">
        Excepteur sint occaecat cupidatat non proident sunt culpa qui officia
        deserunt mollit anim id est laborum. sed spiciatis unde omnis natus
        error Inventore.
      </p>
      <div className="flex items-center justify-start gap-4">
        <img
          src="https://azim.commonsupport.com/Laborex/assets/images/resource/testimonial-1.png"
          alt="user-img"
        />
        <div>
          <h6 className="font-heading font-semibold text-lg">Robert</h6>
          <p className="font-body text-primary text-md uppercase">NYC</p>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    text: "The laboratory's quick turnaround time and accurate results have been crucial for our medical practice. Their molecular diagnostic services are particularly impressive.",
    author: "Dr. Sarah Johnson",
    position: "Chief of Medicine",
    location: "Central Hospital",
    rating: 5
  },
  {
    text: "As a research partner, Astra Pharma's laboratory has provided exceptional support with their state-of-the-art facilities and expert staff.",
    author: "Prof. Michael Chen",
    position: "Research Director",
    location: "Medical Research Institute",
    rating: 5
  },
  {
    text: "Their commitment to quality and precision in pathology testing has significantly improved our diagnostic capabilities.",
    author: "Dr. Emily Rodriguez",
    position: "Pathologist",
    location: "Regional Medical Center",
    rating: 5
  }
];

export default Testimonials;
