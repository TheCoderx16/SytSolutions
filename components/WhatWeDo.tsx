const offerings = [
  {
    title: "Music Videos",
    line: "Cinematic storytelling for artists.",
  },
  {
    title: "Commercial Ads",
    line: "Ads that hold attention.",
  },
  {
    title: "Brand Films",
    line: "Narrative-driven brand identity.",
  },
  {
    title: "AI Production",
    line: "Next-gen visuals, latest tech.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="w-full py-20 relative z-10">
      <h2 className="heading">
        Cinematic <span className="text-purple">Production</span>
      </h2>
      <p className="text-center text-white-200 max-w-3xl mx-auto mt-6 text-base md:text-lg">
        From concept to final frame, every project is built with intent. We
        focus on creating visuals that{" "}
        <span className="text-white font-medium">
          hold attention, communicate clearly, and leave a lasting impression.
        </span>
      </p>
      <ul className="mt-14 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {offerings.map((item) => (
          <li
            key={item.title}
            className="rounded-2xl border border-white/[0.08] bg-black-200/30 p-6 md:p-8"
          >
            <h3 className="text-lg md:text-xl font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-white-200 text-sm md:text-base">{item.line}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhatWeDo;
