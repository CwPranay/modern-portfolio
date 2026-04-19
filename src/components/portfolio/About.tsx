
"use client";

import { ScrollReveal } from "./ScrollReveal";

export function About() {
  return (
    <section id="about" className="space-y-12 scroll-mt-20">
      <ScrollReveal>
        <div className="space-y-2">
          <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Introduction</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-headline">About Me</h2>
        </div>
      </ScrollReveal>

      <div className="space-y-12">
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <h4 className="text-white font-bold text-xl">Who I Am</h4>
              <p>
                I'm a BSc IT Graduate and Full-Stack Developer specializing in Next.js and the MERN stack. I focus on building real-world, production-ready applications that solve practical problems and deliver strong user experiences.
              </p>
              <h4 className="text-white font-bold text-xl">What I Do</h4>
              <p>
                I design and develop modern web applications using Next.js, React, Node.js, Express, and MongoDB. My work includes building scalable APIs, authentication systems, dashboards, and cloud-deployed platforms.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-8 bg-card border border-white/5 rounded-2xl space-y-6">
                <h4 className="text-white font-bold text-xl">Education</h4>
                <div className="space-y-1">
                  <p className="text-white font-bold">BSc IT</p>
                  <p className="text-zinc-500 text-sm">Final Year • 2023 - 2026</p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <h4 className="text-white font-bold mb-4">Core Focus</h4>
                  <ul className="grid grid-cols-1 gap-3 text-zinc-400 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Scalable Production Apps
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Clean Architecture
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Real-world Problem Solving
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="p-8 bg-card border border-white/5 rounded-2xl">
            <h4 className="text-white font-bold text-xl mb-4">What Problems I Solve</h4>
            <p className="text-zinc-400 text-lg leading-relaxed">
              I create digital solutions for real use cases such as job application tracking systems, business websites, productivity tools, and data-driven dashboards. I aim to write clean, efficient code that helps users achieve real results.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
