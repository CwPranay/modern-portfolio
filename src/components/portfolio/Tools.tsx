
"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Code2, Database, Layout, Server, Shield, Terminal, Globe, Cpu } from "lucide-react";

export function Tools() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "Next.js", icon: Globe },
        { name: "React", icon: Code2 },
        { name: "TypeScript", icon: Shield },
        { name: "Tailwind CSS", icon: Layout },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: Server },
        { name: "Express", icon: Terminal },
        { name: "MongoDB", icon: Database },
        { name: "MySQL", icon: Database },
        { name: " .NET", icon: Cpu },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", icon: Cpu },
        { name: "Git", icon: Terminal },
        { name: "Python", icon: Code2 },
        { name: "Java", icon: Code2 },
      ],
    },
  ];

  return (
    <section id="tools" className="space-y-12 scroll-mt-20">
      <ScrollReveal>
        <div className="space-y-2">
          <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Technical Stack</h3>
          <h2 className="text-3xl font-bold text-white font-headline">My Skills</h2>
        </div>
      </ScrollReveal>

      <div className="space-y-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="space-y-4">
            <h4 className="text-zinc-500 font-bold uppercase tracking-widest text-xs px-2">
              {category.title}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {category.skills.map((skill, i) => (
                <ScrollReveal key={i} delay={i * 0.05 + idx * 0.1}>
                  <div className="flex flex-col items-center justify-center p-6 bg-card border border-white/5 rounded-2xl hover:border-primary/30 transition-all group text-center">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                      <skill.icon className="text-zinc-500 group-hover:text-primary transition-colors" size={24} />
                    </div>
                    <h4 className="text-white font-bold text-sm">{skill.name}</h4>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
