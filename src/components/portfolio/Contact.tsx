"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contact() {
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
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-zinc-400">Name</Label>
                  <Input id="name" placeholder="Your name" className="bg-white/5 border-white/10 rounded-xl h-12 focus:ring-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-zinc-400">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="bg-white/5 border-white/10 rounded-xl h-12 focus:ring-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-zinc-400">Message</Label>
                <Textarea id="message" placeholder="Tell me about your project..." className="bg-white/5 border-white/10 rounded-xl min-h-[150px] focus:ring-primary" />
              </div>
            </div>
            <Button className="w-full h-14 bg-primary hover:bg-primary/90 rounded-xl text-lg font-bold hover-scale transition-all duration-300">
              Send Message
            </Button>
          </div>
        </ScrollReveal>
      </div>

      <div className="pt-20 text-center text-zinc-500 font-medium tracking-widest uppercase text-[10px]">
        © 2026 PRANAY GURAV — BUILT WITH NEXT.JS & TAILWIND CSS
      </div>
    </section>
  );
}
