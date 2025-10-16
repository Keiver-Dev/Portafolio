import { useEffect } from "react";
import { motion } from "framer-motion";
import NavbarMovil from "./Funciones/MovilNavbar";

import GithubIcon from "./icons/Github";
import LinkedinIcon from "./icons/Linkedin";
import Logo from "./icons/Logo"

const socialLinks = [
  {
    href: "https://github.com/Keiver-Dev",
    Icon: GithubIcon,
  },
  {
    href: "https://www.linkedin.com/in/keiver-santiago-luna-armenta-101716339/",
    Icon: LinkedinIcon,
  },
];


function SocialIcons({ orientation = "row", className = " p-4" }) {
  const direction = orientation === "row" ? "flex-row gap-2" : "flex-col gap-6";
  return (
    <section className={`flex ${direction} ${className}`}>
      {socialLinks.map(({ href, Icon }, index) => (
        <a href={href} key={index} target="_blank" rel="noopener noreferrer">
          <Icon className="h-7 w-7 text-zinc-400 hover:text-[#9AEBA3] transition-all" />
        </a>
      ))}
    </section>
  );
}

const Navbar = () => {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    let lastScroll = window.scrollY;

    const onScroll = () => {
      const currentScroll = window.scrollY;
      if (navbar) {
        navbar.style.transform =
          currentScroll > lastScroll && currentScroll > 100
            ? "translateY(-100%)"
            : "translateY(0)";
        lastScroll = currentScroll;
      }
    };

    window.addEventListener("scroll", onScroll);

    const scrollToSection = (position) => {
      window.scrollTo({ top: position, behavior: "smooth" });
    };

    const addClick = (id, position) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("click", () => scrollToSection(position));
    };

    addClick("btn-about", 1000);
    addClick("btn-work", 2000);
    addClick("btn-contact", 2900);
    addClick("btn-about-mobile", 900);
    addClick("btn-tech-mobile", 1900);
    addClick("btn-work-mobile", 2900);

    const menuToggle = document.getElementById("menu-toggle");
    const menuMobile = document.getElementById("menu-mobile");

    if (menuToggle && menuMobile) {
      menuToggle.addEventListener("click", () => {
        menuMobile.classList.toggle("hidden");
      });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <motion.section
      id="Header"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.9 }}
    >
      <div className="text-[#D8FFDB]">
        <header
          id="navbar"
          className="fixed top-0 left-0 w-full z-50 flex justify-between items-center text-center shadow-lg transition-transform duration-300 bg-zinc-900/80 backdrop-blur"
        >
          {/* Logo */}
          <div className="text-white p-6">
            <Logo />
          </div>
          <NavbarMovil />

          <nav
            id="menu-desktop"
            className="hidden sm:flex items-center gap-10 font-normal p-4"
          >
            <motion.button
              id="btn-about"
              className="hover:text-gray-400 transition duration-300"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.0,
                type: "spring",
                bounce: 0.7,
              }}
            >
              01.About
            </motion.button>

            <motion.button
              id="btn-work"
              className="hover:text-gray-400 transition duration-300"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 1.0,
                duration: 0.0,
                type: "spring",
                bounce: 0.7,
              }}
            >
              02.Work
            </motion.button>

            <motion.a
              href="/Portafolio/Curriculo.pdf"
              className="px-4 py-2 text-[#D8FFDB] border transition duration-300 hover:bg-[#9AEBA3] hover:text-black cursor-pointer"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 1.5,
                duration: 0.0,
                type: "spring",
                bounce: 0.7,
              }}
            >
              Currículo
            </motion.a>
          </nav>
          <SocialIcons />
        </header>
      </div>
    </motion.section>
  );
};

export default Navbar;
