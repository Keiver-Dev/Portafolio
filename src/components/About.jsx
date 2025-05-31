import { motion } from "framer-motion"

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <section className="flex flex-col h-screen justify-center items-center px-6">
        <div>
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="max-w-xl text-md xl:text-lg text-slate-300 mt-4 xl:mt-10">
            <span className="text-[#9AEBA3]">Hello</span>, my name is
            <span className="text-[#9AEBA3]"> Keiver Luna</span> and for some
            time now I have been interested in web programming and I decided to
            apply in the front-end area at 16 years old, and now at 18 years
            old, where you are now is my personal portfolio where you will find
            my
            <span className="text-[#9AEBA3]"> experiences</span>, knowledge and
            <span className="text-[#9AEBA3]"> projects</span>.
            <br />
            <br />
            <span className="text-white">My focus</span> now is to continue
            studying and implementing new technologies such as the{" "}
            <span className="text-white"> Astro</span> framework or a more
            classic <span className="text-white"> React.</span> Each one has
            different uses and different learning processes.
          </p>
        </div>
      </section>
    </motion.div>
  );
}

export default About;
