'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    emailjs.init('rFfDL7uSz9Bdd67KG');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatusMessage('');

    emailjs.sendForm(
      'service_9obvoop',
      'template_zn9stzv',
      formRef.current,
      'rFfDL7uSz9Bdd67KG'
    )
      .then(() => {
        setStatusMessage('Message sent successfully! ✓');
        formRef.current?.reset();
        setTimeout(() => setStatusMessage(''), 5000);
      })
      .catch(() => {
        setStatusMessage('Message not sent. Please email directly at prngurav@gmail.com');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactLinks = [
    { icon: FaEnvelope, label: 'Email', value: 'prngurav@gmail.com', href: 'mailto:prngurav@gmail.com', color: '#3b82f6' },
    { icon: FaLinkedin, label: 'LinkedIn', value: '/in/pranay-gurav', href: 'https://www.linkedin.com/in/pranay-gurav/', color: '#0077b5' },
    { icon: FaGithub, label: 'GitHub', value: '/Cwpranay', href: 'https://github.com/cwpranay/', color: '#ffffff' },
    { icon: FaXTwitter, label: 'X', value: '@PranayyGurav', href: 'https://x.com/PranayyGurav', color: '#06b6d4' },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-[#0d1117]">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold mb-4 tracking-widest uppercase text-gray-400">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 relative inline-block">
            Let's Build Something That{' '}
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
              Actually Matters
            </span>
            {/* Subtle gradient underline */}
            <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
          </h2>
          <p className="text-base text-cyan-400 font-medium max-w-2xl mx-auto mt-4">
            Let's build something with Next.js and modern web tech.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-2">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-5">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label === 'Email' ? undefined : '_blank'}
                  rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="group flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl transition-all hover:bg-white/8 hover:border-white/20 relative overflow-hidden shadow-sm"
                >
                  <div className="relative p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                    <link.icon className="text-xl transition-colors" style={{ color: link.color }} />
                  </div>
                  <div className="relative">
                    <p className="text-sm text-gray-400">{link.label}</p>
                    <p className="text-white font-medium">{link.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Frosted glass container - no glow */}
            <div className="relative">
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm shadow-lg">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      name="user_name"
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-400/50 focus:ring-1 focus:ring-green-400/20 transition-all"
                      placeholder="Your name"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-400/50 focus:ring-1 focus:ring-green-400/20 transition-all"
                      placeholder="your.email@example.com"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-400/50 focus:ring-1 focus:ring-green-400/20 transition-all resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </motion.div>

                  {/* Status Message */}
                  {statusMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-center py-3 rounded-xl ${
                        statusMessage.includes('successfully')
                          ? 'text-green-400 bg-green-500/10 border border-green-500/20'
                          : 'text-red-400 bg-red-500/10 border border-red-500/20'
                      }`}
                    >
                      {statusMessage}
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, backgroundPosition: 'right center' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-3.5 bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#3b82f6] bg-[length:200%_100%] text-white rounded-xl font-semibold shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundPosition: 'left center' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-32 pt-8 border-t border-white/10 text-center text-sm text-gray-400"
        >
          <p>© 2026 Pranay Gurav. Built with Next.js & Tailwind CSS</p>
        </motion.div>
      </div>
    </section>
  );
}
