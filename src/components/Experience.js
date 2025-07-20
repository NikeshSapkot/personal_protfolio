import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Briefcase, GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experience = [
    {
      id: 1,
      title: 'Secretary - Nepalese Student Organization (NSO)',
      company: 'Jacksonville State University',
      location: 'Jacksonville, Alabama',
      period: 'Nov 2022 - Present',
      description: 'Managing and coordinating student organization activities, maintaining records, and facilitating communication between members and university administration.',
      type: 'work',
      technologies: ['Leadership', 'Organization', 'Communication', 'Project Management'],
      achievements: [
        'Successfully managed student database and records',
        'Coordinated multiple student events and activities',
        'Improved communication between organization and university'
      ]
    },
    {
      id: 2,
      title: 'Secretary - IEEE',
      company: 'Jacksonville State University',
      location: 'Jacksonville, Alabama',
      period: 'Feb 2023 - Dec 2024',
      description: 'Served as Secretary for the IEEE student chapter, managing documentation, coordinating meetings, and supporting technical initiatives.',
      type: 'work',
      technologies: ['Technical Documentation', 'Meeting Coordination', 'IEEE Standards'],
      achievements: [
        'Maintained accurate meeting records and documentation',
        'Supported technical workshops and events',
        'Enhanced chapter communication and organization'
      ]
    },
    {
      id: 3,
      title: 'Student Worker - International House',
      company: 'Jacksonville State University',
      location: 'Jacksonville, Alabama',
      period: 'Dec 2021 - Oct 2022',
      description: 'Provided technical support and administrative assistance to international students, managing databases and ensuring smooth operations.',
      type: 'work',
      technologies: ['Technical Support', 'Database Management', 'Communication', 'Vlookup'],
      achievements: [
        'Managed and maintained student databases with accuracy',
        'Filtered and organized student data and files',
        'Communicated effectively with students, faculty, and staff'
      ]
    },
    {
      id: 4,
      title: 'Data Analyst',
      company: 'Ad Factor Nepal',
      location: 'Kathmandu, Nepal',
      period: 'Apr 2020 - Oct 2020',
      description: 'Performed data analysis, entry, and reporting tasks to support business operations and decision-making processes.',
      type: 'work',
      technologies: ['Data Analysis', 'Microsoft Word', 'Excel', 'Reporting'],
      achievements: [
        'Collected and organized product information from clients',
        'Performed data entry for employee attendance records',
        'Prepared data for analysis and reporting'
      ]
    },
    {
      id: 5,
      title: 'Computer Lab Assistant',
      company: 'Little Star Higher School',
      location: 'Lahan, Siraha',
      period: 'Mar 2017 - Feb 2018',
      description: 'Provided technical support to students and faculty, maintained computer systems, and taught foundational web development concepts.',
      type: 'work',
      technologies: ['Technical Support', 'HTML/CSS', 'Microsoft Word', 'Computer Maintenance'],
      achievements: [
        'Maintained and updated student records',
        'Assisted students with computer and technical issues',
        'Taught foundational HTML and CSS to students'
      ]
    },
    {
      id: 6,
      title: 'Bachelor of Science - Computer and Information Sciences',
      company: 'Jacksonville State University',
      location: 'Jacksonville, Alabama',
      period: 'Aug 2021 - May 2025',
      description: 'Pursuing Computer Science degree with focus on software development, algorithms, and information systems.',
      type: 'education',
      technologies: ['Computer Science', 'Programming', 'Data Structures', 'Algorithms'],
      achievements: [
        'GPA: 3.5+',
        'Active member of International Student Organization (ISO)',
        'Participating in various technical projects and competitions'
      ]
    },
    {
      id: 7,
      title: 'High School Diploma - Computer Science',
      company: 'Trinity International College and SS',
      location: 'Nepal',
      period: 'Jun 2019 - Dec 2020',
      description: 'Completed high school education with focus on Computer Science fundamentals and programming concepts.',
      type: 'education',
      technologies: ['Computer Science', 'Programming Basics', 'Mathematics'],
      achievements: [
        'GPA: 3.75',
        'Strong foundation in computer science principles',
        'Prepared for university-level computer science studies'
      ]
    }
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

  return (
    <section id="experience" className="section-padding relative">
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
            Experience & <span className="gradient-text">Education</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto"
          >
            My professional journey and educational background that have shaped my expertise 
            in software development and technology.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={itemVariants}
          className="relative"
        >
          <VerticalTimeline lineColor="rgb(59 130 246 / 0.2)">
            {experience.map((item, index) => (
              <VerticalTimelineElement
                key={item.id}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid rgba(59, 130, 246, 0.3)',
                }}
                date={item.period}
                dateClassName="text-primary-600 dark:text-primary-400 font-semibold"
                iconStyle={{
                  background: item.type === 'work' ? 'rgb(59, 130, 246)' : 'rgb(16, 185, 129)',
                  color: '#fff',
                }}
                icon={item.type === 'work' ? <Briefcase /> : <GraduationCap />}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="vertical-timeline-element-title text-xl font-semibold text-dark-800 dark:text-dark-200 mb-2">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 mb-3 text-sm text-dark-600 dark:text-dark-400">
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{item.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="text-dark-600 dark:text-dark-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="text-sm text-dark-600 dark:text-dark-400 flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-dark-800 dark:text-dark-200">
            Certifications & Awards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Python Programming',
                issuer: 'Coursera',
                year: '2023',
                icon: '🐍'
              },
              {
                title: 'Java Fundamentals',
                issuer: 'Oracle',
                year: '2023',
                icon: '☕'
              },
              {
                title: 'Data Analysis with Excel',
                issuer: 'Microsoft',
                year: '2022',
                icon: '📊'
              },
              {
                title: 'IEEE Student Member',
                issuer: 'IEEE',
                year: '2023',
                icon: '⚡'
              },
              {
                title: 'Technical Support',
                issuer: 'Jacksonville State University',
                year: '2022',
                icon: '🛠️'
              },
              {
                title: 'Leadership Award',
                issuer: 'NSO',
                year: '2023',
                icon: '🏆'
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card p-6 text-center"
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h4 className="font-semibold text-dark-800 dark:text-dark-200 mb-2">
                  {cert.title}
                </h4>
                <p className="text-sm text-dark-600 dark:text-dark-400 mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                  {cert.year}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 