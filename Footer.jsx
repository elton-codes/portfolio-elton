import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#14151B] text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Branding */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-lg font-bold text-white">Elton Asamoah-Mantey</h1>
          <p className="text-sm text-gray-400">Building modern and user-friendly web experiences.</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a
            href="https://github.com/elton-codes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/eltonasamoahmantey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:eltonasamoah007@gmail.com"
            className="text-gray-300 hover:text-white transition"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="tel:+233242084838"
            className="text-gray-300 hover:text-white transition"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 md:text-right">
          <p>&copy; {new Date().getFullYear()} Elton Asamoah-Mantey. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
