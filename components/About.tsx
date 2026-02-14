'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-12 bg-[#0B0F14]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="bg-[#111827] border border-[#1F2933] rounded-xl p-8"
          >
            <div className="space-y-6">
              <div className="w-16 h-16 bg-[#2563EB] rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#E5E7EB] mb-2">Pranay Gurav</h3>
                <p className="text-[#9CA3AF]">Full-Stack Developer</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-[#0B0F14] border border-[#1F2933] rounded-md text-[#E5E7EB] text-sm">
                  MERN Stack
                </span>
                <span className="px-3 py-1.5 bg-[#0B0F14] border border-[#1F2933] rounded-md text-[#E5E7EB] text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1.5 bg-[#0B0F14] border border-[#1F2933] rounded-md text-[#E5E7EB] text-sm">
                  TypeScript
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#1F2933]">
                <div>
                  <p className="text-2xl font-bold text-[#E5E7EB]">5+</p>
                  <p className="text-sm text-[#9CA3AF]">Full-Stack Projects</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#E5E7EB]">Production</p>
                  <p className="text-sm text-[#9CA3AF]">Deployed Apps</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB] mb-6">
                About Me
              </h2>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-[#2563EB] pl-6">
                <h3 className="text-lg font-bold text-[#E5E7EB] mb-3">Who I Am</h3>
                <p className="text-[#9CA3AF] leading-relaxed">
                  I'm a BSc IT final-year student and passionate Full-Stack Developer specializing in Next.js and the MERN stack.
                  I focus on building real-world, production-ready applications that solve practical problems and deliver strong user experiences.
                </p>
              </div>

              <div className="border-l-2 border-[#2563EB] pl-6">
                <h3 className="text-lg font-bold text-[#E5E7EB] mb-3">What I Do</h3>
                <p className="text-[#9CA3AF] leading-relaxed">
                  I design and develop modern web applications using Next.js, React, Node.js, Express, and MongoDB.
                  My work includes building scalable APIs, authentication systems, dashboards, and cloud-deployed platforms with a strong focus on performance and maintainability.
                </p>
              </div>

              <div className="border-l-2 border-[#2563EB] pl-6">
                <h3 className="text-lg font-bold text-[#E5E7EB] mb-3">What Problems I Solve</h3>
                <p className="text-[#9CA3AF] leading-relaxed">
                  I create digital solutions for real use cases such as job application tracking systems, business websites, productivity tools, and data-driven dashboards.
                  I aim to write clean, efficient code that helps users achieve real results.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2563EB] text-white rounded-lg font-medium hover:bg-[#1D4ED8] transition-colors"
              >
                <span>Let's Connect</span>
                <FaArrowRight className="text-sm" />
              </a>
              <a
                href="/resume/PranayPradipGurav__FullStackDev.pdf"
                download="Pranay_Gurav_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#374151] text-[#E5E7EB] rounded-lg font-medium hover:border-[#4B5563] transition-colors"
              >
                <span>Download Resume</span>
                <FaArrowRight className="text-sm" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
