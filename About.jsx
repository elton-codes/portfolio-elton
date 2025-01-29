import { motion } from "framer-motion";
import { aboutImg } from "./src/assets";

const About = () => {
  return (
    <div
      id="about"
      className="bg-[#0B0D10] text-white pb-10 px-6 flex justify-center"
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

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Side: Profile Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={aboutImg}
              alt="Profile"
              className="w-70 h-80 border-2 border-[#00BBFF] rounded shadow-lg"
            />
          </motion.div>

          {/* Right Side: Description and Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Description */}
            <p className="text-lg leading-relaxed text-gray-300 mb-8 text-center md:text-left">
              I am a frontend web developer with expertise in React.js,
              JavaScript, HTML, and Tailwind CSS. My passion lies in creating
              responsive, user-friendly websites that bridge the gap between
              design and functionality. With several years of experience in
              administrative and management roles, I bring a meticulous
              approach to web development, ensuring clean and efficient code.
            </p>

            {/* Info Box */}
            <div className="border border-gray-700 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
              <div>
                <p>
                  <span className="text-[#00BBFF] font-semibold">Name:</span>{" "}
                  Elton Asamoah-Mantey
                </p>
                <p>
                  <span className="text-[#00BBFF] font-semibold">
                    Experience:
                  </span>{" "}
                  3+ Years
                </p>
                <p>
                  <span className="text-[#00BBFF] font-semibold">
                    Location:
                  </span>{" "}
                  Ghana
                </p>
              </div>
              <div>
                <p className="break-words">
                  <span className="text-[#00BBFF] font-semibold">Email:</span>{" "}
                  eltonasamoah007@gmail.com
                </p>
                <p>
                  <span className="text-[#00BBFF] font-semibold">
                    Freelance:
                  </span>{" "}
                  Available
                </p>
                <p>
                  <span className="text-[#00BBFF] font-semibold">Phone:</span>{" "}
                  +233 24 208 4838
                </p>
              </div>
            </div>

            {/* Download CV Button */}
            <motion.button
              className="mt-8 px-6 py-3 bg-[#00BBFF] text-white rounded-lg hover:bg-[#00A3E0] transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Download CV
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
