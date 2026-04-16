import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Globe, Zap, Shield, Wallet, BarChart3, Lock, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 px-4 border-b border-border">
          <div className="absolute inset-0 bg-grid opacity-50 dark:opacity-20" />
          <div className="container max-w-[1200px] mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Now available for all creators
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-balance">
                Your decentralized<br />
                <span className="text-gradient">crypto bio.</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Connect wallets, receive crypto instantly, and take control of your digital identity. No intermediaries. No fees. Just you and your community.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Link href="/auth?tab=signup">
                  <Button size="lg" className="rounded-full px-8 h-14 text-lg font-semibold">
                    Get started free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#features">
                  <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg font-semibold">
                    Learn more
                  </Button>
                </Link>
              </div>

              {/* Social Proof */}
              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Trusted by creators worldwide</p>
                <div className="flex flex-wrap justify-center gap-8">
                  {['10K+', '50M+', '150+'].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold">{stat}</div>
                      <div className="text-xs text-muted-foreground">
                        {i === 0 ? 'Active Creators' : i === 1 ? 'Transactions' : 'Countries'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Demo Section */}
        <section className="relative w-full py-20 md:py-32 px-4">
          <div className="container max-w-[1200px] mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
                    ✨ The Platform
                  </p>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                    Built for creators, <br />
                    powered by crypto.
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Set up your decentralized bio in seconds. Connect multiple wallets, showcase your links, and receive payments directly without any middleman taking a cut.
                </p>

                {/* Features List */}
                <div className="space-y-4">
                  {[
                    { icon: Wallet, label: 'Multi-Wallet Support' },
                    { icon: Zap, label: 'Instant Settlements' },
                    { icon: Lock, label: 'Full Control & Ownership' },
                    { icon: Globe, label: 'Custom Domain Ready' }
                  ].map((feature, i) => {
                    const Icon = feature.icon;
                    return (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <span className="font-semibold text-foreground">{feature.label}</span>
                      </div>
                    );
                  })}
                </div>

                <Link href="/dashboard">
                  <Button variant="ghost" className="group mt-4">
                    View live demo
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Right - Product Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-2xl" />
                <div className="relative bg-card border border-border rounded-2xl p-8 overflow-hidden">
                  <div className="space-y-6">
                    {/* Phone Mockup Header */}
                    <div className="space-y-3">
                      <div className="h-8 w-20 bg-primary/20 rounded-lg" />
                      <div className="h-4 w-32 bg-muted rounded-lg" />
                    </div>

                    {/* Content Preview */}
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-12 bg-secondary/50 rounded-lg flex items-center px-4">
                          <div className="h-2 w-24 bg-muted/50 rounded" />
                        </div>
                      ))}
                    </div>

                    {/* CTA Preview */}
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
                      <Wallet className="h-8 w-8 mx-auto mb-3 text-primary" />
                      <div className="h-2 w-16 bg-muted/50 rounded mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative w-full py-20 md:py-32 px-4 bg-secondary/30 border-y border-border">
          <div className="container max-w-[1200px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
                ✨ Features
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                Everything you need to succeed in Web3.
              </h2>
              <p className="text-lg text-muted-foreground">
                A complete platform designed for creators who want to build their crypto identity without compromises.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="group p-8 rounded-xl border border-border hover:border-primary/50 bg-background transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison / Stats Section */}
        <section className="relative w-full py-20 md:py-32 px-4">
          <div className="container max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
                ✨ Why CryptoBio.Link
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                The better way to monetize your presence.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {comparisons.map((item, i) => (
                <div key={i} className="space-y-4">
                  <h3 className="text-2xl font-bold">{item.metric}</h3>
                  <p className="text-4xl font-black text-gradient">{item.value}</p>
                  <p className="text-muted-foreground text-lg">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full py-20 md:py-32 px-4 border-t border-border">
          <div className="container max-w-[1200px] mx-auto">
            <div className="bg-gradient-primary/10 border border-primary/20 rounded-2xl p-12 md:p-20 text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Ready to build your crypto bio?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of creators taking control of their digital identity. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/auth?tab=signup">
                  <Button size="lg" className="rounded-full px-8 h-14 text-lg font-semibold">
                    Get started now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://twitter.com/cryptobiolink" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg font-semibold">
                    Follow us
                  </Button>
                </Link>
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
    description: 'Connect any wallet. Ethereum, Solana, Polygon, Bitcoin, and more. Full custody, full control.'
  },
  {
    icon: Zap,
    title: 'Instant Settlements',
    description: 'Receive crypto instantly with zero intermediaries. Funds go straight to your wallet, zero fees.'
  },
  {
    icon: Globe,
    title: 'Custom Domains',
    description: 'Use cryptobio.link or bring your own domain. Complete white-label control over your brand.'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track clicks, conversions, and earnings in real-time. Understand your audience better.'
  },
  {
    icon: Lock,
    title: 'On-Chain Verified',
    description: 'Verify your identity on-chain. Prove ownership of wallets and NFTs with confidence.'
  },
  {
    icon: Shield,
    title: 'Private & Secure',
    description: 'Your data stays yours. We never sell user information. Full privacy guaranteed.'
  }
];

const comparisons = [
  {
    metric: 'Faster Payouts',
    value: '10x',
    description: 'Receive crypto instantly vs waiting 5-7 days with traditional platforms.'
  },
  {
    metric: 'Lower Fees',
    value: '100%',
    description: 'Zero platform fees. Compare that to traditional link-in-bio apps taking 30%.'
  },
  {
    metric: 'More Control',
    value: '∞',
    description: 'Your bio, your rules. Full white-label platform built on decentralized tech.'
  },
  {
    metric: 'Better Privacy',
    value: '99.9%',
    description: 'We never track or sell your data. Full compliance with privacy laws worldwide.'
  }
];
