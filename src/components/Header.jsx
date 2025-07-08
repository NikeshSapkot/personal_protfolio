// src/components/Header.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";

const Header = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["home", "about", "projects", "skills", "contact"];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 py-5 px-6 lg:px-20 flex justify-between items-center z-50 ${
        scrolled
          ? "bg-white/90 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      } transition-all duration-300`}
    >
      <motion.a
        href="#"
        whileHover={{ scale: 1.05 }}
        className="text-xl font-bold text-[#0284c7]"
      >
        {"<Nik Portfolio />"}
      </motion.a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <motion.a
            key={item}
            href={`#${item}`}
            whileHover={{ 
              scale: 1.1, 
              color: "#0284c7",
              y: -2
            }}
            className="capitalize text-[#0c4a6e] hover:text-[#0284c7] transition-colors font-medium"
          >
            {item}
          </motion.a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl text-[#0c4a6e]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-white p-6 flex flex-col gap-4 md:hidden shadow-lg"
        >
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              whileHover={{ scale: 1.05, color: "#0284c7" }}
              className="capitalize text-[#0c4a6e] hover:text-[#0284c7] transition-colors py-3 border-b border-[#e0f2fe]"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      )}

      {/* Social Icons */}
      <div className="hidden md:flex gap-4">
        <motion.a
          href="https://github.com/NikeshSapkot"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#0284c7" }}
          className="text-xl text-[#0c4a6e] hover:text-[#0284c7] transition-colors"
        >
          <FiGithub />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/nikesh-sapkota-8405ba219/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#0284c7" }}
          className="text-xl text-[#0c4a6e] hover:text-[#0284c7] transition-colors"
        >
          <FiLinkedin />
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;