import React from 'react';
import { ARTISANS } from '../../data/artisans';
import { Feather, ShieldCheck, Sparkles } from 'lucide-react';

export const MountainArtisans: React.FC = () => {
  return (
    <section id='mountain-artisans' className='py-24 bg-[#07131D] text-[#EEF3F0] relative border-t border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-12'>
          <span className='font-mono text-xs uppercase tracking-[0.25em] text-[#E5A93C] font-semibold block mb-2'>
            INDIGENOUS CRAFTSMANSHIP
          </span>
          <h2 className='font-serif text-3xl sm:text-5xl font-light text-white leading-tight'>
            Made in the Mountains
          </h2>
          <p className='text-sm text-[#98A7A0] max-w-xl mt-2 font-light'>
            Loin-loom backstrap textiles, 800-year-old handmade Daphne paper, and intricate bamboo carving. Every profile honors fair community compensation.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {ARTISANS.map(artisan => (
            <div
              key={artisan.id}
              className='rounded-3xl bg-[#091824] border border-white/15 overflow-hidden flex flex-col justify-between p-6 shadow-2xl hover:border-[#E5A93C]/40 transition-all group'
            >
              <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <span className='px-2.5 py-1 rounded-full bg-[#E5A93C]/20 text-[#F3BA54] font-mono text-[10px] uppercase font-bold'>
                    {artisan.community}
                  </span>
                  <span className='text-[11px] font-mono text-gray-400'>{artisan.village}</span>
                </div>

                <div>
                  <h3 className='font-serif text-2xl text-white font-normal group-hover:text-[#F3BA54] transition-colors'>
                    {artisan.name}
                  </h3>
                  <p className='text-xs text-gray-400 font-mono mt-0.5'>{artisan.craftType}</p>
                </div>

                <p className='text-xs text-gray-300 font-light leading-relaxed'>
                  {artisan.story}
                </p>

                <div className='p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1.5'>
                  <span className='font-mono text-[10px] text-emerald-400 uppercase block font-semibold flex items-center gap-1'>
                    <ShieldCheck className='w-3.5 h-3.5' /> Fair Trade Guarantee
                  </span>
                  <p className='text-[11px] text-gray-300 font-light leading-normal'>{artisan.fairTradeGuarantee}</p>
                </div>

                <div>
                  <span className='font-mono text-[10px] text-gray-400 uppercase block mb-1'>Signature Works</span>
                  <div className='flex flex-wrap gap-1'>
                    {artisan.products.map((p, idx) => (
                      <span key={idx} className='px-2 py-0.5 rounded bg-black/40 text-[10px] text-[#E8DCC9] font-mono'>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className='pt-5 mt-4 border-t border-white/10 flex items-center justify-between'>
                <span className='text-[11px] text-gray-400 font-mono'>Workshop: {artisan.workshopAvailable ? 'Available on request' : 'Exhibition only'}</span>
                <span className='text-xs font-bold text-[#E5A93C] group-hover:underline'>Visit Artisan →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};