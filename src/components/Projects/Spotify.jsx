import GithubLine from "../icons/GithubLine";
import Arrow from "../icons/Arrow";

function Spotify() {
  return (
    <section className="flex flex-col items-center justify-center w-full px-6 py-10 text-white">
      <div className="w-full max-w-6xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-zinc-500 text-lg font-mono mb-2">
            02. 
          </h2>
          <div className="h-[1px] bg-gray-700 mt-2 w-full" />
        </div>

        {/* Project Card */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          {/* Project Image */}
          <div className="md:w-1/2 border-2 border-zinc-700 hover:border-zinc-500 rounded-md hover:-translate-x-1 transition-all duration-500">
            <img
              src="Portafolio/Spotify.png"
              alt="Spotify"
              href="#"
              className="rounded-lg shadow-lg cursor-pointer"
            />
          </div>

          {/* Project Description */}
          <div className="md:w-1/2 relative">
            <p className="text-green-400 font-mono text-sm mb-1">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold mb-4">Spotify - Clone</h3>
            <div className="bg-zinc-800 p-4 rounded-md shadow text-sm mb-4 text-slate-300">
              <p>
                It's a remake of <span className="text-green-400">Spotify</span>, with some features and others still in
                progress. It has the visuals and some technical features like
                page turning and music updates in the play bar, and it works
                with <span><a className="text-[#45C4B0] underline" href="https://es.react.dev/">React</a></span> and <span><a className="text-[#45C4B0] underline" href="https://tailwindcss.com/">Tailwind</a></span>.
              </p>
            </div>

            {/* Tech Stack */}
            <ul className="flex flex-wrap gap-3 text-xs font-mono text-slate-400 mb-4">
              <li>React</li>
              <li>Tailwind</li>
              <li>ReactRouter</li>
            </ul>

            {/* Icons */}
            <div className="flex gap-2 items-center text-zinc-500 text-xl">
              <a
                href="#"
                className="hover:text-[#DAFDBA] hover:scale-105 transition-colors duration-300"
              >
                <GithubLine />
              </a>
              <a
                href="#"
                className="hover:text-[#DAFDBA] transition-all duration-300 hover:translate-x-1"
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

export default Spotify;
