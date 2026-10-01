import React from 'react';
import { Compass, Sparkles, ArrowRight } from 'lucide-react';

export const FinalCTA: React.FC<{ onExploreMap: () => void; onStartPlan: () => void }> = ({ onExploreMap, onStartPlan }) => {
  return (
    <section className='relative py-32 bg-[#050E16] text-[#EEF3F0] overflow-hidden border-t border-white/10'>
      <div className='absolute inset-0 z-0'>
        <img
          src='https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=80'
          alt='Arunachal Eastern Himalayas Mountain Horizon'
          className='w-full h-full object-cover opacity-30 scale-105'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#050E16] via-[#050E16]/80 to-[#050E16]' />
      </div>

      <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6'>
        <span className='font-mono text-xs uppercase tracking-[0.25em] text-[#E5A93C] font-semibold block'>
          YOUR CALLING TO THE MOUNTAINS
        </span>
        <h2 className='font-serif text-4xl sm:text-6xl text-white font-light leading-tight'>
          The best journeys aren't always the ones on the map.
        </h2>
        <p className='font-serif italic text-lg sm:text-2xl text-[#E8DCC9] max-w-2xl mx-auto'>
          “Go where the road gets quieter. Stay where the stories get louder.”
        </p>
        <div className='pt-6 flex flex-wrap items-center justify-center gap-4'>
          <button
            onClick={onStartPlan}
            className='px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E5A93C] to-[#C2593F] text-[#07131D] font-bold text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-all flex items-center gap-2'
          >
            <Sparkles className='w-4 h-4' />
            <span>Start Discovering</span>
          </button>
          <button
            onClick={onExploreMap}
            className='px-8 py-3.5 rounded-full glass-panel hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-widest border border-white/20 transition-all flex items-center gap-2'
          >
            <Compass className='w-4 h-4 text-[#E5A93C]' />
            <span>Explore The Map</span>
          </button>
        </div>
      </div>
    </section>
  );
};