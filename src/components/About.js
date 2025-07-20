import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, MapPin, Mail, Phone, Calendar, Award } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '20+', label: 'Projects Completed' },
    { number: '130+', label: 'LinkedIn Followers' },
    { number: '8+', label: 'Technologies' },
  ];

  const personalInfo = [
    { icon: User, label: 'Name', value: 'Nikesh Sapkota' },
    { icon: Calendar, label: 'Education', value: 'Computer Science Student' },
    { icon: MapPin, label: 'Location', value: 'Jacksonville, Alabama' },
    { icon: Mail, label: 'Email', value: 'nikesh.sapkota@example.com' },
    { icon: Phone, label: 'University', value: 'Jacksonville State University' },
    { icon: Award, label: 'GPA', value: '3.5+' },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column - Image & Stats */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative z-10">
                <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden glass dark:glass-dark p-2">
                  <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center relative overflow-hidden">
                    {/* Hero Image - Replace with your actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-6xl mb-4">👨‍💻</div>
                        <div className="text-lg font-semibold">Nikesh Sapkota</div>
                        <div className="text-sm opacity-80">Computer Science Student</div>
                      </div>
                    </div>
                    {/* Add your hero image here by replacing the div above with: */}
                    {/* <img src="/path-to-your-hero-image.jpg" alt="Nikesh Sapkota" className="w-full h-full object-cover" /> */}
                  </div>
                </div>
              </div>
              
              {/* Background Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-600/20 rounded-full blur-xl"></div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-6 glass dark:glass-dark rounded-xl"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-dark-500 dark:text-dark-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Section Title */}
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-4xl lg:text-5xl font-display font-bold mb-4"
              >
                About <span className="gradient-text">Me</span>
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"
              ></motion.div>
            </div>

            {/* Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
                I'm a passionate Computer Science student at Jacksonville State University with expertise in cutting-edge technologies including blockchain, machine learning, and web development. My projects include a blockchain-based supply chain management system and an AI-powered fake news detection system, demonstrating my ability to work with advanced technologies.
              </p>
              
              <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
                As an active member of IEEE and the Nepalese Student Organization, I've served as Secretary for both organizations, developing strong leadership and organizational skills. My technical background includes Python, Django, Java, C++, JavaScript, and blockchain development with Solidity and Web3.js.
              </p>
              
              <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
                My goal is to become a software engineer who creates innovative solutions that address real-world challenges. I'm passionate about blockchain technology, AI/ML, and building applications that make a meaningful impact. Always eager to learn new technologies and collaborate on exciting projects!
              </p>
            </motion.div>

            {/* Personal Info Grid */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6 text-dark-800 dark:text-dark-200">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-3 p-3 glass dark:glass-dark rounded-lg"
                  >
                    <info.icon className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-dark-500 dark:text-dark-400">
                        {info.label}
                      </div>
                      <div className="font-medium text-dark-800 dark:text-dark-200">
                        {info.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 