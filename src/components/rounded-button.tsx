"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "./magnetic";
import { cn } from "../lib/utils";

interface RoundedButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function RoundedButton({
  children,
  backgroundColor = "#455CE9",
  className,
  ...attributes
}: RoundedButtonProps) {
  const circle = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  useEffect(() => {
    if (!circle.current) return;

    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        {
          top: "-25%",
          width: "150%",
          duration: 0.4,
          ease: "power3.in",
        },
        "enter",
      )
      .to(
        circle.current,
        {
          top: "-150%",
          width: "125%",
          duration: 0.25,
        },
        "exit",
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current?.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current?.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={cn(
          "relative flex items-center justify-center px-[60px] py-[15px] rounded-full cursor-pointer overflow-hidden",
          className,
        )}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        {...attributes}
      >
        <div className="relative z-[1] transition-colors duration-400">
          {children}
        </div>
        <div
          ref={circle}
          className="absolute w-full h-[150%] rounded-full top-full"
          style={{ backgroundColor }}
        />
      </div>
    </Magnetic>
  );
}
