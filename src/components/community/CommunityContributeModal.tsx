import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Sparkles, X, Send } from 'lucide-react';

export const CommunityContributeModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [category, setCategory] = useState('Hidden Village');
  const [title, setTitle] = useState('');
  const [district, setDistrict] = useState('Shi-Yomi');
  const [story, setStory] = useState('');
  const [contributorName, setContributorName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className='fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in'>
      <div className='relative w-full max-w-lg bg-[#091824] rounded-3xl border border-white/20 p-6 sm:p-8 space-y-6 shadow-2xl'>
        <button onClick={onClose} className='absolute top-6 right-6 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white'>
          <X className='w-5 h-5' />
        </button>

        <div>
          <span className='font-mono text-xs uppercase tracking-widest text-[#E5A93C] font-semibold'>
            COMMUNITY ARCHIVIST
          </span>
          <h3 className='font-serif text-2xl sm:text-3xl text-white font-light mt-1'>
            Share an Underrated Spot or Oral Tale
          </h3>
          <p className='text-xs text-gray-400 font-light mt-1'>
            Are you from Arunachal or an indigenous community? Submit unlisted heritage villages, family homestays, or oral folklore to the archive.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className='space-y-4 text-xs font-light'>
            <div>
              <label className='font-mono text-[10px] text-[#F3BA54] uppercase block mb-1'>Contribution Category</label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                className='w-full p-2.5 rounded-xl bg-black/40 border border-white/10 text-white font-sans outline-none'
              >
                <option value='Hidden Village'>Hidden Village</option>
                <option value='Oral Story'>Oral Folklore / Legend</option>
                <option value='Community Homestay'>Community Homestay</option>
                <option value='Local Food Recipe'>Local Food Recipe</option>
                <option value='Artisan Profile'>Artisan / Weaver Profile</option>
              </select>
            </div>

            <div className='grid grid-cols-2 gap-3'>
              <div>
                <label className='font-mono text-[10px] text-gray-400 uppercase mb-1'>Name / Title</label>
                <input
                  type='text'
                  required
                  placeholder='e.g. Kaho Village'
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className='w-full p-2.5 rounded-xl bg-black/40 border border-white/10 text-white font-sans outline-none'
                />
              </div>
              <div>
                <label className='font-mono text-[10px] text-gray-400 uppercase mb-1'>District</label>
                <input
                  type='text'
                  required
                  placeholder='e.g. Anjaw'
                  value={district}
                  onChange={e => setDistrict(e.target.value)}
                  className='w-full p-2.5 rounded-xl bg-black/40 border border-white/10 text-white font-sans outline-none'
                />
              </div>
            </div>

            <div>
              <label className='font-mono text-[10px] text-gray-400 uppercase mb-1'>Story / Details</label>
              <textarea
                rows={3}
                required
                placeholder='Describe why this place or story matters, the local tribe, and how to visit respectfully...'
                value={story}
                onChange={e => setStory(e.target.value)}
                className='w-full p-2.5 rounded-xl bg-black/40 border border-white/10 text-white font-sans outline-none'
              />
            </div>

            <div>
              <label className='font-mono text-[10px] text-gray-400 uppercase mb-1'>Your Name & Village Clan</label>
              <input
                type='text'
                required
                placeholder='e.g. Tsering Monpa'
                value={contributorName}
                onChange={e => setContributorName(e.target.value)}
                className='w-full p-2.5 rounded-xl bg-black/40 border border-white/10 text-white font-sans outline-none'
              />
            </div>

            <button
              type='submit'
              className='w-full py-3 rounded-xl bg-gradient-to-r from-[#E5A93C] to-[#C2593F] text-[#07131D] text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2'
            >
              <Send className='w-4 h-4' /> Submit for Community Verification
            </button>
          </form>
        ) : (
          <div className='p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3 animate-fade-in'>
            <CheckCircle2 className='w-10 h-10 text-emerald-400 mx-auto' />
            <h4 className='font-serif text-2xl text-white'>Submission Received</h4>
            <p className='text-xs text-gray-300'>
              Thank you {contributorName}! Your submission for <strong>{title}</strong> will be reviewed by our local community moderation team before being published with a <strong>“Community Verified”</strong> badge.
            </p>
            <button onClick={onClose} className='px-6 py-2 rounded-xl bg-white/10 text-white text-xs'>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};