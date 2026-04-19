
import { ScrollReveal } from "./ScrollReveal";
import { Cpu, Layout, Layers, Zap, Code, Shield } from "lucide-react";

export function Tools() {
  const tools = [
    { name: "React", icon: Code },
    { name: "Next.js", icon: Zap },
    { name: "TypeScript", icon: Shield },
    { name: "Tailwind", icon: Layout },
    { name: "Figma", icon: Layers },
    { name: "Three.js", icon: Cpu },
  ];

  return (
    <section id="tools" className="space-y-12">
      <ScrollReveal>
        <div className="space-y-2">
          <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Stack</h3>
          <h2 className="text-3xl font-bold text-white font-headline">Favorite Tools</h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {tools.map((tool, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div className="flex flex-col items-center justify-center p-6 bg-card border border-white/5 rounded-2xl hover:border-primary/30 transition-all hover-scale group">
              <tool.icon className="text-zinc-500 group-hover:text-primary mb-3 transition-colors" size={28} />
              <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">{tool.name}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
