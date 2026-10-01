import React from 'react';
import { RESPONSIBLE_GUIDELINES } from '../../data/responsibleTravel';
import { ShieldCheck, HeartHandshake, Leaf } from 'lucide-react';

export const ResponsibleTravel: React.FC = () => {
  return (
    <section id='responsible-travel' className='py-24 bg-[#050E16] text-[#EEF3F0] relative border-t border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-12'>
          <span className='font-mono text-xs uppercase tracking-[0.25em] text-[#E5A93C] font-semibold block mb-2'>
            MOUNTAIN ETHICS
          </span>
          <h2 className='font-serif text-3xl sm:text-5xl font-light text-white leading-tight'>
            Leave the Mountains Better
          </h2>
          <p className='text-sm text-[#98A7A0] max-w-xl mt-2 font-light'>
            Responsible travel is not an afterthought in Arunachal; it is the fundamental price of admission into ancient animist forests and living tribal longhouses.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {RESPONSIBLE_GUIDELINES.map(rule => (
            <div
              key={rule.id}
              className='p-6 rounded-3xl bg-[#091824] border border-white/15 space-y-3 hover:border-[#E5A93C]/40 transition-all shadow-xl group'
            >
              <div className='text-3xl mb-1'>{rule.icon}</div>
              <h3 className='font-serif text-xl text-white font-normal group-hover:text-[#F3BA54] transition-colors'>
                {rule.title}
              </h3>
              <p className='text-xs font-semibold text-[#E5A93C] font-mono'>
                {rule.summary}
              </p>
              <p className='text-xs text-[#98A7A0] font-light leading-relaxed'>
                {rule.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};