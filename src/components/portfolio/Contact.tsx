
"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-white/5 scroll-mt-20">
      <ScrollReveal>
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-2">
            <Mail size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-headline leading-tight">
            Let's build something <span className="text-primary italic">extraordinary</span> together.
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl">
            Currently open to new opportunities and interesting projects. Reach out and let's discuss your next idea.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full justify-center">
            <Button className="h-14 px-8 rounded-xl bg-primary hover:bg-primary/90 text-lg font-bold hover-scale flex-1 sm:flex-none">
              Send an Email
            </Button>
            <Button variant="outline" className="h-14 px-8 rounded-xl border-white/10 hover:bg-white/5 text-lg font-bold hover-scale flex-1 sm:flex-none">
              <MessageCircle className="mr-2" size={20} />
              WhatsApp Me
            </Button>
          </div>

          <div className="pt-12 text-zinc-500 font-medium tracking-widest uppercase text-xs">
            © 2024 PRANAY GURAV — BUILT WITH NEXT.JS
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
