function SecondaryPageHero({ heroText }: { heroText: string }) {
  return (
    <section className="mt-10 flex flex-col justify-center items-center h-[50vh] bg-[url('https://azim.commonsupport.com/Laborex/assets/images/background/page-title.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col justify-center items-center h-[20vh] w-[80%] bg-contain bg-no-repeat bg-center bg-[url('https://azim.commonsupport.com/Laborex/assets/images/shape/shape-63.png')]">
        <h6 className="font-heading font-black capitalize text-white text-6xl text-center">
          {heroText}
        </h6>
      </div>
    </section>
  );
}

export default SecondaryPageHero;
