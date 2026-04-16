import { AuthForm } from "./AuthForm";
import Link from "next/link";
import { Wallet, ArrowLeft } from "lucide-react";
import { Suspense } from "react";

export default function AuthPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-premium-gradient relative overflow-hidden p-4">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-30">
         <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="w-full max-w-md mb-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg shadow-primary/20">
            <Wallet className="w-6 h-6 text-white" />
          </div>
          <span className="font-black text-2xl tracking-tighter text-foreground">
            Crypto<span className="text-gradient">Link</span>
          </span>
        </Link>
        <Link href="/" className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group">
          <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
          Back Home
        </Link>
      </div>

      <Suspense fallback={<div className="w-full max-w-md h-[500px] glass-card animate-pulse rounded-[32px]" />}>
        <AuthForm />
      </Suspense>

      <p className="mt-12 text-center text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] opacity-40">
        Secured by Supabase Auth & Web3 Standards
      </p>
    </div>
  );
}
