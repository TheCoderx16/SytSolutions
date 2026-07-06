export const navItems = [
  { name: "Work", link: "#work" },
  { name: "Services", link: "#services" },
  { name: "About", link: "#about" },
];

/** Used by `components/Grid.tsx` if re-enabled on the homepage. */
export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    video: "/testing.MOV",
    spareImg: "",
  },
];

/** Retained for `components/RecentProjects.tsx` if re-enabled; empty by default. */
export const projects = [] as {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  gitLink: string;
}[];

export const socialMedia = [
  {
    id: 1,
    name: "Instagram",
    link: "#",
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "#",
  },
];

