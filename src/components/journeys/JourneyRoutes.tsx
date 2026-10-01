import React, { useState } from 'react';
import { ROUTES } from '../../data/routes';
import { TravelRoute, RouteStep } from '../../types';
import { Compass, Clock, MapPin, ArrowRight, CheckCircle2, SlidersHorizontal, Sparkles } from 'lucide-react';

export const JourneyRoutes: React.FC<{ onPlanCustomRoute: (route: TravelRoute) => void }> = ({ onPlanCustomRoute }) => {
  const [selectedRouteId, setSelectedRouteId] = useState<string>(ROUTES[0].id);
  const activeRoute = ROUTES.find(r => r.id === selectedRouteId) || ROUTES[0];

  return (
    <section id='travel-routes' className='py-24 bg-[#07131D] text-[#EEF3F0] relative border-t border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-12'>
          <span className='font-mono text-xs uppercase tracking-[0.25em] text-[#E5A93C] font-semibold block mb-2'>
            THEMATIC EXPEDITIONS
          </span>
          <h2 className='font-serif text-3xl sm:text-5xl font-light text-white leading-tight'>
            Journeys, Not Itineraries
          </h2>
          <p className='text-sm text-[#98A7A0] max-w-xl mt-2 font-light'>
            Instead of commercial packages, follow narrative journeys structured by mountain confluences, village homestays, and indigenous craft traditions.
          </p>
        </div>

        {/* Route Selector Tabs */}
        <div className='flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-8'>
          {ROUTES.map(route => (
            <button
              key={route.id}
              onClick={() => setSelectedRouteId(route.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedRouteId === route.id
                  ? 'bg-[#E5A93C] text-[#07131D] shadow-lg shadow-[#E5A93C]/20 font-bold'
                  : 'glass-panel text-gray-300 hover:text-white hover:border-white/20'
              }`}
            >
              {route.title} ({route.durationDays} Days)
            </button>
          ))}
        </div>

        {/* Active Journey Showcase */}
        <div className='rounded-3xl bg-[#091824] border border-white/15 p-6 sm:p-10 shadow-2xl space-y-8 animate-fade-in'>
          <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10'>
            <div className='space-y-2'>
              <div className='flex items-center gap-3 font-mono text-xs text-[#F3BA54]'>
                <span className='flex items-center gap-1'><Clock className='w-3.5 h-3.5' /> {activeRoute.durationDays} Days</span>
                <span>•</span>
                <span>Style: {activeRoute.style}</span>
                <span>•</span>
                <span>Difficulty: {activeRoute.difficulty}</span>
              </div>
              <h3 className='font-serif text-3xl sm:text-4xl text-white font-light'>
                {activeRoute.title}
              </h3>
              <p className='text-sm text-gray-300 font-light max-w-2xl'>
                {activeRoute.subtitle} Cultural Focus: <strong className='text-[#E8DCC9]'>{activeRoute.culturalFocus}</strong>
              </p>
            </div>

            <button
              onClick={() => onPlanCustomRoute(activeRoute)}
              className='px-6 py-3 rounded-full bg-gradient-to-r from-[#E5A93C] to-[#C2593F] text-[#07131D] text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-lg flex items-center justify-center gap-2 flex-shrink-0'
            >
              <SlidersHorizontal className='w-4 h-4' /> Customize in AI Planner
            </button>
          </div>

          {/* Horizontal Journey Line Node Steps */}
          <div className='space-y-4'>
            <h4 className='font-mono text-xs uppercase tracking-widest text-[#E5A93C] font-semibold'>
              EXPEDITION WAYPOINTS & LIVING STOPS
            </h4>
            <div className='relative'>
              {/* Timeline Connector Track */}
              <div className='hidden lg:block absolute top-6 left-6 right-6 h-0.5 bg-gradient-to-r from-[#E5A93C] via-[#C2593F] to-emerald-500 opacity-40 z-0' />

              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10'>
                {activeRoute.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className='p-5 rounded-2xl bg-[#07131D]/80 backdrop-blur-md border border-white/10 hover:border-[#E5A93C]/40 transition-all space-y-2.5 relative group'
                  >
                    <div className='flex items-center justify-between'>
                      <span className='w-7 h-7 rounded-full bg-[#E5A93C] text-[#07131D] text-xs font-mono font-bold flex items-center justify-center shadow-md'>
                        {step.stepNumber}
                      </span>
                      <span className='px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-gray-400 capitalize'>
                        {step.type}
                      </span>
                    </div>
                    <h5 className='font-serif text-lg text-white font-medium group-hover:text-[#F3BA54] transition-colors'>
                      {step.title}
                    </h5>
                    <div className='flex items-center gap-1 text-[11px] font-mono text-[#E8DCC9]'>
                      <MapPin className='w-3 h-3 text-[#E5A93C]' /> {step.location}
                    </div>
                    <p className='text-xs text-[#98A7A0] font-light leading-relaxed'>{step.description}</p>
                    {step.altitude && (
                      <div className='font-mono text-[10px] text-gray-400 pt-1'>
                        Elevation: {step.altitude}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};