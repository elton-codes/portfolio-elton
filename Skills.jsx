import { motion } from "framer-motion";
import { cssImg, htmlImg, jsImg, reactImg, tailwindImg } from "./src/assets";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      description: "The backbone of web structure and layout. Crafting semantic, SEO-friendly markup.",
      image: htmlImg,
      level: "Advanced",
      proficiency: 80,
    },
    {
      name: "CSS",
      description: "Designing responsive, visually appealing websites with modern layouts and animations.",
      image: cssImg,
      level: "Advanced",
      proficiency: 75,
    },
    {
      name: "Tailwind CSS",
      description: "Designing responsive, visually appealing websites with modern layouts and animations.",
      image: tailwindImg,
      level: "Intermediate",
      proficiency: 68,
    },
    {
      name: "JavaScript",
      description: "Making websites dynamic and interactive with modern JavaScript ES6+ features.",
      image: jsImg,
      level: "Intermediate",
      proficiency: 65,
    },
    {
      name: "React",
      description: "Building scalable, performant, and component-based applications with React.js.",
      image: reactImg,
      level: "Intermediate",
      proficiency: 70,
    },
  ];

  return (
    <div id="skills" className="bg-[#0B0D10] text-white pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#00BBFF]">Skills</h2>
          <div className="h-1 w-20 bg-[#18272A] mx-auto mt-2"></div>
        </div>

        {/* Skills Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-700 text-sm md:text-base">
            <thead>
              <tr className="bg-secondary text-[#00BBFF]">
                <th className="border border-gray-700 px-4 py-2">Skill</th>
                <th className="border border-gray-700 px-4 py-2">Level</th>
                <th className="border border-gray-700 px-4 py-2">Proficiency</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((skill, index) => (
                <tr key={index} className="text-center hover:bg-gray-800 transition">
                  <td className="border border-gray-700 px-4 py-2 flex items-center gap-2 justify-center">
                    <img src={skill.image} alt={`${skill.name} logo`} className="w-6 h-6" />
                    {skill.name}
                  </td>
                  <td className="border border-gray-700 px-4 py-2">{skill.level}</td>
                  <td className="border border-gray-700 px-4 py-2">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-[#00BBFF] h-2 rounded-full"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Skills;
