'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center px-4 sm:px-6 lg:px-12 pt-24 pb-12 bg-[#0B0F14]">
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
        <div>
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111827] border border-[#1F2933] mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
            </span>
            <span className="text-sm text-[#9CA3AF]">Available for opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-[#E5E7EB]"
          >
            Full-Stack Developer
            <br />
            <span className="text-[#2563EB]">Building Production Apps</span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[#9CA3AF] mb-8 max-w-2xl"
          >
            Specializing in Next.js and MERN stack. Building scalable web applications with clean architecture and modern best practices.
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-2 mb-10"
          >
            {['Next.js', 'React', 'Node.js', 'MongoDB', 'TypeScript'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-[#111827] border border-[#1F2933] rounded-md text-sm text-[#E5E7EB]"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#2563EB] text-white rounded-lg font-medium hover:bg-[#1D4ED8] transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-[#374151] text-[#E5E7EB] rounded-lg font-medium hover:border-[#4B5563] transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-4"
          >
            {[
              { Icon: FaGithub, href: 'https://github.com/cwpranay', label: 'GitHub' },
              { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/pranay-gurav/', label: 'LinkedIn' },
              { Icon: FaXTwitter, href: 'https://x.com/PranayyGurav', label: 'X' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Side - Stats/Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="bg-[#111827] border border-[#1F2933] rounded-xl p-8 space-y-6">
            {/* Quick Stats */}
            <div>
              <h3 className="text-sm font-medium text-[#6B7280] mb-4 uppercase tracking-wide">
                Quick Stats
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#9CA3AF]">Projects Completed</span>
                  <span className="text-2xl font-bold text-[#E5E7EB]">5+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#9CA3AF]">Technologies</span>
                  <span className="text-2xl font-bold text-[#E5E7EB]">10+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#9CA3AF]">Years Learning</span>
                  <span className="text-2xl font-bold text-[#E5E7EB]">2+</span>
                </div>
              </div>
            </div>

            <div className="border-t border-[#1F2933] pt-6">
              <h3 className="text-sm font-medium text-[#6B7280] mb-4 uppercase tracking-wide">
                Currently Working On
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#10B981] rounded-full mt-2"></div>
                  <div>
                    <p className="text-[#E5E7EB] font-medium">Full-Stack Projects</p>
                    <p className="text-sm text-[#9CA3AF]">Building production apps</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2563EB] rounded-full mt-2"></div>
                  <div>
                    <p className="text-[#E5E7EB] font-medium">Learning AI/ML</p>
                    <p className="text-sm text-[#9CA3AF]">Exploring new technologies</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#1F2933] pt-6">
              <h3 className="text-sm font-medium text-[#6B7280] mb-4 uppercase tracking-wide">
                Education
              </h3>
              <div>
                <p className="text-[#E5E7EB] font-medium">BSc IT</p>
                <p className="text-sm text-[#9CA3AF]">Final Year • 2023-2026</p>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
