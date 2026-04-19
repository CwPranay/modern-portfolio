
import { ScrollReveal } from "./ScrollReveal";

export function Hero() {
  const stats = [
    { label: "Years Exp.", value: "8+" },
    { label: "Projects", value: "120+" },
    { label: "Clients", value: "45+" },
  ];

  return (
    <section className="pt-12 md:pt-20">
      <ScrollReveal>
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline leading-tight tracking-tight">
            I craft <span className="text-primary italic">digital experiences</span> that bridge design and technology.
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Focused on creating high-performance web applications with clean code and exceptional user interfaces. Based in San Francisco, working globally.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-20">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="text-3xl md:text-5xl font-bold text-white font-headline">{stat.value}</div>
              <div className="text-sm md:text-base text-zinc-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
