import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import { PublicProfile } from '@/components/public/PublicProfile';
import { Metadata } from 'next';
import { DEMO_USER, DEMO_PROFILE, DEMO_LINKS } from '@/lib/demo_data';

interface Props {
  params: Promise<{ username: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  return {
    title: `${username} | CryptoLink Bio`,
    description: `Connect with ${username} and send crypto payments.`,
  };
}

export default async function UserProfilePage({ params }: Props) {
  const { username } = await params;
  const supabase = await createClient();

  if (!supabase || username === 'demo') {
    return (
      <PublicProfile 
        user={DEMO_USER} 
        profile={DEMO_PROFILE} 
        links={DEMO_LINKS} 
      />
    );
  }

  // Fetch user by username
  const { data: userData, error: userError } = await supabase
    .from('users')
    .select('*')
    .eq('username', username)
    .single();

  if (userError || !userData) {
    notFound();
  }

  // Fetch profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', userData.id)
    .single();

  // Fetch links
  const { data: links } = await supabase
    .from('links')
    .select('*')
    .eq('user_id', userData.id)
    .order('order_index', { ascending: true });

  return (
    <PublicProfile 
      user={userData} 
      profile={profile} 
      links={links || []} 
    />
  );
}
