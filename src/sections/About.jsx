// src/sections/About.jsx
import { motion } from "framer-motion";
import { FiCode, FiLayout, FiSmartphone, FiUser, FiAward } from "react-icons/fi";

const About = () => {
  const stats = [
    { icon: <FiUser className="text-2xl" />, value: "5+", label: "Years Experience" },
    { icon: <FiAward className="text-2xl" />, value: "24", label: "Projects Completed" },
    { icon: <FiCode className="text-2xl" />, value: "100K+", label: "Lines of Code" }
  ];

const approachItems = [
  {
    icon: <FiCode className="text-2xl" />,
    title: "Scalable Architecture",
    description: "I design modular and scalable backend systems using clean architecture principles, RESTful APIs, and microservices."
  },
  {
    icon: <FiLayout className="text-2xl" />,
    title: "End-to-End Development",
    description: "From wireframes to deployment, I handle the complete software lifecycle with a focus on performance and maintainability."
  },
  {
    icon: <FiSmartphone className="text-2xl" />,
    title: "DevOps & CI/CD",
    description: "I integrate CI/CD pipelines and containerization to streamline deployments and ensure reliability in production environments."
  }
];


  return (
    <section id="about" className="py-24 px-6 lg:px-20 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=" text-4xl md:text-4xl font-bold mb-5 text-[#0c4a6e]"
          >
            About Me
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
  className="max-w-2xl text-lg text-[#475569] mb-12"
>
  I'm a Computer Science student passionate about coding and software development. With experience in technical support roles, I've honed my communication and problem-solving skills. Skilled in Python, Django, Java, C++, and Swift, I enjoy building solutions that make an impact. As an active member of IEEE and ISO, I stay updated on industry trends and expand my professional network. My goal is to become a software engineer and contribute meaningfully to the tech industry. Always eager to learn and connect—let's collaborate!
</motion.p>

        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#e0f7fe] to-[#bae6fd] p-10 rounded-3xl shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-8 text-[#0c4a6e]">My Journey</h3>
<p className="text-lg mb-8 text-[#475569]">
  <b>Education:</b> <br/>
  <b>Jacksonville State University</b> (Aug 2021 - May 2025): Bachelor of Science - Computer and Information Sciences, General (GPA: 3.5+). Activities: International Student Organization (ISO).<br/>
  <b>Trinity International College and SS</b> (Jun 2019 - Dec 2020): High School Diploma, Computer Science (GPA: 3.75).
</p>
<p className="text-lg mb-8 text-[#475569]">
  <b>Experience:</b> <br/>
  <b>Secretary - Nepalese Student Organization (NSO)</b> (Nov 2022 - Present)<br/>
  <b>Secretary - IEEE</b> (Feb 2023 - Dec 2024)<br/>
  <b>Student Worker - International House</b> (Dec 2021 - Oct 2022): Managed and maintained student databases, filtered and organized data, and provided support to students and staff.<br/>
  <b>Data Analyst - Ad Factor Nepal</b> (Apr 2020 - Oct 2020): Collected and organized product information, performed data entry, and prepared data for analysis.<br/>
  <b>Computer Lab Assistant - Little Star Higher School</b> (Mar 2017 - Feb 2018): Maintained student records, assisted with technical issues, and taught foundational HTML and CSS.
</p>
<p className="text-lg mb-12 text-[#475569]">
  <b>Skills:</b> Python, Django, Java, C++, Swift, Communication, Data Analysis, Microsoft Word, VLOOKUP, HTML, CSS, Exams, and more.<br/>
  <b>Professional Activities:</b> Active member of IEEE and ISO. <br/>
  <b>Goal:</b> To become a software engineer and contribute meaningfully to the tech industry.
</p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-5 rounded-xl shadow-md text-center"
                >
                  <div className="text-[#0284c7] mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-[#0c4a6e] mb-1">{stat.value}</div>
                  <div className="text-sm text-[#475569]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-10 text-[#0c4a6e]">My Approach</h3>
            
            <div className="space-y-8">
              {approachItems.map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-[#f5f5f5] rounded-2xl shadow-md border border-[#e5e5e5]"
                >
                  <div className="flex items-start gap-6">
                    <div className="bg-[#e0f7fe] p-4 rounded-full text-[#0284c7]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-[#0c4a6e]">{item.title}</h4>
                      <p className="text-[#475569]">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;