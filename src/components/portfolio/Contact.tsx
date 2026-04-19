
"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Mail, MessageCircle, Github, Linkedin, Twitter } from "lucide-react";
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
              Let's build something <span className="text-primary italic">extraordinary</span> together.
            </h2>
            <p className="text-zinc-400 text-lg">
              Open to internships, junior developer roles, and freelance projects. Reach out and let's discuss your next idea.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <a href="mailto:prngurav@gmail.com" className="font-medium">prngurav@gmail.com</a>
              </div>
              <div className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Linkedin size={18} />
                </div>
                <a href="https://linkedin.com/in/pranay-gurav" className="font-medium">/in/pranay-gurav</a>
              </div>
              <div className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Github size={18} />
                </div>
                <a href="https://github.com/Cwpranay" className="font-medium">/Cwpranay</a>
              </div>
              <div className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Twitter size={18} />
                </div>
                <a href="https://x.com/PranayyGurav" className="font-medium">@PranayyGurav</a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-card border border-white/5 p-8 rounded-3xl space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-zinc-400">Name</Label>
                  <Input id="name" placeholder="Your name" className="bg-white/5 border-white/10 rounded-xl h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-zinc-400">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="bg-white/5 border-white/10 rounded-xl h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-zinc-400">Message</Label>
                <Textarea id="message" placeholder="Tell me about your project..." className="bg-white/5 border-white/10 rounded-xl min-h-[150px]" />
              </div>
            </div>
            <Button className="w-full h-14 bg-primary hover:bg-primary/90 rounded-xl text-lg font-bold hover-scale">
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
