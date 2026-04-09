const packageItems = [
  "In-Depth Market & Conversion Research",
  "Guaranteed Conversion-Focused Scripting",
  "Full Cinematic Production (Elite Crew & Equipment)",
  "High-Impact Editing & Color Grading",
  "Strategic Ad Optimization & Scaling Guidance",
];

const ServicesSection = () => {
  return (
    <section className="w-full py-20 relative z-10" id="services">
      <h2 className="heading">
        <span className="text-purple">Services</span>
      </h2>
      <p className="text-center text-white mt-6 text-lg md:text-xl font-semibold max-w-3xl mx-auto px-4">
        The Premium Performance Ad Film Package (Starting at ₹5,00,000)
      </p>
      <p className="text-center text-white-200 mt-4 text-sm md:text-base">
        Everything required for a high-ROI campaign:
      </p>
      <ul className="mt-10 max-w-xl mx-auto space-y-4">
        {packageItems.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-white-200 text-sm md:text-base border border-white/[0.06] rounded-xl px-4 py-3 bg-black-200/20"
          >
            <span className="text-purple shrink-0">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServicesSection;
