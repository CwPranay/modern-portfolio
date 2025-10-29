'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'FixMyArea',
      description: 'A community-driven issue reporting platform that allows users to report and track local problems like potholes, water leaks, or garbage collection delays. Integrated bilingual support (English/Hindi) and a real-time status tracking dashboard.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'i18next'],
      liveUrl: 'https://fixmy-area.vercel.app/',
      codeUrl: null,
      image: '/projects/fixmyarea.png',
      featured: true,
    },
    {
      title: 'AgroInsight',
      description: 'A web platform built to empower farmers with real-time crop prices, weather forecasts, and AI-based insights. Uses external APIs and caching for performance and reliability.',
      tech: ['Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Chart.js', 'Agmarknet API'],
      liveUrl: 'https://agro-insights.vercel.app/',
      codeUrl: 'https://github.com/CwPranay/AgroInsight',
      image: '/projects/agroinsight.png',
      featured: true,
    },
    {
      title: 'Discord Clone',
      description: 'A real-time chat application inspired by Discord. Features instant messaging, typing indicators, online status tracking, and fully responsive UI.',
      tech: ['Next.js', 'Socket.IO', 'MongoDB', 'Express', 'Tailwind CSS'],
      liveUrl: 'https://chatapp-pranay.vercel.app/',
      codeUrl: 'https://github.com/CwPranay/Discord-Clone',
      image: '/projects/discord-clone.png',
      featured: false,
    },
    {
      title: 'Notive',
      description: 'A note management application with device-based storage using cookies and MongoDB. Features real-time CRUD operations, markdown formatting, and device-specific note filtering for privacy and performance.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
      liveUrl: 'https://notive-active-notes.vercel.app/',
      codeUrl: 'https://github.com/CwPranay/Notive-Full-Stack-',
      image: '/projects/notive.png',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      {/* Multiple glows for depth */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <p className="text-sm font-semibold text-zinc-400 mb-4 tracking-[0.2em] uppercase">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Transforming ideas into reality through code. Each project represents a unique challenge solved with modern technologies.
          </p>
        </motion.div>

        {/* Featured Projects - Hero Layout */}
        <div className="space-y-24 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              {/* Image Side */}
              <motion.div
                className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Image container */}
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 group-hover:border-zinc-700 transition-all duration-300 bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Content Side */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold mb-4">
                      Featured Project
                    </span>
                  </motion.div>
                  
                  <motion.h3
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-zinc-400 leading-relaxed text-base md:text-lg"
                  >
                    {project.description}
                  </motion.p>
                </div>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-wrap gap-2"
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-zinc-900 text-zinc-300 rounded-lg text-sm font-medium border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="flex gap-4"
                >
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-zinc-100 transition-colors shadow-lg"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </motion.a>
                  
                  {project.codeUrl ? (
                    <motion.a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="flex items-center gap-2 px-6 py-3 border-2 border-zinc-700 rounded-lg font-semibold hover:border-zinc-600 hover:bg-zinc-900/50 transition-all"
                    >
                      <FaGithub />
                      <span>View Code</span>
                    </motion.a>
                  ) : (
                    <div className="flex items-center gap-2 px-6 py-3 border-2 border-zinc-800 rounded-lg font-semibold text-zinc-600 cursor-not-allowed">
                      <FaLock />
                      <span>Private Repo</span>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects - Card Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            More Projects
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative border border-zinc-900 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 bg-black/50 backdrop-blur-sm">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-zinc-900 text-zinc-500 rounded text-xs border border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 text-zinc-500 text-xs">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-medium text-sm hover:bg-zinc-100 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      <span>Demo</span>
                    </motion.a>
                    
                    {project.codeUrl && (
                      <motion.a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-zinc-700 rounded-lg font-medium text-sm hover:border-zinc-600 hover:bg-zinc-900/50 transition-all"
                      >
                        <FaGithub className="text-xs" />
                        <span>Code</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-zinc-400 mb-6 text-lg">
            Interested in collaborating on a project?
          </p>
          <motion.a
            href="https://github.com/CwPranay"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-zinc-700 rounded-lg font-semibold hover:border-zinc-600 hover:bg-zinc-900/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-500 ease-out backdrop-blur-sm"
          >
            <FaGithub className="text-xl" />
            <span>Explore More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
