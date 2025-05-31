import { motion } from "framer-motion";

import GithubIcon from "./icons/Github";
//import InstagramIcon from "./icons/Instagram";
import LinkedinIcon from "./icons/Linkedin";

const socialLinks = [
  {
    href: "https://github.com/",
    Icon: GithubIcon,
  },
  {
    href: "https://www.linkedin.com/in/keiver-santiago-luna-armenta-101716339/",
    Icon: LinkedinIcon,
  },
];

function SocialIcons({ orientation = "col", className = "" }) {
  const direction = orientation === "row" ? "flex-row gap-2" : "flex-col gap-6";
  return (
    <section className={`flex ${direction} ${className}`}>
      {socialLinks.map(({ href, Icon }, index) => (
        <a href={href} key={index} target="_blank" rel="noopener noreferrer">
          <Icon className="h-7 w-7 text-white hover:text-[#9AEBA3] transition-all" />
        </a>
      ))}
    </section>
  );
}

function Home() {
  return (
    <motion.section
      id="Home"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, type: "spring", duration: 1.5, bounce: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <section className="flex flex-col p-6 lg:p-0 h-screen justify-center items-start">
        <section className="flex flex-col lg:flex-row w-full">
          {/* Social Icons for Desktop */}
          <div className="hidden lg:flex lg:flex-[25%] lg:items-center lg:justify-end lg:h-full lg:p-6">
            <SocialIcons />
          </div>

          {/* Main Content */}
          <div className="flex lg:flex-[85%]">
            <section className="flex flex-col">
              <p className="text-[#9AEBA3] text-base">Hello, my name is</p>
              <h1 className="font-bold text-4xl lg:text-6xl mt-2 lg:mt-4 bg-gradient-to-br from-[#DAFDBA] from-5% to-white to-60% bg-clip-text text-transparent">
                Keiver Luna
              </h1>
              <h2 className="font-bold text-3xl lg:text-5xl bg-gradient-to-tl from-[#DAFDBA] to-white to-60% text-transparent bg-clip-text mt-2 h-16">
                Imagine First Second Create.
              </h2>
              <p className="mt-6 lg:mt-4 text-[#DAFDBA] font-semibold text-sm lg:text-lg">
                I design web experiences that look good, load fast,
                <br /> and work on any device.
              </p>

              <a
                href="#"
                className="mt-14 lg:mt-6 lg:w-64 h-14 border border-white flex justify-center items-center text-center transition duration-300 hover:bg-[#9AEBA3] hover:text-black cursor-pointer hover:shadow-md hover:shadow-white"
              >
                Let’s Go!
              </a>
            </section>
          </div>

          {/* Social Icons for Mobile */}
          <div className="lg:hidden mt-6 lg:mt-2">
            <SocialIcons orientation="row" />
          </div>
        </section>
      </section>
    </motion.section>
  );
}

export default Home;
