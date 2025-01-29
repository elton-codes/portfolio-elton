import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react"; 

const Contact = () => {
  return (
    <div id="contact" className="bg-[#0B0D10] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#00BBFF]">Contact Me</h2>
          <div className="h-1 w-20 bg-[#18272A] mx-auto mt-2"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            className="flex-1 bg-secondary rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#00BBFF]">
              Send a Message
            </h3>
            <form action="https://formspree.io/f/mzzbbwrg" method="POST">
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#14151B] text-white focus:outline-none focus:ring-2 focus:ring-[#00BBFF]"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#14151B] text-white focus:outline-none focus:ring-2 focus:ring-[#00BBFF]"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#14151B] text-white focus:outline-none focus:ring-2 focus:ring-[#00BBFF]"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#00BBFF] text-white rounded-lg hover:bg-[#00A3E0] transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex-1 text-gray-300 flex flex-col justify-start md:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-[#00BBFF] mt-8 mb-6">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#00BBFF]" />
                <span>eltonasamoah007@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#00BBFF]" />
                <span>+233 24 208 4838</span>
              </div>
              <div className="flex items-center gap-4">
                <Github className="w-6 h-6 text-[#00BBFF]" />
                <a
                  href="https://github.com/elton-codes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Linkedin className="w-6 h-6 text-[#00BBFF]" />
                <a
                  href="https://www.linkedin.com/in/eltonasamoahmantey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
