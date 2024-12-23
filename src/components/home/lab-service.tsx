import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../shadcn/tabs";
import {
  Atom,
  FlaskConical,
  FlaskConicalIcon,
  LucideFlaskConical,
  MicroscopeIcon,
  TestTube,
  TestTube2Icon,
  TestTubeIcon,
} from "lucide-react";
import CustomButton from "../ui/CustomButton";

function LabService() {
  return (
    <section className="flex flex-col py-40 items-center justify-center space-y-10 bg-gradient-to-r from-primary/15 via-primary/25 to-primary/60">
      <h6 className="font-heading font-semibold text-md uppercase text-primary">
        Laboratory Services
      </h6>
      <h2 className="font-heading font-bold text-black text-4xl text-center">
        Reliable & High-Quality
        <br /> Laboratory Service
      </h2>
      <Tabs defaultValue="mTesting">
        <TabsList className="my-32 flex items-center justify-center gap-6">
          <TabsTrigger
            value="mTesting"
            className="px-10 py-8 flex flex-col items-center rounded-lg justify-center gap-4 hover:bg-primary hover:text-white"
          >
            <div className="p-8 bg-primary/10 rounded-full  hover:bg-white hover:text-white">
              <MicroscopeIcon color="#22b6af" size={48} />
            </div>
            Molecular Testing
          </TabsTrigger>
          <TabsTrigger
            className="px-10 py-8 flex flex-col items-center rounded-lg justify-center gap-4 hover:bg-primary hover:text-white"
            value="testingTraces"
          >
            <div className="p-8 bg-primary/10 rounded-full  hover:bg-white hover:text-white">
              <FlaskConicalIcon color="#22b6af" size={48} />
            </div>
            Testing for Traces
          </TabsTrigger>
          <TabsTrigger
            className="px-10 py-8 flex flex-col items-center rounded-lg justify-center gap-4 hover:bg-primary hover:text-white"
            value="mbTests"
          >
            <div className="p-8 bg-primary/10 rounded-full  hover:bg-white hover:text-white">
              <TestTube2Icon color="#22b6af" size={48} />
            </div>
            Microbiology Tests
          </TabsTrigger>
          <TabsTrigger
            className="px-10 py-8 flex flex-col items-center rounded-lg justify-center gap-4 hover:bg-primary hover:text-white"
            value="bcTests"
          >
            <div className="p-8 bg-primary/10 rounded-full  hover:bg-white hover:text-white">
              <TestTubeIcon color="#22b6af" size={48} />
            </div>
            Biochemistry Tests
          </TabsTrigger>
          <TabsTrigger
            className="px-10 py-8 flex flex-col items-center rounded-lg justify-center gap-4 hover:bg-primary hover:text-white"
            value="hsTests"
          >
            <div className="p-8 bg-primary/10 rounded-full  hover:bg-white hover:text-white">
              <MicroscopeIcon color="#22b6af" size={48} />
            </div>
            Histopatology Tests
          </TabsTrigger>
        </TabsList>
        <TabsContent value="mTesting">
          <TabsCont />
        </TabsContent>
        <TabsContent value="testingTraces">
          <TabsCont />
        </TabsContent>
        <TabsContent value="mbTests">
          <TabsCont />
        </TabsContent>
        <TabsContent value="bcTests">
          <TabsCont />
        </TabsContent>
        <TabsContent value="hsTests">
          <TabsCont />
        </TabsContent>
      </Tabs>
    </section>
  );
}

const TabsCont = () => {
  return (
    <section className="container grid grid-cols-2 items-start gap-8 px-32">
      {/* section2 */}
      <div className="flex flex-col items-start justify-start space-y-4">
        <h2 className="font-heading font-bold text-black text-4xl">
          Reliable Agroscience & Soil Analysis Research.
        </h2>
        <p className="font-body font-normal text-lg text-black">
          Excepteur sint occaecat cupidatat non proident sunt culpa qui officia
          deserunt mollit anim id est laborum. sed spiciatis unde omnis natus
          error Inventore.
        </p>
        <CustomButton renderText="our services" />
      </div>
      {/* section1 */}
      <div className="flex overflow-hidden relative h-[80vh]">
        <img
          src="https://azim.commonsupport.com/Laborex/assets/images/resource/about-2.jpg"
          alt=""
          className="absolute bottom-10 left-10 z-[1]  rounded-[48px]"
        />
        <img
          src="https://azim.commonsupport.com/Laborex/assets/images/resource/about-1.jpg"
          alt=""
          className="absolute z-10 top-10 right-0  rounded-[48px] border-8 border-white"
        />

        <img
          src="https://azim.commonsupport.com/Laborex/assets/images/shape/shape-40.png"
          alt=""
          className="h-[24vh] absolute bottom-0 left-0"
        />
        <img
          src="https://azim.commonsupport.com/Laborex/assets/images/shape/shape-40.png"
          alt=""
          className="h-[24vh] absolute bottom-10 right-0"
        />
      </div>
    </section>
  );
};

export default LabService;
