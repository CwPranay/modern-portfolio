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

  // Initialize EmailJS
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
      .then((result) => {
        console.log('EmailJS Success:', result);
        setStatusMessage('Message sent successfully! ✓');
        formRef.current?.reset();

        setTimeout(() => {
          setStatusMessage('');
        }, 5000);
      })
      .catch((error) => {
        console.error('EmailJS Error Details:', {
          error,
          text: error?.text,
          status: error?.status,
          message: error?.message
        });
        setStatusMessage('Message not sent. Please email directly at prngurav@gmail.com');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactLinks = [
    { icon: FaEnvelope, label: 'Email', value: 'prngurav@gmail.com', href: 'mailto:prngurav@gmail.com', isEmail: true },
    { icon: FaLinkedin, label: 'LinkedIn', value: '/in/pranay-gurav', href: 'https://www.linkedin.com/in/pranay-gurav/', isEmail: false },
    { icon: FaGithub, label: 'GitHub', value: '/Cwpranay', href: 'https://github.com/cwpranay/', isEmail: false },
    { icon: FaXTwitter, label: 'X', value: '@PranayyGurav', href: 'https://x.com/PranayyGurav', isEmail: false },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-zinc-400 mb-4 tracking-wider uppercase">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's work together
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out.
            </p>

            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  {...(link.isEmail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 border border-zinc-900 rounded-xl hover:border-zinc-800 transition-colors group"
                >
                  <link.icon className="text-xl text-zinc-400 group-hover:text-white transition-colors" />
                  <div>
                    <p className="text-sm text-zinc-500">{link.label}</p>
                    <p className="text-zinc-300">{link.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Name</label>
              <input
                type="text"
                name="user_name"
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-900 rounded-xl text-white focus:outline-none focus:border-zinc-700 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-900 rounded-xl text-white focus:outline-none focus:border-zinc-700 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-2">Message</label>
              <textarea
                name="message"
                rows={6}
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-900 rounded-xl text-white focus:outline-none focus:border-zinc-700 transition-colors resize-none"
                required
              />
            </div>

            {/* Status Message */}
            {statusMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center py-2 rounded-lg ${statusMessage.includes('successfully')
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
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-3 bg-white text-black rounded-xl font-medium hover:bg-zinc-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-32 pt-8 border-t border-zinc-900 text-center text-zinc-500 text-sm"
        >
          <p>© 2025 Pranay Gurav. Built with Next.js & Tailwind CSS</p>
        </motion.div>
      </div>
    </section>
  );
}
