import { motion } from "framer-motion";

import Gallery from "./Projects/Gallery";
import PixelGallery from "./Projects/PixelGallery";
import Spotify from "./Projects/Spotify";
import DeckStudio from "./Projects/DeckStudio";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <section className="flex flex-col h-auto">
        <DeckStudio />
        <Gallery />
        <Spotify />
        <PixelGallery />
      </section>
    </motion.div>
  );
}

export default Projects;
