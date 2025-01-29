import { motion } from "framer-motion";
import { arowanaImg, eventsImg, moneyMapImg, wasteAlertImg } from "./src/assets";

const Projects = () => {
  const projects = [
    {
      name: "Waste Alert",
      description: "Client Project",
      image: wasteAlertImg,
      link: "https://waste-alert.vercel.app/",
    },
    {
      name: "Arowana Foods",
      description: "Client Project",
      image: arowanaImg,
      link: "https://arowanafoods.vercel.app",
    },
    {
      name: "Expense Tracker App",
      description: "Team Project",
      image: moneyMapImg,
      link: "https://smartexpencetracker.netlify.app/",
    },
    {
      name: "Event Management App",
      description: "Team Project",
      image: eventsImg,
      link: "https://merjevents.netlify.app/",
    },
  ];

  return (
    <div id="projects" className="bg-[#14151B] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#00BBFF]">Projects</h2>
          <div className="h-1 w-20 bg-[#18272A] mx-auto mt-2"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg bg-secondary transition transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Project Screenshot */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />

                {/* Project Details */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent">
                  <h3 className="text-lg font-semibold text-white">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
