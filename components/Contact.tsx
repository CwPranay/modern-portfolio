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
        setStatusMessage('Message sent successfully!');
        formRef.current?.reset();
        setTimeout(() => setStatusMessage(''), 5000);
      })
      .catch(() => {
        setStatusMessage('Failed to send message. Please email directly at prngurav@gmail.com');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactLinks = [
    { icon: FaEnvelope, label: 'Email', value: 'prngurav@gmail.com', href: 'mailto:prngurav@gmail.com' },
    { icon: FaLinkedin, label: 'LinkedIn', value: '/in/pranay-gurav', href: 'https://www.linkedin.com/in/pranay-gurav/' },
    { icon: FaGithub, label: 'GitHub', value: '/Cwpranay', href: 'https://github.com/cwpranay/' },
    { icon: FaXTwitter, label: 'X', value: '@PranayyGurav', href: 'https://x.com/PranayyGurav' },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-12 bg-[#0B0F14]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB] mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl">
            Open to internships, junior developer roles, and freelance projects. Let's build something great together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === 'Email' ? undefined : '_blank'}
                rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
                className="flex items-center gap-4 p-4 bg-[#111827] border border-[#1F2933] rounded-xl hover:border-[#374151] transition-colors"
              >
                <div className="p-3 bg-[#0B0F14] rounded-lg">
                  <link.icon className="text-lg text-[#9CA3AF]" />
                </div>
                <div>
                  <p className="text-sm text-[#6B7280]">{link.label}</p>
                  <p className="text-[#E5E7EB] font-medium">{link.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#111827] border border-[#1F2933] rounded-xl p-6 md:p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[#E5E7EB] mb-2">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    className="w-full px-4 py-2.5 bg-[#0B0F14] border border-[#1F2933] rounded-lg text-[#E5E7EB] placeholder-[#6B7280] focus:outline-none focus:border-[#2563EB] transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#E5E7EB] mb-2">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    className="w-full px-4 py-2.5 bg-[#0B0F14] border border-[#1F2933] rounded-lg text-[#E5E7EB] placeholder-[#6B7280] focus:outline-none focus:border-[#2563EB] transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#E5E7EB] mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2.5 bg-[#0B0F14] border border-[#1F2933] rounded-lg text-[#E5E7EB] placeholder-[#6B7280] focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                {statusMessage && (
                  <div
                    className={`text-center py-3 rounded-lg ${
                      statusMessage.includes('successfully')
                        ? 'text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/20'
                        : 'text-[#EF4444] bg-[#EF4444]/10 border border-[#EF4444]/20'
                    }`}
                  >
                    {statusMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-[#2563EB] text-white rounded-lg font-medium hover:bg-[#1D4ED8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-8 border-t border-[#1F2933] text-center text-sm text-[#6B7280]"
        >
          <p>© 2026 Pranay Gurav. Built with Next.js & Tailwind CSS</p>
        </motion.div>
      </div>
    </section>
  );
}
