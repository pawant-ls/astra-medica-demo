import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../shadcn/carousel";
import { StarIcon } from "lucide-react";

function TestimonialsAbout() {
  return (
    <section className=" px-0 py-8 sm:py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-start w-full bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="h-[300px] md:h-auto">
          <img
            src="https://azim.commonsupport.com/Laborex/assets/images/background/testimonial-3.jpg"
            alt="lady-with-microscope"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-full space-y-4 p-6 sm:p-8 md:p-10">
          <h6 className="font-heading font-semibold text-sm sm:text-md uppercase text-primary">
            Testimonials
          </h6>
          <h2 className="font-heading font-bold text-start text-black text-2xl sm:text-3xl md:text-4xl">
            What Our Patient Say?
          </h2>
          <div className="pt-6 sm:pt-8 md:pt-10">
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
    <div className="space-y-4 sm:space-y-6 md:space-y-8">
      <div className="flex items-start justify-start gap-1 flex-wrap">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} size={20} className="sm:w-6 sm:h-6" color="#ffab01" fill="#ffab01" />
        ))}
      </div>
      <p className="font-body font-normal text-base sm:text-lg w-full md:w-[90%] lg:w-[80%] text-black">
        Excepteur sint occaecat cupidatat non proident sunt culpa qui officia
        deserunt mollit anim id est laborum. sed spiciatis unde omnis natus
        error Inventore.
      </p>
      <div className="flex items-center justify-start gap-4">
        <img
          src="https://azim.commonsupport.com/Laborex/assets/images/resource/testimonial-1.png"
          alt="user-img"
          className="w-12 h-12 sm:w-14 sm:h-14"
        />
        <div>
          <h6 className="font-heading font-semibold text-base sm:text-lg">Robert</h6>
          <p className="font-body text-primary text-sm sm:text-md uppercase">NYC</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAbout;
