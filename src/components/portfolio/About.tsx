"use client";

import { ScrollReveal } from "./ScrollReveal";

export function About() {
  return (
    <section id="about" className="space-y-8 scroll-mt-20">
      <ScrollReveal>
        <div className="space-y-2">
          <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Introduction</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-headline">About Me</h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              I am a Senior Product Designer and Developer based in New York. With over 12 years of experience, I specialize in building digital products that combine aesthetic beauty with technical excellence.
            </p>
            <p>
              My approach is user-centric and data-driven. I believe that great design is not just how it looks, but how it works and solves real problems for people.
            </p>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-card border border-white/5 rounded-2xl space-y-4">
              <h4 className="text-white font-bold">What I do</h4>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  UI/UX Design & Prototyping
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Full-stack Development (React/Next.js)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Product Strategy & Vision
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Motion Design & Interactions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
