
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Download } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function ProfileCard() {
  const avatar = PlaceHolderImages.find((img) => img.id === "avatar");

  return (
    <div className="lg:sticky lg:top-20 h-fit bg-card rounded-2xl p-6 border border-white/5 space-y-6">
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
        <Image
          src={avatar?.imageUrl || "https://picsum.photos/seed/folioprofile/400/400"}
          alt="Profile"
          fill
          className="object-cover"
          data-ai-hint="professional profile"
        />
      </div>
      
      <div className="space-y-2">
        <h1 className="text-2xl font-bold font-headline text-white">Alex Rivera</h1>
        <p className="text-zinc-400 font-body">Senior Product Designer & Developer</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {[
          { icon: Github, href: "#" },
          { icon: Linkedin, href: "#" },
          { icon: Twitter, href: "#" },
          { icon: Mail, href: "#" },
        ].map((social, i) => (
          <a
            key={i}
            href={social.href}
            className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-primary/20 hover:border-primary/50 transition-all text-zinc-400 hover:text-white"
          >
            <social.icon size={20} />
          </a>
        ))}
      </div>

      <div className="space-y-3 pt-2">
        <Button className="w-full h-12 rounded-xl text-base font-medium shadow-lg shadow-primary/20 hover-scale bg-primary hover:bg-primary/90">
          Work with me
        </Button>
        <Button variant="outline" className="w-full h-12 rounded-xl border-white/5 hover:bg-white/5 text-zinc-300 hover-scale">
          <Download size={18} className="mr-2" />
          Download CV
        </Button>
      </div>

      <div className="pt-4 border-t border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Available for new projects</span>
        </div>
      </div>
    </div>
  );
}
