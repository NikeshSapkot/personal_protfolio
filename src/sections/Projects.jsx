// src/sections/Projects.jsx
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ title, description, tags, githubLink, liveLink }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col"
    >
      <div className="h-48 bg-gradient-to-r from-[#7dd3fc] to-[#0ea5e9] relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-lg font-medium">Project Preview</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-[#0c4a6e]">{title}</h3>
        <p className="text-[#475569] mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 bg-[#e0f2fe] rounded-full text-[#0284c7]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-auto">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#0c4a6e] hover:text-[#0284c7] transition-colors"
            >
              <FiGithub /> Code
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#0c4a6e] hover:text-[#0284c7] transition-colors"
            >
              <FiExternalLink /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Blockchain Supply Chain Management System",
      description:
        "A blockchain-based supply chain management system that enhances transparency, security, and efficiency in tracking goods and transactions. Features include member registration, product tracking, and secure purchase records using smart contracts. Built with React, Solidity, and Ethereum, it provides a decentralized solution for modern supply chains.",
      tags: ["React", "Solidity", "Ethereum", "Smart Contracts", "Blockchain", "Web3", "Supply Chain"],
      githubLink: "https://github.com/NikeshSapkot/block-chain-supply",
      liveLink: "https://block-chain-supply.netlify.app/",
    },
    {
      title: "Fake News Detection AI",
      description:
        "A web application that leverages advanced machine learning and NLP models (RoBERTa, GPT-3.5 Turbo) to detect and classify fake news. Users can input news articles or headlines to receive instant credibility analysis. Built with Django, FastAPI, and Svelte, it demonstrates the power of AI in combating misinformation.",
      tags: ["Python", "Django", "FastAPI", "Svelte", "NLP", "Machine Learning", "AI", "RoBERTa", "GPT-3.5"],
      githubLink: "https://github.com/NikeshSapkot/fake-news-detection-ai",
      liveLink: "https://fake-news-detection-a.netlify.app/",
    },
    {
      title: "Save-More",
      description: "A useful website which helps to connect volunteer with resturant to use extra foods for those who are in need of them",
      tags: ["React", "Node.js", "FireBase", "Netlify"],
      githubLink: "https://github.com/NikeshSapkot/save-more.git",
      liveLink: "https://save-more.netlify.app/",
      
    },
    {
      title: "Task Management App",
      description: "A productivity app with drag-and-drop interface and team collaboration",
      tags: ["Vue.js", "Firebase", "Tailwind CSS"],
      githubLink: "https://github.com/yourusername/project2",
      liveLink: "https://project2.com",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information with 7-day forecasts and location search",
      tags: ["JavaScript", "API", "CSS Grid"],
      githubLink: "https://github.com/yourusername/project3",
      liveLink: "https://project3.com",
    },
    {
      title: "Fitness Tracker",
      description: "Mobile app for tracking workouts, nutrition, and progress",
      tags: ["React Native", "Redux", "GraphQL"],
      githubLink: "https://github.com/yourusername/project4",
      liveLink: "https://project4.com",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-20 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe]">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-[#0c4a6e]"
          >
            My Projects
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-20 h-1 bg-[#0284c7] mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-[#475569]"
          >
            Here are some of my recent projects. Each one is crafted with attention to detail and
            a focus on user experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;