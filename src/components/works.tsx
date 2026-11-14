import { useState } from "react";
import Project from "./project";
import ProjectModal from "./project-modal";

import LenteraImage from "../assets/lentera.png";
import BisaraImage from "../assets/bisara.png";
import GoldyOutfitImage from "../assets/goldy-outfit.png";
import PGRIDiyImage from "../assets/pgridiy.png";
import HarjaSmartImage from "../assets/harjasmart.png";
import WebGueImage from "../assets/webgue.png";

type Project = {
  title: string;
  src: string;
  color: string;
  description: string;
  href: string;
};

const projects: Project[] = [
  {
    title: "Lentera",
    src: LenteraImage,
    color: "#EA580C",
    description: "Fullstack Developer",
    href: "https://lentera-uny.web.id",
  },
  {
    title: "Bisara",
    src: BisaraImage,
    color: "#F86650",
    description: "Fullstack Developer",
    href: "https://bisara.web.id",
  },
  {
    title: "Goldy Outfit",
    src: GoldyOutfitImage,
    color: "#18181b",
    description: "Fullstack Developer",
    href: "https://goldyoutfit.co.id",
  },
  {
    title: "PGRI DIY",
    src: PGRIDiyImage,
    color: "#FFFFFF",
    description: "Fullstack Developer",
    href: "https://pgridiy.or.id",
  },
  {
    title: "Harja Smart Greenhouse",
    src: HarjaSmartImage,
    color: "#188653",
    description: "Fullstack Developer",
    href: "https://github.com/Gaks3/harja",
  },
  {
    title: "WebGue",
    src: WebGueImage,
    color: "#FFFFFF",
    description: "Fullstack Developer",
    href: "https://webgue.vercel.app",
  },
];

type Modal = {
  active: boolean;
  index: number;
};

export default function Works() {
  const [modal, setModal] = useState<Modal>({ active: false, index: 0 });

  return (
    <section id="works" className="w-screen min-h-screen bg-background mt-60">
      <div className="grid grid-cols-12 mx-10 mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="170 1245 122 122"
          className="fill-white size-20"
        >
          <polygon
            xmlns="http://www.w3.org/2000/svg"
            points="284.77,1298.29 249.04,1298.29 274.3,1273.03 263.71,1262.43 238.45,1287.69 238.45,1251.97      223.46,1251.97 223.46,1287.69 198.2,1262.43 187.6,1273.03 212.86,1298.29 177.14,1298.29 177.14,1313.27 212.86,1313.27      187.6,1338.53 198.2,1349.13 223.46,1323.87 223.46,1359.59 238.45,1359.59 238.45,1323.87 263.71,1349.13 274.3,1338.53      249.04,1313.27 284.77,1313.27    "
          />
        </svg>
        <h2 className="text-6xl font-molend font mb-8 col-start-3">Works</h2>
      </div>

      {projects.map(({ title, description, href }, index) => (
        <Project
          index={index}
          title={title}
          description={description}
          href={href}
          setModal={setModal}
          key={index}
        />
      ))}

      <ProjectModal modal={modal} projects={projects} />
    </section>
  );
}
