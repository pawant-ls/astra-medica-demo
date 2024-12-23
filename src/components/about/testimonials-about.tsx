import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../shadcn/carousel";
import { StarIcon } from "lucide-react";

function TestimonialsAbout() {
  return (
    <section className="container">
      <div className=" grid grid-cols-2 items-center justify-start w-full bg-white shadow-2xl">
        <div>
          <img
            src="https://azim.commonsupport.com/Laborex/assets/images/background/testimonial-3.jpg"
            alt="lady-with-microscope"
            className="bg-cover object-cover w-full"
          />
        </div>
        <div className="h-full space-y-4 p-10">
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
      <p className="font-body font-normal text-lg w-[80%] text-black">
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

export default TestimonialsAbout;
