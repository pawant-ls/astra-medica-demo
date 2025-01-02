import { FlaskConicalIcon, FlaskRoundIcon, MicroscopeIcon } from "lucide-react";
import CustomButton from "../ui/CustomButton";
import { NumberTicker } from "../magicui/number-ticker";

function ClinicalService() {
  return (
    <section className="py-48 pb-80 flex flex-col items-center justify-center space-y-8">
      <h6 className="font-heading font-semibold text-md uppercase text-primary">
        Clinical Services
      </h6>
      <h2 className="font-heading font-bold text-center text-black text-4xl">
        Explore Our Main Services.
      </h2>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <ClinicalServiceCard key={"hello" + i} />
        ))}
      </div>
      <CustomButton renderText="more services" />
      <div className="h-[40vh] bg-[url('https://azim.commonsupport.com/Laborex/assets/images/background/funfact-1.jpg')] container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <NumbersCard key={"hello" + i} />
        ))}
      </div>
    </section>
  );
}

const NumbersCard = () => {
  return (
    <div className="flex items-center justify-start gap-4 md:border-r last:border-none border-white">
      <MicroscopeIcon size={84} color="#22b6af" />
      <div>
        <h6 className="font-heading font-bold text-[50px] text-black">
          <NumberTicker value={320} />+
        </h6>
        <p className="font-body text-gray-600 text-md uppercase">
          Permanent Staff
        </p>
      </div>
    </div>
  );
};

const ClinicalServiceCard = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-7 p-8 shadow-lg rounded-3xl">
      <div className="relative">
        <div className="absolute -bottom-16 right-20 flex justify-center items-center p-8 bg-primary rounded-full">
          <FlaskConicalIcon size={38} color="#fafafa" />
        </div>
        <img
          src="https://azim.commonsupport.com/Laborex/assets/images/service/service-1.jpg"
          alt="women viewing microscope"
          className=""
        />
      </div>

      <p className="font-body text-md font-normal text-black/50 text-center pt-12">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
        maxime odio facilis recusandae sit.
      </p>
      <CustomButton renderText="Read More" />
    </div>
  );
};

export default ClinicalService;
