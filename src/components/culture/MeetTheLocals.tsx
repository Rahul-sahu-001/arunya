import React, { useState } from 'react';
import { LOCALS } from '../../data/locals';
import { LocalPerson } from '../../types';
import { ShieldCheck, HeartHandshake, Sparkles, X, CheckCircle2 } from 'lucide-react';

export const MeetTheLocals: React.FC = () => {
  const [selectedLocal, setSelectedLocal] = useState<LocalPerson | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  return (
    <section id='meet-the-locals' className='py-24 bg-[#050E16] text-[#EEF3F0] relative border-t border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-12'>
          <span className='font-mono text-xs uppercase tracking-[0.25em] text-[#E5A93C] font-semibold block mb-2'>
            HUMAN-CENTRIC IMMERSION
          </span>
          <h2 className='font-serif text-3xl sm:text-5xl font-light text-white leading-tight'>
            Meet the Mountain Keepers
          </h2>
          <p className='text-sm text-[#98A7A0] max-w-xl mt-2 font-light'>
            Homestay custodians, master backstrap weavers, wildlife trackers, and herbalists. Discover Arunachal through the protagonists of its soil.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {LOCALS.map(person => (
            <div
              key={person.id}
              className='rounded-3xl bg-[#091824] border border-white/15 overflow-hidden flex flex-col justify-between p-6 shadow-2xl hover:border-[#E5A93C]/40 transition-all group'
            >
              <div className='space-y-4'>
                <div className='flex items-center gap-4'>
                  <img
                    src={person.image}
                    alt={person.name}
                    className='w-16 h-16 rounded-2xl object-cover border border-[#E5A93C]/30 flex-shrink-0 group-hover:scale-105 transition-transform'
                  />
                  <div>
                    <div className='flex items-center gap-1 text-[11px] font-mono text-[#F3BA54]'>
                      <ShieldCheck className='w-3.5 h-3.5 text-emerald-400' /> Community Verified
                    </div>
                    <h3 className='font-serif text-xl text-white font-normal'>{person.name}</h3>
                    <p className='text-xs text-gray-400 font-mono'>{person.village}, {person.community}</p>
                  </div>
                </div>

                <div className='p-3.5 rounded-2xl bg-white/5 border border-white/10'>
                  <span className='font-mono text-[10px] text-[#E5A93C] uppercase block mb-1'>Role</span>
                  <p className='text-xs text-gray-300 font-medium'>{person.role}</p>
                </div>

                <p className='text-xs text-[#98A7A0] font-light leading-relaxed line-clamp-3'>
                  {person.bio}
                </p>

                <div className='flex flex-wrap gap-1'>
                  {person.specialties.slice(0, 3).map((s, i) => (
                    <span key={i} className='px-2 py-0.5 rounded-md bg-black/40 text-[10px] text-[#E8DCC9] font-mono'>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className='pt-5 mt-4 border-t border-white/10 flex items-center justify-between gap-2'>
                <div>
                  <span className='font-mono text-[10px] text-gray-400 block'>Direct Community Rate</span>
                  <span className='text-xs font-semibold text-white font-mono'>{person.experiencePrice}</span>
                </div>
                <button
                  onClick={() => { setSelectedLocal(person); setBookingSuccess(false); }}
                  className='px-4 py-2 rounded-xl bg-[#E5A93C] hover:bg-[#F3BA54] text-[#07131D] text-xs font-bold transition-all shadow-md flex items-center gap-1.5'
                >
                  <Sparkles className='w-3.5 h-3.5' />
                  <span>Book Experience</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedLocal && (
        <div className='fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in'>
          <div className='relative w-full max-w-lg bg-[#091824] rounded-3xl border border-white/20 p-6 sm:p-8 space-y-6 shadow-2xl'>
            <button
              onClick={() => setSelectedLocal(null)}
              className='absolute top-6 right-6 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white'
            >
              <X className='w-5 h-5' />
            </button>

            <div className='flex items-center gap-4'>
              <img src={selectedLocal.image} alt={selectedLocal.name} className='w-16 h-16 rounded-2xl object-cover border border-[#E5A93C]/40' />
              <div>
                <span className='font-mono text-xs text-[#F3BA54] uppercase'>Direct Community Booking</span>
                <h3 className='font-serif text-2xl text-white font-normal'>{selectedLocal.experienceTitle}</h3>
                <p className='text-xs text-gray-400 font-mono'>Hosted by {selectedLocal.name} ({selectedLocal.village})</p>
              </div>
            </div>

            {!bookingSuccess ? (
              <div className='space-y-4 text-xs text-gray-300 font-light'>
                <div className='p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5'>
                  <div className='font-mono text-[11px] text-[#E5A93C] font-semibold'>Direct Payment Guarantee:</div>
                  <p>100% of this tariff is paid directly in cash or UPI to {selectedLocal.name} on arrival in the village. No middleman commissions are deducted.</p>
                </div>
                <div className='grid grid-cols-2 gap-3'>
                  <div>
                    <label className='block font-mono text-[10px] text-gray-400 uppercase mb-1'>Preferred Date</label>
                    <input type='date' defaultValue='2026-10-15' className='w-full p-2.5 rounded-xl bg-black/40 border border-white/10 text-white font-mono text-xs outline-none' />
                  </div>
                  <div>
                    <label className='block font-mono text-[10px] text-gray-400 uppercase mb-1'>Travelers</label>
                    <input type='number' defaultValue='2' min='1' max='6' className='w-full p-2.5 rounded-xl bg-black/40 border border-white/10 text-white font-mono text-xs outline-none' />
                  </div>
                </div>
                <button
                  onClick={() => setBookingSuccess(true)}
                  className='w-full py-3 rounded-xl bg-gradient-to-r from-[#E5A93C] to-[#C2593F] text-[#07131D] text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2'
                >
                  <HeartHandshake className='w-4 h-4' /> Confirm Direct Host Request
                </button>
              </div>
            ) : (
              <div className='p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3 animate-fade-in'>
                <CheckCircle2 className='w-10 h-10 text-emerald-400 mx-auto' />
                <h4 className='font-serif text-xl text-white'>Host Request Sent!</h4>
                <p className='text-xs text-gray-300'>
                  Your inquiry has been logged into the village council liaison system for {selectedLocal.village}. You will receive a direct WhatsApp/SMS confirmation from the local village representative.
                </p>
                <button
                  onClick={() => setSelectedLocal(null)}
                  className='px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs text-white transition-colors'
                >
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