'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'FixMyArea',
      problem: 'Communities lacked a centralized platform to report and track local issues',
      solution: 'Built a bilingual issue reporting system with real-time status tracking',
      impact: 'Empowered citizens to report problems and hold authorities accountable',
      challenge: 'Implemented real-time issue updates using MongoDB Change Streams while optimizing watchers to avoid performance bottlenecks.',
      techHighlight: 'Built with Next.js App Router for scalable rendering and performance.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Express', 'i18next'],
      badges: ['Next.js Powered', 'Realtime', 'Multilingual'],
      liveUrl: 'https://fixmy-area.vercel.app/',
      codeUrl: 'https://github.com/CwPranay/FixMyArea',
      image: '/projects/fixmyarea.png',
    },
    {
      title: 'AgroInsight',
      problem: 'Farmers struggled to access real-time crop prices and weather data',
      solution: 'Created a dashboard integrating external APIs with caching for reliability',
      impact: 'Helped farmers make informed decisions about crop sales and planning',
      challenge: 'Integrated multiple external APIs with server-side caching to avoid rate limits and ensure fast, reliable crop-price & weather data.',
      techHighlight: 'Built with Next.js App Router for scalable rendering and optimized data fetching.',
      tech: ['Next.js', 'TypeScript', 'Docker', 'Chart.js', 'Agmarknet API'],
      badges: ['Next.js Powered', 'Scalable', 'Data-Driven'],
      liveUrl: 'https://agro-insights.vercel.app/',
      codeUrl: 'https://github.com/CwPranay/AgroInsight',
      image: '/projects/agroinsight.png',
    },
    {
      title: 'Discord Clone',
      problem: 'Need for a real-time communication platform with instant messaging',
      solution: 'Built a chat app with Socket.IO for real-time messaging and status tracking',
      impact: 'Delivered seamless real-time communication with typing indicators',
      challenge: 'Built a WebSocket-driven chat system with typing indicators, online presence tracking, and efficient room-based message storage.',
      tech: ['Next.js', 'Socket.IO', 'MongoDB', 'Express'],
      badges: ['Realtime', 'Full-Stack', 'WebSocket'],
      liveUrl: 'https://chatapp-pranay.vercel.app/',
      codeUrl: 'https://github.com/CwPranay/Discord-Clone',
      image: '/projects/discord-clone.png',
    },
    {
      title: 'Notive',
      problem: 'Users needed a private, device-specific note management system',
      solution: 'Created a note app with device-based storage using cookies and MongoDB',
      impact: 'Provided secure, fast note management with markdown support',
      challenge: 'Created real-time multi-device note sync with conflict-free updates and offline-safe local caching.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
      badges: ['Full-Stack', 'Secure', 'Fast'],
      liveUrl: 'https://notive-active-notes.vercel.app/',
      codeUrl: 'https://github.com/CwPranay/Notive-Full-Stack-',
      image: '/projects/notive.png',
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0d1117]">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <p className="text-sm font-semibold mb-4 tracking-widest uppercase text-gray-400">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real projects solving real problems. Each one represents a unique challenge and solution.
          </p>
        </motion.div>

        {/* Projects - Alternating Layout */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-start ${
                index % 2 === 1 ? 'lg:grid-cols-[0.9fr_1.1fr]' : ''
              }`}
            >
              {/* Image Side - Premium card feel, 16:10 ratio */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''} lg:mt-8`}
              >
                {/* Subtle glow behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Image container with premium card feel */}
                <div onClick={()=>{window.location.href=project.liveUrl}} className="relative bg-white/3 rounded-xl p-2 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.45)] border border-white/10">
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-black/40">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`space-y-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {project.title}
                </h3>

                {/* Badges - highlight Next.js */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.badges.map((badge) => (
                    <span
                      key={badge}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        badge === 'Next.js Powered'
                          ? 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-400/30 text-cyan-400'
                          : 'bg-white/5 border border-cyan-400/20 text-cyan-400'
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Problem → Solution → Impact → Challenge */}
                <div className="space-y-5 pt-2">
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-gray-500 mb-2 font-semibold">Problem</p>
                    <p className="text-gray-300 leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-gray-500 mb-2 font-semibold">Solution</p>
                    <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-gray-500 mb-2 font-semibold">Impact</p>
                    <p className="text-gray-300 leading-relaxed">{project.impact}</p>
                  </div>
                  <div className="pt-2">
                    <p className="text-[11px] uppercase tracking-wide text-cyan-400 mb-2 font-semibold">Technical Challenge</p>
                    <p className="text-gray-400 text-sm italic leading-relaxed">{project.challenge}</p>
                  </div>
                  {project.techHighlight && (
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-blue-400 mb-2 font-semibold">Tech Highlight</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{project.techHighlight}</p>
                    </div>
                  )}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons - Smaller and tighter */}
                <div className="flex gap-3 pt-2">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] text-white rounded-lg font-medium text-sm shadow-[0_3px_10px_rgba(0,0,0,0.4)] hover:-translate-y-[2px] transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    <span>Live Demo</span>
                  </motion.a>

                  {project.codeUrl ? (
                    <motion.a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white rounded-lg font-medium text-sm shadow-[0_3px_10px_rgba(0,0,0,0.4)] hover:-translate-y-[2px] transition-all duration-300"
                    >
                      <FaGithub className="text-xs" />
                      <span>View Code</span>
                    </motion.a>
                  ) : (
                    <div className="flex items-center gap-2 px-4 py-2 border border-white/10 text-gray-500 rounded-lg font-medium text-sm cursor-not-allowed opacity-50">
                      <FaLock className="text-xs" />
                      <span>Private</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-20"
        >
          <p className="mb-6 text-lg text-gray-400">
            Want to see more projects?
          </p>
          <motion.a
            href="https://github.com/CwPranay"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/10 hover:border-cyan-400/50 text-white rounded-xl font-semibold transition-all"
          >
            <FaGithub className="text-xl" />
            <span>Visit My GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
