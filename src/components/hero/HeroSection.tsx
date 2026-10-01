import React, { useState } from 'react';
import { TopoBackground } from '../ui/TopoBackground';
import { Hero3DCanvas } from '../3d/Hero3DCanvas';
import { Search, Compass, Sparkles, MapPin, ArrowDown, Trees, Mountain, Tent, Utensils, Feather, Flame, ShieldAlert } from 'lucide-react';

interface HeroProps {
  onSelectCategoryFilter: (category: string) => void;
  onOpenSearch: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onSelectCategoryFilter, onOpenSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filterPills = [
    { id: 'all', label: 'All Destinations', icon: Compass },
    { id: 'village', label: 'Hidden Villages', icon: Trees },
    { id: 'trek', label: 'Mountain Trails', icon: Mountain },
    { id: 'festival', label: 'Living Festivals', icon: Flame },
    { id: 'homestay', label: 'Local Homestays', icon: Tent },
    { id: 'food', label: 'Indigenous Food', icon: Utensils },
    { id: 'culture', label: 'Tribal Culture', icon: Feather }
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden'>
      {/* 3D Living Himalayan Mountain Range & Nature Mist System */}
      <div className='absolute inset-0 z-0'>
        {/* Soft mountain silhouette base layer */}
        <img
          src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85'
          alt='Arunachal Pradesh Misty Mountains and Valleys'
          className='w-full h-full object-cover object-center opacity-30 mix-blend-luminosity'
        />
        {/* Three.js 3D Interactive Mountain & Atmosphere Canvas */}
        <Hero3DCanvas />
        {/* Multi-layered atmospheric fog and forest-deep vignettes */}
        <div className='absolute inset-0 bg-gradient-to-t from-[#07131D] via-[#07131D]/45 to-transparent pointer-events-none' />
        <div className='absolute inset-0 bg-gradient-to-r from-[#07131D]/90 via-[#07131D]/50 to-transparent pointer-events-none' />
        <TopoBackground opacity={0.06} />
      </div>

      {/* Hero Content Container */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center'>
        <div className='max-w-3xl space-y-6 pt-8'>
          {/* Editorial tag */}
          <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A93C]/15 border border-[#E5A93C]/30 backdrop-blur-md'>
            <span className='w-1.5 h-1.5 rounded-full bg-[#E5A93C] animate-ping' />
            <span className='font-mono text-[11px] uppercase tracking-[0.2em] text-[#F3BA54] font-semibold'>
              Community-Led Responsible Tourism
            </span>
          </div>

          {/* Main Headline */}
          <h1 className='font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.08]'>
            There is another Arunachal waiting <span className='italic font-normal text-[#F3BA54] underline decoration-[#E5A93C]/40 decoration-1 underline-offset-8'>beyond</span> the tourist trail.
          </h1>

          {/* Subheading */}
          <p className='text-base sm:text-lg text-[#EEF3F0]/80 font-light leading-relaxed max-w-2xl'>
            Discover forgotten villages, ancient oral stories, living festivals, mountain trails, and cultural experiences led by the 26 indigenous tribes who call Arunachal home.
          </p>

          {/* CTA Buttons */}
          <div className='pt-2 flex flex-wrap items-center gap-4'>
            <button
              onClick={() => scrollTo('interactive-map')}
              className='px-7 py-3.5 rounded-full bg-gradient-to-r from-[#E5A93C] to-[#C2593F] text-[#07131D] font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#E5A93C]/20 hover:scale-[1.02] hover:shadow-[#E5A93C]/35 transition-all flex items-center gap-2 group'
            >
              <Compass className='w-4 h-4 group-hover:rotate-45 transition-transform' />
              <span>Explore Hidden Arunachal</span>
            </button>
            <button
              onClick={() => scrollTo('ai-planner')}
              className='px-7 py-3.5 rounded-full glass-panel hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-widest border border-white/20 transition-all flex items-center gap-2 group'
            >
              <Sparkles className='w-4 h-4 text-[#E5A93C]' />
              <span>Plan My Journey</span>
            </button>
          </div>
        </div>

        {/* Integrated Discovery Bar */}
        <div className='mt-14 max-w-4xl'>
          <div className='glass-panel-warm p-2 sm:p-2.5 rounded-2xl sm:rounded-full shadow-2xl border border-[#E5A93C]/30 flex flex-col sm:flex-row items-center gap-2'>
            <div className='flex items-center gap-3 px-4 py-2 w-full flex-1'>
              <Search className='w-5 h-5 text-[#E5A93C] flex-shrink-0' />
              <input
                type='text'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    onOpenSearch();
                  }
                }}
                placeholder='What do you want to discover? (e.g. Mechuka, Apatani, bamboo, March festival...)'
                className='w-full bg-transparent border-none outline-none text-sm text-white placeholder-gray-400 font-sans'
              />
            </div>
            <button
              onClick={onOpenSearch}
              className='w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#E5A93C] text-[#07131D] text-xs font-bold uppercase tracking-wider hover:bg-[#F3BA54] transition-colors flex items-center justify-center gap-1.5 flex-shrink-0'
            >
              <span>Discover</span>
            </button>
          </div>

          {/* Filter Pills */}
          <div className='mt-4 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar'>
            {filterPills.map(pill => {
              const Icon = pill.icon;
              return (
                <button
                  key={pill.id}
                  onClick={() => {
                    onSelectCategoryFilter(pill.id);
                    scrollTo('interactive-map');
                  }}
                  className='px-3.5 py-1.5 rounded-full glass-panel hover:bg-white/10 text-xs text-[#EEF3F0]/90 border border-white/10 hover:border-[#E5A93C]/40 flex items-center gap-1.5 flex-shrink-0 transition-all'
                >
                  <Icon className='w-3.5 h-3.5 text-[#E5A93C]' />
                  <span>{pill.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='relative z-10 flex justify-center pt-6'>
        <button
          onClick={() => scrollTo('interactive-map')}
          className='flex flex-col items-center gap-1 text-[11px] font-mono text-gray-400 hover:text-white transition-colors group'
        >
          <span>Enter The Living Map</span>
          <ArrowDown className='w-4 h-4 text-[#E5A93C] group-hover:translate-y-1 transition-transform animate-bounce' />
        </button>
      </div>
    </section>
  );
};