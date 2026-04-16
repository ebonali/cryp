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
    <nav className="sticky top-0 left-0 right-0 z-[100] px-4 py-4 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-primary rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
              <Wallet className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight hidden sm:block">
              Crypto<span className="text-gradient">Bio</span><span className="text-foreground">.link</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Demo
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-lg w-10 h-10 text-foreground/60 hover:text-foreground hover:bg-foreground/10"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            )}

            <Link href="/auth?tab=login" className="hidden sm:block">
              <Button variant="ghost" className="text-sm font-medium">
                Log in
              </Button>
            </Link>
            <Link href="/auth?tab=signup">
              <Button className="rounded-lg px-4 text-sm font-semibold">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
