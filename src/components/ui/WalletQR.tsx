'use client';

import { QRCodeSVG } from 'qrcode.react';
import { Card, CardContent } from './Card';
import { useTheme } from 'next-themes';

interface WalletQRProps {
  address: string;
  network?: string;
}

export function WalletQR({ address, network }: WalletQRProps) {
  const { theme } = useTheme();
  if (!address) return null;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="p-4 bg-white rounded-3xl shadow-premium ring-1 ring-foreground/5 transition-premium hover:scale-105">
        <QRCodeSVG 
          value={address} 
          size={180}
          level="H"
          includeMargin={false}
          fgColor="#000000"
          bgColor="#ffffff"
          className="rounded-xl"
        />
      </div>
      {network && (
        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ring-1 ring-primary/20 animate-fade-in">
          {network} Network
        </div>
      )}
    </div>
  );
}
