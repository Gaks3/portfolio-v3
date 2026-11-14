import { MouseIcon } from "lucide-react";
import { useLenis } from "lenis/react";

import DitherVeil from "./dither-veil";
import RoundedButton from "./rounded-button";
import ScrambleHover from "./scramble-hover";

export default function Hero() {
  const lenis = useLenis();

  return (
    <section
      id="home"
      className="min-h-screen w-screen bg-background pt-20 sticky top-0 z-1 flex flex-col justify-between"
    >
      <div className="flex items-center justify-center px-10 flex-1">
        <div className="w-[60%] h-[70vh] relative border-t border-primary2">
          <DitherVeil
            pattern="floyd"
            pixelSize={2}
            inkColor="#000000"
            paperColor="#ffffff"
            revealRadius={200}
            softness={0.6}
            linger={1}
            fit="contain"
            rimColor="#7d39eb"
            palette="duotone"
            levels={2}
            contrast={1.15}
            brightness={0}
            rim={0}
            reverse={false}
            wander={false}
            clickBurst
          />
        </div>
        <div className="h-[70vh] w-[40%] py-20 flex flex-col justify-between gap-5 relative border-t border-primary">
          <div></div>
          <div className="flex flex-col gap-2">
            <div>
              <span className="text-2xl">
                <span className="line-through text-foreground/50">
                  Professional Larper
                </span>{" "}
                Fullstack Developer
              </span>
            </div>
            <div>
              <span className="text-xl">Yogyakarta, Indonesia</span>
            </div>
          </div>
          <RoundedButton
            className="size-32 rounded-full bg-foreground text-background"
            backgroundColor="var(--primary)"
            onClick={() => lenis?.scrollTo("#about")}
          >
            <div className="flex flex-col items-center justify-center gap-1">
              <span>scroll</span>
              <MouseIcon className="rotate-180" />
            </div>
          </RoundedButton>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5">
        <ScrambleHover
          className="font-molend text-[6.5vw] text-foreground leading-none text-center"
          text="ADE BAGAS WICAKSONO"
          useOriginalCharsOnly
          charClassName={(_, index) =>
            index < 3 ? "text-[#7d39eb]" : undefined
          }
        />
      </div>
    </section>
  );
}
