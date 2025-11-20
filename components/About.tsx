'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-[#0d1117]">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE - Animated Blob with Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center lg:justify-start min-h-[400px] lg:min-h-[500px]"
          >
            {/* Morphing Gradient Blob - reduced */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="morph-blob w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-linear-to-br from-[#3b82f6] via-[#06b6d4] to-[#a78bfa] rounded-full opacity-[0.20] blur-[100px]"></div>
            </div>

            {/* Floating Glass Card - no glow */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg max-w-sm w-full animate-[float_6s_ease-in-out_infinite]"
            >
              {/* Gradient accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#3b82f6] via-[#06b6d4] to-[#a78bfa] rounded-t-2xl"></div>

              <div className="relative space-y-6">
                {/* Icon Circle - no glow */}
                <div className="w-16 h-16bg-linear-to-br from-[#3b82f6] to-[#06b6d4] rounded-2xl flex items-center justify-center shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>

                {/* Name & Title */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Pranay Gurav</h3>
                  <p className="text-gray-400 text-sm">Next.js / MERN Full-Stack Developer</p>
                </div>

                {/* Badges - no glow */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-linear-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-400/30 rounded-full text-cyan-400 text-xs font-semibold">
                    Next.js Expert
                  </span>
                  <span className="px-3 py-1.5 bg-white/5 border border-cyan-400/20 rounded-full text-cyan-400 text-xs font-semibold">
                    Performance Focused
                  </span>
                  <span className="px-3 py-1.5 bg-white/5 border border-purple-400/20 rounded-full text-purple-400 text-xs font-semibold">
                    Clean Code
                  </span>
                </div>

                {/* Stats with icons */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <p className="text-2xl font-bold text-white flex items-center gap-2">
                      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      10+
                    </p>
                    <p className="text-xs text-gray-400">Projects</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white flex items-center gap-2">
                      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      2+
                    </p>
                    <p className="text-xs text-gray-400">Years</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <p className="text-sm font-semibold mb-4 tracking-widest uppercase text-gray-400">
                About Me
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Building the Future,{' '}
                <span className="bg-linear-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
                  One Line at a Time
                </span>
              </h2>
            </div>

            {/* Content Blocks */}
            <div className="space-y-6">
              {/* Block 1 - Who I Am */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative pl-6 border-l-2 border-cyan-400/50"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full"></div>
                <h3 className="text-xl font-bold text-white mb-3">01. Who I Am</h3>
                <p className="text-gray-400 leading-[1.65]">
                  I'm a <span className="text-white font-semibold">BSc IT student</span> and passionate{' '}
                  <span className="text-white font-semibold">Next.js / MERN Full-Stack Developer</span> who loves turning ideas into reality through code.
                  Currently in my final year, I've spent the last two years building production-grade applications that solve actual problems.
                </p>
              </motion.div>

              {/* Block 2 - What I Do */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative pl-6 border-l-2 border-blue-400/50"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                <h3 className="text-xl font-bold text-white mb-3">02. What I Do</h3>
                <p className="text-gray-400 leading-[1.65]">
                  I specialize in building <span className="text-white font-semibold">modern, production-grade applications</span> using Next.js and the MERN stack.
                  From crafting seamless user experiences with server components to architecting robust backend systems, I focus on creating solutions that are both beautiful and performant.
                </p>
              </motion.div>

              {/* Block 3 - What Problems I Solve */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative pl-6 border-l-2 border-purple-400/50"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-400 rounded-full"></div>
                <h3 className="text-xl font-bold text-white mb-3">03. What Problems I Solve</h3>
                <p className="text-gray-400 leading-[1.65]">
                  I build applications that make a real impact: community platforms for reporting local issues, dashboards for farmers to track crop prices,
                  real-time chat systems, and productivity tools. Every project is an opportunity to solve real-world challenges with clean, maintainable code.
                </p>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 text-white rounded-xl font-medium transition-all"
              >
                <span>Let's Connect</span>
                <FaArrowRight className="text-sm" />
              </motion.a>
              <motion.a
                href="/resume/PranayPradipGurav__FullStackDev.pdf"
                download="Pranay_Gurav_Resume.pdf"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-[#3b82f6] to-[#06b6d4] text-white rounded-xl font-medium shadow-md transition-all"
              >
                <span>Download Resume</span>
                <FaArrowRight className="text-sm" />
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
