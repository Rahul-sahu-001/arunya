import React, { useState } from 'react';
import { HeartHandshake, ShieldCheck, Leaf, Users, Award, TrendingUp } from 'lucide-react';

export const ImpactDashboard: React.FC = () => {
  const [days, setDays] = useState(5);
  const [travelers, setTravelers] = useState(2);

  // Realistic community-based tourism multipliers in rural Arunachal
  const dailyPerPersonSpendINR = 2800; // Fair homestay + food + guide rate
  const communityRetentionRate = 0.88; // 88% stays in village hands vs ~15% in conventional commercial packages
  const totalCommunityINR = Math.round(days * travelers * dailyPerPersonSpendINR * communityRetentionRate);
  const localMealsSourced = days * travelers * 3;
  const plasticAvoidedKg = (days * travelers * 2.5).toFixed(1);
  const guideDaysEmployed = Math.round(days * 0.85);

  return (
    <section id='impact-dashboard' className='py-24 bg-[#07131D] text-[#EEF3F0] relative border-t border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-12'>
          <span className='font-mono text-xs uppercase tracking-[0.25em] text-[#E5A93C] font-semibold block mb-2'>
            TRANSPARENT REGENERATIVE METRICS
          </span>
          <h2 className='font-serif text-3xl sm:text-5xl font-light text-white leading-tight'>
            Your Journey Created
          </h2>
          <p className='text-sm text-[#98A7A0] max-w-xl mt-2 font-light'>
            Calculate the real-world economic and environmental footprint of your expedition. Move the sliders to see what responsible travel creates.
          </p>
        </div>

        <div className='rounded-3xl bg-[#091824] border border-white/15 p-6 sm:p-10 shadow-2xl space-y-10'>
          {/* Interactive Sliders */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-white/10'>
            <div className='space-y-3'>
              <div className='flex justify-between text-xs font-mono'>
                <span className='text-gray-300'>Expedition Duration</span>
                <span className='text-[#E5A93C] font-bold text-sm'>{days} Days</span>
              </div>
              <input
                type='range'
                min='2'
                max='14'
                value={days}
                onChange={e => setDays(Number(e.target.value))}
                className='w-full accent-[#E5A93C]'
              />
            </div>
            <div className='space-y-3'>
              <div className='flex justify-between text-xs font-mono'>
                <span className='text-gray-300'>Party Size</span>
                <span className='text-[#E5A93C] font-bold text-sm'>{travelers} Travellers</span>
              </div>
              <input
                type='range'
                min='1'
                max='8'
                value={travelers}
                onChange={e => setTravelers(Number(e.target.value))}
                className='w-full accent-[#E5A93C]'
              />
            </div>
          </div>

          {/* Big Highlight Quote */}
          <div className='p-6 sm:p-8 rounded-2xl bg-[#0A231C]/60 border border-[#E5A93C]/30 text-center space-y-2'>
            <span className='font-mono text-xs uppercase tracking-widest text-[#F3BA54] font-semibold'>
              ESTIMATED DIRECT IMPACT
            </span>
            <div className='font-serif text-3xl sm:text-5xl text-white font-light'>
              “Your {days}-day journey keeps <strong className='text-[#E5A93C] font-semibold'>₹{totalCommunityINR.toLocaleString()}</strong> within local village hands.”
            </div>
            <p className='text-xs text-gray-400 font-mono pt-1'>
              88% Community Retention Ratio vs ~15% in conventional metropolitan tour booking agencies.
            </p>
          </div>

          {/* Metric Cards */}
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
            <div className='p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1.5'>
              <div className='flex items-center gap-2 text-xs font-mono text-[#E5A93C]'>
                <HeartHandshake className='w-4 h-4' /> Village Economy
              </div>
              <div className='text-2xl sm:text-3xl font-serif text-white font-normal'>₹{totalCommunityINR.toLocaleString()}</div>
              <div className='text-[11px] text-gray-400 font-light'>Direct host & guide earnings</div>
            </div>

            <div className='p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1.5'>
              <div className='flex items-center gap-2 text-xs font-mono text-emerald-400'>
                <Leaf className='w-4 h-4' /> Plastic Avoided
              </div>
              <div className='text-2xl sm:text-3xl font-serif text-white font-normal'>{plasticAvoidedKg} kg</div>
              <div className='text-[11px] text-gray-400 font-light'>Via boiled spring refill stations</div>
            </div>

            <div className='p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1.5'>
              <div className='flex items-center gap-2 text-xs font-mono text-[#38BDF8]'>
                <Award className='w-4 h-4' /> Meals Sourced
              </div>
              <div className='text-2xl sm:text-3xl font-serif text-white font-normal'>{localMealsSourced}</div>
              <div className='text-[11px] text-gray-400 font-light'>100% organic family farm-to-table</div>
            </div>

            <div className='p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1.5'>
              <div className='flex items-center gap-2 text-xs font-mono text-[#F3BA54]'>
                <Users className='w-4 h-4' /> Guide Days
              </div>
              <div className='text-2xl sm:text-3xl font-serif text-white font-normal'>{guideDaysEmployed} Days</div>
              <div className='text-[11px] text-gray-400 font-light'>Fair wages paid to certified locals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};