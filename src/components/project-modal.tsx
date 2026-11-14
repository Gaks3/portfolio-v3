import { useEffect, useRef } from "react";
import { motion, type Variants } from "motion/react";
import gsap from "gsap";

type ProjectModalProps = {
  modal: {
    active: boolean;
    index: number;
  };
  projects: Array<{
    title: string;
    src: string;
    color: string;
  }>;
};

const scaleAnimation: Variants = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] as const },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] as const },
  },
};

export default function ProjectModal({
  modal: { active, index },
  projects,
}: ProjectModalProps) {
  const modalContainer = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorLabel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = modalContainer.current;
    const cursorElement = cursor.current;
    const cursorLabelElement = cursorLabel.current;
    if (!container || !cursorElement || !cursorLabelElement) return;

    const xMoveContainer = gsap.quickTo(container, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMoveContainer = gsap.quickTo(container, "top", {
      duration: 0.8,
      ease: "power3",
    });
    const xMoveCursor = gsap.quickTo(cursorElement, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const yMoveCursor = gsap.quickTo(cursorElement, "top", {
      duration: 0.5,
      ease: "power3",
    });
    const xMoveCursorLabel = gsap.quickTo(cursorLabelElement, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const yMoveCursorLabel = gsap.quickTo(cursorLabelElement, "top", {
      duration: 0.45,
      ease: "power3",
    });

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      xMoveContainer(clientX);
      yMoveContainer(clientY);
      xMoveCursor(clientX);
      yMoveCursor(clientY);
      xMoveCursorLabel(clientX);
      yMoveCursorLabel(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        className="h-[350px] w-[400px] fixed bg-background overflow-hidden pointer-events-none flex items-center justify-center z-5"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="size-full absolute transition-[top] ease-[cubic-bezier(0.76,0,0.24,1)] duration-500"
        >
          {projects.map(({ color, src }, index) => (
            <div
              className="size-full flex items-center justify-center"
              style={{ backgroundColor: color }}
              key={`project_modal_${index}`}
            >
              <img
                src={src}
                width={300}
                height={0}
                alt="Project Image"
                className="h-auto"
              />
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className="size-20 rounded-full bg-primary text-foreground fixed z-5 flex items-center justify-center text-sm font-light pointer-events-none "
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        className="size-20 rounded-full text-background fixed z-5 flex items-center justify-center text-sm font-light pointer-events-none bg-transparent"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </>
  );
}
