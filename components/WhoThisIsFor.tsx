const verticals = [
  {
    title: "Cinematic Quality",
    body: "Over content clutter. Every frame is deliberate.",
  },
  {
    title: "Small Crew",
    body: "Sharper execution. Agile, focused, and efficient.",
  },
  {
    title: "Modern Workflow",
    body: "Utilizing the latest tech for maximum impact.",
  },
  {
    title: "Story-First",
    body: "Narrative drives the visual, not the other way around.",
  },
];

const WhoThisIsFor = () => {
  return (
    <section className="w-full py-20 relative z-10">
      <h2 className="heading">
        Built <span className="text-purple">Different</span>
      </h2>
      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {verticals.map((v) => (
          <div
            key={v.title}
            className="rounded-2xl border border-white/[0.08] bg-black-200/30 p-6 md:p-8 flex flex-col"
          >
            <h3 className="text-xl font-semibold text-white">{v.title}</h3>
            <p className="mt-4 text-white-200 text-sm md:text-base leading-relaxed flex-1">
              {v.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoThisIsFor;
