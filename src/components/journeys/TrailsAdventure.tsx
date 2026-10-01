import React, { useState } from 'react';
import { TRAILS } from '../../data/trails';
import { Trail } from '../../types';
import { Mountain, Compass, ShieldAlert, Droplets, CheckCircle2, ChevronRight } from 'lucide-react';

export const TrailsAdventure: React.FC = () => {
  const [selectedTrail, setSelectedTrail] = useState<Trail>(TRAILS[0]);

  return (
    <section id='trails-adventure' className='py-24 bg-[#050E16] text-[#EEF3F0] relative border-t border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-12'>
          <span className='font-mono text-xs uppercase tracking-[0.25em] text-[#E5A93C] font-semibold block mb-2'>
            HIGH ALTITUDE ADVENTURE
          </span>
          <h2 className='font-serif text-3xl sm:text-5xl font-light text-white leading-tight'>
            Highland Trails & Glacial Expeditions
          </h2>
          <p className='text-sm text-[#98A7A0] max-w-xl mt-2 font-light'>
            From the sacred glacial Seven Lakes of Dibang Valley to historic Monpa trade tracks across alpine passes. Always trek with local community guides.
          </p>
        </div>

        {/* Trail Selector */} 
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8'>
          {TRAILS.map(trail => (
            <div
              key={trail.id}
              onClick={() => setSelectedTrail(trail)}
              className={`p-6 rounded-3xl cursor-pointer transition-all duration-300 border ${
                selectedTrail.id === trail.id
                  ? 'bg-[#091824] border-[#E5A93C] shadow-2xl shadow-[#E5A93C]/15'
                  : 'bg-[#091824]/60 border-white/10 hover:border-white/20'
              }`}
            >
              <div className='flex items-center justify-between mb-2'>
                <span className='px-2.5 py-0.5 rounded-full bg-[#E5A93C]/20 text-[#F3BA54] font-mono text-[10px] uppercase font-bold'>
                  {trail.difficulty}
                </span>
                <span className='font-mono text-xs text-gray-400'>{trail.durationDays}</span>
              </div>
              <h3 className='font-serif text-2xl text-white font-normal mb-1'>{trail.name}</h3>
              <p className='text-xs text-gray-400 font-mono'>{trail.district} District • {trail.distanceKm} km</p>
            </div>
          ))}
        </div>

        {/* Active Trail Dossier & Elevation Profile */}
        <div className='rounded-3xl bg-[#091824] border border-white/15 p-6 sm:p-10 shadow-2xl space-y-8 animate-fade-in'>
          <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10'>
            <div>
              <div className='font-mono text-xs text-[#F3BA54] mb-1'>
                Max Altitude: {selectedTrail.maxElevationMeters} m ({Math.round(selectedTrail.maxElevationMeters * 3.28084)} ft) | Season: {selectedTrail.bestSeason}
              </div>
              <h3 className='font-serif text-3xl sm:text-4xl text-white font-light'>
                {selectedTrail.name}
              </h3>
            </div>
            <div className='flex items-center gap-3 font-mono text-xs'>
              <span className='px-3.5 py-1.5 rounded-full bg-red-950/60 text-red-300 border border-red-500/30'>
                Guide: {selectedTrail.guideRequirement}
              </span>
            </div>
          </div>

          {/* Elevation Profile Visual SVG Curve */}
          <div className='space-y-3'>
            <h4 className='font-mono text-xs uppercase tracking-widest text-[#E5A93C] font-semibold flex items-center gap-2'>
              <Mountain className='w-4 h-4' /> Interactive Elevation Profile (Altitude vs Distance)
            </h4>
            <div className='p-6 rounded-2xl bg-black/40 border border-white/10 relative overflow-hidden'>
              <svg viewBox='0 0 800 240' className='w-full h-48'>
                <defs>
                  <linearGradient id='trailElevationGrad' x1='0%' y1='0%' x2='0%' y2='100%'>
                    <stop offset='0%' stopColor='#E5A93C' stopOpacity='0.5' />
                    <stop offset='100%' stopColor='#0A231C' stopOpacity='0.05' />
                  </linearGradient>
                </defs>
                {/* Grid guidelines */}
                <line x1='50' y1='30' x2='750' y2='30' stroke='rgba(255,255,255,0.06)' strokeDasharray='3 3' />
                <line x1='50' y1='100' x2='750' y2='100' stroke='rgba(255,255,255,0.06)' strokeDasharray='3 3' />
                <line x1='50' y1='170' x2='750' y2='170' stroke='rgba(255,255,255,0.06)' strokeDasharray='3 3' />

                {/* Elevation Area Polygon */}
                <polygon
                  points='50,180 150,130 300,90 480,40 620,30 750,180'
                  fill='url(#trailElevationGrad)'
                />
                {/* Elevation Curve Line */}
                <polyline
                  points='50,180 150,130 300,90 480,40 620,30 750,180'
                  fill='none'
                  stroke='#E5A93C'
                  strokeWidth='3'
                  strokeLinecap='round'
                />

                {/* Key Waypoint Elevation Markers */}
                <circle cx='50' cy='180' r='5' fill='#EEF3F0' />
                <text x='50' y='210' fill='#98A7A0' fontSize='10' fontFamily='JetBrains Mono' textAnchor='middle'>Start Point</text>

                <circle cx='480' cy='40' r='6' fill='#F97316' />
                <text x='480' y='25' fill='#F3BA54' fontSize='11' fontFamily='JetBrains Mono' textAnchor='middle'>Peak Ridge (4,020 m)</text>

                <circle cx='750' cy='180' r='5' fill='#EEF3F0' />
                <text x='750' y='210' fill='#98A7A0' fontSize='10' fontFamily='JetBrains Mono' textAnchor='middle'>Descent Base</text>
              </svg>
            </div>
          </div>

          {/* Details & Safety Protocols */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-xs'>
            <div className='p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5'>
              <span className='font-mono uppercase text-[#38BDF8] font-semibold flex items-center gap-1.5'>
                <Droplets className='w-3.5 h-3.5' /> Water Availability
              </span>
              <p className='text-gray-300 font-light leading-relaxed'>{selectedTrail.waterPoints}</p>
            </div>
            <div className='p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5'>
              <span className='font-mono uppercase text-[#E5A93C] font-semibold flex items-center gap-1.5'>
                <Compass className='w-3.5 h-3.5' /> Permits Required
              </span>
              <p className='text-gray-300 font-light leading-relaxed'>{selectedTrail.permits}</p>
            </div>
            <div className='p-4 rounded-xl bg-[#091426] border border-blue-500/20 space-y-1.5'>
              <span className='font-mono uppercase text-sky-400 font-semibold flex items-center gap-1.5'>
                <ShieldAlert className='w-3.5 h-3.5' /> High Ridge Safety
              </span>
              <ul className='space-y-1 text-gray-300 font-light'>
                {selectedTrail.safetyNotes.map((s, i) => <li key={i}>• {s}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};