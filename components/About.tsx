'use client';

import { motion } from 'framer-motion';
import { FaCalendarAlt, FaRocket, FaCode, FaHeart, FaArrowRight } from 'react-icons/fa';

export default function About() {
  const stats = [
    { label: 'Years Building Projects', value: '2+', Icon: FaCalendarAlt, suffix: 'Years' },
    { label: 'Deployed Websites', value: '10+', Icon: FaRocket, suffix: 'Projects' },
    { label: 'Tech Stack', value: '15+', Icon: FaCode, suffix: 'Technologies' },
    { label: 'Passion Level', value: '100%', Icon: FaHeart, suffix: 'Committed' },
  ];

  return (
    <section id="about" className="py-32 px-4 sm:px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
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
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: 'var(--foreground)' }}>
            Building the Future,{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              One Line at a Time
            </span>
          </h2>
        </motion.div>

        {/* Personal Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <div className="space-y-4">
              <p>
                Hey there! I'm a <span className="font-semibold" style={{ color: 'var(--foreground)' }}>BSc IT student</span> and passionate{' '}
                <span className="font-semibold" style={{ color: 'var(--foreground)' }}>MERN stack developer</span> who loves turning ideas into reality through code.
              </p>
              <p>
                What drives me? <span className="font-medium" style={{ color: 'var(--foreground)' }}>Solving real problems</span>. Whether it's building a seamless user experience
                or architecting a scalable backend, I'm all about creating solutions that make a difference.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                I specialize in building <span className="font-medium" style={{ color: 'var(--foreground)' }}>modern, scalable web applications</span> using the MERN stack
                , focusing on creating seamless user experiences and robust backend architectures.
              </p>
              <p>
                Every project is a learning opportunity, and I'm constantly pushing myself to master new technologies
                and best practices. Let's build something amazing together!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.4 + index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card */}
              <div className="relative rounded-2xl p-6 transition-[border-color,box-shadow] duration-300 backdrop-blur-sm" style={{
                borderWidth: '1px',
                borderColor: 'var(--border-color)',
                backgroundColor: 'var(--badge-bg)'
              }}>
                <stat.Icon className="text-3xl text-blue-400 mb-3" />
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
            Interested in working together or just want to chat about tech?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full sm:w-auto px-8 py-3.5 border-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-[transform,border-color,box-shadow] duration-500 ease-out backdrop-blur-sm"
              style={{
                borderColor: 'var(--border-color)',
                color: 'var(--foreground)'
              }}
            >
              Let's Connect
            </motion.a>
            <motion.a
              href="/resume/PranayPradipGurav__FullStackDev.pdf"
              download="Pranay_Gurav_Resume.pdf"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-500 ease-out flex items-center gap-2 justify-center"
              style={{
                backgroundColor: 'var(--button-primary-bg)',
                color: 'var(--button-primary-text)'
              }}
            >
              <span>Resume</span>
              <FaArrowRight className="text-sm" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
