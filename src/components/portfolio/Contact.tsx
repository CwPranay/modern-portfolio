"use client";

import { useState, useRef, useEffect } from 'react';
import { ScrollReveal } from "./ScrollReveal";
import { Mail, Linkedin, Github } from "lucide-react";
import { FaXTwitter } from 'react-icons/fa6';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    emailjs.init('rFfDL7uSz9Bdd67KG');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setStatusMessage("Message sent successfully!");
        formRef.current.reset();
      } else {
        throw new Error();
      }
    } catch {
      setStatusMessage("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    { icon: Mail, label: 'Email', value: 'prngurav@gmail.com', href: 'mailto:prngurav@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', value: '/in/pranay-gurav', href: 'https://www.linkedin.com/in/pranay-gurav/' },
    { icon: Github, label: 'GitHub', value: '/CwPranay', href: 'https://github.com/CwPranay/' },
    { icon: FaXTwitter, label: 'X', value: '@PranayyGurav', href: 'https://x.com/PranayyGurav' },
  ];

  return (
    <section id="contact" className="py-20 border-t border-white/5 scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <ScrollReveal>
          <div className="space-y-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Mail size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-headline leading-tight">
              Let's build something <span className="text-primary">extraordinary</span> together.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a specific proposal or just want to say hi, feel free to reach out.
            </p>


          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-card border border-white/5 p-8 rounded-3xl space-y-6 shadow-2xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="user_name" className="text-zinc-400">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="bg-white/5 border-white/10 rounded-xl h-12 focus:ring-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="user_email" className="text-zinc-400">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-white/5 border-white/10 rounded-xl h-12 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-zinc-400">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  className="bg-white/5 border-white/10 rounded-xl min-h-[150px] focus:ring-primary"
                  required
                />
              </div>

              {statusMessage && (
                <div
                  className={`text-center py-3 rounded-xl text-sm font-medium ${statusMessage.includes('successfully')
                      ? 'text-green-400 bg-green-400/10 border border-green-400/20'
                      : 'text-red-400 bg-red-400/10 border border-red-400/20'
                    }`}
                >
                  {statusMessage}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-primary hover:bg-primary/90 rounded-xl text-lg font-bold hover-scale transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </ScrollReveal>
      </div>

      <div className="pt-20 text-center text-zinc-500 font-medium tracking-widest uppercase text-[10px]">
        © 2026 PRANAY GURAV — BUILT WITH NEXT.JS & TAILWIND CSS
      </div>
    </section>
  );
}
