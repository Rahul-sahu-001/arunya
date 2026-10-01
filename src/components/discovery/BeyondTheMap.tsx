import React, { useRef } from 'react';
import { DESTINATIONS } from '../../data/destinations';
import { Destination } from '../../types';
import { useJournal } from '../../context/JournalContext';
import { Card3DTilt } from '../3d/Card3DTilt';
import { Mountain, MapPin, ChevronLeft, ChevronRight, Bookmark, ArrowRight } from 'lucide-react';

export const BeyondTheMap: React.FC<{ onSelectDestination: (d: Destination) => void }> = ({ onSelectDestination }) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const { isSavedDestination, toggleSaveDestination } = useJournal();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id='beyond-the-map' className='py-24 bg-[#050E16] text-[#EEF3F0] relative overflow-hidden border-t border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */} 
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6'>
          <div>
            <span className='font-mono text-xs uppercase tracking-[0.25em] text-[#E5A93C] font-semibold block mb-2'>
              BEYOND THE MAP
            </span>
            <h2 className='font-serif text-3xl sm:text-5xl font-light text-white leading-tight'>
              Places you won't find on the average itinerary.
            </h2>
            <p className='text-sm text-[#98A7A0] max-w-xl mt-2 font-light'>
              Remote high valleys, living tribal citadels, and sacred frontier confluences where ancient rhythms continue undisturbed.
            </p>
          </div>

          {/* Slider controls */}
          <div className='flex items-center gap-2'>
            <button
              onClick={() => scroll('left')}
              className='p-3 rounded-full glass-panel hover:bg-white/15 border border-white/15 text-white transition-colors'
              title='Previous'
            >
              <ChevronLeft className='w-5 h-5' />
            </button>
            <button
              onClick={() => scroll('right')}
              className='p-3 rounded-full glass-panel hover:bg-white/15 border border-white/15 text-white transition-colors'
              title='Next'
            >
              <ChevronRight className='w-5 h-5' />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Cards Showcase */}
        <div
          ref={scrollContainerRef}
          className='flex items-stretch gap-6 overflow-x-auto pb-6 no-scrollbar scroll-smooth snap-x snap-mandatory'
        >
          {DESTINATIONS.map(dest => {
            const isSaved = isSavedDestination(dest.id);
            return (
              <Card3DTilt
                key={dest.id}
                className='w-[340px] sm:w-[400px] flex-shrink-0 snap-start rounded-3xl bg-[#091824] border border-white/15 overflow-hidden group hover:border-[#E5A93C]/50 transition-all duration-500 flex flex-col justify-between shadow-2xl relative'
              >
                {/* Image Container with Zoom */}
                <div className='relative h-64 sm:h-72 overflow-hidden'>
                  <img
                    src={dest.images[0]}
                    alt={dest.name}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-[#091824] via-black/20 to-transparent' />

                  {/* Top Badges */}
                  <div className='absolute top-4 left-4 right-4 flex items-center justify-between z-10'>
                    <span className='px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono text-[#E5A93C] border border-white/15'>
                      {dest.district}
                    </span>
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        toggleSaveDestination(dest.id);
                      }}
                      className='p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/15 hover:bg-black/80 transition-colors'
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'text-[#E5A93C] fill-[#E5A93C]' : 'text-white'}`} />
                    </button>
                  </div>

                  {/* Altitude & Coordinates on hover */}
                  <div className='absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-gray-300'>
                    <span className='flex items-center gap-1'>
                      <Mountain className='w-3.5 h-3.5 text-[#E5A93C]' /> {dest.altitude}
                    </span>
                    <span className='text-gray-400 opacity-80 group-hover:opacity-100 transition-opacity'>
                      {dest.coordinates.lat.toFixed(2)}°N, {dest.coordinates.lng.toFixed(2)}°E
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className='p-6 space-y-4 flex-1 flex flex-col justify-between'>
                  <div className='space-y-2'>
                    <div className='font-mono text-[10px] text-[#F3BA54] uppercase tracking-wider'>
                      Custodians: {dest.community}
                    </div>
                    <h3 className='font-serif text-2xl font-light text-white group-hover:text-[#F3BA54] transition-colors'>
                      {dest.name}
                    </h3>
                    <p className='text-xs text-[#98A7A0] leading-relaxed line-clamp-2 font-light'>
                      {dest.whySpecial}
                    </p>
                  </div>

                  {/* Tags & Action Button */}
                  <div className='pt-2 border-t border-white/10 flex items-center justify-between gap-2'>
                    <div className='flex items-center gap-1.5 flex-wrap'>
                      {dest.tags.slice(0, 2).map((t, i) => (
                        <span key={i} className='px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-gray-300 font-mono'>
                          {t}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => onSelectDestination(dest)}
                      className='text-xs font-bold text-[#E5A93C] hover:text-[#F3BA54] flex items-center gap-1 group/btn'
                    >
                      <span>Dossier</span>
                      <ArrowRight className='w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform' />
                    </button>
                  </div>
                </div>
              </Card3DTilt>
            );
          })}
        </div>
      </div>
    </section>
  );
};