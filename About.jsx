import { motion } from "framer-motion";
import { aboutImg } from "./src/assets";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const About = () => {
  return (
    <div
      id="about"
      className="bg-[#0B0D10] text-white py-2 px-6 flex justify-center"
    >
      <motion.div
        className="max-w-6xl w-full flex flex-col items-center gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Section Title */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-[#00BBFF]">About Me</h2>
          <div className="h-1 w-20 bg-[#18272A] mx-auto mt-2"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* Left Side */}
          <motion.div
            className="flex-shrink-0"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={aboutImg}
              alt="Profile"
              className="w-60 h-72 border-2 border-[#00BBFF] rounded shadow-lg"
            />
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <p className="text-lg leading-relaxed text-gray-300 mb-8 text-center md:text-left">
              I am a frontend web developer with a strong foundation in
              React.js, JavaScript, HTML, and Tailwind CSS. Leveraging several years of experience in administrative roles, I bring exceptional attention to detail and organizational expertise to the tech space. My passion lies in crafting responsive and user-friendly web applications through clean and efficient code that transforms designs into functional digital experiences. Driven by a commitment to solving complex problems and enhancing user experiences, I am eager to contribute to innovative projects that create meaningful impact in the digital realm.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-6 mt-4">
              <a
                href="https://github.com/eltonasamoah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              > 
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/eltonasamoah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:eltonasamoah007@gmail.com"
                className="text-blue"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="tel:+233242084838"
                className="text-blue"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
