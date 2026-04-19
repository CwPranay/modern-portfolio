"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Sparkles, Loader2, Copy, Check } from "lucide-react";
import { suggestContent } from "@/ai/flows/ai-content-suggestion";
import { ScrollReveal } from "./ScrollReveal";
import { useToast } from "@/hooks/use-toast";

export function AiSuggestionTool() {
  const [context, setContext] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!context.trim()) {
      toast({
        title: "Input required",
        description: "Please enter some context about your project or role.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { suggestion } = await suggestContent({
        type: "project_description",
        context: context,
        tone: "professional and innovative",
        maxLength: 60,
      });
      setResult(suggestion);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate suggestion. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ScrollReveal>
      <div className="p-8 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl space-y-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
          <Sparkles size={120} className="text-primary" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-primary">
            <Sparkles size={18} />
            <span className="text-sm font-bold uppercase tracking-wider">AI Content Assistant</span>
          </div>
          <h3 className="text-2xl font-bold text-white font-headline">Need help with your description?</h3>
          <p className="text-zinc-400">Describe your project in a few words and let AI polish it for you.</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="context" className="text-zinc-300">Project Context</Label>
            <Textarea
              id="context"
              placeholder="e.g. A fintech app for crypto enthusiasts focused on security and speed..."
              className="bg-black/20 border-white/10 text-white min-h-[100px] rounded-xl focus:ring-primary"
              value={context}
              onChange={(e) => setContext(e.target.value)}
            />
          </div>

          <Button 
            onClick={handleGenerate} 
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-xl hover-scale"
          >
            {loading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2" />}
            {loading ? "Polishing..." : "Generate Description"}
          </Button>

          {result && (
            <div className="mt-6 p-6 bg-black/40 border border-white/5 rounded-xl space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">AI Suggestion</span>
                <Button variant="ghost" size="sm" onClick={handleCopy} className="h-8 text-zinc-400 hover:text-white">
                  {copied ? <Check size={14} className="text-green-500 mr-1" /> : <Copy size={14} className="mr-1" />}
                  {copied ? "Copied" : "Copy"}
                </Button>
              </div>
              <p className="text-zinc-300 leading-relaxed">"{result}"</p>
            </div>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
