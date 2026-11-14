export default function Contact() {
  return (
    <section id="contact" className="w-screen min-h-screen bg-background mt-60">
      <div className="grid grid-cols-12 mx-10 mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="170 1528 135 100"
          className="fill-white size-20"
        >
          <g xmlns="http://www.w3.org/2000/svg">
            <path d="M285.14,1553.56c-10.16-23.34-42.66-31.7-72.59-18.67c-29.93,13.03-45.95,42.51-35.79,65.85      c10.16,23.34,42.66,31.7,72.59,18.67S295.3,1576.9,285.14,1553.56z M254.71,1611.79c-23.36,10.17-48.73,3.65-56.67-14.57      c-7.93-18.22,4.58-41.24,27.94-51.41c23.36-10.17,48.73-3.65,56.67,14.57S278.08,1601.61,254.71,1611.79z" />
            <path d="M260.59,1575.7c-9.18-1.9-11.48-5.04-10.78-14.73c0.11-1.5-2.06-1.5-2.76,0      c-4.5,9.69-8.48,12.83-18.68,14.73c-1.58,0.29-2.17,2.47-0.74,2.76c9.18,1.9,11.48,5.04,10.78,14.73c-0.11,1.5,2.06,1.5,2.76,0      c4.5-9.69,8.48-12.83,18.68-14.73C261.44,1578.17,262.02,1575.99,260.59,1575.7z" />
          </g>
        </svg>
        <h2 className="text-6xl font-molend font mb-8 col-start-3">Contact</h2>
      </div>
      <div className="text-2xl font-medium text-foreground gap-y-3 pt-10 uppercase grid grid-cols-12 px-10">
        <span className="col-start-4 col-span-8">
          Need a fullstack engineer or just want to verify if I’m actually
          larping?
        </span>
        <span className="col-start-2 col-span-7">
          Hit me up. Let's skip the fluff and turn raw ideas into production
          code.
        </span>
      </div>
      <div className="grid grid-cols-2 gap-[6vw] mt-10 px-10">
        <div className="flex flex-col gap-10">
          <div className="text-2xl font-normal">
            <h2>Email</h2>
            <div className="w-full h-px my-2 bg-white/30" />
            <a
              href="mailto:adebagaswicaksono@gmail.com"
              className="tracking-wider lowercase hover:text-primary transition-colors duration-300"
            >
              adebagaswicaksono@gmail.com
            </a>
          </div>
          <div className="text-2xl font-normal">
            <h2>Social Media</h2>
            <div className="w-full h-px my-2 bg-white/30" />
            <div className="flex gap-[10px]">
              <a
                href="https://github.com/Gaks3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[3vw] border-2 border-white px-[10px] rounded-[30px] cursor-pointer hover:border-primary2 hover:text-primary2 transition-colors duration-300"
              >
                GH
              </a>
              <a
                href="https://instagram.com/gaks3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[3vw] border-2 border-white px-[10px] rounded-[30px] cursor-pointer hover:border-primary hover:text-primary2 transition-colors duration-300"
              >
                IG
              </a>
              <a
                href="https://linkedin.com/in/adebagaswicaksono"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[3vw] border-2 border-white px-[10px] rounded-[30px] cursor-pointer hover:border-primary2 hover:text-primary2 transition-colors duration-300"
              >
                IN
              </a>
            </div>
          </div>
          <div className="text-2xl font-normal">
            <h2>Based In</h2>
            <div className="w-full h-px my-2 bg-white/30" />
            <p className="tracking-wider lowercase">
              Yogyakarta, working with people anywhere
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
