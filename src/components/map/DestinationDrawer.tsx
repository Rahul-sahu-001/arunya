import React from 'react';
import { Destination } from '../../types';
import { useJournal } from '../../context/JournalContext';
import { X, Bookmark, BookmarkCheck, MapPin, Compass, Calendar, Mountain, DollarSign, ShieldAlert, Sparkles, Navigation, CheckCircle2 } from 'lucide-react';

interface DrawerProps {
  destination: Destination | null;
  onClose: () => void;
  onPlanTripForThis: (dest: Destination) => void;
}

export const DestinationDrawer: React.FC<DrawerProps> = ({ destination, onClose, onPlanTripForThis }) => {
  const { isSavedDestination, toggleSaveDestination } = useJournal();

  if (!destination) return null;

  const isSaved = isSavedDestination(destination.id);

  return (
    <div className='fixed inset-0 z-50 overflow-hidden flex justify-end animate-fade-in'>
      {/* Backdrop */}
      <div className='absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity' onClick={onClose} />

      {/* Sliding Drawer Container */}
      <div className='relative w-full max-w-2xl bg-[#07131D] text-[#EEF3F0] h-full shadow-2xl border-l border-white/10 flex flex-col z-10 overflow-y-auto no-scrollbar'>
        {/* Header photo gallery */}
        <div className='relative h-72 sm:h-80 w-full flex-shrink-0'>
          <img
            src={destination.images[0]}
            alt={destination.name}
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-[#07131D] via-[#07131D]/40 to-transparent' />

          {/* Top Actions */}
          <div className='absolute top-4 left-4 right-4 flex items-center justify-between z-10'>
            <span className='px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-mono text-[#E5A93C] border border-white/15'>
              {destination.district} District
            </span>
            <div className='flex items-center gap-2'>
              <button
                onClick={() => toggleSaveDestination(destination.id)}
                className='p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/15 hover:bg-black/80 transition-colors'
                title={isSaved ? 'Remove from Saved' : 'Save to Travel Journal'}
              >
                {isSaved ? <BookmarkCheck className='w-5 h-5 text-[#E5A93C]' /> : <Bookmark className='w-5 h-5 text-white' />}
              </button>
              <button
                onClick={onClose}
                className='p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/15 hover:bg-black/80 transition-colors text-white'
              >
                <X className='w-5 h-5' />
              </button>
            </div>
          </div>

          {/* Bottom title inside cover */}
          <div className='absolute bottom-4 left-6 right-6'>
            <div className='font-mono text-xs text-[#F3BA54] mb-1 tracking-wider uppercase'>
              Tribal Community: {destination.community}
            </div>
            <h2 className='font-serif text-3xl sm:text-4xl font-light text-white'>
              {destination.name}
            </h2>
            {destination.nativeName && (
              <p className='text-xs text-gray-300 font-mono mt-0.5'>{destination.nativeName}</p>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className='p-6 sm:p-8 space-y-8 flex-1'>
          {/* Quick Metrics Bar */}
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
            <div className='p-3 rounded-xl bg-white/5 border border-white/10'>
              <div className='flex items-center gap-1.5 text-xs text-gray-400 mb-1'>
                <Mountain className='w-3.5 h-3.5 text-[#E5A93C]' /> Altitude
              </div>
              <div className='text-sm font-semibold text-white font-mono'>{destination.altitude}</div>
            </div>
            <div className='p-3 rounded-xl bg-white/5 border border-white/10'>
              <div className='flex items-center gap-1.5 text-xs text-gray-400 mb-1'>
                <Calendar className='w-3.5 h-3.5 text-[#E5A93C]' /> Best Time
              </div>
              <div className='text-xs font-semibold text-white'>{destination.bestTime.split('(')[0]}</div>
            </div>
            <div className='p-3 rounded-xl bg-white/5 border border-white/10'>
              <div className='flex items-center gap-1.5 text-xs text-gray-400 mb-1'>
                <Compass className='w-3.5 h-3.5 text-[#E5A93C]' /> Difficulty
              </div>
              <div className='text-xs font-semibold text-white'>{destination.difficulty}</div>
            </div>
            <div className='p-3 rounded-xl bg-white/5 border border-white/10'>
              <div className='flex items-center gap-1.5 text-xs text-gray-400 mb-1'>
                <DollarSign className='w-3.5 h-3.5 text-[#E5A93C]' /> Budget
              </div>
              <div className='text-xs font-semibold text-white font-mono'>{destination.approximateBudget.split('(')[0]}</div>
            </div>
          </div>

          {/* Narrative Overview */}
          <div>
            <h3 className='font-mono text-xs uppercase tracking-widest text-[#E5A93C] mb-2 font-semibold'>
              VILLAGE STORY & SPIRIT
            </h3>
            <p className='text-sm text-gray-300 leading-relaxed font-light'>
              {destination.description}
            </p>
          </div>

          {/* Why Special Box */}
          <div className='p-4 rounded-xl bg-[#0A231C]/60 border border-[#E5A93C]/20 space-y-1.5'>
            <div className='flex items-center gap-2 text-xs font-bold text-[#F3BA54] font-mono uppercase tracking-wider'>
              <Sparkles className='w-4 h-4' /> Why It Is Special
            </div>
            <p className='text-xs text-gray-300 leading-relaxed'>
              {destination.whySpecial}
            </p>
          </div>

          {/* How to reach */}
          <div className='space-y-3'>
            <h3 className='font-mono text-xs uppercase tracking-widest text-[#E5A93C] font-semibold flex items-center gap-1.5'>
              <Navigation className='w-4 h-4' /> HOW TO REACH
            </h3>
            <div className='p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs'>
              <div><strong className='text-white'>Gateway:</strong> <span className='text-gray-300'>{destination.howToReach.gateway}</span></div>
              <div><strong className='text-white'>Road Journey:</strong> <span className='text-gray-300'>{destination.howToReach.roadTransit}</span></div>
              <div><strong className='text-white'>Nearest Air / Rail:</strong> <span className='text-gray-300'>{destination.howToReach.nearestAir} | {destination.howToReach.nearestRail}</span></div>
            </div>
          </div>

          {/* Nearby Experiences & Living Culture */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='p-4 rounded-xl bg-white/5 border border-white/10 space-y-2'>
              <h4 className='text-xs font-mono uppercase text-[#F3BA54] font-bold'>Nearby Experiences</h4>
              <ul className='space-y-1.5 text-xs text-gray-300'>
                {destination.nearbyExperiences.map((exp, idx) => (
                  <li key={idx} className='flex items-start gap-1.5'>
                    <CheckCircle2 className='w-3.5 h-3.5 text-[#E5A93C] flex-shrink-0 mt-0.5' />
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='p-4 rounded-xl bg-white/5 border border-white/10 space-y-2'>
              <h4 className='text-xs font-mono uppercase text-[#F3BA54] font-bold'>Traditional Delicacies</h4>
              <div className='flex flex-wrap gap-1.5'>
                {destination.localFood.map((food, idx) => (
                  <span key={idx} className='px-2.5 py-1 rounded-lg bg-black/40 text-[11px] text-[#E8DCC9] border border-white/10'>
                    {food}
                  </span>
                ))}
              </div>
              <div className='pt-2'>
                <span className='text-[11px] text-gray-400 font-mono'>Homestays Available: {destination.homestaysCount} community homes</span>
              </div>
            </div>
          </div>

          {/* Responsible Travel Guidelines */}
          <div className='p-4 rounded-xl bg-[#091426] border border-blue-500/20 space-y-2'>
            <div className='flex items-center gap-2 text-xs font-bold text-sky-400 font-mono uppercase'>
              <ShieldAlert className='w-4 h-4' /> Responsible Travel Protocol
            </div>
            <ul className='space-y-1 text-xs text-gray-300'>
              {destination.responsibleGuidelines.map((g, i) => (
                <li key={i} className='flex items-start gap-2'>
                  <span className='text-[#E5A93C] font-mono'>•</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTA */}
          <div className='pt-4 border-t border-white/10 flex gap-3'>
            <button
              onClick={() => {
                onClose();
                onPlanTripForThis(destination);
              }}
              className='flex-1 py-3 rounded-xl bg-gradient-to-r from-[#E5A93C] to-[#C2593F] text-[#07131D] font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2'
            >
              <Sparkles className='w-4 h-4' /> Add to My AI Trip Planner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};