'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'FixMyArea',
      description: 'A bilingual community issue reporting system with real-time status tracking, empowering citizens to report problems and hold authorities accountable.',
      highlight: 'Implemented real-time issue updates using MongoDB Change Streams with Next.js App Router for scalable rendering.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Express', 'i18next'],
      liveUrl: 'https://fixmy-area.vercel.app/',
      codeUrl: 'https://github.com/CwPranay/FixMyArea',
      image: '/projects/fixmyarea.png',
    },
    {
      title: 'AgroInsight',
      description: 'A crop-price and weather dashboard for farmers, integrating external APIs with caching for reliability to help make informed decisions.',
      highlight: 'Built with Next.js App Router for scalable rendering and optimized data fetching with server-side caching.',
      tech: ['Next.js', 'TypeScript', 'Docker', 'Chart.js'],
      liveUrl: 'https://agro-insights.vercel.app/',
      codeUrl: 'https://github.com/CwPranay/AgroInsight',
      image: '/projects/agroinsight.png',
    },
    {

      title: 'AplyO',
      description: 'A frontend-based job application tracking tool using browser storage for data persistence.',
      highlight: 'Built with vanilla JavaScript and LocalStorage for offline-friendly job tracking.',
      tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
      
      liveUrl: 'https://aplyo.vercel.app/',
      codeUrl: 'https://github.com/cwpranay/aplyO',
      image: '/projects/aplyo.png',
    },

    {
      title: 'Gym Website',
      description: 'A responsive, modern gym and fitness website with clean UI, mobile-first design, and performance optimization.',
      highlight: 'Built with modern web standards focusing on Core Web Vitals and mobile responsiveness.',
      tech: [ 'React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://gymwebsite-demo.vercel.app/',
      codeUrl: 'https://github.com/CwPranay/GymWebsite',
      image: '/projects/gym.png',
    },
    
    {
      title: 'OpenDesk',
      description: 'A collaboration platform where developers can find real-world projects and contribute via GitHub pull requests, with secure authentication and task management.',
      highlight: 'Implemented secure project ownership and task-based collaboration using Clerk authentication and GitHub-centric workflows.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Clerk'],
      liveUrl: 'https://opendesk-com.vercel.app',
      codeUrl: 'https://github.com/CwPranay/OpenDesk',
      image: '/projects/opendesk.png',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-12 bg-[#0B0F14]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB] mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl">
            Production-ready applications solving real-world problems with clean code and strong architecture.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111827] border border-[#1F2933] rounded-xl p-6 md:p-8"
            >
              <div className="grid md:grid-cols-[2fr_3fr] gap-6">
                {/* Image */}
                <div className="relative aspect-video rounded-lg overflow-hidden bg-[#0B0F14]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#E5E7EB]">
                    {project.title}
                  </h3>

                  <p className="text-[#9CA3AF] leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#6B7280] mb-2 font-medium">
                      Technical Highlight
                    </p>
                    <p className="text-sm text-[#9CA3AF]">
                      {project.highlight}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#0B0F14] border border-[#1F2933] rounded-md text-sm text-[#E5E7EB]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-lg text-sm font-medium hover:bg-[#1D4ED8] transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-[#374151] text-[#E5E7EB] rounded-lg text-sm font-medium hover:border-[#4B5563] transition-colors"
                    >
                      <FaGithub className="text-xs" />
                      <span>Source Code</span>
                    </a>
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
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="mb-6 text-[#9CA3AF]">
            View more projects on GitHub
          </p>
          <a
            href="https://github.com/CwPranay"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#374151] text-[#E5E7EB] rounded-lg font-medium hover:border-[#4B5563] transition-colors"
          >
            <FaGithub className="text-lg" />
            <span>Visit My GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
