import React, { useState } from 'react';
import { Sparkles, Calendar, DollarSign, Compass, MapPin, CheckCircle2, RotateCcw, ArrowRight, ShieldCheck, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

export const AITripPlanner: React.FC = () => {
  const [gateway, setGateway] = useState('Guwahati');
  const [duration, setDuration] = useState(7);
  const [budgetTier, setBudgetTier] = useState('Mid-range');
  const [travelStyle, setTravelStyle] = useState('Culture & Slow Village');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['Villages', 'Food', 'Festivals']);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<any | null>(null);

  const gateways = ['Guwahati (GAU)', 'Dibrugarh (DIB)', 'Tezpur (TEZ)', 'Hollongi/Itanagar (HGI)'];
  const styles = ['Slow travel', 'Adventure & Trails', 'Culture & Craft', 'Photography', 'Nature & Wildlife'];
  const allInterests = ['Villages', 'Festivals', 'Food', 'Loom & Weaving', 'Trekking', 'Wildlife', 'Sacred Animism'];

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
    );
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      setGeneratedPlan({
        title: `${duration}-Day Bespoke ${travelStyle} Sanctuary Journey`,
        gatewayRoute: `Starting from ${gateway} via scenic mountain corridors`,
        estimatedCost: budgetTier === 'Backpacker' ? `₹${duration * 2100}` : budgetTier === 'Mid-range' ? `₹${duration * 3800}` : `₹${duration * 6200}`,
        localRetentionPct: '88% direct community spend',
        itineraryDays: [
          { day: 1, stop: `${gateway} → Foothill Transition`, highlight: 'Scenic ascent across sub-Himalayan rainforest belt. Settle into family orchard homestay.' },
          { day: 2, stop: 'Ancient Fortified Dzong (Thembang / Ziro)', highlight: 'Walk through 12th-century stone archways. Evening hearth session with elder storyteller.' },
          { day: 3, stop: 'Bamboo Groves & Fish-Paddy Wetlands', highlight: 'Masterclass in sustainable indigenous agro-forestry. Loin-loom weaving demonstration.' },
          { day: 4, stop: 'Sacred Forest & River Canyon', highlight: 'Walk across a swaying traditional cane suspension bridge. Sample freshly steamed Dung Po rice.' },
          { day: 5, stop: 'Highland Ridge & Monastic Haven', highlight: 'Visit hilltop meditation sanctuary. Butter tea (Suja) and wild chhurpi momos.' },
          { day: 6, stop: 'Folk Lore & Artisan Workshop', highlight: 'Handmade Daphne paper or wood carving studio session with master artisan.' },
          { day: 7, stop: 'Confluence Farewell & Gateway Return', highlight: 'Morning river walk, local market honey & tea collection before departure.' }
        ].slice(0, duration)
      });
    }, 1200);
  };

  return (
    <section id='ai-planner' className='py-24 bg-[#050E16] text-[#EEF3F0] relative border-t border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-12'>
          <span className='font-mono text-xs uppercase tracking-[0.25em] text-[#E5A93C] font-semibold block mb-2'>
            AI BESPOKE TRAVEL ARCHITECT
          </span>
          <h2 className='font-serif text-3xl sm:text-5xl font-light text-white leading-tight'>
            Build a Journey That Feels Like Yours
          </h2>
          <p className='text-sm text-[#98A7A0] max-w-xl mt-2 font-light'>
            Our planning algorithm prioritizes lesser-known villages, family homestays, reasonable transit times, and maximum community retention over crowded tourist hubs.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          {/* Input Form Column */}
          <div className='lg:col-span-5 rounded-3xl bg-[#091824] border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl'>
            {/* Gateway */}
            <div className='space-y-2'>
              <label className='font-mono text-xs text-[#F3BA54] uppercase block font-semibold'>Starting Gateway Point</label>
              <select
                value={gateway}
                onChange={e => setGateway(e.target.value)}
                className='w-full p-3 rounded-2xl bg-black/40 border border-white/10 text-white font-sans text-xs outline-none focus:border-[#E5A93C]'
              >
                {gateways.map((g, i) => <option key={i} value={g.split(' ')[0]} className='bg-[#091824]'>{g}</option>)}
              </select>
            </div>

            {/* Duration Slider */}
            <div className='space-y-2'>
              <div className='flex justify-between text-xs font-mono'>
                <span className='text-[#F3BA54] uppercase font-semibold'>Journey Duration</span>
                <span className='text-white font-bold'>{duration} Days</span>
              </div>
              <input
                type='range'
                min='3'
                max='14'
                value={duration}
                onChange={e => setDuration(Number(e.target.value))}
                className='w-full accent-[#E5A93C]'
              />
            </div>

            {/* Budget Comfort Tier */}
            <div className='space-y-2'>
              <label className='font-mono text-xs text-[#F3BA54] uppercase block font-semibold'>Comfort & Budget Style</label>
              <div className='grid grid-cols-3 gap-2'>
                {['Backpacker', 'Mid-range', 'Conscious Luxe'].map(b => (
                  <button
                    key={b}
                    onClick={() => setBudgetTier(b)}
                    className={`py-2 px-1 rounded-xl text-[11px] font-medium border transition-all ${
                      budgetTier === b
                        ? 'bg-[#E5A93C] text-[#07131D] font-bold border-[#E5A93C]'
                        : 'glass-panel text-gray-300 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Travel Style */}
            <div className='space-y-2'>
              <label className='font-mono text-xs text-[#F3BA54] uppercase block font-semibold'>Core Travel Style</label>
              <select
                value={travelStyle}
                onChange={e => setTravelStyle(e.target.value)}
                className='w-full p-3 rounded-2xl bg-black/40 border border-white/10 text-white font-sans text-xs outline-none focus:border-[#E5A93C]'
              >
                {styles.map((s, i) => <option key={i} value={s} className='bg-[#091824]'>{s}</option>)}
              </select>
            </div>

            {/* Cultural Interests */}
            <div className='space-y-2'>
              <label className='font-mono text-xs text-[#F3BA54] uppercase block font-semibold'>Specific Interests</label>
              <div className='flex flex-wrap gap-1.5'>
                {allInterests.map(interest => {
                  const isSelected = selectedInterests.includes(interest);
                  return (
                    <button
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`px-3 py-1.5 rounded-full text-[11px] transition-all font-mono ${
                        isSelected
                          ? 'bg-[#C2593F] text-white border border-[#C2593F]'
                          : 'bg-white/5 text-gray-300 border border-white/10 hover:border-white/20'
                      }`}
                    >
                      {interest}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className='w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#E5A93C] to-[#C2593F] text-[#07131D] text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-xl transition-all flex items-center justify-center gap-2'
            >
              <Sparkles className='w-4 h-4' />
              <span>{isGenerating ? 'Synthesizing Off-Beat Route...' : 'Generate Personalized Itinerary'}</span>
            </button>
          </div>

          {/* Generated Plan Column */}
          <div className='lg:col-span-7 rounded-3xl bg-[#091824] border border-white/15 p-6 sm:p-10 shadow-2xl flex flex-col justify-between'>
            {generatedPlan ? (
              <div className='space-y-6 animate-fade-in'>
                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10'>
                  <div>
                    <span className='font-mono text-xs text-[#E5A93C] uppercase tracking-wider block mb-1'>
                      Curated Autonomous Plan
                    </span>
                    <h3 className='font-serif text-2xl sm:text-3xl text-white font-light'>
                      {generatedPlan.title}
                    </h3>
                    <p className='text-xs text-gray-400 font-mono mt-0.5'>{generatedPlan.gatewayRoute}</p>
                  </div>
                  <div className='text-right'>
                    <span className='font-mono text-[10px] text-gray-400 block'>Est. Direct Budget</span>
                    <span className='font-mono text-xl font-bold text-white'>{generatedPlan.estimatedCost}</span>
                    <span className='text-[10px] font-mono text-emerald-400 block'>{generatedPlan.localRetentionPct}</span>
                  </div>
                </div>

                {/* Day by Day schedule */}
                <div className='space-y-3 max-h-[380px] overflow-y-auto no-scrollbar pr-2'>
                  {generatedPlan.itineraryDays.map((item: any, i: number) => (
                    <div key={i} className='p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5'>
                      <span className='w-7 h-7 rounded-full bg-[#E5A93C]/20 text-[#F3BA54] font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5'>
                        D{item.day}
                      </span>
                      <div className='space-y-0.5'>
                        <h5 className='font-serif text-base text-white font-medium'>{item.stop}</h5>
                        <p className='text-xs text-[#98A7A0] font-light leading-relaxed'>{item.highlight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className='h-full flex flex-col items-center justify-center text-center p-8 space-y-4 text-gray-400'>
                <Compass className='w-12 h-12 text-[#E5A93C] stroke-1 animate-spin-slow' />
                <div>
                  <h4 className='font-serif text-2xl text-white font-normal'>Awaiting Your Travel Preferences</h4>
                  <p className='text-xs text-[#98A7A0] max-w-sm mt-1 font-light leading-relaxed'>
                    Adjust your gateway, duration, and interests on the left to generate an authentic community itinerary with zero commercial fluff.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};