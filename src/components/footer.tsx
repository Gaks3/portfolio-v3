import { CrowdCanvas } from "./crowd-canvas";

import AllPeepsImage from "../assets/all-peeps.png";
import { useLenis } from "lenis/react";

export default function Footer() {
  const lenis = useLenis();

  return (
    <footer className="z-1 min-h-screen w-screen mt-60">
      <p className="text-sm text-foreground/50 text-center">
        &copy; {new Date().getFullYear()} Gaks. All rights reserved.
      </p>

      <div className="grid grid-cols-12 gap-5 mt-10 px-10">
        <div className="col-span-3">
          <p className="uppercase text-foreground/75 mb-2 text-xs">
            [Navigation]
          </p>
          <div className="flex flex-col gap-2">
            <p
              onClick={() => lenis?.scrollTo(0)}
              className="font-semibold text-4xl hover:cursor-pointer"
            >
              Home
            </p>
            <p
              onClick={() => lenis?.scrollTo("#about")}
              className="font-semibold text-4xl hover:cursor-pointer"
            >
              About
            </p>
            <p
              onClick={() => lenis?.scrollTo("#works")}
              className="font-semibold text-4xl hover:cursor-pointer"
            >
              Works
            </p>
            <p
              onClick={() => lenis?.scrollTo("#contact")}
              className="font-semibold text-4xl hover:cursor-pointer"
            >
              Contact
            </p>
          </div>
        </div>
        <div className="col-span-5">
          <p className="uppercase text-foreground/75 mb-2 text-xs">[Social]</p>
          <div className="flex flex-col gap-2">
            <a
              href="https://github.com/Gaks3"
              className="font-semibold text-4xl"
            >
              Github
            </a>
            <a
              href="https://instagram.com/gaks_3"
              className="font-semibold text-4xl"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com/in/ade-bagas-wicaksono"
              className="font-semibold text-4xl"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="col-span-3">
          <p className="uppercase text-foreground/75 mb-2 text-xs">[Chat]</p>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:adebagaswicaksono@gmail.com"
              className="font-semibold text-4xl"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="w-screen h-[90vh]">
        <CrowdCanvas src={AllPeepsImage} rows={15} cols={7} />
      </div>
    </footer>
  );
}
