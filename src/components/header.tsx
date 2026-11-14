import Navbar from "./navbar";

export default function Header() {
  return (
    <>
      <h1 className="z-999 text-5xl fixed tracking-normal font-nine-circles p-3 top-0 left-0 mix-blend-difference text-white">
        GAKS.
      </h1>
      <header className="fixed top-0 z-10">
        <Navbar />
      </header>
    </>
  );
}
