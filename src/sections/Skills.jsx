// src/sections/Skills.jsx
import { motion } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt 
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiTypescript, 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss,
  SiDocker, 
  SiPostgresql, 
  SiGraphql, 
  SiRedux 
} from "react-icons/si";

const Skills = () => {
  const categories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-2xl" />, level: 95 },
        { name: "JavaScript", icon: <SiJavascript className="text-2xl" />, level: 90 },
        { name: "TypeScript", icon: <SiTypescript className="text-2xl" />, level: 85 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-2xl" />, level: 90 },
        { name: "Redux", icon: <SiRedux className="text-2xl" />, level: 80 },
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-2xl" />, level: 88 },
        { name: "Express", icon: <SiExpress className="text-2xl" />, level: 85 },
        { name: "Python", icon: <FaPython className="text-2xl" />, level: 75 },
        { name: "GraphQL", icon: <SiGraphql className="text-2xl" />, level: 70 },
      ]
    },
    {
      name: "Database & Tools",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-2xl" />, level: 85 },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-2xl" />, level: 75 },
        { name: "Git", icon: <FaGitAlt className="text-2xl" />, level: 90 },
        { name: "Docker", icon: <SiDocker className="text-2xl" />, level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-20 bg-gradient-to-br from-[#f0f9ff] to-[#e0f7fe]">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-[#0c4a6e]"
          >
            My Skills
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-20 h-1 bg-[#0284c7] mx-auto mb-8"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-[#475569] mb-12"
          >
            I've worked with a range of technologies in the web development world.
            Here's a showcase of my technical skills and proficiency levels.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-[#e0f2fe] shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-8 text-[#0284c7] flex items-center gap-3 pb-3 border-b border-[#e0f2fe]">
                <div className="w-3 h-3 bg-[#0284c7] rounded-full"></div>
                {category.name}
              </h3>
              
              <div className="space-y-8">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl text-[#0284c7]">
                          {skill.icon}
                        </div>
                        <span className="font-medium text-[#0c4a6e]">{skill.name}</span>
                      </div>
                      <span className="text-[#475569] text-sm font-bold">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2.5 bg-[#e0f2fe] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[#7dd3fc] to-[#0284c7] rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-10 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-10 text-center text-[#0c4a6e]">
            Other Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {['HTML5', 'CSS3', 'SASS', 'Next.js', 'Vite', 'Jest', 
              'Webpack', 'REST API', 'Firebase', 'AWS', 'Linux', 'NPM',
              'Redux', 'Framer Motion', 'GSAP', 'Three.js', 'Jest', 
              'GraphQL', 'Mongoose', 'Prisma', 'TypeORM'].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="px-5 py-2.5 bg-[#e0f7fe] rounded-full text-sm font-medium text-[#0c4a6e] hover:bg-[#bae6fd] transition-colors"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;