"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Wallet, Sparkles, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] pt-4 px-4">
      <div className="container max-w-[1100px] mx-auto">
        <div className="glass rounded-[28px] shadow-nav px-6 py-3 flex items-center justify-between transition-all duration-500">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 bg-gradient-primary rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow active:scale-95 shadow-lg shadow-primary/20">
                <Wallet className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-tight hidden sm:block selection:bg-primary/30">
                Crypto<span className="text-gradient">Link</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              <Link
                href="#features"
                className="px-4 py-2 text-sm font-black uppercase tracking-widest text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-xl transition-all duration-200"
              >
                Features
              </Link>
              <Link
                href="/dashboard"
                className="px-4 py-2 text-sm font-black uppercase tracking-widest text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-xl transition-all duration-200"
              >
                Demo
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-xl w-11 h-11 bg-foreground/5 hover:bg-foreground/10 text-foreground transition-premium"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 animate-scale-in" />
                ) : (
                  <Moon className="h-5 w-5 animate-scale-in" />
                )}
              </Button>
            )}

            <Link href="/auth?tab=login" className="hidden sm:block">
              <Button
                variant="ghost"
                className="font-black text-xs uppercase tracking-widest px-5 hover:bg-foreground/5"
              >
                Log in
              </Button>
            </Link>
            <Link href="/auth?tab=signup">
              <Button className="rounded-2xl px-6 font-black text-xs uppercase tracking-[0.1em] bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-primary/25 btn-shine">
                <Sparkles className="h-4 w-4 mr-2" />
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
