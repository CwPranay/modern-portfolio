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
    <section id="about" className="py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

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
          <p className="text-sm font-semibold text-zinc-400 mb-4 tracking-[0.2em] uppercase">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
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
          <div className="grid md:grid-cols-2 gap-8 text-zinc-400 text-base md:text-lg leading-relaxed">
            <div className="space-y-4">
              <p>
                Hey there! I'm a <span className="text-white font-semibold">BSc IT student</span> and passionate{' '}
                <span className="text-white font-semibold">MERN stack developer</span> who loves turning ideas into reality through code.
              </p>
              <p>
                What drives me? <span className="text-white font-medium">Solving real problems</span>. Whether it's building a seamless user experience
                or architecting a scalable backend, I'm all about creating solutions that make a difference.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                I specialize in building <span className="text-white font-medium">modern, scalable web applications</span> using the MERN stack
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
              <div className="relative border border-zinc-900 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300 bg-black/50 backdrop-blur-sm">
                <stat.Icon className="text-3xl text-blue-400 mb-3" />
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-zinc-500 font-medium">
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
          <p className="text-zinc-400 text-lg mb-6">
            Interested in working together or just want to chat about tech?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full sm:w-auto px-8 py-3.5 border-2 border-zinc-700 rounded-lg font-semibold hover:border-zinc-600 hover:bg-zinc-900/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-500 ease-out backdrop-blur-sm"
            >
              Let's Connect
            </motion.a>
            <motion.a
              href="/resume/Pranay_Gurav_Resume.pdf"
              download="Pranay_Gurav_Resume.pdf"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-500 ease-out flex items-center gap-2 justify-center"
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
