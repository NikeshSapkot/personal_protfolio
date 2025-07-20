import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Code, Database, Palette, Smartphone, Globe, Server } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'JavaScript', level: 75 },
        { name: 'Solidity', level: 70 },
        { name: 'HTML/CSS', level: 85 },
      ]
    },
    {
      title: 'Web Development & Blockchain',
      icon: Server,
      skills: [
        { name: 'Django', level: 85 },
        { name: 'React', level: 75 },
        { name: 'Web3.js', level: 70 },
        { name: 'Smart Contracts', level: 75 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'REST APIs', level: 80 },
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Database,
      skills: [
        { name: 'Machine Learning', level: 85 },
        { name: 'Deep Learning', level: 80 },
        { name: 'NLP', level: 75 },
        { name: 'Computer Vision', level: 70 },
        { name: 'Data Analysis', level: 90 },
        { name: 'TensorFlow/PyTorch', level: 75 },
      ]
    },
    {
      title: 'Technical Support',
      icon: Smartphone,
      skills: [
        { name: 'Technical Support', level: 90 },
        { name: 'Problem Solving', level: 85 },
        { name: 'Communication', level: 90 },
        { name: 'Troubleshooting', level: 85 },
        { name: 'System Maintenance', level: 80 },
        { name: 'User Training', level: 75 },
      ]
    },
    {
      title: 'Leadership & Soft Skills',
      icon: Palette,
      skills: [
        { name: 'Leadership', level: 85 },
        { name: 'Team Management', level: 80 },
        { name: 'Project Coordination', level: 75 },
        { name: 'Public Speaking', level: 70 },
        { name: 'Organization', level: 85 },
        { name: 'Time Management', level: 80 },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Globe,
      skills: [
        { name: 'Microsoft Office', level: 90 },
        { name: 'Computer Hardware', level: 85 },
        { name: 'Software Installation', level: 80 },
        { name: 'Network Support', level: 70 },
        { name: 'Documentation', level: 85 },
        { name: 'Quality Assurance', level: 75 },
      ]
    }
  ];

  const techStack = [
    { name: 'Python', icon: '🐍' },
    { name: 'Django', icon: '🎯' },
    { name: 'Java', icon: '☕' },
    { name: 'C++', icon: '⚡' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'React', icon: '⚛️' },
    { name: 'Blockchain', icon: '⛓️' },
    { name: 'Solidity', icon: '🔗' },
    { name: 'Machine Learning', icon: '🤖' },
    { name: 'Git', icon: '📝' },
    { name: 'HTML/CSS', icon: '🌐' },
    { name: 'MySQL', icon: '🗄️' },
  ];

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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
        delay: 0.5,
      },
    }),
  };

  return (
    <section id="skills" className="section-padding relative">
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
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto"
          >
            I've developed expertise in various technologies and frameworks. Here's a comprehensive 
            overview of my technical skills and proficiency levels.
          </motion.p>
        </motion.div>

        {/* Tech Stack Carousel */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-dark-800 dark:text-dark-200">
            Tech Stack
          </h3>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            loop={true}
            className="tech-stack-swiper"
          >
            {techStack.map((tech, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center p-6 glass dark:glass-dark rounded-xl cursor-pointer"
                >
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <div className="text-sm font-medium text-dark-800 dark:text-dark-200">
                    {tech.name}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="card p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-dark-800 dark:text-dark-200">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div
                        custom={skill.level}
                        variants={progressVariants}
                        className="h-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 glass dark:glass-dark rounded-xl">
              <div className="text-3xl font-bold gradient-text mb-2">15+</div>
              <div className="text-dark-600 dark:text-dark-300">Technologies</div>
            </div>
            <div className="p-6 glass dark:glass-dark rounded-xl">
              <div className="text-3xl font-bold gradient-text mb-2">5+</div>
              <div className="text-dark-600 dark:text-dark-300">Years Experience</div>
            </div>
            <div className="p-6 glass dark:glass-dark rounded-xl">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-dark-600 dark:text-dark-300">Projects Completed</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .tech-stack-swiper .swiper-pagination-bullet {
          background: theme('colors.primary.600');
        }
        .tech-stack-swiper .swiper-pagination-bullet-active {
          background: theme('colors.primary.400');
        }
      `}</style>
    </section>
  );
};

export default Skills; 