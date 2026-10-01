import React, { useState, useEffect } from 'react';
import { useJournal } from '../../context/JournalContext';
import { useAudio } from '../../context/AudioContext';
import { Search, Compass, BookOpen, Volume2, Bookmark, Menu, X, Sparkles, MapPin } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { savedDestinations, setIsJournalOpen, setIsSearchOpen } = useJournal();
  const { isAmbientPlaying, toggleAmbient } = useAudio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07131D]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-[#07131D]/90 via-[#07131D]/50 to-transparent py-5'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between'>
        <a href='#' className='flex items-center gap-3 group'>
          <div className='w-9 h-9 rounded-xl bg-gradient-to-br from-[#E5A93C] to-[#C2593F] flex items-center justify-center shadow-lg shadow-[#E5A93C]/20 border border-[#F3BA54]/40 group-hover:scale-105 transition-transform'>
            <span className='font-serif text-lg font-bold text-[#07131D]'>A</span>
          </div>
          <div>
            <span className='font-display tracking-widest text-xl font-bold text-[#EEF3F0] block leading-none'>
              ARUNYA
            </span>
            <span className='font-mono text-[9px] uppercase tracking-[0.22em] text-[#E5A93C] block mt-0.5'>
              Beyond The Map
            </span>
          </div>
        </a>

        <nav className='hidden lg:flex items-center gap-7 text-xs font-medium text-[#98A7A0]'>
          <button onClick={() => scrollToSection('interactive-map')} className='hover:text-[#EEF3F0] transition-colors flex items-center gap-1'>
            <MapPin className='w-3.5 h-3.5 text-[#E5A93C]' /> Living Map
          </button>
          <button onClick={() => scrollToSection('beyond-the-map')} className='hover:text-[#EEF3F0] transition-colors'>
            Beyond The Map
          </button>
          <button onClick={() => scrollToSection('districts-explorer')} className='hover:text-[#EEF3F0] transition-colors'>
            Districts
          </button>
          <button onClick={() => scrollToSection('stories-archive')} className='hover:text-[#EEF3F0] transition-colors flex items-center gap-1'>
            <BookOpen className='w-3.5 h-3.5 text-[#C2593F]' /> Mountain Stories
          </button>
          <button onClick={() => scrollToSection('festival-calendar')} className='hover:text-[#EEF3F0] transition-colors'>
            Festivals
          </button>
          <button onClick={() => scrollToSection('travel-routes')} className='hover:text-[#EEF3F0] transition-colors'>
            Journeys
          </button>
          <button onClick={() => scrollToSection('community-homestays')} className='hover:text-[#EEF3F0] transition-colors'>
            Homestays
          </button>
          <button onClick={() => scrollToSection('impact-dashboard')} className='hover:text-[#EEF3F0] transition-colors text-[#F3BA54] font-semibold'>
            Impact
          </button>
        </nav>

        <div className='flex items-center gap-3'>
          <button
            onClick={() => setIsSearchOpen(true)}
            className='flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-[#98A7A0] hover:text-[#EEF3F0] transition-colors'
            title='Search villages, festivals, food, routes (Ctrl+K)'
          >
            <Search className='w-3.5 h-3.5 text-[#E5A93C]' />
            <span className='hidden sm:inline font-mono text-[11px]'>Search</span>
            <kbd className='hidden sm:inline bg-black/40 px-1.5 py-0.5 rounded text-[9px] font-mono border border-white/10 text-gray-400'>⌘K</kbd>
          </button>

          <button
            onClick={() => toggleAmbient()}
            className={`p-2 rounded-full border transition-all ${
              isAmbientPlaying
                ? 'bg-[#E5A93C]/20 border-[#E5A93C] text-[#F3BA54]'
                : 'bg-white/5 border-white/10 text-[#98A7A0] hover:text-[#EEF3F0]'
            }`}
            title={isAmbientPlaying ? 'Soundscape Active' : 'Enable Mountain Sounds'}
          >
            <Volume2 className='w-4 h-4' />
          </button>

          <button
            onClick={() => setIsJournalOpen(true)}
            className='relative p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[#98A7A0] hover:text-[#EEF3F0] transition-colors'
            title='Open Travel Journal & Saved Destinations'
          >
            <Bookmark className='w-4 h-4 text-[#E5A93C]' />
            {savedDestinations.length > 0 && (
              <span className='absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C2593F] text-white text-[10px] font-mono flex items-center justify-center font-bold'>
                {savedDestinations.length}
              </span>
            )}
          </button>

          <button
            onClick={() => scrollToSection('ai-planner')}
            className='hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#E5A93C] to-[#C2593F] text-[#07131D] text-xs font-bold shadow-lg shadow-[#E5A93C]/20 hover:brightness-110 transition-all'
          >
            <Sparkles className='w-3.5 h-3.5' />
            <span>Plan Trip</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='lg:hidden p-2 text-gray-300 hover:text-white'
          >
            {mobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className='lg:hidden bg-[#07131D]/98 border-b border-white/10 px-6 py-6 space-y-4'>
          <div className='grid grid-cols-2 gap-3 text-sm'>
            <button onClick={() => scrollToSection('interactive-map')} className='text-left py-2 text-gray-300 hover:text-[#E5A93C] flex items-center gap-2'>
              <MapPin className='w-4 h-4 text-[#E5A93C]' /> Living Map
            </button>
            <button onClick={() => scrollToSection('beyond-the-map')} className='text-left py-2 text-gray-300 hover:text-[#E5A93C]'>
              Beyond The Map
            </button>
            <button onClick={() => scrollToSection('districts-explorer')} className='text-left py-2 text-gray-300 hover:text-[#E5A93C]'>
              Districts
            </button>
            <button onClick={() => scrollToSection('stories-archive')} className='text-left py-2 text-gray-300 hover:text-[#E5A93C] flex items-center gap-2'>
              <BookOpen className='w-4 h-4 text-[#C2593F]' /> Stories
            </button>
            <button onClick={() => scrollToSection('festival-calendar')} className='text-left py-2 text-gray-300 hover:text-[#E5A93C]'>
              Festivals
            </button>
            <button onClick={() => scrollToSection('travel-routes')} className='text-left py-2 text-gray-300 hover:text-[#E5A93C]'>
              Journeys
            </button>
            <button onClick={() => scrollToSection('community-homestays')} className='text-left py-2 text-gray-300 hover:text-[#E5A93C]'>
              Homestays
            </button>
            <button onClick={() => scrollToSection('impact-dashboard')} className='text-left py-2 text-[#F3BA54] font-semibold'>
              Community Impact
            </button>
          </div>
          <div className='pt-4 border-t border-white/10 flex gap-3'>
            <button
              onClick={() => { setMobileMenuOpen(false); setIsSearchOpen(true); }}
              className='flex-1 py-2.5 rounded-xl bg-white/10 text-center text-xs font-medium text-white flex items-center justify-center gap-2'
            >
              <Search className='w-4 h-4 text-[#E5A93C]' /> Search
            </button>
            <button
              onClick={() => scrollToSection('ai-planner')}
              className='flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#E5A93C] to-[#C2593F] text-center text-xs font-bold text-[#07131D] flex items-center justify-center gap-2'
            >
              <Sparkles className='w-4 h-4' /> Plan My Journey
            </button>
          </div>
        </div>
      )}
    </header>
  );
};