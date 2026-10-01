import React, { useState, useMemo } from 'react';
import { useJournal } from '../../context/JournalContext';
import { DESTINATIONS } from '../../data/destinations';
import { STORIES } from '../../data/stories';
import { FESTIVALS } from '../../data/festivals';
import { HOMESTAYS } from '../../data/homestays';
import { LOCAL_DISHES } from '../../data/foods';
import { Search, X, MapPin, BookOpen, Flame, Tent, Utensils, ArrowRight } from 'lucide-react';

export const GlobalSearchModal: React.FC<{ onSelectDestination: (dest: any) => void }> = ({ onSelectDestination }) => {
  const { isSearchOpen, setIsSearchOpen } = useJournal();
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { destinations: [], stories: [], festivals: [], homestays: [], foods: [] };

    return {
      destinations: DESTINATIONS.filter(d =>
        d.name.toLowerCase().includes(q) ||
        d.district.toLowerCase().includes(q) ||
        d.community.toLowerCase().includes(q) ||
        d.tags.some(t => t.toLowerCase().includes(q))
      ),
      stories: STORIES.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.community.toLowerCase().includes(q) ||
        s.village.toLowerCase().includes(q)
      ),
      festivals: FESTIVALS.filter(f =>
        f.name.toLowerCase().includes(q) ||
        f.monthName.toLowerCase().includes(q) ||
        f.community.toLowerCase().includes(q)
      ),
      homestays: HOMESTAYS.filter(h =>
        h.name.toLowerCase().includes(q) ||
        h.village.toLowerCase().includes(q) ||
        h.community.toLowerCase().includes(q)
      ),
      foods: LOCAL_DISHES.filter(d =>
        d.name.toLowerCase().includes(q) ||
        d.community.toLowerCase().includes(q) ||
        d.ingredients.some(i => i.toLowerCase().includes(q))
      )
    };
  }, [query]);

  if (!isSearchOpen) return null;

  const hasAnyResults =
    results.destinations.length > 0 ||
    results.stories.length > 0 ||
    results.festivals.length > 0 ||
    results.homestays.length > 0 ||
    results.foods.length > 0;

  return (
    <div className='fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center p-4 pt-16 sm:pt-24 animate-fade-in'>
      <div className='relative w-full max-w-2xl bg-[#091824] rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[80vh] flex flex-col'>
        {/* Search Bar Input */}
        <div className='flex items-center gap-3 pb-4 border-b border-white/10'>
          <Search className='w-5 h-5 text-[#E5A93C]' />
          <input
            type='text'
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder='Type natural search (e.g. “quiet village”, “March festival”, “Apatani”, “smoked tea”)...'
            className='w-full bg-transparent border-none outline-none text-base text-white placeholder-gray-400 font-sans'
          />
          <button onClick={() => setIsSearchOpen(false)} className='p-1 text-gray-400 hover:text-white'>
            <X className='w-5 h-5' />
          </button>
        </div>

        {/* Results Stream */}
        <div className='overflow-y-auto no-scrollbar space-y-6 flex-1 pr-2'>
          {!query.trim() && (
            <div className='text-xs text-gray-400 space-y-2 font-mono'>
              <span className='text-[#E5A93C] uppercase block font-semibold'>Popular Explorations:</span>
              <div className='flex flex-wrap gap-2'>
                {['Mechuka', 'Apatani bamboo', 'Seven Lakes', 'Losar in February', 'Thembang Dzong', 'Singpho tea'].map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className='px-3 py-1 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 transition-colors'
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Destinations matches */}
          {results.destinations.length > 0 && (
            <div className='space-y-2'>
              <span className='font-mono text-[10px] text-[#E5A93C] uppercase font-bold flex items-center gap-1.5'>
                <MapPin className='w-3.5 h-3.5' /> Destinations & Villages ({results.destinations.length})
              </span>
              <div className='space-y-1.5'>
                {results.destinations.map(d => (
                  <div
                    key={d.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      onSelectDestination(d);
                    }}
                    className='p-3 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-between cursor-pointer group transition-colors'
                  >
                    <div>
                      <h5 className='font-serif text-base text-white group-hover:text-[#F3BA54]'>{d.name}</h5>
                      <p className='text-[11px] text-gray-400 font-mono'>{d.district} • {d.community} Tribe • {d.altitude}</p>
                    </div>
                    <ArrowRight className='w-4 h-4 text-gray-400 group-hover:text-[#E5A93C] transition-colors' />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stories matches */}
          {results.stories.length > 0 && (
            <div className='space-y-2'>
              <span className='font-mono text-[10px] text-[#C2593F] uppercase font-bold flex items-center gap-1.5'>
                <BookOpen className='w-3.5 h-3.5' /> Mountain Folklore & Stories ({results.stories.length})
              </span>
              <div className='space-y-1.5'>
                {results.stories.map(s => (
                  <div key={s.id} className='p-3 rounded-xl bg-white/5 text-xs text-gray-300'>
                    <div className='font-serif text-white font-medium text-sm'>{s.title}</div>
                    <div className='text-[11px] text-gray-400 font-mono'>Storyteller: {s.storyteller} ({s.village})</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Festivals matches */}
          {results.festivals.length > 0 && (
            <div className='space-y-2'>
              <span className='font-mono text-[10px] text-[#F3BA54] uppercase font-bold flex items-center gap-1.5'>
                <Flame className='w-3.5 h-3.5' /> Living Festivals ({results.festivals.length})
              </span>
              <div className='space-y-1.5'>
                {results.festivals.map(f => (
                  <div key={f.id} className='p-3 rounded-xl bg-white/5 flex items-center justify-between text-xs'>
                    <div>
                      <div className='font-serif text-white font-medium text-sm'>{f.name}</div>
                      <div className='text-[11px] text-gray-400 font-mono'>{f.monthName} • {f.community} Community</div>
                    </div>
                    <span className='px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono'>{f.status}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {query && !hasAnyResults && (
            <div className='text-center py-8 text-gray-400 text-xs font-light'>
              No matches found for “{query}”. Try searching for a tribe name like “Monpa” or a valley like “Mechuka”.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};