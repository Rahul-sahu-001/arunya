import React, { useState } from 'react';
import { STORIES } from '../../data/stories';
import { Story } from '../../types';
import { useAudio } from '../../context/AudioContext';
import { useJournal } from '../../context/JournalContext';
import { BookOpen, Volume2, Pause, Clock, MapPin, X, Quote, Bookmark, BookmarkCheck } from 'lucide-react';

export const LocalStories: React.FC = () => {
  const [readingStory, setReadingStory] = useState<Story | null>(null);
  const { isStoryPlaying, currentStoryId, toggleStoryPlayback } = useAudio();
  const { isSavedStory, toggleSaveStory } = useJournal();

  return (
    <section id='stories-archive' className='py-24 bg-[#07131D] text-[#EEF3F0] relative border-t border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-12'>
          <span className='font-mono text-xs uppercase tracking-[0.25em] text-[#E5A93C] font-semibold block mb-2'>
            DIGITAL CULTURAL ARCHIVE
          </span>
          <h2 className='font-serif text-3xl sm:text-5xl font-light text-white leading-tight'>
            Stories from the Mountains
          </h2>
          <p className='text-sm text-[#98A7A0] max-w-xl mt-2 font-light'>
            Instead of only listing places, we archive living memories. Listen to oral folklore, hearth-side recollections, and ecological pacts handed down across centuries.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {STORIES.map(story => {
            const isPlayingThis = isStoryPlaying && currentStoryId === story.id;
            const isSaved = isSavedStory(story.id);

            return (
              <div
                key={story.id}
                className='rounded-3xl bg-[#091824] border border-white/15 overflow-hidden group hover:border-[#E5A93C]/40 transition-all duration-300 flex flex-col justify-between shadow-2xl'
              >
                <div className='relative h-64 overflow-hidden'>
                  <img
                    src={story.coverImage}
                    alt={story.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-[#091824] via-black/30 to-transparent' />

                  <div className='absolute top-4 left-4 right-4 flex items-center justify-between z-10'>
                    <span className='px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono text-[#E5A93C] border border-white/15'>
                      {story.community} Lore
                    </span>
                    <button
                      onClick={() => toggleSaveStory(story.id)}
                      className='p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/15 hover:bg-black/80 transition-colors'
                    >
                      {isSaved ? <BookmarkCheck className='w-4 h-4 text-[#E5A93C]' /> : <Bookmark className='w-4 h-4 text-white' />}
                    </button>
                  </div>

                  <div className='absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-gray-300'>
                    <span className='flex items-center gap-1.5'>
                      <MapPin className='w-3.5 h-3.5 text-[#E5A93C]' /> {story.village}
                    </span>
                    <span className='flex items-center gap-1.5'>
                      <Clock className='w-3.5 h-3.5 text-[#E5A93C]' /> {story.readTime}
                    </span>
                  </div>
                </div>

                <div className='p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between'>
                  <div className='space-y-2'>
                    <div className='font-mono text-[10px] text-[#F3BA54] uppercase tracking-wider'>
                      Storyteller: {story.storyteller} ({story.role})
                    </div>
                    <h3 className='font-serif text-2xl sm:text-3xl text-white font-normal group-hover:text-[#F3BA54] transition-colors leading-snug'>
                      {story.title}
                    </h3>
                    <p className='text-xs text-[#98A7A0] leading-relaxed font-light line-clamp-3'>
                      {story.excerpt}
                    </p>
                  </div>

                  <div className='pt-4 border-t border-white/10 flex items-center justify-between gap-3'>
                    <button
                      onClick={() => toggleStoryPlayback(story.id, `${story.title}. By ${story.storyteller}. ${story.content.join(' ')}`)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                        isPlayingThis
                          ? 'bg-[#E5A93C] text-[#07131D] shadow-md shadow-[#E5A93C]/30 animate-pulse'
                          : 'glass-panel text-white hover:border-[#E5A93C]/40'
                      }`}
                    >
                      {isPlayingThis ? <Pause className='w-3.5 h-3.5' /> : <Volume2 className='w-3.5 h-3.5 text-[#E5A93C]' />}
                      <span>{isPlayingThis ? 'Pause Narration' : `Listen (${story.audioDuration})`}</span>
                    </button>

                    <button
                      onClick={() => setReadingStory(story)}
                      className='px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-gray-200 hover:text-white transition-colors flex items-center gap-1.5'
                    >
                      <BookOpen className='w-3.5 h-3.5 text-[#C2593F]' />
                      <span>Read Story</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {readingStory && (
        <div className='fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in'>
          <div className='relative w-full max-w-3xl bg-[#091824] rounded-3xl border border-white/20 shadow-2xl overflow-hidden p-6 sm:p-10 space-y-6 max-h-[90vh] overflow-y-auto no-scrollbar'>
            <button
              onClick={() => setReadingStory(null)}
              className='absolute top-6 right-6 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white transition-colors'
            >
              <X className='w-5 h-5' />
            </button>

            <div className='space-y-2'>
              <div className='font-mono text-xs text-[#E5A93C] uppercase tracking-widest'>
                {readingStory.community} Oral Archive • {readingStory.village}
              </div>
              <h2 className='font-serif text-3xl sm:text-4xl text-white font-light'>
                {readingStory.title}
              </h2>
              <p className='text-xs text-gray-400 font-mono'>
                Recounted by {readingStory.storyteller} ({readingStory.role}) • {readingStory.readTime}
              </p>
            </div>

            <div className='p-5 rounded-2xl bg-[#0A231C]/60 border border-[#E5A93C]/20 flex items-start gap-3'>
              <Quote className='w-6 h-6 text-[#E5A93C] flex-shrink-0 mt-1 opacity-70' />
              <p className='font-serif italic text-base sm:text-lg text-[#E8DCC9]'>
                “{readingStory.quote}”
              </p>
            </div>

            <div className='space-y-4 text-sm text-gray-300 leading-relaxed font-light'>
              {readingStory.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className='grid grid-cols-2 gap-4 pt-4 border-t border-white/10'>
              {readingStory.gallery.map((img, idx) => (
                <img key={idx} src={img} alt='Story detail' className='rounded-2xl h-44 w-full object-cover' />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};