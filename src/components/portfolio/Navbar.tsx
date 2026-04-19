
"use client";

import { Home, User, Briefcase, Folder, Wrench, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: User, label: "About", href: "#about" },
  { icon: Folder, label: "Projects", href: "#projects" },
  { icon: Wrench, label: "Tools", href: "#tools" },
  { icon: Briefcase, label: "Experience", href: "#experience" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      // Find current section
      const sections = navItems.map(item => ({
        id: item.href.replace("#", ""),
        label: item.label
      }));

      // Check from bottom to top to find the current active section
      for (const section of [...sections].reverse()) {
        if (!section.id) {
            if (window.scrollY < 300) {
                setActive("Home");
                break;
            }
            continue;
        }
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is within 150px of the top of the viewport
          if (rect.top <= 150) {
            setActive(section.label);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] flex items-center bg-[#111113]/60 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 gap-4 md:gap-5 shadow-2xl transition-all duration-300">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={(e) => {
            if (item.href === "#") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActive(item.label);
            }
          }}
          className={cn(
            "p-2 rounded-md transition-all duration-300 flex items-center justify-center relative",
            active === item.label 
              ? "bg-[#7C3AED] text-white shadow-lg shadow-primary/30" 
              : "text-zinc-400 hover:bg-white/5"
          )}
          title={item.label}
        >
          <item.icon size={18} />
        </a>
      ))}
    </nav>
  );
}
