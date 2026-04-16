import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Globe, Lock, Wallet, CheckCircle2, Zap, Shield, Rocket } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/20 bg-premium-gradient overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none -z-10 opacity-40 dark:opacity-30 transition-opacity">
           <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-primary/15 dark:bg-primary/25 rounded-full blur-[120px] animate-pulse" />
           <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-purple-500/8 dark:bg-purple-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Hero Section */}
        <section className="container max-w-[1200px] mx-auto px-4 pt-48 pb-20 relative text-center">
          <div className="space-y-12 animate-fade-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[13px] font-bold tracking-tight border border-primary/10 transition-premium hover:bg-primary/10 cursor-default">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                Trusted by crypto creators worldwide
              </div>
              
              <h1 className="text-6xl font-black tracking-tight sm:text-7xl md:text-8xl leading-[0.9] text-foreground transition-premium">
                Your decentralized <br />
                <span className="text-gradient">crypto bio.</span>
              </h1>
              
              <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
                Connect your wallets, showcase your links, receive crypto payments directly. 
                No platform fees, complete control, fully on-chain.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/auth?tab=signup">
                <Button size="lg" className="px-10 rounded-2xl h-16 text-xl font-bold bg-gradient-primary text-white hover:shadow-glow transition-all hover:scale-105 active:scale-95 btn-shine">
                  Get started for free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="lg" className="px-10 rounded-2xl h-16 text-xl font-bold glass transition-all hover:bg-accent">
                  View Demo
                </Button>
              </Link>
            </div>

            {/* Trusted Creators Pile */}
            <div className="flex flex-col items-center gap-4 pt-6">
              <div className="flex items-center -space-x-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-2xl border-[3px] border-background bg-secondary overflow-hidden transition-premium hover:-translate-y-2 hover:z-10 cursor-pointer shadow-lg">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + i * 11}`} alt="avatar" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-muted-foreground transition-premium">Join creators building decentralized bios on CryptoBio.Link</p>
            </div>
          </div>
        </section>

        {/* Product Preview Section */}
        <section className="container max-w-[1100px] mx-auto px-4 pb-32">
          <div className="relative glass-card rounded-[40px] p-8 lg:p-20 overflow-hidden flex flex-col lg:flex-row items-center gap-16 group transition-premium hover:shadow-premium-hover">
            <div className="flex-1 space-y-8 relative z-10 text-left">
              <div className="w-14 h-14 bg-gradient-primary/10 rounded-2xl flex items-center justify-center shadow-inner">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] text-foreground">
                  Your crypto identity <br />
                  <span className="text-gradient">in seconds.</span>
                </h2>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                  Set up your decentralized bio in seconds. Connect wallets, add links, 
                  verify NFTs, and manage everything from one beautiful dashboard.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Multi-Wallet Support', 'Multi-Chain Compatible', 'NFT Verification', 'Zero Fees'].map((feat, i) => (
                  <li key={feat} className="flex items-center gap-3 font-bold text-sm text-foreground/80">
                    <div className="h-6 w-6 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 w-full max-w-[380px] relative perspective-[1000px]">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 group-hover:bg-primary/30 transition-all duration-700" />
              {/* Phone Mockup Upgrade */}
              <div className="rounded-[40px] border-[10px] border-foreground/90 aspect-[9/18.5] bg-card shadow-2xl overflow-hidden relative animate-float transition-premium hover:rotate-3">
                <div className="bg-gradient-primary h-[25%] w-full flex flex-col items-center justify-center p-6 text-center text-white relative">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 mb-3 overflow-hidden shadow-lg shadow-black/10">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="preview-avatar" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-3 w-20 bg-white/30 rounded-full mb-1" />
                  <div className="h-2 w-12 bg-white/20 rounded-full" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    {[1, 2, 3].map(j => (
                      <div key={j} className="h-12 w-full glass rounded-xl border border-primary/10 flex items-center px-4">
                        <div className="h-2 w-24 bg-foreground/10 rounded-full" />
                      </div>
                    ))}
                  </div>
                  <div className="h-32 w-full bg-primary/5 rounded-2xl border border-primary/20 flex flex-col items-center justify-center gap-3">
                    <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
                      <Wallet className="h-5 w-5 text-white" />
                    </div>
                    <div className="h-2 w-20 bg-primary/20 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section id="features" className="w-full py-32 bg-secondary/20 dark:bg-background border-y border-foreground/5 relative overflow-hidden">
          <div className="container max-w-[1100px] mx-auto px-4 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
                Everything for your <br />
                <span className="text-gradient">web3 presence.</span>
              </h2>
              <p className="text-muted-foreground font-medium text-lg">
                One powerful platform for managing your crypto identity, 
                connecting wallets, and building your decentralized presence.
              </p>
            </div>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard 
                icon={<Globe className="h-6 w-6" />} 
                title="Custom Domain" 
                desc="Use cryptobio.link or connect your own domain. Full white-label control over your brand."
              />
              <FeatureCard 
                icon={<Rocket className="h-6 w-6" />} 
                title="Direct Crypto Payments" 
                desc="Accept crypto payments instantly with zero intermediaries. Funds settle directly to your wallet."
              />
              <FeatureCard 
                icon={<Shield className="h-6 w-6" />} 
                title="On-Chain Verified" 
                desc="Prove ownership with blockchain verification. Show off your wallets and NFT collections with confidence."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="group p-8 rounded-[32px] glass-card border-none transition-premium hover:-translate-y-2 hover:shadow-premium-hover relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
      <div className="relative z-10 space-y-6">
        <div className="p-4 bg-gradient-primary/10 rounded-2xl w-fit text-primary ring-1 ring-primary/20 group-hover:scale-110 transition-premium">
          {icon}
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-black tracking-tight text-foreground transition-premium group-hover:text-primary">{title}</h3>
          <p className="text-muted-foreground font-medium leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}
