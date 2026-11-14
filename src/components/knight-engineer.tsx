import { EffectScene } from "./effect-scene";

export default function KnightEngineer() {
  return (
    <section className="w-screen min-h-screen bg-background mt-60 flex flex-col items-center justify-center gap-10">
      <div className="h-250 w-full">
        <EffectScene className="h-full w-full" enableZoom={false} />
      </div>
      <p className="text-foreground font-semibold text-3xl">
        "Just a humble knight larping in the realm of fullstack engineering."
      </p>
    </section>
  );
}
