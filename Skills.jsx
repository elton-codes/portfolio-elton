import { motion } from "framer-motion";
import { cssImg, htmlImg, jsImg, reactImg } from "./src/assets";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      description: "The backbone of web structure and layout. Crafting semantic, SEO-friendly markup.",
      image: htmlImg,
    },
    {
      name: "CSS",
      description: "Designing responsive, visually appealing websites with modern layouts and animations.",
      image: cssImg,
    },
    {
      name: "JavaScript",
      description: "Making websites dynamic and interactive with modern JavaScript ES6+ features.",
      image: jsImg,
    },
    {
      name: "React",
      description: "Building scalable, performant, and component-based applications with React.js.",
      image: reactImg,
    },
  ];

  return (
    <div id="skills" className="bg-[#0B0D10] text-white py-6 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#00BBFF]">Skills</h2>
          <div className="h-1 w-20 bg-[#18272A] mx-auto mt-2"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 bg-secondary rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center">
                {/* Skill Image */}
                <img
                  src={skill.image}
                  alt={`${skill.name} logo`}
                  className="w-16 h-16 mb-4"
                />
                {/* Skill Name */}
                <h3 className="text-xl font-semibold text-[#00BBFF] mb-2">
                  {skill.name}
                </h3>
                {/* Skill Description */}
                <p className="text-gray-300 text-center text-sm">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills