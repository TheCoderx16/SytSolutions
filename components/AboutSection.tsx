const edges = [
  "Data-Driven Strategic Scripting (Not just creative ideas)",
  "World-Class Cinematic Storytelling (Built-in authority)",
  "Performance-Obsessed Editing (Every second is an optimization)",
];

const AboutSection = () => {
  return (
    <section className="w-full py-20 relative z-10" id="about">
      <h2 className="heading">
        About <span className="text-purple">SYT Solutions</span>
      </h2>
      <div className="max-w-3xl mx-auto mt-10 space-y-6 text-white-200 text-center text-sm md:text-lg leading-relaxed">
        <p>
          SYT Solutions is a specialist video performance agency. Our sole focus
          is maximizing your return on ad spend.
        </p>
        <p>
          We don&apos;t create &quot;content.&quot; We build revenue infrastructure.
        </p>
      </div>
      <div className="mt-12 max-w-2xl mx-auto">
        <h3 className="text-center text-xl font-semibold text-white mb-6">
          Our Edge
        </h3>
        <ul className="space-y-4">
          {edges.map((line) => (
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
