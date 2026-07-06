const teamMembers = [
  "Zaid Ahmed — Creative Director / Founder",
  "Faiz — AI Visual Specialist",
  "Yuvraj Poonia — Director",
  "Abhishek Hudda — Assistant Director",
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
      <div className="mt-12 max-w-2xl mx-auto">
        <h3 className="text-center text-xl font-semibold text-white mb-6">
          The Team
        </h3>
        <ul className="space-y-4">
          {teamMembers.map((line) => (
            <li
              key={line}
              className="flex gap-3 text-white-200 text-sm md:text-base leading-relaxed"
            >
              <span className="text-purple shrink-0 mt-1">—</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
