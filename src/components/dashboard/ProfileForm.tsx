'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useRouter } from 'next/navigation';
import { CheckCircle2, User, Camera, FileText, Sparkles } from 'lucide-react';

export function ProfileForm({ initialUser, initialProfile, isDemo }: any) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [username, setUsername] = useState(initialUser?.username || '');
  const [bio, setBio] = useState(initialProfile?.bio || '');
  const [avatarUrl, setAvatarUrl] = useState(initialProfile?.avatar_url || '');
  const [error, setError] = useState<string | null>(null);

  const supabase = createClient();

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    if (isDemo) {
      setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        setTimeout(() => setSuccess(false), 3000);
      }, 800);
      return;
    }

    try {
      const { error: userError } = await supabase
        .from('users')
        .update({ username })
        .eq('id', initialUser.id);

      if (userError) throw userError;

      const { error: profileError } = await supabase
        .from('profiles')
        .update({ 
          bio,
          avatar_url: avatarUrl
        })
        .eq('user_id', initialUser.id);

      if (profileError) throw profileError;

      setSuccess(true);
      router.refresh();
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleUpdate} className="space-y-6">
      <div className="space-y-4">
        {/* Username Field */}
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1 flex items-center gap-2">
            <User className="h-3 w-3" /> Digital Handle
          </label>
          <div className="flex items-center group">
            <div className="bg-secondary/50 px-4 h-12 flex items-center rounded-l-2xl border-2 border-r-0 border-foreground/5 text-muted-foreground text-xs font-black transition-premium group-focus-within:border-primary/40 group-focus-within:text-primary">
              cryptolink.bio/
            </div>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/\s/g, ''))}
              className="rounded-l-none h-12 focus:border-primary/40 focus:bg-background transition-all"
              placeholder="username"
            />
          </div>
        </div>

        {/* Avatar URL Field */}
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1 flex items-center gap-2">
            <Camera className="h-3 w-3" /> Profile Picture (URL)
          </label>
          <Input
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
            placeholder="https://example.com/your-photo.jpg"
            className="h-12 border-foreground/5 bg-secondary/30 focus:bg-background"
          />
        </div>

        {/* Bio Field */}
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1 flex items-center gap-2">
            <FileText className="h-3 w-3" /> About You
          </label>
          <textarea
            className="flex min-h-[120px] w-full rounded-2xl border-2 border-foreground/5 bg-secondary/30 px-4 py-3 text-sm font-medium transition-premium placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 focus:bg-background focus:ring-4 focus:ring-primary/5 resize-none"
            placeholder="Tell the world about your work, vision, and projects..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
      </div>

      {error && (
        <div className="p-3 bg-destructive/10 text-destructive rounded-xl text-xs font-bold ring-1 ring-destructive/20 animate-fade-in">
          {error}
        </div>
      )}

      <Button variant="primary" className="w-full h-12 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/20 btn-shine" isLoading={loading} type="submit">
        {success ? (
          <>
            <CheckCircle2 className="mr-2 h-4 w-4" /> Sync Complete
          </>
        ) : (
          <>Sync Changes <Sparkles className="ml-2 h-4 w-4" /></>
        )}
      </Button>
    </form>
  );
}
