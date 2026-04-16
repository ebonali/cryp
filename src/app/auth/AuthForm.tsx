'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { useRouter, useSearchParams } from 'next/navigation';
import { AlertCircle, CheckCircle2, Mail, Lock, Sparkles, Wand2 } from 'lucide-react';

export function AuthForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') === 'signup' ? 'signup' : 'login';
  
  const [tab, setTab] = useState<'login' | 'signup'>(initialTab);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);

  const supabase = createClient();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      if (tab === 'signup') {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback`,
          },
        });
        if (error) throw error;
        setMessage({ type: 'success', text: 'Check your email for the confirmation link.' });
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        router.push('/dashboard');
        router.refresh();
      }
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto glass-card border-none shadow-premium animate-fade-up">
      <CardHeader className="space-y-4 pt-10">
        <div className="flex justify-center">
          <div className="flex p-1.5 bg-secondary/50 rounded-2xl ring-1 ring-foreground/5">
            <button
              onClick={() => setTab('login')}
              className={`px-8 py-2 text-sm font-bold rounded-xl transition-all duration-300 ${
                tab === 'login' ? 'bg-background shadow-premium text-foreground scale-105' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setTab('signup')}
              className={`px-8 py-2 text-sm font-bold rounded-xl transition-all duration-300 ${
                tab === 'signup' ? 'bg-background shadow-premium text-foreground scale-105' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>
        <div className="text-center space-y-2">
          <CardTitle className="text-3xl font-black tracking-tight text-foreground">
            {tab === 'login' ? 'Welcome Back' : 'Join the Revolution'}
          </CardTitle>
          <CardDescription className="text-base font-medium">
            {tab === 'login' 
              ? 'Access your decentralized identity' 
              : 'The only link-in-bio you will ever need'}
          </CardDescription>
        </div>
      </CardHeader>
      <form onSubmit={handleAuth}>
        <CardContent className="space-y-5 px-8">
          {message && (
            <div className={`p-4 rounded-2xl flex items-center gap-3 text-sm font-bold ring-1 transition-all animate-scale-in ${
              message.type === 'error' ? 'bg-destructive/10 text-destructive ring-destructive/20' : 'bg-green-500/10 text-green-500 ring-green-500/20'
            }`}>
              {message.type === 'error' ? <AlertCircle className="h-5 w-5" /> : <CheckCircle2 className="h-5 w-5" />}
              {message.text}
            </div>
          )}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <Input
                  type="email"
                  placeholder="name@example.com"
                  className="pl-12 h-14 rounded-2xl border-foreground/10 focus:border-primary/50 focus:ring-primary/20 transition-all font-medium"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Password</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                  <Lock className="h-4 w-4" />
                </div>
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="pl-12 h-14 rounded-2xl border-foreground/10 focus:border-primary/50 focus:ring-primary/20 transition-all font-medium"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-8 pb-10 pt-4">
          <Button className="w-full h-14 rounded-2xl text-lg font-black bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25 btn-shine" isLoading={loading} type="submit">
            {tab === 'login' ? (
              <>Sign In <Sparkles className="ml-2 h-5 w-5" /></>
            ) : (
              <>Create Account <Wand2 className="ml-2 h-5 w-5" /></>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
