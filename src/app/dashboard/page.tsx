import { createClient } from "@/lib/supabase/server";
import { ProfileForm } from "@/components/dashboard/ProfileForm";
import { LinksManager } from "@/components/dashboard/LinksManager";
import { WalletForm } from "@/components/dashboard/WalletForm";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { User, LinkIcon, Wallet, ExternalLink, Copy, Share2 } from "lucide-react";
import { DEMO_USER, DEMO_PROFILE, DEMO_LINKS } from "@/lib/demo_data";

export default async function DashboardPage() {
  const supabase = await createClient();

  // DASHBOARD RENDER LOGIC
  const renderDashboard = (user: any, profile: any, links: any[], isDemo = false) => {
     const username = user?.username || 'user';
     const profileLink = `cryptolink.bio/${username}`;

     return (
      <div className="space-y-12 animate-fade-up">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-foreground/5">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
              Creator <span className="text-gradient">Hub</span>
            </h1>
            <p className="text-muted-foreground text-lg font-medium">Manage your digital presence and decentralized identity.</p>
          </div>
          
          <div className="flex items-center gap-3 p-2 bg-secondary/50 rounded-2xl ring-1 ring-foreground/5 w-fit">
            <div className="px-5 py-2.5 text-sm font-black text-foreground/70 bg-background rounded-[14px] shadow-sm border border-foreground/5">
              {profileLink}
            </div>
            <div className="flex gap-1.5">
              <Button size="icon" variant="secondary" className="h-10 w-10 rounded-[14px] hover:bg-background">
                <Copy className="h-4 w-4" />
              </Button>
              <a href={isDemo ? "/demo" : `/${username}`} target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="primary" className="h-10 w-10 rounded-[14px] shadow-lg shadow-primary/20">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-10 grid-cols-1 lg:grid-cols-12 items-start">
          {/* Left Column: Settings */}
          <div className="lg:col-span-5 space-y-10">
            <Card className="border-none shadow-premium ring-1 ring-foreground/5">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary ring-1 ring-primary/20">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Profile Details</CardTitle>
                    <CardDescription>Setup your public avatar and bio</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ProfileForm initialUser={user} initialProfile={profile} isDemo={isDemo} />
              </CardContent>
            </Card>

            <Card className="border-none shadow-premium ring-1 ring-foreground/5">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary ring-1 ring-primary/20">
                    <Wallet className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Payout Config</CardTitle>
                    <CardDescription>Where you receive direct payments</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <WalletForm initialProfile={profile} isDemo={isDemo} />
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Links Manager */}
          <div className="lg:col-span-7 h-full">
            <Card className="h-full border-none shadow-premium ring-1 ring-foreground/5">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary ring-1 ring-primary/20">
                    <LinkIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Link Ecosystem</CardTitle>
                    <CardDescription>Add, organize and showcase your web presence</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <LinksManager initialLinks={links || []} userId={user?.id || ''} isDemo={isDemo} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
     );
  };

  if (!supabase) {
    return renderDashboard(DEMO_USER, DEMO_PROFILE, DEMO_LINKS, true);
  }

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: userData } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single();

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', user.id)
    .single();

  const { data: links } = await supabase
    .from('links')
    .select('*')
    .eq('user_id', user.id)
    .order('order_index', { ascending: true });

  return renderDashboard(userData || user, profile, links || [], false);
}
