
"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Code2, Database, Layout, Server, Zap, Cpu, Terminal, Shield } from "lucide-react";

export function Tools() {
  const skills = [
    { name: "React / Next.js", icon: Code2, category: "Frontend" },
    { name: "Node.js / Express", icon: Server, category: "Backend" },
    { name: "MongoDB", icon: Database, category: "Database" },
    { name: "TypeScript", icon: Shield, category: "Logic" },
    { name: "Tailwind CSS", icon: Layout, category: "Styling" },
    { name: "Redux / Zod", icon: Zap, category: "State" },
  ];

  return (
    <section id="tools" className="space-y-12 scroll-mt-20">
      <ScrollReveal>
        <div className="space-y-2">
          <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Technical Stack</h3>
          <h2 className="text-3xl font-bold text-white font-headline">My Skills</h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div className="flex flex-col items-start p-6 bg-card border border-white/5 rounded-2xl hover:border-primary/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                 <skill.icon className="text-zinc-500 group-hover:text-primary transition-colors" size={24} />
              </div>
              <div>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{skill.category}</span>
                <h4 className="text-white font-bold text-lg mt-1">{skill.name}</h4>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
