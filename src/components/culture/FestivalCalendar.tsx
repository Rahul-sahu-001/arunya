import React, { useState } from 'react';
import { FESTIVALS } from '../../data/festivals';
import { Festival, FestivalStatus } from '../../types';
import { Calendar, MapPin, ShieldAlert, Camera, Filter } from 'lucide-react';

export const FestivalCalendar: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<number | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<FestivalStatus | 'all'>('all');

  const months = [
    { num: 1, name: 'Jan' }, { num: 2, name: 'Feb' }, { num: 3, name: 'Mar' },
    { num: 4, name: 'Apr' }, { num: 5, name: 'May' }, { num: 6, name: 'Jun' },
    { num: 7, name: 'Jul' }, { num: 8, name: 'Aug' }, { num: 9, name: 'Sep' },
    { num: 10, name: 'Oct' }, { num: 11, name: 'Nov' }, { num: 12, name: 'Dec' }
  ];

  const filteredFestivals = FESTIVALS.filter(f => {
    const matchMonth = selectedMonth === 'all' || f.month === selectedMonth;
    const matchStatus = statusFilter === 'all' || f.status === statusFilter;
    return matchMonth && matchStatus;
  });

  return (
    <section id='festival-calendar' className='py-24 bg-[#07131D] text-[#EEF3F0] relative border-t border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6'>
          <div>
            <span className='font-mono text-xs uppercase tracking-[0.25em] text-[#E5A93C] font-semibold block mb-2'>
              VERIFIED TIMELINE (JAN — DEC)
            </span>
            <h2 className='font-serif text-3xl sm:text-5xl font-light text-white leading-tight'>
              Festivals of Arunachal
            </h2>
            <p className='text-sm text-[#98A7A0] max-w-xl mt-2 font-light'>
              Agricultural fertility rites, shamanic invocations, and mask-danced celebrations. All dates are verified against community calendars.
            </p>
          </div>

          <div className='flex items-center gap-1 overflow-x-auto pb-2 no-scrollbar'>
            <button
              onClick={() => setSelectedMonth('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                selectedMonth === 'all'
                  ? 'bg-[#E5A93C] text-[#07131D] font-bold'
                  : 'glass-panel text-gray-300 hover:text-white'
              }`}
            >
              All
            </button>
            {months.map(m => (
              <button
                key={m.num}
                onClick={() => setSelectedMonth(m.num)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  selectedMonth === m.num
                    ? 'bg-[#C2593F] text-white font-bold'
                    : 'glass-panel text-gray-400 hover:text-white'
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredFestivals.map(fest => (
            <div
              key={fest.id}
              className='rounded-3xl bg-[#091824] border border-white/15 overflow-hidden flex flex-col justify-between shadow-2xl hover:border-[#E5A93C]/40 transition-all group'
            >
              <div className='relative h-48 overflow-hidden'>
                <img src={fest.image} alt={fest.name} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' />
                <div className='absolute inset-0 bg-gradient-to-t from-[#091824] via-transparent to-transparent' />
                <div className='absolute top-3 left-3 right-3 flex items-center justify-between'>
                  <span className='px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#E5A93C]'>
                    {fest.community} Tribe
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                    fest.status === 'Confirmed' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  }`}>
                    {fest.status}
                  </span>
                </div>
              </div>

              <div className='p-6 space-y-4 flex-1 flex flex-col justify-between'>
                <div className='space-y-2'>
                  <div className='flex items-center gap-2 text-xs font-mono text-[#F3BA54]'>
                    <Calendar className='w-3.5 h-3.5' /> {fest.approximateDate} ({fest.duration})
                  </div>
                  <h3 className='font-serif text-2xl text-white font-normal group-hover:text-[#F3BA54] transition-colors'>
                    {fest.name}
                  </h3>
                  <p className='text-xs text-[#98A7A0] leading-relaxed font-light line-clamp-2'>
                    {fest.culturalMeaning}
                  </p>
                </div>

                <div className='space-y-3 pt-3 border-t border-white/10 text-xs'>
                  <div className='flex items-start gap-2 text-gray-300 font-light'>
                    <MapPin className='w-3.5 h-3.5 text-[#E5A93C] flex-shrink-0 mt-0.5' />
                    <span>{fest.location} ({fest.district})</span>
                  </div>
                  <div className='p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5'>
                    <div className='flex items-center gap-1.5 text-[11px] text-[#F3BA54] font-mono'>
                      <Camera className='w-3.5 h-3.5' /> Photography Protocol
                    </div>
                    <p className='text-[11px] text-gray-400 font-light'>{fest.photographyRule}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};