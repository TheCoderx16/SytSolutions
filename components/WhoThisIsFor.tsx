const verticals = [
  {
    title: "Hospitals & Clinics",
    body: "Secure patient trust and significantly increase high-value procedure bookings.",
  },
  {
    title: "Coaching Institutes",
    body: "Achieve full, sold-out batches every time.",
  },
  {
    title: "SaaS Companies",
    body: "Drastically lower Customer Acquisition Cost (CAC) and accelerate conversion velocity.",
  },
];

const WhoThisIsFor = () => {
  return (
    <section className="w-full py-20 relative z-10">
      <h2 className="heading">
        Who this is <span className="text-purple">for</span>
      </h2>
      <div className="mt-14 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
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
