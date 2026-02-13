'use client';

import { motion } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiExpress,
  SiTypescript, SiTailwindcss, SiMysql, SiDotnet, SiGit,
  SiPython, SiPandas, SiNumpy, SiDocker
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'React', icon: SiReact },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Express', icon: SiExpress },
        { name: '.NET', icon: SiDotnet },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'MySQL', icon: SiMysql },
      ]
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'Docker', icon: SiDocker },
        { name: 'Git', icon: SiGit },
        { name: 'Python', icon: SiPython },
        { name: 'Java', icon: FaJava },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-12 bg-[#0B0F14]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB] mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl">
            Technologies and tools I use to build modern web applications.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-[#111827] border border-[#1F2933] rounded-xl p-6"
            >
              <h3 className="text-lg font-bold text-[#E5E7EB] mb-6">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3"
                  >
                    <skill.icon className="text-xl text-[#9CA3AF]" />
                    <span className="text-[#E5E7EB]">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
