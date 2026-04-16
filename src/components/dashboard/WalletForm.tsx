'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { CheckCircle2, Wallet, Coins, CreditCard } from 'lucide-react';
import { useRouter } from 'next/navigation';

const networks = [
  { name: 'Ethereum', icon: '💎' },
  { name: 'Polygon', icon: '🟣' },
  { name: 'Solana', icon: '☀️' }
];

export function WalletForm({ initialProfile, isDemo }: any) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [address, setAddress] = useState(initialProfile?.wallet_address || '');
  const [network, setNetwork] = useState(initialProfile?.network || 'Ethereum');

  const supabase = createClient();

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    if (isDemo) {
      setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        setTimeout(() => setSuccess(false), 3000);
      }, 800);
      return;
    }

    try {
      const { error } = await supabase
        .from('profiles')
        .update({ 
          wallet_address: address,
          network: network
        })
        .eq('user_id', initialProfile.user_id);

      if (error) throw error;

      setSuccess(true);
      router.refresh();
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleUpdate} className="space-y-8">
      <div className="space-y-6">
        {/* Network Selector */}
        <div className="space-y-3">
          <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1 flex items-center gap-2">
            <Coins className="h-3 w-3" /> Preferred Network
          </label>
          <div className="grid grid-cols-3 gap-3">
            {networks.map((n) => (
              <button
                key={n.name}
                type="button"
                onClick={() => setNetwork(n.name)}
                className={`flex flex-col items-center justify-center py-3 px-2 rounded-2xl border-2 transition-premium group active:scale-95 ${
                  network === n.name 
                    ? 'bg-primary/5 border-primary text-primary shadow-lg shadow-primary/10' 
                    : 'bg-secondary/30 border-foreground/5 text-muted-foreground hover:bg-secondary/50'
                }`}
              >
                <span className="text-xl mb-1 group-hover:scale-110 transition-transform">{n.icon}</span>
                <span className="text-[10px] font-black uppercase tracking-tight">{n.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Wallet Address Input */}
        <div className="space-y-3">
          <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1 flex items-center gap-2">
            <CreditCard className="h-3 w-3" /> Payout Address
          </label>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-foreground/5 rounded-lg group-focus-within:bg-primary/10 group-focus-within:text-primary transition-colors">
              <Wallet className="h-4 w-4" />
            </div>
            <Input
              placeholder="0x... or Solana address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="pl-14 h-14 border-foreground/5 bg-secondary/30 focus:bg-background rounded-2xl font-mono text-xs tracking-tight"
            />
          </div>
          <p className="text-[10px] text-muted-foreground font-medium px-2 italic">Make sure this address matches the selected network to avoid losing funds.</p>
        </div>
      </div>

      <Button variant="primary" className="w-full h-12 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/20 btn-shine" isLoading={loading} type="submit">
        {success ? (
          <>
            <CheckCircle2 className="mr-2 h-4 w-4" /> Account Sync
          </>
        ) : (
          'Set Payout Address'
        )}
      </Button>
    </form>
  );
}
