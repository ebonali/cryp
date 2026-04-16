import { WalletQR } from '@/components/ui/WalletQR';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { ExternalLink, Copy, Check, Link2, Sparkles } from 'lucide-react';
import { CryptoPayment } from '@/components/public/CryptoPayment';

interface PublicProfileProps {
  user: any;
  profile: any;
  links: any[];
}

export function PublicProfile({ user, profile, links }: PublicProfileProps) {
  return (
    <div className="min-h-screen bg-premium-gradient flex flex-col items-center py-16 px-4 md:py-32 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-40">
         <div className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="w-full max-w-xl flex flex-col items-center space-y-12 relative z-10">
        
        {/* Profile Header */}
        <div className="flex flex-col items-center space-y-8 text-center animate-fade-up">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-primary/20 rounded-[48px] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000" />
            <div className="relative w-36 h-36 bg-card rounded-[42px] border-[6px] border-card shadow-premium overflow-hidden transition-premium hover:scale-105 active:scale-95">
              {profile?.avatar_url ? (
                <img src={profile.avatar_url} alt={user.username} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-5xl font-black text-white">
                    {user.username?.[0].toUpperCase()}
                  </span>
                </div>
              )}
            </div>
            {/* Verification Badge */}
            <div className="absolute -bottom-2 -right-2 bg-gradient-primary text-white p-2 rounded-2xl shadow-lg border-4 border-card ring-1 ring-primary/20">
               <Sparkles className="h-4 w-4" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-1">
              <h1 className="text-4xl font-black tracking-tight text-foreground">
                {user.username}
              </h1>
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest w-fit mx-auto ring-1 ring-primary/20">
                 Verified Creator
              </div>
            </div>
            {profile?.bio && (
              <p className="text-muted-foreground text-lg max-w-sm mx-auto font-medium leading-normal italic">
                "{profile.bio}"
              </p>
            )}
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full space-y-4 animate-fade-up" style={{ animationDelay: '100ms' }}>
          {links.length > 0 ? (
            links.map((link) => (
              <a 
                key={link.id} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="glass-card hover:bg-card transition-premium rounded-[28px] p-6 flex items-center justify-between shadow-sm hover:shadow-premium-hover active:scale-[0.98] border-none group-hover:ring-2 ring-primary/20">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-gradient-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-premium ring-1 ring-primary/10">
                      <Link2 className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-black text-xl text-foreground tracking-tight">{link.title}</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-premium">
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </a>
            ))
          ) : (
             <div className="text-center py-12 glass-card rounded-[32px] border-dashed border-2 border-foreground/10">
                <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs">No links shared yet</p>
             </div>
          )}
        </div>

        {/* Crypto Payment Section */}
        {profile?.wallet_address && (
          <div className="w-full animate-fade-up" style={{ animationDelay: '200ms' }}>
            <CryptoPayment 
              address={profile.wallet_address} 
              network={profile.network} 
            />
          </div>
        )}

        {/* Footer */}
        <footer className="pt-20 pb-12 flex flex-col items-center gap-6">
          <Link 
            href="/" 
            className="flex flex-col items-center gap-3 group"
          >
            <span className="text-muted-foreground text-xs font-black uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">Built with</span>
            <div className="bg-foreground text-background px-5 py-2 rounded-2xl text-[11px] font-black tracking-widest shadow-xl group-hover:scale-110 transition-premium ring-4 ring-foreground/5">
              CRYPTOLINK
            </div>
          </Link>
        </footer>
      </div>
    </div>
  );
}
