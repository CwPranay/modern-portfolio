'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Hero() {
  // Fixed positions for particles to avoid hydration mismatch
  const particles = [
    { left: '15%', top: '20%', duration: 4, delay: 0 },
    { left: '85%', top: '15%', duration: 5, delay: 0.5 },
    { left: '25%', top: '70%', duration: 3.5, delay: 1 },
    { left: '70%', top: '80%', duration: 4.5, delay: 1.5 },
    { left: '50%', top: '30%', duration: 4, delay: 0.8 },
    { left: '10%', top: '50%', duration: 5, delay: 0.3 },
    { left: '90%', top: '60%', duration: 3.8, delay: 1.2 },
    { left: '40%', top: '90%', duration: 4.2, delay: 0.6 },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center px-4 sm:px-6 lg:px-12 pt-24 pb-12 overflow-hidden bg-linear-to-br from-[#0d1117] via-[#0b0f1a] to-[#0d1117]">
      {/* Floating particles background - reduced opacity */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/10 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Gradient orbs - reduced */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/4 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-cyan-500/4 rounded-full blur-3xl" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mx-auto lg:mx-0"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-gray-300">Available for new projects</span>
            </motion.div>

            {/* Main Heading - Staggered fade-right */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              <span className="text-white">I build fast,</span>
              <br />
              <span className="text-white">scalable </span>
              <span className="bg-linear-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
                Next.js
              </span>
              <br />
              <span className="text-white">& </span>
              <span className="bg-linear-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
                MERN apps
              </span>
              <br />
              <span className="text-white">— clean code,</span>
              <br />
              <span className="text-white">real results.</span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base text-gray-400 max-w-xl mx-auto lg:mx-0"
            >
              Full-stack developer building modern, scalable Next.js & MERN applications.
            </motion.p>

            {/* Metrics Pills - Staggered fade-right */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2"
            >
              <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-white">
                Next.js Enthusiast
              </span>
              <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-400">
                Full-Stack React / Node
              </span>
              <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-400">
                API & Performance Focused
              </span>
            </motion.div>

            {/* CTA Buttons - Fade-up */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-linear-to-r from-[#3b82f6] to-[#06b6d4] text-white rounded-xl font-semibold shadow-md transition-all"
              >
                See What I've Built
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-3.5 border-2 border-white/10 hover:border-cyan-400/50 text-white rounded-xl font-medium backdrop-blur-sm transition-all"
              >
                Let's Work Together
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-4 pt-4 justify-center lg:justify-start"
            >
              {[
                { Icon: FaGithub, href: 'https://github.com/cwpranay', label: 'GitHub' },
                { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/pranay-gurav/', label: 'LinkedIn' },
                { Icon: FaXTwitter, href: 'https://x.com/PranayyGurav', label: 'X' },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="p-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                  aria-label={label}
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Animated Code Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Tiny floating particles behind code card */}
            {[
              { left: '30%', top: '25%', duration: 5, delay: 0 },
              { left: '70%', top: '40%', duration: 4.5, delay: 0.5 },
              { left: '45%', top: '65%', duration: 5.5, delay: 1 },
              { left: '60%', top: '30%', duration: 4.8, delay: 0.8 },
            ].map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400/25 rounded-full"
                style={{
                  left: particle.left,
                  top: particle.top,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}

            {/* Floating badge - no glow */}
            <motion.div
              className="absolute -top-3 -left-3 px-3 py-1.5 bg-linear-to-r from-[#3b82f6] to-[#06b6d4] text-white rounded-full text-xs font-semibold shadow-sm z-10 flex items-center gap-1.5"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Fast & Clean
            </motion.div>

            {/* Code block - no glow */}
            <div className="relative">
              <div className="relative bg-black/40 border border-white/10 rounded-2xl p-5 backdrop-blur-xl overflow-hidden shadow-lg">
                {/* Code content */}
                <div className="font-mono text-sm space-y-2">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="text-gray-400"
                  >
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-400">developer</span> = {'{'}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="pl-4 text-gray-400"
                  >
                    <span className="text-cyan-400">name</span>: <span className="text-green-400">"Pranay Gurav"</span>,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                    className="pl-4 text-gray-400"
                  >
                    <span className="text-cyan-400">stack</span>: [<span className="text-green-400">"MongoDB"</span>, <span className="text-green-400">"Express"</span>, <span className="text-green-400">"React"</span>, <span className="text-green-400">"Node"</span>],
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                    className="pl-4 text-gray-400"
                  >
                    <span className="text-cyan-400">focus</span>: <span className="text-green-400">"performance & scalability"</span>,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                    className="pl-4 text-gray-400"
                  >
                    <span className="text-cyan-400">status</span>: <span className="text-green-400">"available"</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="text-gray-400"
                  >
                    {'}'};
                  </motion.div>
                </div>

                {/* Cursor */}
                <motion.div
                  className="inline-block w-2 h-5 bg-cyan-400 ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />

                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-400/30 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-blue-400/30 rounded-bl-2xl"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
