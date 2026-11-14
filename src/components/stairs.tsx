import { motion } from "motion/react";
import type { BezierDefinition, Variants } from "motion/react";

const EASE: BezierDefinition = [0.33, 1, 0.68, 1];

const mountAnim = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
};

const height: Variants = {
  initial: {
    height: 0,
  },
  enter: (i: number) => ({
    height: "100%",
    transition: {
      duration: 0.5,
      delay: 0.05 * i,
      ease: EASE,
    },
  }),
  exit: (i: number) => ({
    height: 0,
    transition: {
      duration: 0.3,
      delay: 0.05 * i,
      ease: EASE,
    },
  }),
};

const background: Variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.5,
    transition: {
      duration: 0.5,
      ease: EASE,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: EASE,
    },
  },
};

const Stair = ({ index }: { index: number }) => {
  return (
    <motion.div
      variants={height}
      {...mountAnim}
      custom={4 - index}
      className="w-[20vw] h-full bg-black"
    />
  );
};

const Background = () => {
  return (
    <motion.div
      variants={background}
      {...mountAnim}
      className="w-full h-full absolute bg-black"
    />
  );
};

export default function Stairs() {
  return (
    <div className="fixed top-0 left-0 z-1 h-screen flex transition-all duration-1000 pointer-events-none">
      {[...Array(5)].map((_, index) => (
        <Stair key={index} index={index} />
      ))}
      <Background />
    </div>
  );
}
