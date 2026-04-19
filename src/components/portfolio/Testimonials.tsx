
import { ScrollReveal } from "./ScrollReveal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
  const reviews = [
    {
      name: "Sarah Chen",
      role: "CEO at Nexus",
      content: "Alex completely transformed our digital presence. The attention to detail and performance of the final product exceeded all expectations.",
      avatar: "SC",
    },
    {
      name: "Marcus Thorne",
      role: "Lead Designer at Solar",
      content: "A rare talent who truly understands both design and code. The collaborative process was smooth and the results speak for themselves.",
      avatar: "MT",
    },
  ];

  return (
    <section id="testimonials" className="space-y-12">
      <ScrollReveal>
        <div className="space-y-2">
          <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Success Stories</h3>
          <h2 className="text-3xl font-bold text-white font-headline">Client Testimonials</h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="p-8 bg-card border border-white/5 rounded-2xl space-y-6">
              <p className="text-zinc-300 text-lg leading-relaxed font-body">"{review.content}"</p>
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 border border-white/10">
                  <AvatarFallback className="bg-primary/20 text-primary font-bold">{review.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-white font-bold font-headline">{review.name}</div>
                  <div className="text-sm text-zinc-500">{review.role}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
