import React from 'react';
import { ShieldCheck, HeartHandshake, Leaf, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className='bg-[#050E16] text-[#EEF3F0] pt-20 pb-12 border-t border-white/10 relative overflow-hidden'>
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-[#E5A93C]/5 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute top-0 left-0 w-96 h-96 bg-[#0A231C]/20 rounded-full blur-3xl pointer-events-none' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10'>
          <div className='lg:col-span-2 space-y-4'>
            <div className='flex items-center gap-3'>
              <div className='w-9 h-9 rounded-xl bg-gradient-to-br from-[#E5A93C] to-[#C2593F] flex items-center justify-center font-serif text-lg font-bold text-[#07131D]'>
                A
              </div>
              <div>
                <span className='font-display tracking-widest text-2xl font-bold text-white block'>
                  ARUNYA
                </span>
                <span className='font-mono text-[10px] tracking-[0.25em] text-[#E5A93C] block'>
                  Beyond The Map
                </span>
              </div>
            </div>
            <p className='text-sm text-[#98A7A0] leading-relaxed max-w-sm'>
              Dedicated to rural, hidden, and culturally rich destinations of Arunachal Pradesh. We promote responsible community-based tourism, keeping value directly in the hands of village homestay custodians and tribal guardians.
            </p>
            <div className='p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 max-w-sm'>
              <div className='flex items-center gap-2 text-xs font-semibold text-[#F3BA54]'>
                <ShieldCheck className='w-4 h-4' />
                <span>Official Verification Notice</span>
              </div>
              <p className='text-[11px] text-gray-400 leading-normal'>
                Travel requirements, permits (ILP/PAP), and festival dates can change. Always verify current state road and border advisories before traveling.
              </p>
            </div>
          </div>

          <div>
            <h4 className='font-mono text-xs uppercase tracking-widest text-[#E5A93C] mb-4 font-semibold'>
              EXPLORE
            </h4>
            <ul className='space-y-2.5 text-xs text-gray-300'>
              <li><button onClick={() => scrollTo('interactive-map')} className='hover:text-white transition-colors'>Artistic Topographic Map</button></li>
              <li><button onClick={() => scrollTo('beyond-the-map')} className='hover:text-white transition-colors'>Beyond The Map Carousel</button></li>
              <li><button onClick={() => scrollTo('districts-explorer')} className='hover:text-white transition-colors'>District by District</button></li>
              <li><button onClick={() => scrollTo('festival-calendar')} className='hover:text-white transition-colors'>12-Month Festival Calendar</button></li>
              <li><button onClick={() => scrollTo('trails-adventure')} className='hover:text-white transition-colors'>High Altitude Trails</button></li>
            </ul>
          </div>

          <div>
            <h4 className='font-mono text-xs uppercase tracking-widest text-[#E5A93C] mb-4 font-semibold'>
              EXPERIENCE & PLAN
            </h4>
            <ul className='space-y-2.5 text-xs text-gray-300'>
              <li><button onClick={() => scrollTo('stories-archive')} className='hover:text-white transition-colors'>Mountain Audio Stories</button></li>
              <li><button onClick={() => scrollTo('meet-the-locals')} className='hover:text-white transition-colors'>Meet the Village Custodians</button></li>
              <li><button onClick={() => scrollTo('taste-arunachal')} className='hover:text-white transition-colors'>Taste Arunachal Food Lore</button></li>
              <li><button onClick={() => scrollTo('mountain-artisans')} className='hover:text-white transition-colors'>Made in the Mountains Crafts</button></li>
              <li><button onClick={() => scrollTo('ai-planner')} className='hover:text-white transition-colors text-[#F3BA54] font-medium'>AI Bespoke Trip Planner</button></li>
              <li><button onClick={() => scrollTo('permit-info')} className='hover:text-white transition-colors'>ILP / PAP Permit Guidelines</button></li>
            </ul>
          </div>

          <div>
            <h4 className='font-mono text-xs uppercase tracking-widest text-[#E5A93C] mb-4 font-semibold'>
              COMMUNITY & ETHICS
            </h4>
            <ul className='space-y-2.5 text-xs text-gray-300'>
              <li><button onClick={() => scrollTo('impact-dashboard')} className='hover:text-white transition-colors'>Economic Retention Dashboard</button></li>
              <li><button onClick={() => scrollTo('responsible-travel')} className='hover:text-white transition-colors'>8 Mountain Ethics Principles</button></li>
              <li><button onClick={() => scrollTo('offline-pack')} className='hover:text-white transition-colors'>Offline Mountain Pack</button></li>
              <li><button onClick={() => scrollTo('local-phrases')} className='hover:text-white transition-colors'>Local Tribal Phrasebook</button></li>
              <li><a href='https://arunachalilp.com' target='_blank' rel='noopener noreferrer' className='hover:text-white transition-colors inline-flex items-center gap-1 text-[#E5A93C]'>Official eILP Portal <ArrowUpRight className='w-3 h-3' /></a></li>
            </ul>
          </div>
        </div>

        <div className='pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400'>
          <div className='flex items-center gap-4'>
            <span className='flex items-center gap-1.5 text-[#E8DCC9]'><Leaf className='w-3.5 h-3.5 text-emerald-400' /> 100% Community-Based</span>
            <span className='flex items-center gap-1.5 text-[#E8DCC9]'><HeartHandshake className='w-3.5 h-3.5 text-[#C2593F]' /> Direct Host Compensation</span>
          </div>
          <div className='font-mono text-[11px] text-gray-400'>
            © 2026 ARUNYA Platform. Dedicated to the indigenous cultural guardianship of Arunachal Pradesh.
          </div>
        </div>
      </div>
    </footer>
  );
};