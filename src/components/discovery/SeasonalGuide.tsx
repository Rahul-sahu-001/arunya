import React, { useState } from 'react';
import { SEASONAL_GUIDE } from '../../data/seasonal';
import { Calendar, Sun, CloudRain, Snowflake, Thermometer, Compass, Sparkles } from 'lucide-react';

export const SeasonalGuide: React.FC = () => {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number>(10); // Default October (Golden Month)

  const currentMonth = SEASONAL_GUIDE.find(m => m.monthIndex === selectedMonthIndex) || SEASONAL_GUIDE[0];

  return (
    <section className='py-24 bg-[#050E16] text-[#EEF3F0] relative border-t border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6'>
          <div>
            <span className='font-mono text-xs uppercase tracking-[0.25em] text-[#E5A93C] font-semibold block mb-2'>
              TEMPORAL RHYTHMS
            </span>
            <h2 className='font-serif text-3xl sm:text-5xl font-light text-white leading-tight'>
              What’s Alive Right Now?
            </h2>
            <p className='text-sm text-[#98A7A0] max-w-xl mt-2 font-light'>
              From spring rhododendron blooms to autumn golden harvests and winter hearths: select a month to see seasonal mountain life.
            </p>
          </div>
        </div>

        {/* Month Picker Pills */}
        <div className='flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-8'>
          {SEASONAL_GUIDE.map(month => (
            <button
              key={month.monthIndex}
              onClick={() => setSelectedMonthIndex(month.monthIndex)}
              className={`px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedMonthIndex === month.monthIndex
                  ? 'bg-gradient-to-r from-[#E5A93C] to-[#C2593F] text-[#07131D] font-bold shadow-lg shadow-[#E5A93C]/20'
                  : 'glass-panel text-gray-300 hover:text-white hover:border-white/20'
              }`}
            >
              {month.monthName}
            </button>
          ))}
        </div>

        {/* Month Showcase Card */}
        <div className='rounded-3xl bg-[#091824] border border-white/15 p-6 sm:p-10 shadow-2xl space-y-8 animate-fade-in'>
          <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10'>
            <div>
              <span className='font-mono text-xs text-[#F3BA54] uppercase tracking-wider block mb-1'>
                Season Tag: {currentMonth.seasonTag}
              </span>
              <h3 className='font-serif text-3xl sm:text-4xl text-white font-light'>
                {currentMonth.monthName} in Arunachal
              </h3>
            </div>
            <div className='flex items-center gap-3 font-mono text-xs px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-gray-300'>
              <Thermometer className='w-4 h-4 text-[#E5A93C]' />
              <span>Avg Temperature: <strong>{currentMonth.temperatureRange}</strong></span>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2'>
              <h4 className='font-mono text-xs uppercase text-[#E5A93C] font-semibold'>Landscape & Skies</h4>
              <p className='text-xs text-gray-300 font-light leading-relaxed'>{currentMonth.landscapeDescription}</p>
              <p className='text-[11px] text-gray-400 font-mono pt-2'>Weather: {currentMonth.weatherCondition}</p>
            </div>
            <div className='p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2'>
              <h4 className='font-mono text-xs uppercase text-emerald-400 font-semibold'>Flora, Fauna & Food</h4>
              <p className='text-xs text-gray-300 font-light leading-relaxed'>{currentMonth.floraFauna}</p>
              <div className='pt-2'>
                <span className='font-mono text-[10px] text-gray-400 block mb-1'>Seasonal Comfort Foods:</span>
                <div className='flex flex-wrap gap-1'>
                  {currentMonth.seasonalFoods.map((f, i) => (
                    <span key={i} className='px-2 py-0.5 rounded bg-black/40 text-[10px] text-[#E8DCC9]'>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className='p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2'>
              <h4 className='font-mono text-xs uppercase text-[#F3BA54] font-semibold'>Recommended Valleys</h4>
              <ul className='space-y-1 text-xs text-gray-300'>
                {currentMonth.recommendedRegions.map((r, i) => <li key={i}>• {r}</li>)}
              </ul>
              <div className='p-3 rounded-xl bg-[#0A231C]/60 border border-[#E5A93C]/20 text-[11px] text-gray-300 mt-3'>
                <strong className='text-[#F3BA54] block mb-0.5'>Mountain Advisory:</strong>
                {currentMonth.travelTip}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};