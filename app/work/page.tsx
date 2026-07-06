"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import MagicButton from "@/components/MagicButton";
import Footer from "@/components/Footer";

const videos = [
  {
    title: "McLaren Commercial",
    embed: "https://www.youtube.com/embed/0jclyF883RY",
    blurb: "A cinematic automotive spot built around presence, power, and restraint.",
  },
  {
    title: "SaaS Commercial",
    embed: "https://www.youtube.com/embed/L4IHg2Nl7gQ",
    blurb: "A clear, story-driven commercial that turns a product into a narrative.",
  },
];

const upcoming = [
  {
    title: "Short Film",
    img: "/work/short-film.jpeg",
  },
  {
    title: "Upcoming Music Video",
    img: "/work/upcoming-music-video.jpeg",
  },
];

const WorkPage = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
      <div className="w-full">
        <FloatingNav navItems={navItems} />

        <section className="w-full pt-36 pb-10 relative z-10">
          <h1 className="heading px-4">
            Our <span className="text-purple">Work</span>
          </h1>
          <p className="text-center text-white-200 max-w-3xl mx-auto mt-6 px-4 text-base md:text-lg">
            A selection of projects that show how we think: story first, every
            frame deliberate.
          </p>
        </section>

        <section className="w-full pb-10 relative z-10">
          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto px-4">
            {videos.map((video) => (
              <div
                key={video.title}
                className="rounded-2xl border border-white/[0.08] bg-black-200/30 p-6"
              >
                <iframe
                  src={video.embed}
                  title={video.title}
                  className="aspect-video w-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
                <h3 className="mt-5 text-lg md:text-xl font-semibold text-white">
                  {video.title}
                </h3>
                <p className="mt-2 text-white-200 text-sm md:text-base">
                  {video.blurb}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full py-10 relative z-10">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white">
            Upcoming <span className="text-purple">Projects</span>
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 max-w-6xl mx-auto px-4">
            {upcoming.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-white/[0.08] bg-black-200/30 p-6"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="aspect-video w-full object-cover rounded-lg"
                />
                <div className="mt-5 flex items-center justify-between gap-3">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <span className="uppercase tracking-widest text-xs text-purple whitespace-nowrap">
                    Coming soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full py-10 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 px-4">
            <a href="/#contact" className="w-full md:w-auto">
              <MagicButton
                title="Start Your Project"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="/" className="w-full md:w-auto">
              <MagicButton
                title="Back to Home"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default WorkPage;
