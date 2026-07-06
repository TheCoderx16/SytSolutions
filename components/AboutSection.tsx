const teamMembers = [
  {
    name: "Zaid Ahmed",
    role: "Creative Director / Founder",
    img: "/team/zaid.png",
  },
  {
    name: "Faiz",
    role: "AI Visual Specialist",
    img: "/team/faiz.png",
  },
  {
    name: "Yuvraj Poonia",
    role: "Director",
    img: "/team/yuvraj.png",
  },
  {
    name: "Abhishek Hudda",
    role: "Assistant Director",
    img: "/team/abhishek.png",
  },
];

const AboutSection = () => {
  return (
    <section className="w-full py-20 relative z-10" id="about">
      <h2 className="heading">
        The Minds Behind <span className="text-purple">the Lens</span>
      </h2>
      <div className="max-w-3xl mx-auto mt-10 space-y-6 text-white-200 text-center text-sm md:text-lg leading-relaxed">
        <p>
          A compact team focused on cinematic execution, supported by a flexible
          network of specialists.
        </p>
      </div>
      <div className="mt-14 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col">
              <img
                src={member.img}
                alt={member.name}
                className="aspect-[3/4] w-full object-cover rounded-lg"
              />
              <h3 className="mt-4 text-lg md:text-xl font-semibold text-white">
                {member.name}
              </h3>
              <p className="mt-1 uppercase tracking-widest text-xs text-purple">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
