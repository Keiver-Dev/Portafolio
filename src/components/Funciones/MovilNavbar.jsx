import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function NavbarMovil() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex flex-col sm:hidden">
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="text-[#9AEBA3] bg-transparent hover:text-[#D8FFDB] font-medium rounded-lg text-lg px-5 py-2.5 mb-2 transition-colors duration-300"
          type="button"
          aria-controls="drawer-right-example"
        >
          ☰
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", duration: 0.7, bounce: 0.5, }}
            id="drawer-right-example"
            className="fixed top-0 right-0 z-40 h-screen p-6 overflow-y-auto bg-zinc-900/90 backdrop-blur-md w-72 rounded-l-xl shadow-lg"
            tabIndex={-1}
            aria-labelledby="drawer-right-label"
          >
            <div className="flex justify-between items-center mb-6">
              <h5
                id="drawer-right-label"
                className="inline-flex items-center text-[#D8FFDB] font-semibold text-lg"
              >
              </h5>
              <button
                onClick={() => setIsOpen(false)}
                aria-controls="drawer-right-example"
                className="text-[#D8FFDB] hover:text-[#9AEBA3] rounded-lg text-2xl focus:outline-none"
              >
                ×
              </button>
            </div>

            <section className="mb-6 text-md text-[#D8FFDB] flex flex-col">
              {/* Aqui lo dejaste, es solo colocar los botones con las rutas del navbar para dirigiu al usuario. */}
              <button
                onClick={() => {
                  window.scrollTo({ top: 900, behavior: "smooth" });
                  setIsOpen(false);
                }}
                className="flex font-semibold hover:bg-zinc-800 transition-colors p-2"
              >
                About
              </button>
              <button
                onClick={() => {
                  window.scrollTo({ top: 1650, behavior: "smooth" });
                  setIsOpen(false);
                }}
                className="flex font-semibold hover:bg-zinc-800 transition-colors p-2"
              >
                Projects
              </button>
              <button className="flex font-semibold hover:bg-[#9AEBA3] hover:text-black border hover:shadow hover:shadow-white transition-colors p-2 mt-6">
                <a href="/Portafolio/Curriculo.pdf">Resumen</a>
              </button>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default NavbarMovil;
