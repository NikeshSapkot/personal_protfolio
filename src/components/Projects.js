import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web Apps' },
    { id: 'desktop', label: 'Desktop' },
    { id: 'mobile', label: 'Mobile' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Blockchain Supply Chain Management',
      description: 'A comprehensive blockchain-based supply chain management system that ensures transparency, traceability, and security in supply chain operations. Features smart contracts, decentralized storage, and real-time tracking.',
      image: '/api/placeholder/400/300',
      category: 'web',
      technologies: ['Blockchain', 'Smart Contracts', 'Web3.js', 'Solidity', 'React'],
      liveUrl: '#',
      githubUrl: 'https://github.com/NikeshSapkot/blockchain-supply-chain',
      featured: true,
    },
    {
      id: 2,
      title: 'Fake News & Deepfake Detection',
      description: 'An advanced AI-powered system for detecting fake news and deepfake content using machine learning algorithms. Analyzes text patterns, image authenticity, and provides confidence scores.',
      image: '/api/placeholder/400/300',
      category: 'web',
      technologies: ['Python', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
      liveUrl: '#',
      githubUrl: 'https://github.com/NikeshSapkot/fake-news-deepfake',
      featured: true,
    },
    {
      id: 3,
      title: 'Student Database Management System',
      description: 'A comprehensive database management system for student records, built with Python and Django. Features include data entry, reporting, and user authentication.',
      image: '/api/placeholder/400/300',
      category: 'web',
      technologies: ['Python', 'Django', 'MySQL', 'HTML/CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/NikeshSapkot',
      featured: false,
    },
    {
      id: 4,
      title: 'Data Analysis Dashboard',
      description: 'An interactive dashboard for analyzing student performance data, featuring charts, filters, and automated reporting capabilities.',
      image: '/api/placeholder/400/300',
      category: 'web',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Excel'],
      liveUrl: '#',
      githubUrl: 'https://github.com/NikeshSapkot',
      featured: false,
    },
    {
      id: 5,
      title: 'Java Calculator Application',
      description: 'A feature-rich calculator application built with Java, featuring scientific functions, history tracking, and a modern GUI interface.',
      image: '/api/placeholder/400/300',
      category: 'desktop',
      technologies: ['Java', 'Swing', 'OOP', 'GUI'],
      liveUrl: '#',
      githubUrl: 'https://github.com/NikeshSapkot',
      featured: false,
    },
    {
      id: 6,
      title: 'IEEE Chapter Website',
      description: 'A responsive website for the IEEE student chapter, featuring event management, member directory, and technical resources.',
      image: '/api/placeholder/400/300',
      category: 'web',
      technologies: ['HTML/CSS', 'JavaScript', 'Bootstrap', 'Git'],
      liveUrl: '#',
      githubUrl: 'https://github.com/NikeshSapkot',
      featured: false,
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-display font-bold mb-4"
          >
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto"
          >
            Here are some of the projects I've worked on. Each one represents a unique challenge 
            and showcases different aspects of my skills and expertise.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-primary-50 dark:hover:bg-dark-700 border border-dark-200 dark:border-dark-700'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              <div className="card overflow-hidden h-full">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold opacity-20">
                      {project.id}
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </motion.a>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-dark-800 dark:text-dark-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-dark-600 dark:text-dark-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 btn-primary text-center text-sm py-2"
                    >
                      <Eye className="w-4 h-4 inline mr-2" />
                      View Live
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 btn-secondary text-center text-sm py-2"
                    >
                      <Github className="w-4 h-4 inline mr-2" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 