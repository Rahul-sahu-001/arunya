import React, { useState } from 'react';
import { LOCAL_DISHES } from '../../data/foods';
import { LocalDish } from '../../types';
import { Utensils, Flame, Sparkles, X, CheckCircle2, HeartHandshake } from 'lucide-react';

export const TasteArunachal: React.FC = () => {
  const [selectedCookingDish, setSelectedCookingDish] = useState<LocalDish | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  return (
    <section id='taste-arunachal' className='py-24 bg-[#050E16] text-[#EEF3F0] relative border-t border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-12'>
          <span className='font-mono text-xs uppercase tracking-[0.25em] text-[#E5A93C] font-semibold block mb-2'>
            INDIGENOUS GASTRONOMY
          </span>
          <h2 className='font-serif text-3xl sm:text-5xl font-light text-white leading-tight'>
            Taste Arunachal
          </h2>
          <p className='text-sm text-[#98A7A0] max-w-xl mt-2 font-light'>
            Culinary storytelling beyond restaurant menus: wild forest fermentations, river fish smoked over pine cones, and red rice steamed in aromatic jungle leaves.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {LOCAL_DISHES.map(dish => (
            <div
              key={dish.id}
              className='rounded-3xl bg-[#091824] border border-white/15 overflow-hidden flex flex-col justify-between shadow-2xl p-6 sm:p-8 hover:border-[#E5A93C]/40 transition-all group'
            >
              <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <span className='px-3 py-1 rounded-full bg-[#E5A93C]/20 text-[#F3BA54] font-mono text-xs font-semibold'>
                    {dish.community} Heritage
                  </span>
                  <span className='text-xs font-mono text-gray-400'>{dish.region}</span>
                </div>

                <div>
                  <h3 className='font-serif text-2xl sm:text-3xl text-white font-normal group-hover:text-[#F3BA54] transition-colors'>
                    {dish.name}
                  </h3>
                  <p className='text-xs text-gray-400 font-mono mt-0.5'>{dish.nativeName}</p>
                </div>

                <p className='text-xs text-gray-300 font-light leading-relaxed'>
                  {dish.description}
                </p>

                <div className='p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5'>
                  <span className='font-mono text-[10px] text-[#E5A93C] uppercase block font-semibold'>Culinary Lore</span>
                  <p className='text-xs text-[#98A7A0] font-light leading-relaxed'>{dish.story}</p>
                </div>

                <div>
                  <span className='font-mono text-[10px] text-gray-400 uppercase block mb-1.5'>Forest Ingredients</span>
                  <div className='flex flex-wrap gap-1.5'>
                    {dish.ingredients.map((ing, i) => (
                      <span key={i} className='px-2.5 py-1 rounded-lg bg-black/40 text-[11px] text-[#E8DCC9] font-mono border border-white/5'>
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className='pt-6 mt-4 border-t border-white/10 flex items-center justify-between gap-2'>
                <span className='text-xs text-gray-400'>Host: <strong className='text-white'>{dish.localHost}</strong></span>
                {dish.isCookingWorkshopAvailable && (
                  <button
                    onClick={() => { setSelectedCookingDish(dish); setBookingConfirmed(false); }}
                    className='px-4 py-2 rounded-xl bg-gradient-to-r from-[#E5A93C] to-[#C2593F] text-[#07131D] text-xs font-bold transition-all shadow-md flex items-center gap-1.5 hover:brightness-110'
                  >
                    <Flame className='w-3.5 h-3.5' />
                    <span>Cook With A Local Family</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCookingDish && (
        <div className='fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in'>
          <div className='relative w-full max-w-lg bg-[#091824] rounded-3xl border border-white/20 p-6 sm:p-8 space-y-6 shadow-2xl'>
            <button onClick={() => setSelectedCookingDish(null)} className='absolute top-6 right-6 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white'>
              <X className='w-5 h-5' />
            </button>
            <div>
              <span className='font-mono text-xs text-[#F3BA54] uppercase'>Hearthside Masterclass</span>
              <h3 className='font-serif text-2xl text-white font-normal mt-1'>Cook {selectedCookingDish.name}</h3>
              <p className='text-xs text-gray-400 font-mono'>Hosted by {selectedCookingDish.localHost}</p>
            </div>
            {!bookingConfirmed ? (
              <div className='space-y-4 text-xs text-gray-300 font-light'>
                <p>Spend 3 hours beside a traditional mountain hearth. Harvest fresh ingredients from village kitchen gardens, learn traditional fermentation lore, and share a family meal on bamboo floorboards.</p>
                <div className='p-3.5 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-white'>
                  Tariff: ₹1,200 / person (all ingredients & family meal included, paid directly to host)
                </div>
                <button
                  onClick={() => setBookingConfirmed(true)}
                  className='w-full py-3 rounded-xl bg-gradient-to-r from-[#E5A93C] to-[#C2593F] text-[#07131D] text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2'
                >
                  <HeartHandshake className='w-4 h-4' /> Request Family Cooking Session
                </button>
              </div>
            ) : (
              <div className='p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3 animate-fade-in'>
                <CheckCircle2 className='w-10 h-10 text-emerald-400 mx-auto' />
                <h4 className='font-serif text-xl text-white'>Cooking Session Requested!</h4>
                <p className='text-xs text-gray-300'>
                  We have notified {selectedCookingDish.localHost}. Your homestay itinerary will be synced with this hearthside cooking session.
                </p>
                <button onClick={() => setSelectedCookingDish(null)} className='px-6 py-2 rounded-xl bg-white/10 text-white text-xs'>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};