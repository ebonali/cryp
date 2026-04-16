import Link from "next/link";
import { Wallet, Twitter, Instagram, GithubIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-20 px-4 bg-background border-t border-border/40 relative overflow-hidden">
      <div className="container max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8">
          <div className="space-y-6 max-w-[320px]">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Wallet className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-black tracking-tight">
                Crypto<span className="text-gradient">Bio</span><span className="text-foreground">.link</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm font-medium leading-relaxed">
              Your decentralized bio link platform. Built for creators who want full control over their web3 identity, wallets, and earnings.
            </p>
            <div className="flex gap-3">
               {[Twitter, Instagram, GithubIcon].map((Icon, i) => (
                 <a key={i} href="#" className="w-9 h-9 rounded-lg text-muted-foreground hover:text-primary hover:bg-foreground/5 flex items-center justify-center transition-colors">
                    <Icon className="h-4 w-4" />
                 </a>
               ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-20">
            <div className="space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/50">Product</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Showcase</Link></li>
              </ul>
            </div>
            <div className="space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/50">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</Link></li>
              </ul>
            </div>
            <div className="space-y-5 hidden sm:block">
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/50">Support</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground">
            © 2026 CryptoBio.Link. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
             <span>Built with Next.js</span>
             <span>•</span>
             <span>Powered by Supabase</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
