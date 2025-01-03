import { MapPin } from "lucide-react";
import CustomButton from "../ui/CustomButton";

function Footer() {
  return (
    <footer className="">
      <div className="md:h-[40vh] h-[50vh] bg-primary flex items-center justify-center">
        <div className="container flex-col md:flex-row flex md:items-center items-start justify-between gap-6">
          <h2 className="font-heading font-bold text-white text-4xl md:w-[50%] w-full">
            Accurate Product Testing by Expert Scientists
          </h2>
          <CustomButton
            renderText="book free sampling here"
            className="bg-white !text-black hover:!text-white"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-20 md:py-32 py-12 bg-primary/10 md:px-20 px-4">
        <div className="flex flex-col items-start space-y-4">
          <h2 className="font-heading font-bold text-black text-4xl pb-4">
            Astra Medica
          </h2>
          <p className="text-black/50">
            Astra Medica is a leading provider of medical testing services
          </p>
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-start gap-2">
              <MapPin />
              <p>Flat 20, Reynolds Neck, FV77 8WS</p>
            </div>
            <div className="flex items-start gap-2">
              <MapPin />
              <p>Flat 20, Reynolds Neck, FV77 8WS</p>
            </div>
            <div className="flex items-start gap-2">
              <MapPin />
              <p>Flat 20, Reynolds Neck, FV77 8WS</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start space-y-4">
          <h2 className="font-heading font-bold text-black text-2xl pb-4">
            Latest Events
          </h2>
          <p className="text-black hover:text-primary cursor-pointer">
            Astra Medica is a leading provider of medical testing services
          </p>
          <p className="text-black hover:text-primary cursor-pointer">
            Astra Medica is a leading provider of medical testing services
          </p>
          <p className="text-black hover:text-primary cursor-pointer">
            Astra Medica is a leading provider of medical testing services
          </p>
        </div>

        <div className="flex flex-col items-start space-y-4">
          <h2 className="font-heading font-bold text-black text-2xl pb-4">
            Usefull Link
          </h2>
          <p className="text-black hover:text-primary cursor-pointer">About</p>
          <p className="text-black hover:text-primary cursor-pointer">
            services
          </p>
          <p className="text-black hover:text-primary cursor-pointer">
            how it works
          </p>
          <p className="text-black hover:text-primary cursor-pointer">
            contact us
          </p>
        </div>

        <div className="flex flex-col items-start space-y-4">
          <h2 className="font-heading font-bold text-black text-2xl pb-4">
            Subscribe
          </h2>
          <p className="text-black hover:text-primary cursor-pointer">
            Lorem ipsum dlor sit amet, conect adipisicing elit sed do eiusmod.
          </p>
          <CustomButton renderText="Contact Us" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
