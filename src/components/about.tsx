import CurvedLoop from "./curved-loop";

import AboutImage from "../assets/about.jpeg";
import RippleDistortion from "./ripple-distortion";

export default function About() {
  return (
    <section
      id="about"
      className="w-screen min-h-screen bg-background text-background relative"
    >
      <div className="pt-24 pb-10 grid grid-cols-12 px-10 bg-foreground">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="1340 940 140 140"
          className="w-20 col-span-1"
        >
          <g xmlns="http://www.w3.org/2000/svg">
            <polygon points="1408.84,944.33 1397.22,976.3 1408.84,1008.28 1420.45,976.3     " />
            <polygon points="1344.89,1008.28 1376.86,1019.89 1408.84,1008.28 1376.86,996.66     " />
            <polygon points="1408.84,1072.23 1420.45,1040.25 1408.84,1008.28 1397.22,1040.25     " />
            <polygon points="1472.79,1008.28 1440.81,996.66 1408.84,1008.28 1440.81,1019.89     " />
          </g>
        </svg>

        <div className="col-start-3 col-span-6">
          <h2 className="text-6xl font-molend font mb-8">About</h2>
          <p className="text-2xl leading-relaxed">
            I’m Ade Bagas Wicaksono a Fullstack Developer based in Yogyakarta,
            Indonesia. Currently a Information Technology student at Universitas
            Negeri Yogyakarta. Before university, I spent four years in
            Vocational High School majoring in Network Information Systems and
            Applications (SIJA), building the foundation that took me to the
            national stage earning a Medallion of Excellence in Web Technologies
            at LKS Nasional 2025. I build end-to-end systems using TypeScript,
            JavaScript, PHP, Java, and Python. On the frontend, I craft
            responsive interfaces with Next.js, React, Vue, and Tailwind CSS,
            while architecting backends using Laravel, NestJS, Express, Hono,
            Spring Boot, and tRPC. Whether designing REST APIs or structuring
            relational and NoSQL databases, building efficient systems while
            continuously learning and adapting to new technologies along the
            way.
          </p>
        </div>

        <div className="col-start-10 col-span-3 items-end relative flex">
          <div className="aspect-3/4 h-100">
            <RippleDistortion
              src={AboutImage}
              brushSize={150}
              strength={0.2}
              swirl={1}
              rings={4}
              grayscale={false}
              spread={5}
              fade={3}
              spacing={15}
              dispersion={0}
              glint={0}
              tint="#a855f7"
              tintAmount={0.1}
              highlightColor="#ffffff"
              trigger="hover"
              clickStrength={2}
              quality="low"
              enabled
            />
          </div>
        </div>
      </div>

      <CurvedLoop
        classNameWrapper="h-[200px] bg-foreground z-4 relative"
        marqueeText="CODE WITH CURIOSITY ✦ BUILD WITH PURPOSE ✦ SHIP WITH CARE ✦"
        shape="arc"
        speed={2}
        curveAmount={300}
        direction="left"
        fontSize={96}
        fontWeight={700}
        letterSpacing={0}
        separator=""
        outline={false}
        scrollBoost={0}
        edgeFade={0}
        interactive
        pauseOnHover={false}
      />

      <div
        className="h-[137px] shrink-0"
        style={{ imageRendering: "pixelated" }}
      >
        <div className="w-full aspect-[inherit] h-full">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 137"
            preserveAspectRatio="none"
            className="fill-foreground w-full h-full"
          >
            <path d="M1440 0H0C0 0 289.5 137 720 137C1150.5 137 1440 0 1440 0Z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
