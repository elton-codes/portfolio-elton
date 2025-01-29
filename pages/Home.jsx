import { motion } from "framer-motion"

const Home = () => {
  return (
    <motion.div className="min-h-screen flex flex-col items-center justify-center bg-primary text-white text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
      <motion.h1 
      className="text-5xl font-bold"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      >
        Hi, I'm Elton Asamoah!
      </motion.h1>

      <motion.p 
      className="text-2xl mt-4"
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      >
        A Frontend Developer passionate about crafting responsive, user-friendly websites.
      </motion.p>

      <motion.button
        className="mt-6 px-6 py-3 bg-gray-800 hover:bg-gray-900 rounded-lg text-lg font-semibold"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a href="/about">Learn More About Me</a>
      </motion.button>
    </motion.div>
  )
}

export default Home