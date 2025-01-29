import { useState } from "react";
import { motion } from "framer-motion";
import { heroImg, heroProfile } from "./src/assets";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="relative text-light font-sans"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar */}
      <nav className="sticky top-0 bg-secondary px-6 md:px-32 py-4 shadow-md flex justify-between items-center z-10">
        <h1 className="text-xl text-[#00BBFF]">El's Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg">
          <li>
            <a href="#about" className="hover:text-[#00BBFF]">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-[#00BBFF]">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#00BBFF]">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#00BBFF]">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-[#00BBFF] focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-secondary shadow-lg z-10"
        >
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <a
                href="#about"
                className="block text-white hover:text-[#00BBFF]"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block text-white hover:text-[#00BBFF]"
                onClick={toggleMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block text-white hover:text-[#00BBFF]"
                onClick={toggleMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-white hover:text-[#00BBFF]"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      )}

      {/* Hero Section */}
      <motion.div
        className="h-screen flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Image */}
        <motion.img
          src={heroProfile}
          alt="Profile"
          className="w-32 h-32 rounded-full border-2 border-[#00BBFF] shadow-lg mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.h1
          className="text-5xl font-extrabold bg-gradient-to-r from-[#00BBFF] to-white text-transparent bg-clip-text"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Elton Asamoah
        </motion.h1>
        <motion.p
          className="text-lg mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          A Creative Frontend Developer
        </motion.p>
        <motion.a
          href="#contact"
          className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-[#00BBFF] to-gray text-white rounded-lg hover:from-gray-500 hover:to-[#00A3E0] transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Contact Me
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Hero;
