
import { ScrollReveal } from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const stats = [
    { label: "YEARS OF EXPERIENCE", value: "+12" },
    { label: "PROJECTS COMPLETED", value: "+46" },
    { label: "WORLDWIDE CLIENTS", value: "+20" },
  ];

  return (
    <section className="min-h-[110vh] flex flex-col justify-center space-y-16">
      <div className="space-y-12">
        <ScrollReveal>
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-headline leading-[1.1] tracking-tight text-white">
              Transforming Your Ideas into <span className="text-primary italic">Reality</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed font-body">
              Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-8 md:gap-16">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-4xl md:text-6xl font-bold text-white font-headline">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex items-center gap-6">
            <Button 
              className="bg-[#7C3AED] hover:bg-[#7C3AED]/90 hover:brightness-110 text-white font-bold px-5 py-2.5 rounded-lg shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-300 hover:scale-[1.03] active:scale-95 text-base h-auto"
            >
              Let's Talk
            </Button>
            <button 
              className="group flex items-center gap-2 text-white font-bold transition-all duration-300 hover:text-[#7C3AED] text-base"
            >
              My Work 
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.3}>
        <div className="pt-16 border-t border-white/5 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-6">
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Relied on by companies near, far, and worldwide</p>
            <div className="flex flex-wrap items-center gap-10 opacity-60">
               <div className="flex items-center gap-3 text-white font-bold text-xl">
                 <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-[10px]">L</div> 
                 <span>Logoipsum</span>
               </div>
               <div className="flex items-center gap-3 text-white font-bold text-xl">
                 <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-[10px]">L</div> 
                 <span>Logoipsum</span>
               </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
             <Button size="sm" className="bg-[#7C3AED] hover:bg-[#7C3AED]/90 rounded-md text-xs px-4 h-9 font-bold">
               Use Template for Free
             </Button>
             <Button size="sm" variant="secondary" className="bg-white text-black hover:bg-white/90 rounded-md text-xs px-4 h-9 font-bold">
               More Templates
             </Button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
