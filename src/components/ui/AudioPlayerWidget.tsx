import React from 'react';
import { useAudio, AmbientTrack } from '../../context/AudioContext';
import { Volume2, VolumeX, Wind, Flame, Waves, Bell, Pause } from 'lucide-react';

export const AudioPlayerWidget: React.FC = () => {
  const {
    isAmbientPlaying,
    currentAmbientTrack,
    toggleAmbient,
    setAmbientTrack,
    isStoryPlaying,
    currentStoryId,
    pauseStory,
    storyProgress
  } = useAudio();

  const tracks: { id: AmbientTrack; label: string; icon: any }[] = [
    { id: 'pines', label: 'Mountain Pines', icon: Wind },
    { id: 'hearth', label: 'Hearth Fire', icon: Flame },
    { id: 'river', label: 'Siang River', icon: Waves },
    { id: 'monastery', label: 'Monastery Gong', icon: Bell }
  ];

  return (
    <div className='fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2'>
      {isStoryPlaying && (
        <div className='glass-panel-warm px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-3 border border-[#E5A93C]/40 text-xs animate-pulse'>
          <span className='w-2 h-2 rounded-full bg-[#F97316]' />
          <span className='text-[#E8DCC9] font-medium'>Narrating Story: <strong className='text-white capitalize'>{currentStoryId?.replace(/-/g, ' ')}</strong></span>
          <div className='w-24 h-1.5 bg-black/40 rounded-full overflow-hidden'>
            <div className='h-full bg-gradient-to-r from-[#E5A93C] to-[#F97316] transition-all duration-300' style={{ width: `${storyProgress}%` }} />
          </div>
          <button onClick={pauseStory} className='p-1 hover:text-[#E5A93C] text-gray-300 transition-colors' title='Pause story'>
            <Pause className='w-3.5 h-3.5' />
          </button>
        </div>
      )}

      <div className='glass-panel px-3 py-2 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-2 text-xs'>
        <button
          onClick={() => toggleAmbient()}
          className={`p-2 rounded-xl transition-all flex items-center gap-1.5 ${
            isAmbientPlaying
              ? 'bg-[#E5A93C]/20 text-[#F3BA54] border border-[#E5A93C]/40 shadow-sm'
              : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
          }`}
          title={isAmbientPlaying ? 'Mute Mountain Ambience' : 'Listen to Mountain Ambience'}
        >
          {isAmbientPlaying ? <Volume2 className='w-4 h-4 text-[#F3BA54]' /> : <VolumeX className='w-4 h-4' />}
          <span className='font-mono hidden sm:inline text-[11px]'>{isAmbientPlaying ? 'Ambience On' : 'Mountain Sound'}</span>
        </button>

        {isAmbientPlaying && (
          <div className='flex items-center gap-1 pl-2 border-l border-white/10'>
            {tracks.map(t => {
              const Icon = t.icon;
              const isActive = currentAmbientTrack === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setAmbientTrack(t.id)}
                  className={`p-1.5 rounded-lg transition-colors text-[11px] flex items-center gap-1 ${
                    isActive ? 'bg-[#E5A93C] text-[#07131D] font-semibold' : 'text-gray-300 hover:bg-white/10'
                  }`}
                  title={t.label}
                >
                  <Icon className='w-3.5 h-3.5' />
                  <span className='hidden md:inline'>{t.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};