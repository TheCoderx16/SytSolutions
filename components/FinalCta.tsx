import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";

const FinalCta = () => {
  return (
    <section className="w-full py-20 relative z-10">
      <div className="max-w-3xl mx-auto text-center px-4">
        <p className="text-white-200 text-base md:text-lg leading-relaxed">
          Stop wasting money on ads that look good but do nothing. Your
          competition is watching.
        </p>
        <h2 className="heading mt-8 !text-3xl md:!text-4xl lg:!text-5xl">
          Let&apos;s Engineer Your Next{" "}
          <span className="text-purple">7-Figure Campaign.</span>
        </h2>
        <a href="#contact" className="inline-block mt-10">
          <MagicButton
            title="Book a High-Value Strategy Session"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </section>
  );
};

export default FinalCta;
