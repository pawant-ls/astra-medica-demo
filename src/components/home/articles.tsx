import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../shadcn/carousel";
import CustomButton from "../ui/CustomButton";

type Article = {
  title: string;
  author: string;
  description: string;
  image: string;
};

const articles: Article[] = [
  {
    title: "Advances in Molecular Diagnostics for Cancer Detection",
    author: "Dr. Robert Chen",
    description:
      "New developments in molecular diagnostic techniques are revolutionizing early cancer detection and treatment planning.",
    image:
      "https://azim.commonsupport.com/Laborex/assets/images/resource/chooseus-2.jpg",
  },
  {
    title: "The Role of Clinical Laboratory in COVID-19 Testing",
    author: "Dr. Lisa Thompson",
    description:
      "How modern laboratories are adapting to meet the challenges of pandemic testing requirements.",
    image:
      "https://azim.commonsupport.com/Laborex/assets/images/news/news-5.jpg",
  },
  {
    title: "Automation in Clinical Laboratory Testing",
    author: "Dr. James Wilson",
    description:
      "Exploring how automation technology is improving accuracy and efficiency in medical testing.",
    image:
      "https://azim.commonsupport.com/Laborex/assets/images/news/news-4.jpg",
  },
];

function Articles() {
  return (
    <section className="flex container flex-col md:py-40 py-12 px-4 md:items-start items-center justify-start space-y-4">
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
          {articles.map((article, i) => (
            <CarouselItem key={i} className=" md:basis-1/2 lg:basis-1/2">
              <ArticlesCard {...article} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

const ArticlesCard = ({ title, author, description, image }: Article) => {
  return (
    <div className=" grid md:grid-cols-2 grid-cols-1 items-start justify-start gap-8 bg-white rounded-[50px] shadow-lg">
      <div>
        <img
          src={image}
          alt="professional-with-microscope"
          className="bg-cover object-cover rounded-l-[50px] w-full h-[50vh]"
        />
      </div>
      <div className="pt-10 space-y-6">
        <p className="font-heading font-bold text-2xl md:w-[80%] w-full text-black">
          {title}
        </p>
        <p className="font-body font-normal text-md md:w-[80%] w-full text-black/80">
          {author}, 3comments
        </p>
        <p className="font-body font-normal text-sm md:w-[80%] w-full text-black/80">
          {description}
        </p>
        <CustomButton renderText="read more" />
      </div>
    </div>
  );
};

export default Articles;
