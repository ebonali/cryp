'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { WalletQR } from '@/components/ui/WalletQR';
import { Copy, Check, QrCode, Coins, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CryptoPaymentProps {
  address: string;
  network?: string;
}

export function CryptoPayment({ address, network }: CryptoPaymentProps) {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="border-none bg-gradient-primary/[0.03] dark:bg-primary/[0.05] ring-1 ring-primary/20 backdrop-blur-xl overflow-hidden relative group">
      <div className="absolute top-0 right-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
         <Coins className="h-24 w-24 -mr-8 -mt-8 rotate-12" />
      </div>
      
      <CardHeader className="text-center pb-6 pt-10 relative z-10">
        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-primary/20">
           <Coins className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-2xl font-black">Support with Crypto</CardTitle>
        <CardDescription className="font-bold text-sm text-primary/60 uppercase tracking-widest">
          {network || 'Crypto'} Network
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-8 relative z-10 px-8 pb-10">
        {/* Address Display */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-full bg-background/80 dark:bg-card/50 ring-1 ring-foreground/5 rounded-2xl p-4 flex items-center justify-between gap-4 group/input transition-premium hover:ring-primary/40">
            <code className="text-[11px] font-bold font-mono truncate text-muted-foreground flex-1 ml-1 tracking-tight">
              {address}
            </code>
            <div className="flex gap-2">
              <Button 
                variant="secondary" 
                size="icon" 
                className="h-10 w-10 rounded-xl"
                onClick={() => setShowQR(!showQR)}
              >
                <QrCode className="h-4 w-4" />
              </Button>
              <Button 
                variant="primary" 
                size="icon" 
                className="h-10 w-10 rounded-xl shadow-lg shadow-primary/20"
                onClick={copyToClipboard}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* QR Code Overlay/Section */}
          {showQR && (
            <div className="w-full py-4 animate-scale-in flex flex-col items-center">
              <div className="p-4 bg-white rounded-3xl shadow-premium ring-1 ring-foreground/5 mb-6">
                <WalletQR address={address} network={network} />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                Scan to Pay
              </p>
            </div>
          )}
        </div>

        {/* Amount Suggestions */}
        {!showQR && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-px flex-1 bg-foreground/5" />
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Quick Support</span>
              <div className="h-px flex-1 bg-foreground/5" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {['$5', '$20', '$50'].map((amount) => (
                <button 
                  key={amount} 
                  className="h-12 rounded-xl bg-background hover:bg-primary hover:text-white transition-premium font-black text-sm ring-1 ring-foreground/5 shadow-sm hover:shadow-primary/20 active:scale-95"
                >
                  {amount}
                </button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
