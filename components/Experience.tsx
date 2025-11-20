'use client';

import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaGithub } from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      role: 'Full-Stack Developer',
      company: 'Personal Projects',
      period: '2024 - Present',
      icon: FaCode,
      description: 'Building real-world applications with Next.js + MERN stack to strengthen backend and frontend integration.',
      contributions: [
        'Developed full-stack web apps using Next.js App Router, server components and optimized rendering',
        'Built FixMyArea with Next.js, a community issue reporting system with multilingual support and live updates',
        'Created AgroInsight using Next.js and TypeScript, a crop-price and weather dashboard for farmers',
        'Developed Notive, a full-stack MERN note-taking app with real-time sync and markdown support',
        'Built a Discord-like live chat app using Next.js, Socket.IO and MongoDB for instant communication'
      ],
      stack: 'Next.js, React, Node.js, Express, MongoDB, TypeScript, Tailwind CSS, API Integration'
    },
    {
      role: 'Frontend Developer',
      company: 'Learning & Exploration',
      period: '2023 - 2024',
      icon: FaPalette,
      description: 'Started frontend development during the first year of BSc IT, focusing on React and Next.js.',
      contributions: [
        'Learned React, Next.js, Tailwind CSS, and component-based design',
        'Practiced building responsive and modern interfaces with Next.js and UI/UX principles',
        'Experimented with state management, SSR, and performance optimization'
      ],
      stack: 'Next.js, React, TypeScript, Tailwind CSS, Bootstrap, UI/UX Design'
    },
    {
      role: 'Open-Source Learner',
      company: 'GitHub Explorer',
      period: '2024 - Present',
      icon: FaGithub,
      description: 'Actively learning open-source workflows to understand real-world code collaboration.',
      contributions: [
        'Studied large-scale React repositories to learn structure and conventions',
        'Practiced Git commands, branching, and pull request workflows',
        'Started maintaining private projects on GitHub for version control discipline'
      ],
      stack: 'Git, GitHub, Issue Tracking, Documentation Writing'
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-[#0b0f1a]">
      {/* Subtle grid background - only section with grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)',
        backgroundSize: '4rem 4rem'
      }} />

      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-sm font-semibold mb-4 tracking-widest uppercase text-gray-400">
            Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience &{' '}
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
              Learning
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My journey as a BSc IT student, building real projects and mastering modern web development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line with gradient */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot - minimal glow */}
                <div className="absolute left-6 top-6 w-5 h-5 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-[#0b0f1a] hidden md:block z-10 shadow-sm" />

                {/* Card */}
                <div className="md:ml-20">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="relative group"
                  >
                    {/* Card content - no glow */}
                    <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/8 group-hover:border-white/20 shadow-lg">
                      <div className="flex items-start gap-4 mb-4">
                        {/* Icon */}
                        <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-cyan-400/30 rounded-xl">
                          <exp.icon className="text-2xl text-cyan-400" />
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                              {exp.role}
                            </h3>
                            <span className="text-sm font-medium text-gray-400">
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-cyan-400 font-medium mb-3">{exp.company}</p>
                        </div>
                      </div>

                      <p className="mb-4 leading-relaxed text-gray-300">
                        {exp.description}
                      </p>

                      {/* Contributions */}
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-400 mb-3">Key Contributions</p>
                        <ul className="space-y-2">
                          {exp.contributions.map((contribution, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + i * 0.1 }}
                              className="flex items-start gap-3 text-gray-400 text-sm"
                            >
                              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                              <span>{contribution}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-xs mb-2 font-semibold uppercase tracking-wider text-gray-400">
                          Tech Stack
                        </p>
                        <p className="text-sm text-gray-300">
                          {exp.stack}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-400/30 rounded-2xl backdrop-blur-sm">
            <p className="text-gray-300">
              <span className="font-bold text-white">BSc IT Student</span> • 2023 - 2026 • Final Year, Last Semester
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
