import React from 'react';
import { useJournal } from '../../context/JournalContext';
import { Compass, MapPin, BookOpen, Sparkles, Bookmark } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const { savedDestinations, setIsJournalOpen } = useJournal();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#07131D]/90 backdrop-blur-xl border-t border-white/10 px-4 py-2 flex items-center justify-around'>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='flex flex-col items-center text-gray-400 hover:text-white'>
        <Compass className='w-4 h-4' />
        <span className='text-[10px] mt-1'>Explore</span>
      </button>
      <button onClick={() => scrollTo('interactive-map')} className='flex flex-col items-center text-gray-400 hover:text-[#E5A93C]'>
        <MapPin className='w-4 h-4' />
        <span className='text-[10px] mt-1'>Map</span>
      </button>
      <button onClick={() => scrollTo('stories-archive')} className='flex flex-col items-center text-gray-400 hover:text-white'>
        <BookOpen className='w-4 h-4' />
        <span className='text-[10px] mt-1'>Stories</span>
      </button>
      <button onClick={() => scrollTo('ai-planner')} className='flex flex-col items-center text-[#E5A93C] font-semibold'>
        <Sparkles className='w-4 h-4' />
        <span className='text-[10px] mt-1'>Planner</span>
      </button>
      <button onClick={() => setIsJournalOpen(true)} className='relative flex flex-col items-center text-gray-400 hover:text-white'>
        <Bookmark className='w-4 h-4 text-[#C2593F]' />
        <span className='text-[10px] mt-1'>Saved</span>
        {savedDestinations.length > 0 && (
          <span className='absolute -top-1 right-2 w-3.5 h-3.5 rounded-full bg-[#E5A93C] text-[#07131D] text-[9px] font-bold flex items-center justify-center'>
            {savedDestinations.length}
          </span>
        )}
      </button>
    </div>
  );
};