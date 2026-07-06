import { FaInstagram, FaLinkedinIn, FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const socialIcons: Record<string, JSX.Element> = {
  Instagram: <FaInstagram size={20} />,
  LinkedIn: <FaLinkedinIn size={20} />,
};

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-7 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[52vw]">
          SYT <span className="text-purple">SOLUTIONS</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center max-w-xl">
          <a href="mailto:sytagency.info@gmail.com" className="hover:text-purple">
            sytagency.info@gmail.com
          </a>
        </p>
        <a href="mailto:sytagency.info@gmail.com">
          <MagicButton
            title="Book Consultancy"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4 px-4 md:px-8 relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2026 SYT Solutions · Cinema-grade strategy
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              href={info?.link}
              target={"_blank"}
              key={info.id}
              aria-label={info.name}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              {socialIcons[info.name]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
