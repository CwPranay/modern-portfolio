'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useRef, useEffect } from 'react';


export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for cursor
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Transform scroll progress to various animation values
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 0]);
  const spotlightScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const spotlightOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      {/* Animated grid with scroll */}
      <motion.div
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"
        style={{ 
          opacity: gridOpacity,
          backgroundImage: 'linear-gradient(to right, var(--grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem'
        }}
      />

      {/* Animated spotlight with scroll */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-500/5 rounded-full blur-[120px]"
        style={{
          scale: spotlightScale,
          opacity: spotlightOpacity
        }}
      />

      {/* Minimal cursor-following gradient light */}
      <motion.div
        className="hidden lg:block fixed w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
          left: springX,
          top: springY,
          x: '-50%',
          y: '-50%',
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
            style={{ 
              backgroundColor: 'var(--badge-bg)',
              borderWidth: '1px',
              borderColor: 'var(--border-color)'
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Available for new projects</span>
          </motion.div>

          {/* Title - Fades in first */}
          <motion.p
            className="text-sm md:text-base font-semibold mb-6 tracking-[0.2em] uppercase"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut"
            }}
          >
            Full-Stack Developer
          </motion.p>

          {/* Main Heading - Staggered animation */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-none">
            {/* "Building Digital" fades up second */}
            <motion.span
              className="block mb-2"
              style={{ color: 'var(--foreground)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              Building Digital
            </motion.span>

            {/* "Solutions" fades, scales, and glows - with narrower gradient */}
            <motion.span
              className="inline-block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent relative"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              Solutions
              {/* Subtle glow effect */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 blur-2xl -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0.2] }}
                transition={{
                  duration: 1.5,
                  delay: 1.2,
                  ease: "easeInOut"
                }}
              />
            </motion.span>
          </h1>

          {/* Description - Fades in after heading */}
          <motion.p
            className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed px-6 sm:px-4"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 1.1,
              ease: "easeOut"
            }}
          >
            Full-stack developer specializing in <span className="font-medium" style={{ color: 'var(--foreground)' }}>MERN stack</span> technologies.
            Creating scalable, modern applications that deliver exceptional user experiences.
          </motion.p>

          {/* CTA Buttons - Fade in after description */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 1.3,
              ease: "easeOut"
            }}
          >
            {/* Primary Button - Professional with smooth hover */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative w-full sm:w-auto px-8 py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-500 ease-out"
              style={{
                backgroundColor: 'var(--button-primary-bg)',
                color: 'var(--button-primary-text)'
              }}
            >
              View My Work
            </motion.a>

            {/* Secondary Button - Elegant outline with smooth glow */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative w-full sm:w-auto px-8 py-3.5 border-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-500 ease-out backdrop-blur-sm"
              style={{
                borderColor: 'var(--border-color)',
                color: 'var(--foreground)'
              }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Social Icons - Fade in last */}
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 1.5,
              ease: "easeOut"
            }}
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
                whileHover={{ y: -4 }}
                className="p-3 transition-colors"
                style={{ color: 'var(--text-secondary)' }}
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
