// src/sections/Hero.jsx
import { motion } from "framer-motion";
import { FiChevronDown, FiGithub, FiLinkedin, FiTwitter, FiArrowRight } from "react-icons/fi";
import heroImage from '../image/hero.png'
const Hero = () => {
  const socialLinks = [
    { icon: <FiGithub size={20} />, url: "#", name: "GitHub" },
    { icon: <FiLinkedin size={20} />, url: "#", name: "LinkedIn" },
    { icon: <FiTwitter size={20} />, url: "#", name: "Twitter" },
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative pt-16 px-6 lg:px-20 pb-20"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#bae6fd] rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#7dd3fc] rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-[#0284c7]">Nikesh Sapkota</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-[#0c4a6e]">
                Full Stack Web Developer 
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto lg:mx-0 text-lg mb-10 leading-relaxed text-[#475569]"
            >
              I create beautiful, responsive websites with modern technologies.
              Currently crafting exceptional digital experiences for clients worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12"
            >
              <motion.a
                href="#projects"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(2, 132, 199, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-[#0284c7]/30 relative overflow-hidden group text-xl"
              >
                <span className="relative z-10">View My Work</span>
                <FiArrowRight className="relative z-10 text-2xl transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(2, 132, 199, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-8 py-5 border-3 border-[#0284c7] text-[#0284c7] font-bold rounded-2xl hover:bg-[#0284c7]/10 transition-all duration-300 group relative overflow-hidden text-xl"
              >
                <span className="relative z-10">Contact Me</span>
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center lg:justify-start gap-6 mt-8"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  whileHover={{ y: -5, scale: 1.2 }}
                  className="text-xl text-[#0c4a6e] hover:text-[#0284c7] transition-colors bg-white p-4 rounded-full shadow-md"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right content - avatar */}
          <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ 
    opacity: 1, 
    scale: 1,
    rotate: [0, 5, -5, 0] 
  }}
  transition={{ 
    duration: 0.8, 
    delay: 0.2,
    rotate: { duration: 2, repeat: Infinity, repeatType: "reverse" }
  }}
  className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
>
  <img src={heroImage} alt="hero" className="absolute inset-0 w-full h-full object-cover rounded-2xl z-10" />
  <div className="absolute inset-0 bg-gradient-to-br from-[#7dd3fc] to-[#0ea5e9] rounded-full opacity-20 blur-xl z-0"></div>
  <div className="relative w-full h-full rounded-2xl border-8 border-white shadow-2xl z-20 overflow-hidden">
   
  </div>
</motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{
          y: [0, 15, 0],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#0c4a6e] hover:text-[#0284c7] transition-colors"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <FiChevronDown size={24} />
      </motion.a>
    </section>
  );
};

export default Hero;