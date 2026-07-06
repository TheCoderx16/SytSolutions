import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";

const FinalCta = () => {
  return (
    <section className="w-full py-20 relative z-10">
      <div className="max-w-3xl mx-auto text-center px-4">
        <p className="text-white-200 text-base md:text-lg leading-relaxed">
          If you&apos;re serious about creating work that actually makes an
          impact, we&apos;re ready.
        </p>
        <h2 className="heading mt-8 !text-3xl md:!text-4xl lg:!text-5xl">
          Let&apos;s Build Something{" "}
          <span className="text-purple">That Stands Out</span>
        </h2>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="#contact" className="w-full md:w-auto">
            <MagicButton
              title="Start Your Project"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <a href="mailto:sytagency.info@gmail.com" className="w-full md:w-auto">
            <MagicButton
              title="Contact Us"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
