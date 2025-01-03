import SecondaryPageHero from "../secondary-hero";
import { MapPin, Phone, Mail } from "lucide-react";

function ContactUs() {
  return (
    <main>
      <SecondaryPageHero heroText="contact us" />
      <div className="flex flex-col items-center justify-center"></div>
      <div className="relative w-full h-[60vh] z-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className=""
        />
        {/*card */}
        <div className="absolute -bottom-80 md:-bottom-28 translate-x-4 md:translate-x-40 bg-blue-900 rounded-xl w-[90%] md:w-[80%] mx-auto z-10 text-white py-16">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Office Location */}
            <div className="flex items-start gap-4">
              <div className="p-4 bg-blue-800/50 rounded-full">
                <MapPin className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Office Location
                </h3>
                <p className="text-gray-300 font-heading">
                  31 park street, 5th Avenue,
                  <br />
                  Dhanmondy, Dhaka.
                </p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-start gap-4">
              <div className="p-4 bg-blue-800/50 rounded-full">
                <Phone className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">
                  Phone Number
                </h3>
                <p className="text-gray-300 font-heading">+31 666 888 0001</p>
                <p className="text-gray-300 font-heading">+31 666 888 0023</p>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex items-start gap-4">
              <div className="p-4 bg-blue-800/50 rounded-full">
                <Mail className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">
                  Email Address
                </h3>
                <p className="text-gray-300 font-heading">info@example.com</p>
                <p className="text-gray-300 font-heading">info@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-48 mt-40 md:mt-0 flex flex-col items-center justify-center space-y-8">
        <h6 className="font-heading font-semibold text-md uppercase text-primary">
          Research Topic
        </h6>
        <h2 className="font-heading font-bold text-center text-black text-4xl">
          Have Any Questins Contact With Us
        </h2>
        <form className="grid grid-cols-12 gap-4 w-[80vw]">
          <input
            type="text"
            placeholder="Full Name"
            className="col-span-6 py-4 px-8 rounded-xl"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="col-span-6 py-4 px-8 rounded-xl"
          />
          <input
            type="text"
            placeholder="Phone"
            className="col-span-6 py-4 px-8 rounded-xl"
          />
          <input
            type="text"
            placeholder="Subject"
            className="col-span-6 py-4 px-8 rounded-xl"
          />
          <textarea
            placeholder="Your Message"
            className="col-span-12 py-4 px-8 rounded-xl"
          ></textarea>
          <button type="submit" className="col-span-12">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}

export default ContactUs;
