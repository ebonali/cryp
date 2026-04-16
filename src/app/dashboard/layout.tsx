import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AlertCircle, Sparkles } from "lucide-react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { session } } = supabase ? await supabase.auth.getSession() : { data: { session: null } };

  // If no session and NOT in demo mode, redirect
  if (!session && supabase) {
    redirect('/auth');
  }

  const isDemo = !supabase;

  return (
    <div className="min-h-screen bg-premium-gradient flex flex-col selection:bg-primary/20">
      <Navbar />
      
      <main className="flex-1 container max-w-[1200px] mx-auto pt-32 pb-20 px-4">
        {isDemo && (
          <div className="mb-8 p-4 glass-card border-primary/20 dark:bg-primary/10 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl animate-scale-in">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary border border-primary/20 shadow-inner">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="space-y-0.5 text-center sm:text-left">
                <p className="font-black text-sm tracking-tight">Demo Mode Active</p>
                <p className="text-xs font-medium text-muted-foreground">Changes won't be saved to a database. Connect Supabase to go live.</p>
              </div>
            </div>
            <Link href="/auth" className="w-full sm:w-auto">
              <Button size="sm" variant="gradient" className="w-full sm:w-auto rounded-xl px-8 shadow-primary/30">
                Connect Now
              </Button>
            </Link>
          </div>
        )}
        
        <div className="glass-card rounded-[40px] border-none shadow-2xl p-6 md:p-12 min-h-[700px] relative overflow-hidden">
          {/* Subtle inner shadow effect */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
