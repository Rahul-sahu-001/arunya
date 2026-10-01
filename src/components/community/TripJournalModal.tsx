import React, { useState } from 'react';
import { useJournal } from '../../context/JournalContext';
import { DESTINATIONS } from '../../data/destinations';
import { BookOpen, Bookmark, Trash2, Plus, X, MapPin, Calendar, Heart } from 'lucide-react';

export const TripJournalModal: React.FC = () => {
  const {
    isJournalOpen,
    setIsJournalOpen,
    savedDestinations,
    toggleSaveDestination,
    journalEntries,
    addJournalEntry,
    deleteJournalEntry
  } = useJournal();

  const [newTitle, setNewTitle] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newNotes, setNewNotes] = useState('');
  const [newMood, setNewMood] = useState('Peaceful');
  const [isAdding, setIsAdding] = useState(false);

  if (!isJournalOpen) return null;

  const savedDestList = DESTINATIONS.filter(d => savedDestinations.includes(d.id));

  const handleCreateEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newNotes.trim()) return;
    addJournalEntry({
      title: newTitle,
      location: newLocation || 'Arunachal Pradesh',
      notes: newNotes,
      mood: newMood,
      savedItemIds: []
    });
    setNewTitle('');
    setNewLocation('');
    setNewNotes('');
    setIsAdding(false);
  };

  return (
    <div className='fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in'>
      <div className='relative w-full max-w-2xl bg-[#091824] rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto no-scrollbar'>
        <div className='flex items-center justify-between pb-4 border-b border-white/10'>
          <div className='flex items-center gap-2.5'>
            <BookOpen className='w-5 h-5 text-[#E5A93C]' />
            <h3 className='font-serif text-2xl text-white font-normal'>My Mountain Travel Journal</h3>
          </div>
          <button onClick={() => setIsJournalOpen(false)} className='p-2 rounded-full bg-white/10 text-gray-300 hover:text-white'>
            <X className='w-5 h-5' />
          </button>
        </div>

        {/* Saved Destinations Wishlist */}
        <div className='space-y-3'>
          <div className='flex items-center justify-between text-xs font-mono text-[#F3BA54] uppercase'>
            <span>Bookmarked Sanctuaries ({savedDestList.length})</span>
          </div>
          {savedDestList.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
              {savedDestList.map(dest => (
                <div key={dest.id} className='p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3'>
                  <div className='overflow-hidden'>
                    <h5 className='font-serif text-base text-white truncate'>{dest.name}</h5>
                    <p className='text-[11px] text-gray-400 font-mono'>{dest.district} • {dest.altitude}</p>
                  </div>
                  <button
                    onClick={() => toggleSaveDestination(dest.id)}
                    className='p-1.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-white/5'
                    title='Remove bookmark'
                  >
                    <Trash2 className='w-4 h-4' />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className='text-xs text-gray-400 font-light italic'>No destinations bookmarked yet. Click the bookmark icon on any village card to save it here.</p>
          )}
        </div>

        {/* Personal Travel Notes / Diary Entries */}
        <div className='space-y-4 pt-4 border-t border-white/10'>
          <div className='flex items-center justify-between'>
            <span className='font-mono text-xs text-[#F3BA54] uppercase'>Personal Notes & Reflections ({journalEntries.length})</span>
            <button
              onClick={() => setIsAdding(!isAdding)}
              className='px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-xs text-white font-mono flex items-center gap-1.5 transition-colors'
            >
              <Plus className='w-3.5 h-3.5 text-[#E5A93C]' /> {isAdding ? 'Cancel' : 'New Note'}
            </button>
          </div>

          {/* New note form */}
          {isAdding && (
            <form onSubmit={handleCreateEntry} className='p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3 animate-fade-in'>
              <input
                type='text'
                placeholder='Title of reflection...'
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
                className='w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-sans text-xs outline-none focus:border-[#E5A93C]'
                required
              />
              <div className='grid grid-cols-2 gap-2'>
                <input
                  type='text'
                  placeholder='Location (e.g. Hong Village, Ziro)'
                  value={newLocation}
                  onChange={e => setNewLocation(e.target.value)}
                  className='p-2 rounded-xl bg-white/5 border border-white/10 text-white font-sans text-xs outline-none'
                />
                <input
                  type='text'
                  placeholder='Mood (e.g. Awe, Peaceful)'
                  value={newMood}
                  onChange={e => setNewMood(e.target.value)}
                  className='p-2 rounded-xl bg-white/5 border border-white/10 text-white font-sans text-xs outline-none'
                />
              </div>
              <textarea
                rows={3}
                placeholder='Write your mountain memory or observation...'
                value={newNotes}
                onChange={e => setNewNotes(e.target.value)}
                className='w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-sans text-xs outline-none focus:border-[#E5A93C]'
                required
              />
              <button
                type='submit'
                className='px-5 py-2 rounded-xl bg-[#E5A93C] text-[#07131D] text-xs font-bold font-mono uppercase hover:bg-[#F3BA54] transition-colors'
              >
                Save to Journal
              </button>
            </form>
          )}

          {/* Existing entries */}
          <div className='space-y-3'>
            {journalEntries.map(entry => (
              <div key={entry.id} className='p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5'>
                <div className='flex items-center justify-between'>
                  <h5 className='font-serif text-lg text-white'>{entry.title}</h5>
                  <button onClick={() => deleteJournalEntry(entry.id)} className='text-gray-400 hover:text-red-400 p-1'>
                    <Trash2 className='w-3.5 h-3.5' />
                  </button>
                </div>
                <div className='flex items-center gap-3 text-[10px] font-mono text-[#E5A93C]'>
                  <span>{entry.date}</span>
                  <span>•</span>
                  <span>{entry.location}</span>
                  <span>•</span>
                  <span className='italic'>{entry.mood}</span>
                </div>
                <p className='text-xs text-gray-300 font-light leading-relaxed pt-1'>{entry.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};