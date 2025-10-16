import { motion } from "framer-motion";

function Home() {
  return (
    <motion.section
      id="Home"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, type: "spring", duration: 1.5, bounce: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      className="h-screen flex items-center justify-center px-6 lg:px-20"
    >
      <div className="flex flex-col lg:flex-row w-full h-full items-center justify-center gap-10">
        {/* Columna izquierda (texto + redes) */}
        <div className="flex flex-col flex-1 justify-center">
          <p className="text-[#9AEBA3] text-base">Hello, my name is</p>
          <h1 className="font-bold text-4xl lg:text-6xl mt-2 bg-gradient-to-br from-[#DAFDBA] from-5% to-white to-60% bg-clip-text text-transparent">
            Keiver Luna
          </h1>
          <h2 className="font-bold text-3xl lg:text-5xl bg-gradient-to-tl from-[#DAFDBA] to-white to-60% text-transparent bg-clip-text mt-2">
            Imagine First Second Create.
          </h2>
          <p className="mt-6 text-[#DAFDBA] font-semibold text-sm lg:text-lg">
            I design web experiences that look good, load fast,
            <br /> and work on any device.
          </p>

          <a
            href="/Portafolio/Curriculo.pdf"
            className="mt-10 lg:w-64 h-14 border border-white flex justify-center items-center text-center transition duration-300 hover:bg-[#9AEBA3] hover:text-black cursor-pointer hover:shadow-md hover:shadow-white"
          >
            <h1 className="font-semibold">Currículo</h1>
          </a>
        </div>

        {/* Columna derecha (avatar) */}
        <div className="flex flex-1 justify-center items-center hidden lg:block">
          {/* Aquí va tu avatar */}
          <img src="/Portafolio/Porfolio.png" alt="LK" className="object-cover" />
        </div>
      </div>
    </motion.section>
  );
}

export default Home;
