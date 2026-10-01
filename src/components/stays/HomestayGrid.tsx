import React, { useState } from 'react';
import { HOMESTAYS } from '../../data/homestays';
import { Homestay } from '../../types';
import { useJournal } from '../../context/JournalContext';
import { Tent, Star, MapPin, Bookmark, BookmarkCheck, ShieldCheck, Sparkles, X, CheckCircle2 } from 'lucide-react';

export const HomestayGrid: React.FC = () => {
  const { isSavedHomestay, toggleSaveHomestay } = useJournal();
  const [selectedHomestay, setSelectedHomestay] = useState<Homestay | null>(null);
  const [inquiryConfirmed, setInquiryConfirmed] = useState(false);

  return (
    <section id='community-homestays' className='py-24 bg-[#07131D] text-[#EEF3F0] relative border-t border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-12'>
          <span className='font-mono text-xs uppercase tracking-[0.25em] text-[#E5A93C] font-semibold block mb-2'>
            COMMUNITY SANCTUARIES
          </span>
          <h2 className='font-serif text-3xl sm:text-5xl font-light text-white leading-tight'>
            Stay with the Mountains
          </h2>
          <p className='text-sm text-[#98A7A0] max-w-xl mt-2 font-light'>
            Family hosted, community owned homestays. Share meals cooked over oak embers and wake up to mountain mist.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {HOMESTAYS.map(stay => {
            const isSaved = isSavedHomestay(stay.id);
            return (
              <div
                key={stay.id}
                className='rounded-3xl bg-[#091824] border border-white/15 overflow-hidden flex flex-col justify-between shadow-2xl hover:border-[#E5A93C]/40 transition-all group'
              >
                <div className='relative h-64 overflow-hidden'>
                  <img src={stay.images[0]} alt={stay.name} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700' />
                  <div className='absolute inset-0 bg-gradient-to-t from-[#091824] via-transparent to-transparent' />
                  <div className='absolute top-4 left-4 right-4 flex items-center justify-between'>
                    <span className='px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-mono text-[#E5A93C] border border-white/10'>
                      {stay.community} Host
                    </span>
                    <button
                      onClick={() => toggleSaveHomestay(stay.id)}
                      className='p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/15 hover:bg-black/80 transition-colors'
                    >
                      {isSaved ? <BookmarkCheck className='w-4 h-4 text-[#E5A93C]' /> : <Bookmark className='w-4 h-4 text-white' />}
                    </button>
                  </div>
                  <div className='absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-gray-300'>
                    <span className='flex items-center gap-1.5'>
                      <MapPin className='w-3.5 h-3.5 text-[#E5A93C]' /> {stay.village}
                    </span>
                    <span className='flex items-center gap-1 text-[#F3BA54]'>
                      <Star className='w-3.5 h-3.5 fill-[#F3BA54]' /> {stay.rating} ({stay.reviewsCount} reviews)
                    </span>
                  </div>
                </div>

                <div className='p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between'>
                  <div className='space-y-2'>
                    <div className='font-mono text-[11px] text-gray-400 uppercase'>Host: {stay.host}</div>
                    <h3 className='font-serif text-2xl text-white font-normal group-hover:text-[#F3BA54] transition-colors'>
                      {stay.name}
                    </h3>
                    <p className='text-xs text-gray-300 font-light leading-relaxed'>{stay.roomType}</p>
                  </div>

                  {/* Badges */}
                  <div className='flex flex-wrap gap-1.5'>
                    {stay.badges.map((b, i) => (
                      <span key={i} className='px-2.5 py-1 rounded-full bg-white/5 text-[11px] text-[#E8DCC9] border border-white/10 font-mono'>
                        {b}
                      </span>
                    ))}
                  </div>

                  {/* Price & Action */}
                  <div className='pt-4 border-t border-white/10 flex items-center justify-between gap-2'>
                    <div>
                      <span className='font-mono text-[10px] text-gray-400 block'>Tariff / Night</span>
                      <span className='font-mono text-lg font-bold text-white'>₹{stay.pricePerNight} <span className='text-xs font-normal text-gray-400'>inc. meals</span></span>
                    </div>
                    <button
                      onClick={() => { setSelectedHomestay(stay); setInquiryConfirmed(false); }}
                      className='px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E5A93C] to-[#C2593F] text-[#07131D] text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-1.5'
                    >
                      <Sparkles className='w-3.5 h-3.5' />
                      <span>Inquire Stay</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Homestay Inquiry Modal */}
      {selectedHomestay && (
        <div className='fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in'>
          <div className='relative w-full max-w-lg bg-[#091824] rounded-3xl border border-white/20 p-6 sm:p-8 space-y-6 shadow-2xl'>
            <button onClick={() => setSelectedHomestay(null)} className='absolute top-6 right-6 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white'>
              <X className='w-5 h-5' />
            </button>
            <div>
              <span className='font-mono text-xs text-[#F3BA54] uppercase'>Direct Community Homestay</span>
              <h3 className='font-serif text-2xl text-white font-normal mt-1'>{selectedHomestay.name}</h3>
              <p className='text-xs text-gray-400 font-mono'>Hosted by {selectedHomestay.host} • {selectedHomestay.village}</p>
            </div>
            {!inquiryConfirmed ? (
              <div className='space-y-4 text-xs text-gray-300 font-light'>
                <div className='p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5'>
                  <div className='font-mono text-xs text-[#E5A93C] font-semibold'>Homestay Sustainability Policy:</div>
                  <ul className='space-y-1 text-gray-400'>
                    {selectedHomestay.sustainability.map((s, i) => <li key={i}>• {s}</li>)}
                  </ul>
                </div>
                <div className='grid grid-cols-2 gap-3'>
                  <div>
                    <label className='block font-mono text-[10px] text-gray-400 uppercase mb-1'>Check-in Date</label>
                    <input type='date' defaultValue='2026-10-18' className='w-full p-2.5 rounded-xl bg-black/40 border border-white/10 text-white font-mono text-xs outline-none' />
                  </div>
                  <div>
                    <label className='block font-mono text-[10px] text-gray-400 uppercase mb-1'>Number of Nights</label>
                    <input type='number' defaultValue='3' min='1' max='14' className='w-full p-2.5 rounded-xl bg-black/40 border border-white/10 text-white font-mono text-xs outline-none' />
                  </div>
                </div>
                <button
                  onClick={() => setInquiryConfirmed(true)}
                  className='w-full py-3 rounded-xl bg-gradient-to-r from-[#E5A93C] to-[#C2593F] text-[#07131D] text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2'
                >
                  <span>Send Direct Homestay Inquiry</span>
                </button>
              </div>
            ) : (
              <div className='p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3 animate-fade-in'>
                <CheckCircle2 className='w-10 h-10 text-emerald-400 mx-auto' />
                <h4 className='font-serif text-xl text-white'>Homestay Inquiry Dispatched!</h4>
                <p className='text-xs text-gray-300'>
                  Your request has been routed to {selectedHomestay.host} via the village community coordinator. Direct contact details have been stored into your offline dossier.
                </p>
                <button onClick={() => setSelectedHomestay(null)} className='px-6 py-2 rounded-xl bg-white/10 text-white text-xs'>
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};