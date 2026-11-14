import { cn } from "../../lib/utils";

type BurgerProps = {
  openMenu: () => void;
};

export default function Burger({ openMenu }: BurgerProps) {
  return (
    <div
      onClick={() => {
        openMenu();
      }}
      className={cn(
        "w-48 bg-foreground flex flex-col justify-end fixed right-0 top-0 p-2 cursor-pointer group transition-all duration-300 h-12",
      )}
    >
      <div
        className={
          "bg-primary w-full absolute left-0 top-0 -z-1 h-0 transition-all group-hover:h-full"
        }
      ></div>
      <svg
        width="56"
        height="7"
        viewBox="0 0 56 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-5 top-5"
      >
        <line
          x1="56"
          y1="0.5"
          x2="4.37114e-08"
          y2="0.500005"
          className="stroke-background"
        />
        <line x1="56" y1="6.5" x2="28" y2="6.5" className="stroke-background" />
      </svg>
    </div>
  );
}
