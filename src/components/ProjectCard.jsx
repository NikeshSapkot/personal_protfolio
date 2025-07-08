import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ title, description, tags, githubLink, liveLink }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 relative">
        {/* Placeholder for project image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-lg font-medium">Project Preview</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-text">{title}</h3>
        <p className="text-text-secondary mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-primary rounded-full text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition-colors"
            >
              <FiGithub size={20} />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition-colors"
            >
              <FiExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;