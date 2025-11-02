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
      description: 'Building real-world applications to strengthen backend and frontend integration.',
      achievements: [
        'Built FixMyArea, a community issue reporting system with multilingual support and live updates',
        'Created AgroInsight, a crop-price and weather dashboard for farmers using real APIs',
        'Developed Notive, a full-stack note-taking app with real-time sync and markdown support',
        'Built a Discord-like live chat app using Socket.IO and MongoDB for instant communication'
      ],
      stack: 'React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, API Integration'
    },
    {
      role: 'Frontend Developer',
      company: 'Learning & Exploration',
      period: '2023 - 2024',
      icon: FaPalette,
      description: 'Started frontend development during the first year of BSc IT, focusing on UI design and interactivity.',
      achievements: [
        'Learned React, Tailwind CSS, Bootstrap, and component-based design',
        'Practiced building responsive and modern interfaces with UI/UX principles',
        'Experimented with state management and performance optimization'
      ],
      stack: 'React, Next.js, Tailwind CSS, Bootstrap, UI/UX Design'
    },
    {
      role: 'Open-Source Learner',
      company: 'GitHub Explorer',
      period: '2024 - Present',
      icon: FaGithub,
      description: 'Actively learning open-source workflows to understand real-world code collaboration.',
      achievements: [
        'Studied large-scale React repositories to learn structure and conventions',
        'Practiced Git commands, branching, and pull request workflows',
        'Started maintaining private projects on GitHub for version control discipline'
      ],
      stack: 'Git, GitHub, Issue Tracking, Documentation Writing'
    },
  ];

  return (
    <section id="experience" className="py-32 px-4 sm:px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      {/* Grid background */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'linear-gradient(to right, var(--grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)',
        backgroundSize: '4rem 4rem'
      }} />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-sm font-semibold mb-4 tracking-[0.2em] uppercase" style={{ color: 'var(--text-secondary)' }}>
            Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
            Experience &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Learning
            </span>
          </h2>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            My journey as a BSc IT student, building real projects and mastering modern web development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card */}
              <div className="relative rounded-2xl p-6 md:p-8 transition-[border-color,box-shadow] duration-300 backdrop-blur-sm" style={{
                borderWidth: '1px',
                borderColor: 'var(--border-color)',
                backgroundColor: 'var(--card-bg)',
                boxShadow: 'var(--card-shadow)'
              }}>
                <div className="flex items-start gap-4 mb-4">
                  {/* Icon */}
                  <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                    <exp.icon className="text-2xl text-blue-400" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl md:text-2xl font-bold group-hover:text-blue-400 transition-colors" style={{ color: 'var(--foreground)' }}>
                        {exp.role}
                      </h3>
                      <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-blue-400 font-medium mb-3">{exp.company}</p>
                  </div>
                </div>

                <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + i * 0.1 }}
                      className="flex items-start gap-3 text-zinc-400 text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                  <p className="text-xs mb-2 font-semibold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                    Tech Stack
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {exp.stack}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block px-6 py-3 rounded-xl backdrop-blur-sm" style={{
            backgroundColor: 'var(--card-bg)',
            borderWidth: '1px',
            borderColor: 'var(--border-color)',
            boxShadow: 'var(--card-shadow)'
          }}>
            <p style={{ color: 'var(--text-secondary)' }}>
              <span className="font-semibold" style={{ color: 'var(--foreground)' }}>BSc IT Student</span> • 2023 - 2026 • Final Year, Last Semester
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
