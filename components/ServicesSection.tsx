const deliverableGroups = [
  {
    title: "Strategy & Creative",
    items: [
      "In-Depth Market & Conversion Research",
      "Guaranteed Conversion-Focused Scripting",
    ],
  },
  {
    title: "Production & Delivery",
    items: [
      "Full Cinematic Production (Elite Crew & Equipment)",
      "High-Impact Editing & Color Grading",
      "Strategic Ad Optimization & Scaling Guidance",
    ],
  },
];

let deliverableCounter = 0;
const deliverableGroupsWithNumbers = deliverableGroups.map((group) => ({
  ...group,
  items: group.items.map((item) => {
    deliverableCounter += 1;
    return {
      label: item,
      number: String(deliverableCounter).padStart(2, "0"),
    };
  }),
}));

const ServicesSection = () => {
  return (
    <section className="w-full py-24 md:py-28 relative z-10" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <p className="eyebrow">Our flagship package</p>
        <h2 className="heading mt-3">
          <span className="text-purple">Services</span>
        </h2>

        <div className="mt-12 md:mt-14 rounded-2xl border border-white/[0.08] bg-black-200/20 p-8 md:p-12">
          <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h3 className="font-sans font-bold text-2xl md:text-3xl text-white tracking-wide leading-snug">
                Premium Performance Ad Film Package
              </h3>
              <p className="mt-4 text-3xl md:text-4xl font-semibold text-white tabular-nums">
                Starting at ₹5,00,000
              </p>
              <p className="mt-4 text-white-200 text-sm md:text-base leading-relaxed">
                Everything required for a high-ROI campaign — from research and
                scripting through production, post, and ad optimization.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-purple transition-colors hover:text-white"
              >
                Discuss your project
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="space-y-8">
              {deliverableGroupsWithNumbers.map((group) => (
                <div key={group.title}>
                  <p className="text-xs uppercase tracking-widest text-purple font-medium mb-4">
                    {group.title}
                  </p>
                  <ul className="space-y-3">
                    {group.items.map(({ label, number }) => (
                      <li
                        key={label}
                        className="group flex gap-4 border-l border-white/[0.08] pl-4 py-2 transition-colors hover:border-purple/50"
                      >
                        <span className="shrink-0 font-mono text-xs text-purple/70 tabular-nums pt-0.5">
                          {number}
                        </span>
                        <span className="text-white-200 text-sm md:text-base group-hover:text-white transition-colors">
                          {label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
