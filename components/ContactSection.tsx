import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";

const ContactSection = () => {
  return (
    <section className="w-full py-20 relative z-10" id="contact">
      <h2 className="heading px-4">
        Contact <span className="text-purple">Us</span>
      </h2>
      <h3 className="text-center text-xl md:text-2xl font-semibold text-white mt-8 px-4">
        Let&apos;s Create Something Exceptional
      </h3>
      <p className="text-center text-white-200 max-w-3xl mx-auto mt-6 px-4 text-base md:text-lg leading-relaxed">
        Whether you&apos;re planning a commercial, music video, brand film, or a
        complete visual campaign, we&apos;re here to bring your vision to life.
        Tell us about your project, and we&apos;ll get back to you as soon as
        possible.
      </p>
      <div className="text-center mt-8">
        <p className="uppercase tracking-widest text-xs text-purple">Email</p>
        <a
          href="mailto:sytagency.info@gmail.com"
          className="text-white font-medium text-base md:text-lg hover:text-purple"
        >
          sytagency.info@gmail.com
        </a>
        <p className="text-white-200 text-sm mt-2">
          We typically respond within{" "}
          <span className="text-white font-semibold">24 hours</span>.
        </p>
      </div>
      <div className="flex justify-center mt-6">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sytagency.info@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="Contact Us"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
