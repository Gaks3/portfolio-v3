import { useRef } from "react";
import { motion, animate } from "motion/react";
import type { BezierDefinition, Variants } from "motion/react";

import BisaraImage from "../../assets/bisara.png";
import GoldyOutfitImage from "../../assets/goldy-outfit.png";
import HarjaSmartImage from "../../assets/harjasmart.png";
import LenteraImage from "../../assets/lentera.png";
import PgriDiyImage from "../../assets/pgridiy.png";
import WebgueImage from "../../assets/webgue.png";
import { useLenis } from "lenis/react";

const EASE: BezierDefinition = [0.33, 1, 0.68, 1];

const menu = [
  {
    title: "Home",
    href: "#home",
    description: "To Start Journey",
    images: [BisaraImage, GoldyOutfitImage],
  },
  {
    title: "About",
    href: "#about",
    description: "To Know Me Better",
    images: [GoldyOutfitImage, HarjaSmartImage],
  },
  {
    title: "Works",
    href: "#works",
    description: "To See My Work",
    images: [LenteraImage, PgriDiyImage],
  },
  {
    title: "Contact",
    href: "#contact",
    description: "To Get In Touch",
    images: [PgriDiyImage, WebgueImage],
  },
];

const opacity: Variants = {
  initial: { opacity: 0 },
  enter: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: EASE, delay: i },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

const slideLeft: Variants = {
  initial: { x: 150 },
  enter: {
    x: 0,
    transition: { duration: 0.5, ease: EASE },
  },
  exit: {
    x: 150,
    transition: { duration: 0.5, ease: EASE },
  },
};

const rotateX: Variants = {
  initial: { rotateX: 90, opacity: 0 },
  enter: (i: number) => ({
    rotateX: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: EASE, delay: 0.3 + i * 0.05 },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

const mountAnim = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
};

interface MenuLinkProps {
  data: {
    title: string;
    href: string;
    description: string;
    images: string[];
  };
  index: number;
  closeMenu: () => void;
}

const MenuLink = ({ data, index, closeMenu }: MenuLinkProps) => {
  const { title, description, images } = data;

  const lenis = useLenis();

  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  const manageMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    if (e.clientY < bounds.top + bounds.height / 2) {
      animate(outer.current!, { top: "-100%" }, { duration: 0 });
      animate(inner.current!, { top: "100%" }, { duration: 0 });
    } else {
      animate(outer.current!, { top: "100%" }, { duration: 0 });
      animate(inner.current!, { top: "-100%" }, { duration: 0 });
    }
    animate(outer.current!, { top: "0%" }, { duration: 0.3 });
    animate(inner.current!, { top: "0%" }, { duration: 0.3 });
  };

  const manageMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    if (e.clientY < bounds.top + bounds.height / 2) {
      animate(outer.current!, { top: "-100%" }, { duration: 0.3 });
      animate(inner.current!, { top: "100%" }, { duration: 0.3 });
    } else {
      animate(outer.current!, { top: "100%" }, { duration: 0.3 });
      animate(inner.current!, { top: "-100%" }, { duration: 0.3 });
    }
  };

  return (
    <motion.div
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
      variants={rotateX}
      {...mountAnim}
      custom={index}
      className="border-t border-white flex justify-center cursor-pointer [perspective:80vw] origin-top last:border-b group"
    >
      <p
        onClick={() => {
          lenis?.scrollTo(data.href == "#home" ? 0 : data.href);
          closeMenu();
        }}
        className="text-white uppercase text-[8vw] leading-[8.2vw] font-normal m-0 no-underline"
      >
        {title}
      </p>

      <div
        ref={outer}
        className="flex absolute h-full w-full overflow-hidden pointer-events-none will-change-[top]"
      >
        <div
          ref={inner}
          className="bg-primary absolute whitespace-nowrap h-full top-full flex will-change-[top]"
        >
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex items-center animate-[slider_12s_linear_infinite] transition-opacity duration-300 relative opacity-0 group-hover:opacity-100"
            >
              <div className="h-[6vw] w-[16vw] relative overflow-hidden rounded-[3vw] mx-[1vw] flex">
                <img
                  src={images[0]}
                  alt="image"
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-black uppercase text-[8vw] leading-[8.2vw] font-normal m-0 delay-[-4s]">
                {description}
              </p>
              <div className="h-[6vw] w-[16vw] relative overflow-hidden rounded-[3vw] mx-[1vw] flex">
                <img
                  src={images[1]}
                  alt="image"
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-black uppercase text-[8vw] leading-[8.2vw] font-normal m-0 delay-[-6s]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

interface MenuProps {
  closeMenu: () => void;
}

export default function Menu({ closeMenu }: MenuProps) {
  return (
    <div className="fixed flex z-[3] h-full w-full flex-col justify-between">
      <div className="flex justify-end p-5">
        <motion.svg
          variants={slideLeft}
          {...mountAnim}
          onClick={closeMenu}
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer w-[100px] h-[100px] transition-colors group"
        >
          <path
            d="M1.5 1.5L67 67"
            stroke="white"
            className="group-hover:stroke-primary"
          />
          <path
            d="M66.5 1L0.999997 66.5"
            stroke="white"
            className="group-hover:stroke-primary"
          />
        </motion.svg>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        {menu.map((el, index) => (
          <MenuLink data={el} index={index} key={index} closeMenu={closeMenu} />
        ))}
      </div>

      <motion.div
        variants={opacity}
        {...mountAnim}
        custom={0.5}
        className="text-white flex justify-center gap-[10px] p-5"
      >
        <a
          href="https://github.com/Gaks3"
          className="text-[3vw] border-2 border-white px-[10px] rounded-[30px] cursor-pointer"
        >
          GH
        </a>
        <a
          href="https://instagram.com/gaks_3"
          className="text-[3vw] border-2 border-white px-[10px] rounded-[30px] cursor-pointer"
        >
          IG
        </a>
        <a
          href="https://linkedin.com/in/ade-bagas-wicaksono"
          className="text-[3vw] border-2 border-white px-[10px] rounded-[30px] cursor-pointer"
        >
          IN
        </a>
      </motion.div>
    </div>
  );
}
