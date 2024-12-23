import About from "../home/about";
import SecondaryPageHero from "../secondary-hero";

function AboutComponent() {
  return (
    <main>
      <SecondaryPageHero heroText="About astra medica" />
      <div className="-mt-[20vh]">
      <About />
      </div>
    </main>
  );
}

export default AboutComponent;
