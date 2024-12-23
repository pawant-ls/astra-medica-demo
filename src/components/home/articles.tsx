import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../shadcn/carousel";
import CustomButton from "../ui/CustomButton";
import { Button } from "../shadcn/ShadButton";

function Articles() {
  return (
    <section className="flex container flex-col py-40 items-start justify-start space-y-4">
      <h6 className="font-heading font-semibold text-md uppercase text-primary">
        Recent Article
      </h6>
      <h2 className="font-heading font-bold text-center text-black text-4xl">
        Interesting Articles Updated Every Daily
      </h2>
      <Carousel
        className="pt-12"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="w-full py-10">
          {Array.from({ length: 4 }).map((_, i) => (
            <CarouselItem
              key={i}
              className="basis-10/12 md:basis-1/2 lg:basis-1/2"
            >
              <ArticlesCard />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

const ArticlesCard = () => {
  return (
    <div className=" grid grid-cols-2 items-start justify-start gap-8 bg-white rounded-[50px] shadow-lg">
      <div>
        <img
          src="https://azim.commonsupport.com/Laborex/assets/images/news/news-5.jpg"
          alt="professional-with-microscope"
          className="bg-cover object-cover rounded-l-[50px] w-full h-[40vh]"
        />
      </div>
      <div className="pt-10 space-y-6">
        <p className="font-heading font-bold text-2xl w-[80%] text-black">
          Task force propose colon cancer screening
        </p>
        <p className="font-body font-normal text-md w-[80%] text-black/80">
          by merry lewis, 3comments
        </p>
        <p className="font-body font-normal text-sm w-[80%] text-black/80">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <CustomButton renderText="read more" />
      </div>
    </div>
  );
};

export default Articles;
