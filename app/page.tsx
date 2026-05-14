'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Loader2, User, ExternalLink, Activity, Users, Shield, ShieldAlert, BadgeCheck } from 'lucide-react';

interface ProfileData {
  username: string;
  fullName: string;
  biography: string;
  profilePicBase64: string;
  postsCount: number;
  followedCount: number;
  followCount: number;
  isVerified: boolean;
  isPrivate: boolean;
}

export default function Home() {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [profile, setProfile] = useState<ProfileData | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    // Bersihkan prefix @ jika user memasukkannya
    const cleanUsername = username.replace(/^@/, '').trim();
    
    setIsLoading(true);
    setError(null);
    setProfile(null);

    try {
      const res = await fetch(`/api/scrape?username=${encodeURIComponent(cleanUsername)}`);
      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || 'Profil tidak ditemukan.');
      }

      setProfile(data.profile);
    } catch (err: any) {
      setError(err.message || 'Terjadi kesalahan saat mengambil data.');
    } finally {
      setIsLoading(false);
    }
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('id-ID', { notation: "compact", compactDisplay: "short" }).format(num);
  };

  return (
    <div className="flex flex-col items-center flex-grow w-full max-w-4xl px-4 py-12 mx-auto sm:px-6">
      
      {/* Hero Section */}
      <div className="w-full max-w-2xl text-center mb-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium border rounded-full text-stone-300 border-[#333333] bg-[#222222]"
        >
          <span className="w-2 h-2 rounded-full bg-[#F5F5DC] animate-pulse"></span>
          Live Search Instagram Profile
        </motion.div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl text-[#F5F5DC]">
          Intip Profil Instagram
        </h1>
        <p className="text-lg text-stone-400">
          Stalking profil publik Instagram dengan mudah. Dapatkan statistik follower, bio, dan foto profil HD secara gratis. 
          <br className="hidden md:block"/>Dikembangkan oleh <strong className="text-stone-200">SANN404 FORUM</strong>.
        </p>
      </div>

      {/* Search Input */}
      <div className="w-full max-w-xl mb-12">
        <form onSubmit={handleSearch} className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <span className="text-xl font-medium text-stone-500">@</span>
          </div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full p-4 pl-10 pr-16 text-lg transition-all border rounded-2xl bg-[#121212] border-[#333333] text-[#F5F5DC] placeholder-stone-500 focus:ring-2 focus:ring-[#F5F5DC]/20 focus:border-[#F5F5DC] outline-none shadow-sm"
            placeholder="username"
            disabled={isLoading}
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="absolute inset-y-0 right-2 my-2 items-center flex justify-center px-4 font-medium text-[#1A1A1A] transition-colors rounded-xl bg-[#F5F5DC] hover:bg-white disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
          </button>
        </form>
      </div>

      {/* Error Message */}
      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-2xl p-4 mb-8 text-red-200 border rounded-xl bg-red-950/20 border-red-900/50"
          >
            <div className="flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-red-500 flex-shrink-0" />
              <p>{error}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Result Card */}
      <AnimatePresence mode="wait">
        {profile && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-2xl overflow-hidden border shadow-xl rounded-3xl bg-[#1A1A1A] border-[#333333]"
          >
            {/* Cover / Header Card */}
            <div className="h-32 bg-gradient-to-r from-[#2A2A2A] to-[#121212] relative">
              {profile.isPrivate && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-yellow-500 border border-yellow-500/30 rounded-full bg-yellow-500/10 backdrop-blur-sm">
                  <Shield className="w-3.5 h-3.5" /> Private
                </div>
              )}
            </div>

            <div className="px-6 pb-8 md:px-8">
              {/* Profile Picture */}
              <div className="flex items-end justify-between -mt-16 mb-4">
                <div className="relative p-1.5 rounded-full bg-[#1A1A1A]">
                  <div className="w-28 h-28 md:w-32 md:h-32 overflow-hidden rounded-full border border-[#333333] bg-[#222]">
                    {profile.profilePicBase64 ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img 
                        src={profile.profilePicBase64} 
                        alt={`@${profile.username} profile`}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-stone-600">
                        <User className="w-12 h-12" />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mb-2">
                  <a
                    href={`https://instagram.com/${profile.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-xl text-stone-300 border-[#333333] hover:text-[#F5F5DC] hover:bg-[#2A2A2A]"
                  >
                    View on IG <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Info Container */}
              <div className="mt-2 text-left">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold text-[#F5F5DC] break-words">
                    {profile.fullName || profile.username}
                  </h2>
                  {profile.isVerified && (
                    <BadgeCheck className="w-6 h-6 text-blue-400 fill-blue-400/20" />
                  )}
                </div>
                <p className="text-lg text-stone-400">@{profile.username}</p>
                
                {profile.biography && (
                  <div className="mt-4 text-stone-300 whitespace-pre-wrap leading-relaxed text-[15px] p-4 bg-[#222222] border border-[#333333] rounded-2xl">
                    {profile.biography}
                  </div>
                )}

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-[#333333]">
                  <div className="flex flex-col items-center justify-center p-3 text-center rounded-2xl bg-[#0A0A0A] border border-[#2A2A2A]">
                    <Activity className="w-5 h-5 mb-2 text-stone-500" />
                    <span className="text-xl font-bold text-[#F5F5DC]">{formatNumber(profile.postsCount)}</span>
                    <span className="text-xs font-medium uppercase tracking-wider text-stone-500 mt-0.5">Posts</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 text-center rounded-2xl bg-[#0A0A0A] border border-[#2A2A2A]">
                    <Users className="w-5 h-5 mb-2 text-stone-500" />
                    <span className="text-xl font-bold text-[#F5F5DC]">{formatNumber(profile.followedCount)}</span>
                    <span className="text-xs font-medium uppercase tracking-wider text-stone-500 mt-0.5">Followers</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 text-center rounded-2xl bg-[#0A0A0A] border border-[#2A2A2A]">
                    <Users className="w-5 h-5 mb-2 text-stone-500" />
                    <span className="text-xl font-bold text-[#F5F5DC]">{formatNumber(profile.followCount)}</span>
                    <span className="text-xs font-medium uppercase tracking-wider text-stone-500 mt-0.5">Following</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Needed to wrap AnimatePresence safely below Next.js 15 constraints if any,
// but we can just use AnimatePresence locally since it's a client component.
import { AnimatePresence as FramerAnimatePresence } from 'motion/react';
const AnimatePresence = FramerAnimatePresence;
