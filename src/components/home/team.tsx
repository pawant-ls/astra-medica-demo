function OurTeam() {
  return (
    <section className="flex flex-col py-40 items-center justify-center space-y-4 pt-40">
      <h6 className="font-heading font-semibold text-md uppercase text-primary">
        Team Member
      </h6>
      <h2 className="font-heading font-bold text-black text-4xl">
        Focusing Your Mind, with The Best Expert.
      </h2>
      <div className="container px-10 pt-10 grid grid-cols-3 items-center gap-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <TeamCard key={i} />
        ))}
      </div>
    </section>
  );
}

const TeamCard = () => {
  return (
    <div className="relative">
      <div className="bg-primary overflow-hidden h-[60vh] rounded-tr-[50%] rounded-tl-[50%] rounded-bl-[50%] rounded-br-3xl">
        <img
          src="https://azim.commonsupport.com/Laborex/assets/images/resource/testimonial-1.jpg"
          alt="team-img1"
          className="object-cover bg-cover scale-150"
        />
      </div>
      <div className="-mt-32 absolute flex flex-col items-center justify-center space-y-4 left-10 rounded-[50px] h-[28vh] w-[80%] bg-white shadow-2xl p-8">
        <h6 className="font-heading font-bold text-xl capitalize">Dr. Gerard Butler</h6>
        <p className="font-body font-normal text-mg capitalize text-black/50">PHD Student</p>
      </div>
    </div>
  );
};

export default OurTeam;
