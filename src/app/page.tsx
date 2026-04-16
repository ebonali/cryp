import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Globe, Zap, Shield, Wallet, BarChart3, Lock, ChevronRight, Check, TrendingUp } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-24 md:py-40 px-4">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute top-1/3 -right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container max-w-[1200px] mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Trusted by 10K+ creators
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-balance">
                  Your crypto bio<br />
                  <span className="text-gradient">reimagined.</span>
                </h1>

                {/* Subheading */}
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                  Connect wallets, get paid instantly, control your digital identity. Zero fees. Zero middlemen. Pure crypto.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Link href="/auth?tab=signup">
                  <Button size="lg" className="rounded-xl px-8 h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
                    Launch your bio
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#features">
                  <Button variant="outline" size="lg" className="rounded-xl px-8 h-14 text-base font-semibold">
                    See how it works
                  </Button>
                </Link>
              </div>

              {/* Social Proof - Trust Badges */}
              <div className="pt-12 border-t border-border/50">
                <p className="text-sm text-muted-foreground font-medium mb-8">Trusted by leading creators globally</p>
                <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-2xl mx-auto">
                  {[
                    { label: 'Active Creators', value: '10K+' },
                    { label: 'Transactions', value: '$50M+' },
                    { label: 'Countries', value: '150+' }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-2">
                      <div className="text-3xl md:text-4xl font-black text-foreground">{stat.value}</div>
                      <div className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Showcase Section */}
        <section className="relative w-full py-24 md:py-32 px-4 border-b border-border/40">
          <div className="container max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-10">
                <div className="space-y-4">
                  <p className="text-primary text-sm font-bold uppercase tracking-wider">The Platform</p>
                  <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
                    Built for creators.<br />
                    Powered by crypto.
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Set up your decentralized bio in minutes. Connect multiple wallets, showcase your content, and receive payments instantly without any intermediaries taking a cut.
                </p>

                {/* Feature Checklist */}
                <div className="space-y-4 pt-4">
                  {[
                    'Multi-chain wallet support',
                    'Instant crypto settlements',
                    'Zero platform fees',
                    'Custom domain ready',
                    'On-chain verified identity'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link href="/dashboard">
                    <Button variant="ghost" className="group text-primary font-semibold px-0 h-auto hover:bg-transparent">
                      Explore live demo
                      <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right - Enhanced Product Preview */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl blur-3xl" />
                
                <div className="relative">
                  {/* Device Frame */}
                  <div className="bg-gradient-to-b from-card to-background border border-border/60 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Phone Header */}
                    <div className="bg-gradient-to-b from-foreground/5 to-transparent border-b border-border/40 px-6 py-4 flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="h-3 w-24 bg-foreground/20 rounded-full" />
                        <div className="h-2 w-16 bg-foreground/10 rounded-full" />
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Wallet className="h-4 w-4 text-primary" />
                      </div>
                    </div>

                    {/* Content Preview */}
                    <div className="p-6 space-y-6">
                      {/* Profile Section */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-xl bg-gradient-primary" />
                          <div className="space-y-2 flex-1">
                            <div className="h-4 w-32 bg-foreground/10 rounded-lg" />
                            <div className="h-3 w-20 bg-foreground/5 rounded-lg" />
                          </div>
                        </div>
                      </div>

                      {/* Link Cards */}
                      <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-14 bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-xl flex items-center px-4">
                            <div className="h-2 w-28 bg-primary/30 rounded-full" />
                          </div>
                        ))}
                      </div>

                      {/* CTA Button Preview */}
                      <div className="pt-4">
                        <div className="h-12 bg-gradient-primary rounded-xl flex items-center justify-center opacity-90" />
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -right-6 bg-background border border-border rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-foreground">Real-time Analytics</div>
                        <div className="text-xs text-muted-foreground">Track all earnings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section id="features" className="relative w-full py-24 md:py-32 px-4">
          <div className="container max-w-[1200px] mx-auto">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
              <p className="text-primary text-sm font-bold uppercase tracking-wider">Everything You Need</p>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
                Complete tools for Web3 creators.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                All features designed to help you build your crypto presence, monetize your audience, and stay in complete control.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className="group relative p-8 rounded-2xl border border-border/60 bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                    {/* Hover Arrow */}
                    <ChevronRight className="absolute right-6 bottom-6 h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats / Impact Section */}
        <section className="relative w-full py-24 md:py-32 px-4 border-y border-border/40 bg-secondary/30">
          <div className="container max-w-[1200px] mx-auto">
            <div className="text-center mb-20 space-y-6">
              <p className="text-primary text-sm font-bold uppercase tracking-wider">The Impact</p>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
                Why creators choose us.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {comparisons.map((item, i) => (
                <div
                  key={i}
                  className="relative p-8 rounded-2xl border border-border/60 bg-background overflow-hidden group hover:border-primary/40 transition-all"
                >
                  {/* Gradient Accent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative space-y-4">
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{item.metric}</h3>
                    <p className="text-6xl md:text-7xl font-black text-gradient">{item.value}</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full py-24 md:py-40 px-4">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 blur-3xl" />
          </div>

          <div className="container max-w-[1200px] mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-10">
              {/* Main CTA */}
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
                  Ready to take control?
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Join thousands of creators building their decentralized presence. Get started in seconds, no credit card required.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Link href="/auth?tab=signup">
                  <Button size="lg" className="rounded-xl px-8 h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
                    Get started free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://twitter.com/cryptobiolink" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="rounded-xl px-8 h-14 text-base font-semibold">
                    Follow updates
                  </Button>
                </Link>
              </div>

              {/* Trust Signal */}
              <div className="pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">✓ Free forever tier • ✓ No payment required • ✓ Full data privacy</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

const features = [
  {
    icon: Wallet,
    title: 'Multi-Chain Wallets',
    description: 'Connect Ethereum, Solana, Polygon, Bitcoin, and more. Full custody, complete control over your assets.'
  },
  {
    icon: Zap,
    title: 'Instant Settlements',
    description: 'Get paid instantly in crypto. Zero intermediaries, zero platform fees, money goes straight to your wallet.'
  },
  {
    icon: Globe,
    title: 'Custom Domains',
    description: 'Use cryptobio.link or bring your own domain. Complete white-label control over your brand identity.'
  },
  {
    icon: BarChart3,
    title: 'Real Analytics',
    description: 'Track clicks, conversions, and earnings in real-time. Deep insights into your audience behavior.'
  },
  {
    icon: Lock,
    title: 'On-Chain Verified',
    description: 'Verify your identity on-chain. Prove ownership of wallets and NFTs with cryptographic proof.'
  },
  {
    icon: Shield,
    title: 'Privacy Focused',
    description: 'Your data stays private. We never track, sell, or share your information. Full compliance guaranteed.'
  }
];

const comparisons = [
  {
    metric: 'Faster Payouts',
    value: '10x',
    description: 'Get paid instantly in crypto vs 5-7 days with traditional platforms. Your money, your timeline.'
  },
  {
    metric: 'Lower Costs',
    value: '0%',
    description: 'Zero platform fees. Traditional apps take 30%. Keep 100% of your earnings. No exceptions.'
  },
  {
    metric: 'Better Control',
    value: '100%',
    description: 'Your bio, your rules. Full white-label platform built on decentralized infrastructure. Complete ownership.'
  },
  {
    metric: 'Superior Privacy',
    value: '∞',
    description: 'We never sell your data or track your behavior. Full privacy compliance with global regulations.'
  }
];
