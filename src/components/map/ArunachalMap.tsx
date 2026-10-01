import React, { useState } from 'react';
import { DESTINATIONS } from '../../data/destinations';
import { Destination } from '../../types';
import { DestinationDrawer } from './DestinationDrawer';
import { MountainRelief3D } from '../3d/MountainRelief3D';
import { MapPin, Compass, ZoomIn, ZoomOut, RefreshCw, Filter, Layers, Info, Box } from 'lucide-react';

export const ArunachalMap: React.FC<{ onPlanTripForDestination: (dest: Destination) => void }> = ({ onPlanTripForDestination }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'2d' | '3d'>('2d');

  const filteredDestinations = selectedCategory === 'all'
    ? DESTINATIONS
    : DESTINATIONS.filter(d => d.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Markers' },
    { id: 'village', label: 'Hidden Villages' },
    { id: 'culture', label: 'Cultural Regions' },
    { id: 'trek', label: 'Trekking Trails' },
    { id: 'food', label: 'Food & Orchards' }
  ];

  return (
    <section id='interactive-map' className='py-20 relative bg-[#07131D] overflow-hidden border-t border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4'>
          <div>
            <div className='flex items-center gap-2 mb-3'>
              <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/20 text-[#F3BA54] font-mono text-[11px] uppercase tracking-widest'>
                <Compass className='w-3.5 h-3.5' /> Artistic Topographic Atlas
              </div>

              {/* 2D / 3D Mode Toggle Switch */}
              <div className='flex items-center p-1 rounded-full bg-[#091824] border border-white/15 shadow-inner'>
                <button
                  onClick={() => setViewMode('2d')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    viewMode === '2d'
                      ? 'bg-[#E5A93C] text-[#07131D] font-bold shadow-md'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  2D Topo
                </button>
                <button
                  onClick={() => setViewMode('3d')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                    viewMode === '3d'
                      ? 'bg-gradient-to-r from-[#E5A93C] to-[#C2593F] text-[#07131D] font-bold shadow-md'
                      : 'text-[#E5A93C] hover:text-white'
                  }`}
                >
                  <Box className='w-3.5 h-3.5' />
                  <span>3D Relief Flight</span>
                </button>
              </div>
            </div>

            <h2 className='font-serif text-3xl sm:text-5xl font-light text-white'>
              Interactive Arunachal Map
            </h2>
            <p className='text-sm text-[#98A7A0] max-w-xl mt-2 font-light'>
              {viewMode === '3d'
                ? 'Interactive 3D Himalayan topographic relief. Drag to orbit, scroll to zoom, and explore glowing 3D coordinates.'
                : 'Explore glowing coordinates across 26 districts. Click any marker to open village dossiers, tribal lineages, access routes, and responsible travel codes.'}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className='flex flex-wrap items-center gap-2'>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#E5A93C] text-[#07131D] font-bold shadow-lg shadow-[#E5A93C]/25'
                    : 'glass-panel text-gray-300 hover:text-white hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Map Canvas Frame */}
        <div className='relative w-full rounded-3xl bg-[#091824] border border-white/15 overflow-hidden shadow-2xl min-h-[580px] sm:min-h-[660px] flex items-center justify-center'>
          {viewMode === '3d' ? (
            <MountainRelief3D
              onSelectDestination={setSelectedDestination}
              selectedCategory={selectedCategory}
            />
          ) : (
            <>
          {/* Topographic Background Contour SVG */}
          <div
            className='absolute inset-0 w-full h-full transition-transform duration-500 ease-out origin-center select-none'
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <svg viewBox='0 0 1000 620' className='w-full h-full object-contain pointer-events-none'>
              <defs>
                <linearGradient id='contourGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
                  <stop offset='0%' stopColor='#E5A93C' stopOpacity='0.25' />
                  <stop offset='50%' stopColor='#C2593F' stopOpacity='0.15' />
                  <stop offset='100%' stopColor='#0A231C' stopOpacity='0.3' />
                </linearGradient>
                <linearGradient id='riverGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
                  <stop offset='0%' stopColor='#38BDF8' stopOpacity='0.8' />
                  <stop offset='100%' stopColor='#0284C7' stopOpacity='0.4' />
                </linearGradient>
              </defs>

              {/* Arunachal Outline Path (Stylized High-Relief Cartography) */}
              <path
                d='M 120 420 Q 140 360 170 340 L 190 300 Q 230 270 270 260 L 340 280 Q 420 230 460 180 L 510 140 Q 560 110 630 110 L 680 130 Q 750 160 810 210 L 890 270 Q 940 330 920 400 L 870 440 Q 820 460 760 480 L 670 470 Q 580 520 470 510 L 360 520 Q 240 500 160 470 Z'
                fill='rgba(10, 35, 28, 0.45)'
                stroke='rgba(229, 169, 60, 0.35)'
                strokeWidth='2'
                strokeDasharray='4 3'
              />

              {/* Inner Mountain Contour Rings (Elevation Lines) */}
              <path
                d='M 160 400 Q 220 310 320 290 Q 450 240 530 180 Q 640 160 760 230 Q 860 300 870 380 Q 800 440 680 440 Q 520 480 340 480 Z'
                fill='none'
                stroke='url(#contourGrad)'
                strokeWidth='1.5'
              />
              <path
                d='M 210 370 Q 270 330 380 310 Q 500 270 580 220 Q 680 200 780 270 Q 830 340 820 390 Q 720 410 590 440 Q 410 440 280 430 Z'
                fill='none'
                stroke='url(#contourGrad)'
                strokeWidth='1'
              />
              <path
                d='M 280 350 Q 360 330 450 300 Q 540 270 640 260 Q 720 290 770 340 Q 720 380 610 390 Q 480 400 340 390 Z'
                fill='none'
                stroke='url(#contourGrad)'
                strokeWidth='0.8'
              />

              {/* Major Rivers Drawn with Flow Paths */}
              {/* 1. Mighty Siang River */}
              <path
                d='M 620 115 Q 630 180 590 240 Q 560 310 580 380 Q 610 440 630 520'
                fill='none'
                stroke='url(#riverGrad)'
                strokeWidth='3.5'
                strokeLinecap='round'
              />
              <text x='600' y='290' fill='#38BDF8' fontSize='11' fontFamily='JetBrains Mono' opacity='0.75'>Siang (Tsangpo) River</text>

              {/* 2. Subansiri River */}
              <path
                d='M 460 180 Q 440 260 410 330 Q 430 400 390 490'
                fill='none'
                stroke='url(#riverGrad)'
                strokeWidth='2.5'
              />
              <text x='380' y='360' fill='#38BDF8' fontSize='10' fontFamily='JetBrains Mono' opacity='0.7'>Subansiri River</text>

              {/* 3. Lohit River */}
              <path
                d='M 910 280 Q 860 340 820 410 Q 770 450 710 490'
                fill='none'
                stroke='url(#riverGrad)'
                strokeWidth='2.8'
              />
              <text x='820' y='350' fill='#38BDF8' fontSize='10' fontFamily='JetBrains Mono' opacity='0.7'>Lohit River</text>

              {/* 4. Dibang River */}
              <path
                d='M 740 180 Q 720 260 710 340 Q 690 410 660 480'
                fill='none'
                stroke='url(#riverGrad)'
                strokeWidth='2.2'
              />
              <text x='725' y='270' fill='#38BDF8' fontSize='10' fontFamily='JetBrains Mono' opacity='0.7'>Dibang River</text>

              {/* 5. Kameng River */}
              <path
                d='M 230 270 Q 200 330 180 390 Q 160 440 150 490'
                fill='none'
                stroke='url(#riverGrad)'
                strokeWidth='2.2'
              />
              <text x='150' y='370' fill='#38BDF8' fontSize='10' fontFamily='JetBrains Mono' opacity='0.7'>Kameng River</text>

              {/* Mountain Passes Icons */}
              <g transform='translate(170, 310)'>
                <polygon points='0,0 8,-14 16,0' fill='#EEF3F0' opacity='0.7' />
                <text x='20' y='-4' fill='#EEF3F0' fontSize='9' fontFamily='JetBrains Mono'>Sela Pass (13,700 ft)</text>
              </g>
              <g transform='translate(710, 240)'>
                <polygon points='0,0 8,-14 16,0' fill='#EEF3F0' opacity='0.7' />
                <text x='20' y='-4' fill='#EEF3F0' fontSize='9' fontFamily='JetBrains Mono'>Mayodia Pass (8,700 ft)</text>
              </g>
            </svg>
          </div>

          {/* Interactive Glowing Destination Markers Overlaid */}
          <div
            className='absolute inset-0 w-full h-full transition-transform duration-500 ease-out origin-center'
            style={{ transform: `scale(${zoomLevel})` }}
          >
            {filteredDestinations.map(dest => {
              const isHovered = selectedDestination?.id === dest.id;
              return (
                <div
                  key={dest.id}
                  style={{ left: `${dest.coordinates.mapX}%`, top: `${dest.coordinates.mapY}%` }}
                  className='absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer'
                  onClick={() => setSelectedDestination(dest)}
                >
                  {/* Concentric pulsating radar rings */}
                  <div className='relative flex items-center justify-center'>
                    <span className='absolute w-8 h-8 rounded-full bg-[#E5A93C]/25 animate-ping' />
                    <span className='absolute w-5 h-5 rounded-full bg-[#C2593F]/40' />
                    <div className='w-4 h-4 rounded-full bg-gradient-to-br from-[#E5A93C] to-[#C2593F] border-2 border-white shadow-xl glow-pin transition-transform group-hover:scale-125' />
                  </div>

                  {/* Floating Marker Badge */}
                  <div className='mt-2 whitespace-nowrap px-2.5 py-1 rounded-lg bg-[#07131D]/90 backdrop-blur-md border border-white/20 shadow-xl text-[11px] text-white flex items-center gap-1.5 transition-all group-hover:border-[#E5A93C] group-hover:bg-[#07131D]'>
                    <MapPin className='w-3 h-3 text-[#E5A93C]' />
                    <span className='font-medium'>{dest.name.split('(')[0]}</span>
                    <span className='text-[9px] text-[#E8DCC9] font-mono'>({dest.altitude.split('(')[0]})</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Map Controls: Zoom & Legend */}
          <div className='absolute bottom-5 left-5 z-30 flex items-center gap-2'>
            <div className='glass-panel px-3 py-2 rounded-2xl border border-white/10 flex items-center gap-1 text-xs'>
              <button
                onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2))}
                className='p-1.5 text-gray-300 hover:text-white rounded-lg hover:bg-white/10'
                title='Zoom In'
              >
                <ZoomIn className='w-4 h-4' />
              </button>
              <button
                onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.8))}
                className='p-1.5 text-gray-300 hover:text-white rounded-lg hover:bg-white/10'
                title='Zoom Out'
              >
                <ZoomOut className='w-4 h-4' />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className='p-1.5 text-gray-300 hover:text-white rounded-lg hover:bg-white/10'
                title='Reset Zoom'
              >
                <RefreshCw className='w-3.5 h-3.5' />
              </button>
              <span className='px-2 font-mono text-[10px] text-[#E5A93C]'>{Math.round(zoomLevel * 100)}%</span>
            </div>
          </div>

          {/* Map Legend Overlay */}
          <div className='absolute top-5 right-5 z-30 hidden sm:block'>
            <div className='glass-panel px-4 py-3 rounded-2xl border border-white/10 text-xs space-y-1.5 max-w-xs'>
              <div className='font-mono text-[10px] uppercase text-[#E5A93C] font-semibold flex items-center gap-1'>
                <Layers className='w-3 h-3' /> Cartographic Key
              </div>
              <div className='flex items-center gap-2 text-[11px] text-gray-300'>
                <span className='w-2.5 h-2.5 rounded-full bg-[#E5A93C]' /> Hidden Tribal Villages
              </div>
              <div className='flex items-center gap-2 text-[11px] text-gray-300'>
                <span className='w-4 h-0.5 bg-[#38BDF8]' /> Sacred Glacial Rivers
              </div>
              <div className='flex items-center gap-2 text-[11px] text-gray-300'>
                <span className='w-2 h-2 border border-white rotate-45' /> High Himalayan Passes
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  </div>

      {/* Destination Dossier Drawer */}
      <DestinationDrawer
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onPlanTripForThis={dest => {
          onPlanTripForDestination(dest);
        }}
      />
    </section>
  );
};