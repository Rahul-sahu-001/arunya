import React, { useState } from 'react';
import { Sparkles, CheckCircle2, RotateCcw, Compass, ArrowRight } from 'lucide-react';

interface Archetype {
  title: string;
  icon: string;
  tagline: string;
  recommendations: string[];
  suggestedRoute: string;
}

export const ArchetypeQuiz: React.FC<{ onExploreRoute: (routeId: string) => void }> = ({ onExploreRoute }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [resultArchetype, setResultArchetype] = useState<Archetype | null>(null);

  const questions = [
    {
      question: 'Your ideal mountain morning?',
      options: [
        'Listening to birds in virgin bamboo groves with elder tea',
        'Watching first golden light break over 14,000-ft snowy crests',
        'Simmering millet porridge around a warm stone kitchen hearth',
        'Testing whitewater rapids along roaring glacial gorges'
      ]
    },
    {
      question: 'Your adventure intensity level?',
      options: [
        'Gentle: Slow walks across terraced fields & village lanes',
        'Moderate: 4-5 hours ridge hiking with homestay nights',
        'Hardcore: 7-day multi-lake high alpine tented expeditions',
        'Spiritual: Meditating in ancient cliff monasteries'
      ]
    },
    {
      question: 'What calls to you more deeply?',
      options: [
        'Sacred forest ecology & ancestral agro-forestry systems',
        'Ancient oral epics, shamanic rituals & backstrap handlooms',
        'Subtropical rainforest biodiversity & elusive clouded leopards',
        'Remote frontier villages where few outsiders have set foot'
      ]
    }
  ];

  const archetypes: Record<string, Archetype> = {
    forest: {
      title: '🌲 Forest Wanderer & Agro-Ecologist',
      icon: '🌲',
      tagline: 'You travel not to check off sights, but to understand how communities live in harmony with trees.',
      recommendations: ['Hong & Hari Bamboo Groves (Ziro)', 'Talley Valley Wildlife Sanctuary', 'Shergaon Sacred Groves'],
      suggestedRoute: 'culture-and-craft-trail'
    },
    mountain: {
      title: '🏔️ High Mountain Seeker & Trail Hunter',
      icon: '🏔️',
      tagline: 'You thrive on high passes, glacial tarns, and the crisp dawn light over Eastern Himalayan peaks.',
      recommendations: ['Seven Lakes Trek (Anini)', 'Mechuka High Ridges', 'Dong Peak First Dawn'],
      suggestedRoute: 'mist-and-mountain'
    },
    story: {
      title: '📷 Digital Story Collector & Cultural Archivist',
      icon: '📷',
      tagline: 'You seek the quiet hearth fires, the laughter of grandmothers, and the songs woven into textile looms.',
      recommendations: ['Thembang Fortified Dzong', 'Apatani Loin Loom Collective', 'Adi Fireside Abang Ballads'],
      suggestedRoute: 'culture-and-craft-trail'
    },
    river: {
      title: '🌊 Wild River Voyager & Frontier Scout',
      icon: '🌊',
      tagline: 'You are drawn to turquoise whitewater gorges, cane suspension bridges, and untamed canyon frontiers.',
      recommendations: ['Siang River Cane Bridges', 'Tuting Pemako Sacred Gorges', 'Lohit River Hot Springs'],
      suggestedRoute: 'the-river-route'
    }
  };

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers, optionIndex];
    setSelectedAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate archetype based on choices
      const sum = newAnswers.reduce((a, b) => a + b, 0);
      if (sum <= 2) setResultArchetype(archetypes.forest);
      else if (sum <= 4) setResultArchetype(archetypes.story);
      else if (sum <= 6) setResultArchetype(archetypes.mountain);
      else setResultArchetype(archetypes.river);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setResultArchetype(null);
  };

  return (
    <section className='py-20 bg-[#07131D] text-[#EEF3F0] relative border-t border-white/10'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center space-y-3 mb-12'>
          <span className='font-mono text-xs uppercase tracking-[0.25em] text-[#E5A93C] font-semibold'>
            DISCOVERY QUIZ
          </span>
          <h2 className='font-serif text-3xl sm:text-5xl font-light text-white'>
            Which Arunachal Are You?
          </h2>
          <p className='text-sm text-[#98A7A0] max-w-lg mx-auto font-light'>
            Answer 3 intuitive questions to uncover your travel archetype and receive a bespoke journey recommendation.
          </p>
        </div>

        <div className='rounded-3xl bg-[#091824] border border-white/15 p-6 sm:p-10 shadow-2xl'>
          {!resultArchetype ? (
            <div className='space-y-6'>
              <div className='flex items-center justify-between text-xs font-mono text-gray-400 pb-4 border-b border-white/10'>
                <span>QUESTION {currentQuestionIndex + 1} OF {questions.length}</span>
                <span className='text-[#E5A93C]'>Step {currentQuestionIndex + 1}/3</span>
              </div>

              <h3 className='font-serif text-2xl sm:text-3xl text-white font-normal'>
                {questions[currentQuestionIndex].question}
              </h3>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2'>
                {questions[currentQuestionIndex].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className='p-5 rounded-2xl glass-panel hover:bg-white/15 text-left border border-white/10 hover:border-[#E5A93C]/50 text-xs sm:text-sm text-gray-200 transition-all flex items-start gap-3 group'
                  >
                    <span className='w-5 h-5 rounded-full border border-white/30 group-hover:border-[#E5A93C] flex items-center justify-center text-[10px] font-mono text-gray-400 group-hover:text-white flex-shrink-0 mt-0.5'>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className='leading-relaxed font-light'>{opt}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className='text-center space-y-6 animate-fade-in'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E5A93C]/20 border border-[#E5A93C]/40 text-3xl shadow-xl'>
                {resultArchetype.icon}
              </div>
              <div>
                <span className='font-mono text-xs uppercase tracking-widest text-[#F3BA54] block mb-1'>
                  Your Arunachal Archetype
                </span>
                <h3 className='font-serif text-3xl sm:text-4xl text-white font-light'>
                  {resultArchetype.title}
                </h3>
                <p className='text-sm text-gray-300 max-w-xl mx-auto mt-2 font-light leading-relaxed'>
                  {resultArchetype.tagline}
                </p>
              </div>

              <div className='p-6 rounded-2xl bg-white/5 border border-white/10 max-w-lg mx-auto text-left space-y-3'>
                <h4 className='font-mono text-xs text-[#E5A93C] uppercase tracking-wider font-semibold'>
                  Recommended Sanctuary Spots
                </h4>
                <ul className='space-y-1.5 text-xs text-gray-300'>
                  {resultArchetype.recommendations.map((rec, i) => (
                    <li key={i} className='flex items-center gap-2'>
                      <CheckCircle2 className='w-4 h-4 text-[#E5A93C]' />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='flex items-center justify-center gap-4 pt-2'>
                <button
                  onClick={() => onExploreRoute(resultArchetype.suggestedRoute)}
                  className='px-6 py-3 rounded-full bg-gradient-to-r from-[#E5A93C] to-[#C2593F] text-[#07131D] text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2'
                >
                  <Compass className='w-4 h-4' /> Explore Matched Journey
                </button>
                <button
                  onClick={resetQuiz}
                  className='px-5 py-3 rounded-full glass-panel hover:bg-white/10 text-gray-300 text-xs font-medium transition-colors flex items-center gap-1.5'
                >
                  <RotateCcw className='w-3.5 h-3.5' /> Retake
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};