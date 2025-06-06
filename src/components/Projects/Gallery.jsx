import GithubLine from "../icons/GithubLine";
import Arrow from "../icons/Arrow";

function Gallery() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-10 text-white">
      <article className="w-full max-w-6xl">
        {/* Section Header */}
        <section className="mb-12">
          <h2 className="text-zinc-500 text-lg font-mono mb-2">
            01. <span className="text-white xl:text-3xl font-bold"><span className="xl:text-2xl">Front-End</span></span>
          </h2>
          <div className="h-[1px] bg-gray-700 mt-2 w-full" />
        </section>

        {/* Project Card */}
        <section className="flex flex-col md:flex-row items-center gap-8">
          {/* Project Image */}
          <a href="https://github.com/Keiver-Dev/Gallery" className="md:w-1/2 border-2 hover:translate-x-1 border-zinc-700 hover:border-zinc-500  rounded-md transition-all duration-500 bg-zinc-800/75">
            <img
              src="Portafolio/Gallery.png"
              alt="Gallery"
              className="rounded-lg shadow-lg cursor-pointer"
            />
          </a>

          {/* Project Description */}
          <div className="md:w-1/2 relative">
            <p className="text-green-400 font-mono text-sm mb-1">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold mb-4">Gallery Icons</h3>
            <div className="bg-zinc-800 p-4 rounded-md shadow text-sm mb-4 text-slate-300">
              <p>
                Gallery is an SVG website with different categories and the
                ability to copy. See the official SVG page. Made with 
                <a className="text-[#45C4B0] underline" href="https://es.react.dev/" > React,</a> <a className="text-[#45C4B0] underline" href="https://tailwindcss.com/">Tailwind</a>, and <a className="text-[#45C4B0] underline" href="https://motion.dev/">Frame-Motion</a>.
              </p>
            </div>

            {/* Tech Stack */}
            <ul className="flex flex-wrap gap-3 text-xs font-mono text-slate-400 mb-4">
              <li>React 19</li>
              <li>Tailwind</li>
              <li>Frame Motion</li>
              <li>ReactRouter</li>
            </ul>

            {/* Icons */}
            <div className="flex gap-4 text-zinc-500 text-xl items-center">
              <a
                href="https://github.com/Keiver-Dev/Gallery"
                className="hover:text-[#DAFDBA] hover:scale-105 transition-colors duration-300"
              >
                <GithubLine />
              </a>
              <a
                href="https://keiver-dev.github.io/Gallery/"
                className="hover:text-[#DAFDBA] transition-all duration-300 hover:translate-x-1"
              >
                <Arrow className="h-8 w-8" />
              </a>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

export default Gallery;
