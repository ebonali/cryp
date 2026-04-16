'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Trash2, Plus, GripVertical, CheckCircle2, LinkIcon, Globe, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function LinksManager({ initialLinks, userId, isDemo }: { initialLinks: any[]; userId: string; isDemo?: boolean }) {
  const router = useRouter();
  const [links, setLinks] = useState(initialLinks);
  const [loading, setLoading] = useState(false);
  const [newLink, setNewLink] = useState({ title: '', url: '' });

  const supabase = createClient();

  const addLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLink.title || !newLink.url) return;
    
    setLoading(true);
    if (isDemo) {
      setTimeout(() => {
        setLinks([...links, { id: Math.random().toString(), ...newLink }]);
        setNewLink({ title: '', url: '' });
        setLoading(false);
      }, 500);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('links')
        .insert([{ 
          user_id: userId, 
          title: newLink.title, 
          url: newLink.url,
          order_index: links.length
        }])
        .select()
        .single();

      if (error) throw error;
      
      setLinks([...links, data]);
      setNewLink({ title: '', url: '' });
      router.refresh();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteLink = async (id: string) => {
    if (isDemo) {
      setLinks(links.filter(l => l.id !== id));
      return;
    }

    try {
      const { error } = await supabase
        .from('links')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setLinks(links.filter(l => l.id !== id));
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-8">
      {/* Add New Link */}
      <form onSubmit={addLink} className="space-y-4 p-6 glass-card border-none bg-primary/[0.03] dark:bg-primary/[0.05] rounded-3xl group ring-1 ring-primary/10 transition-premium hover:ring-primary/30">
        <h4 className="text-sm font-black uppercase tracking-widest flex items-center gap-2 text-primary">
          <Plus className="h-4 w-4" /> Expand Ecosystem
        </h4>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Label</label>
            <Input 
              placeholder="e.g. Portfolio" 
              className="h-11 border-foreground/5 bg-background shadow-sm"
              value={newLink.title}
              onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Destination</label>
            <Input 
              placeholder="https://..." 
              className="h-11 border-foreground/5 bg-background shadow-sm"
              value={newLink.url}
              onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
            />
          </div>
        </div>
        <Button size="md" className="w-full rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-xs btn-shine" isLoading={loading}>
          Add Link to Bio
        </Button>
      </form>

      {/* Links List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
           <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground">Active Connections ({links.length})</h4>
           <div className="h-px flex-1 bg-foreground/5 mx-4" />
        </div>

        {links.length === 0 ? (
          <div className="text-center py-16 px-4 bg-secondary/20 rounded-[32px] border-2 border-dashed border-foreground/5 animate-fade-in">
             <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center mx-auto mb-4 text-muted-foreground/30">
                <LinkIcon className="h-6 w-6" />
             </div>
             <p className="text-muted-foreground font-bold text-sm tracking-tight italic">No links added to your ecosystem yet.</p>
          </div>
        ) : (
          <div className="grid gap-3">
            {links.map((link) => (
              <div 
                key={link.id} 
                className="flex items-center gap-4 p-5 bg-card border border-foreground/5 rounded-[24px] hover:border-primary/40 hover:shadow-premium transition-premium group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="text-muted-foreground cursor-grab active:cursor-grabbing hover:text-primary transition-colors">
                  <GripVertical className="h-4 w-4" />
                </div>
                
                <div className="w-12 h-12 bg-secondary/50 rounded-xl flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-premium">
                   <Globe className="h-5 w-5 opacity-60 group-hover:opacity-100" />
                </div>

                <div className="flex-1 min-w-0">
                  <h5 className="font-black text-sm tracking-tight text-foreground">{link.title}</h5>
                  <p className="text-[11px] font-medium text-muted-foreground truncate opacity-70">{link.url}</p>
                </div>
                
                <button 
                  onClick={() => deleteLink(link.id)}
                  className="w-9 h-9 flex items-center justify-center rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-premium sm:opacity-0 group-hover:opacity-100"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
