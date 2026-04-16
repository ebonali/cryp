import Link from "next/link";
import { Wallet, Twitter, Instagram, GithubIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-20 px-4 bg-background border-t border-foreground/5 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container max-w-[1100px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8">
          <div className="space-y-6 max-w-[320px]">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Wallet className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Crypto<span className="text-gradient">Link</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm font-medium leading-relaxed">
              The future of social payments. Built for creators who value freedom, simplicity, and complete ownership of their digital economy.
            </p>
            <div className="flex gap-4">
               {[Twitter, Instagram, GithubIcon].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-xl bg-secondary hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-premium border border-foreground/5 shadow-sm">
                    <Icon className="h-4 w-4" />
                 </a>
               ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-20">
            <div className="space-y-5">
              <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-foreground/40">Product</h4>
              <ul className="space-y-3 text-sm font-bold">
                <li><Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
                <li><Link href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">Showcase</Link></li>
              </ul>
            </div>
            <div className="space-y-5">
              <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-foreground/40">Company</h4>
              <ul className="space-y-3 text-sm font-bold">
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</Link></li>
              </ul>
            </div>
            <div className="space-y-5 hidden sm:block">
              <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-foreground/40">Support</h4>
              <ul className="space-y-3 text-sm font-bold">
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-foreground/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.25em]">
            © 2026 CryptoLink Bio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
             <span className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.2em]">Next.js</span>
             <span className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.2em]">Supabase</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
