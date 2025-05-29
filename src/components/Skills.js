import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programlama Dilleri',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8" />, level: 85 },
        { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8" />, level: 75 },
        { name: 'Python', icon: <FaPython className="w-8 h-8" />, level: 80 },
        // Diğer diller için benzer yapıyı ekleyebilirsiniz
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact className="w-8 h-8" />, level: 90 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8" />, level: 85 },
        // Diğer frontend teknolojileri için benzer yapıyı ekleyebilirsiniz
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8" />, level: 80 },
        { name: 'SQL', icon: <FaDatabase className="w-8 h-8" />, level: 75 },
        // Diğer backend teknolojileri için benzer yapıyı ekleyebilirsiniz
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Yetenekler</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {skill.icon}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="bg-primary h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 