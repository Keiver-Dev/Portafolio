import GithubLine from "../icons/GithubLine";
import Arrow from "../icons/Arrow";

function PixelGallery() {
  return (
    <section className="flex flex-col items-center justify-center w-full px-6 py-10 text-white">
      <div className="w-full max-w-6xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-zinc-500 text-lg font-mono mb-2">
            04.
          </h2>
          <div className="h-[1px] bg-gray-700 mt-2 w-full" />
        </div>

        {/* Project Card */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <a href="https://github.com/Keiver-Dev/PixelArt-Gallery" className="md:w-1/2 border-2 border-zinc-700 hover:border-zinc-500 rounded-md hover:translate-x-1 transition-all duration-500">
            <img
              src="/Portafolio/PixelArt.png"
              alt="Spotify"
              className="rounded-lg shadow-lg cursor-pointer"
            />
          </a>

          <div className="md:w-1/2 relative">
            <p className="text-green-400 font-mono text-sm mb-1">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold mb-4">Pixel Gallery</h3>
            <div className="bg-zinc-800 p-4 rounded-md shadow text-sm mb-4 text-slate-300">
              <p>
                Pixel Gallery, a project made with <span><a className="text-[#45C4B0] underline" href="https://es.react.dev/">React</a></span> and <span><a className="text-[#45C4B0] underline" href="https://tailwindcss.com/">Tailwind</a></span>, is a
                pixel art gallery with the ability to view the image and101
                download it whenever you want.
              </p>
            </div>

            {/* Tech Stack */}
            <ul className="flex flex-wrap gap-3 text-xs font-mono text-slate-400 mb-4">
              <li>React</li>
            </ul>

            {/* Icons */}
            <div className="flex gap-4 text-zinc-500 text-xl items-center">
              <a
                href="https://github.com/Keiver-Dev/PixelArt-Gallery"
                className="hover:text-[#DAFDBA] hover:scale-105 transition-colors duration-300"
              >
                <GithubLine />
              </a>
              <a
                href="#"
                className="hidden hover:text-[#DAFDBA] transition-all duration-300 hover:translate-x-1"
              >
                <Arrow className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PixelGallery;
