import React, { useState } from 'react';
import { LOCAL_PHRASES } from '../../data/languages';
import { Volume2, Languages, Sparkles } from 'lucide-react';

export const Phrasebook: React.FC = () => {
  const [activeSpeechId, setActiveSpeechId] = useState<string | null>(null);

  const playPhrase = (phrase: typeof LOCAL_PHRASES[0]) => {
    setActiveSpeechId(phrase.id);
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(phrase.pronunciation);
      utterance.rate = 0.85;
      utterance.onend = () => setActiveSpeechId(null);
      utterance.onerror = () => setActiveSpeechId(null);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setActiveSpeechId(null), 1200);
    }
  };

  return (
    <section id='local-phrases' className='py-20 bg-[#050E16] text-[#EEF3F0] relative border-t border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-10'>
          <span className='font-mono text-xs uppercase tracking-[0.25em] text-[#E5A93C] font-semibold block mb-2'>
            LINGUISTIC COURTESY
          </span>
          <h2 className='font-serif text-3xl sm:text-4xl font-light text-white leading-tight'>
            Speak a Little Local
          </h2>
          <p className='text-sm text-[#98A7A0] max-w-xl mt-2 font-light'>
            A few warm words in Apatani, Monpa, Adi, or Nyishi open doors and warm hearts around village hearths.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {LOCAL_PHRASES.map(p => (
            <div
              key={p.id}
              className='p-6 rounded-3xl bg-[#091824] border border-white/15 shadow-xl space-y-4 hover:border-[#E5A93C]/40 transition-all'
            >
              <div className='flex items-center justify-between'>
                <span className='px-2.5 py-1 rounded-full bg-[#E5A93C]/20 text-[#F3BA54] font-mono text-[10px] uppercase font-bold'>
                  {p.tribalLanguage} ({p.dialect})
                </span>
                <span className='text-[10px] font-mono text-gray-400'>{p.category}</span>
              </div>

              <div>
                <div className='text-lg font-serif text-white font-normal'>{p.english}</div>
                <div className='text-xs text-gray-400 font-light mt-0.5'>{p.hindi}</div>
              </div>

              <div className='p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between'>
                <div>
                  <span className='font-mono text-[10px] text-gray-400 block'>Pronunciation</span>
                  <span className='font-serif text-xl text-[#F3BA54] font-semibold'>{p.pronunciation}</span>
                </div>
                <button
                  onClick={() => playPhrase(p)}
                  className={`p-2.5 rounded-xl transition-all ${
                    activeSpeechId === p.id
                      ? 'bg-[#E5A93C] text-[#07131D] animate-pulse'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                  title='Listen to pronunciation'
                >
                  <Volume2 className='w-4 h-4' />
                </button>
              </div>

              <p className='text-[11px] text-[#98A7A0] font-light leading-relaxed'>
                {p.culturalNote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};