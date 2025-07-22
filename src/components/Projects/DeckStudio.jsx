import GithubLine from "../icons/GithubLine";

function DeckStudio() {
  return (
    <section className="flex flex-col items-center justify-center w-full px-6 py-10 text-white">
      <div className="w-full max-w-6xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-zinc-500 text-lg font-mono mb-2">
            01.{" "}
            <span className="font-semibold text-white text-2xl">Projects</span>
          </h2>
          <div className="h-[1px] bg-gray-700 mt-2 w-full" />
        </div>

        {/* Project Card */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          {/* Project Image */}
          <div className="md:w-1/2 border-2 border-zinc-700 hover:border-zinc-500 rounded-md hover:-translate-x-1 transition-all duration-500">
            <img
              src="/Portafolio/Deck-Studio.png"
              alt="DeckStudio"
              href="none"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Project Description */}
          <div className="md:w-1/2 relative">
            <p className="text-green-400 font-mono text-sm mb-1">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold mb-4">Deck Studio</h3>
            <div className="bg-zinc-800 p-4 rounded-md shadow text-sm mb-4 text-slate-300">
              <p>
                Deck Studio is a project, task, and team management platform
                that gives you complete control over your projects, built with
                <a
                  className="text-[#45C4B0] underline"
                  href="https://es.react.dev/"
                >
                  React,
                </a>{" "}
                <a className="text-[#45C4B0] underline" href="https://tailwindcss.com/">
                  Tailwind,
                </a>{" "}
                <a className="text-[#45C4B0] underline" href="https://reactrouter.com/">
                  React Router,
                </a>{" "}
                <a className="text-[#45C4B0] underline" href="https://www.chartjs.org/">
                  Chart.js
                </a>{" "}
                and{" "}
                <a className="text-[#45C4B0] underline" href="https://www.chartjs.org/">
                  React-chartjs-2
                </a>
                .
              </p>
            </div>

            {/* Tech Stack */}
            <ul className="flex flex-wrap gap-3 text-xs font-mono text-slate-400 mb-4">
              <li>React</li>
              <li>Tailwind</li>
              <li>ReactRouter</li>
              <li>Chart.js + React-chartjs-2</li>
            </ul>

            {/* Icons */}
            <div className="flex gap-2 items-center text-zinc-500 text-xl">
              <a
                href="https://github.com/Keiver-Dev/Deck-Studio"
                className="hover:text-[#DAFDBA] hover:scale-105 transition-colors duration-300"
              >
                <GithubLine />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeckStudio;
