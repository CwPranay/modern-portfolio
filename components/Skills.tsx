'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiExpress,
  SiTypescript, SiTailwindcss, SiMysql, SiDotnet, SiGit,
  SiPython, SiPandas, SiNumpy, SiDocker
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: 'Frontend',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: [
        { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF', tooltip: 'SSR, ISR, App Router, Server Actions, API Routes' },
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      ]
    },
    {
      category: 'Backend',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
        { name: '.NET', icon: SiDotnet, color: '#512BD4' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      ]
    },
    {
      category: 'DevOps',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      skills: [
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
      ]
    },
    {
      category: 'Tools',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: [
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'Java', icon: FaJava, color: '#007396' },
        { name: 'Pandas', icon: SiPandas, color: '#150458' },
        { name: 'NumPy', icon: SiNumpy, color: '#013243' },
      ]
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-[#0b0f1a]">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold mb-4 tracking-widest uppercase text-gray-400">
            Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technologies I{' '}
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
              Master
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hover over each technology to see it glow
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className={catIndex % 2 === 1 ? 'lg:ml-12' : ''}
            >
              {/* Category Label with Icon */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white inline-flex items-center gap-2 relative">
                  <span className="text-cyan-400">{category.icon}</span>
                  {category.category}
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] rounded-full"></div>
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -4, scale: 1.03 }}
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    className="relative group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                  >
                    {/* Tooltip for Next.js */}
                    {skill.tooltip && hoveredSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -top-16 left-1/2 -translate-x-1/2 px-3 py-2 bg-black/90 border border-white/20 rounded-lg text-xs text-white whitespace-nowrap z-20 shadow-lg"
                      >
                        {skill.tooltip}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 border-r border-b border-white/20 rotate-45"></div>
                      </motion.div>
                    )}

                    {/* Card - special highlight for Next.js */}
                    <div className={`relative bg-white/5 border rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/8 ${
                      skill.name === 'Next.js' && hoveredSkill === skill.name
                        ? 'border-cyan-400/40'
                        : hoveredSkill === skill.name
                        ? 'border-white/20'
                        : 'border-white/10'
                    }`}>
                      <div className="flex flex-col items-center gap-3">
                        <skill.icon
                          className="text-4xl transition-all duration-300"
                          style={{
                            color: hoveredSkill === skill.name ? skill.color : '#9ca3af',
                          }}
                        />
                        <span className="text-sm font-medium text-gray-300 text-center">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
