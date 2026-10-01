import React, { useState } from 'react';
import { AudioProvider } from './context/AudioContext';
import { JournalProvider, useJournal } from './context/JournalContext';
import { Navbar } from './components/layout/Navbar';
import { MobileNav } from './components/layout/MobileNav';
import { Footer } from './components/layout/Footer';
import { AudioPlayerWidget } from './components/ui/AudioPlayerWidget';
import { HeroSection } from './components/hero/HeroSection';
import { ArunachalMap } from './components/map/ArunachalMap';
import { DestinationDrawer } from './components/map/DestinationDrawer';
import { BeyondTheMap } from './components/discovery/BeyondTheMap';
import { DistrictExplorer } from './components/discovery/DistrictExplorer';
import { SeasonalGuide } from './components/discovery/SeasonalGuide';
import { ArchetypeQuiz } from './components/discovery/ArchetypeQuiz';
import { LocalStories } from './components/culture/LocalStories';
import { MeetTheLocals } from './components/culture/MeetTheLocals';
import { FestivalCalendar } from './components/culture/FestivalCalendar';
import { TasteArunachal } from './components/culture/TasteArunachal';
import { MountainArtisans } from './components/culture/MountainArtisans';
import { Phrasebook } from './components/culture/Phrasebook';
import { JourneyRoutes } from './components/journeys/JourneyRoutes';
import { TrailsAdventure } from './components/journeys/TrailsAdventure';
import { HomestayGrid } from './components/stays/HomestayGrid';
import { AITripPlanner } from './components/planning/AITripPlanner';
import { PermitGuide } from './components/planning/PermitGuide';
import { OfflinePackModal } from './components/planning/OfflinePackModal';
import { ResponsibleTravel } from './components/impact/ResponsibleTravel';
import { ImpactDashboard } from './components/impact/ImpactDashboard';
import { TripJournalModal } from './components/community/TripJournalModal';
import { CommunityContributeModal } from './components/community/CommunityContributeModal';
import { GlobalSearchModal } from './components/community/GlobalSearchModal';
import { FinalCTA } from './components/hero/FinalCTA';
import { Destination, TravelRoute } from './types';
import { Download, PlusCircle, Sparkles } from 'lucide-react';

const MainApp: React.FC = () => {
  const { setIsSearchOpen, setIsJournalOpen } = useJournal();
  const [activeModalDest, setActiveModalDest] = useState<Destination | null>(null);
  const [isOfflineModalOpen, setIsOfflineModalOpen] = useState(false);
  const [isContributeModalOpen, setIsContributeModalOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='min-h-screen bg-[#07131D] text-[#EEF3F0] selection:bg-[#E5A93C]/30 selection:text-[#F3BA54] relative'>
      {/* Top sticky navigation */}
      <Navbar />

      {/* Hero Section with integrated discovery search */}
      <HeroSection
        onSelectCategoryFilter={_cat => {
          scrollTo('interactive-map');
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Section 1: Interactive Arunachal Topographic Map */}
      <ArunachalMap
        onPlanTripForDestination={_dest => {
          scrollTo('ai-planner');
        }}
      />

      {/* Section 2: Beyond the Map Cinematic Horizontal Showcase */}
      <BeyondTheMap
        onSelectDestination={dest => setActiveModalDest(dest)}
      />

      {/* Section 3: District by District Explorer */}
      <DistrictExplorer />

      {/* Section 4: Stories from the Mountains (Cultural Audio Archive) */}
      <LocalStories />

      {/* Section 5: 12-Month Festival Calendar */}
      <FestivalCalendar />

      {/* Section 6: Journeys, Not Itineraries (Thematic Routes) */}
      <JourneyRoutes
        onPlanCustomRoute={_route => {
          scrollTo('ai-planner');
        }}
      />

      {/* Section 7: Meet the Locals (Custodians & Guides) */}
      <MeetTheLocals />

      {/* Section 8: Stay with the Mountains (Community Homestays) */}
      <HomestayGrid />

      {/* Section 9: Taste Arunachal (Indigenous Food Stories & Cooking) */}
      <TasteArunachal />

      {/* Section 10: Made in the Mountains (Craft & Artisans) */}
      <MountainArtisans />

      {/* Section 11: Highland Trails & Adventure */}
      <TrailsAdventure />

      {/* Section 12: Seasonal Discovery (What's Alive Right Now?) */}
      <SeasonalGuide />

      {/* Section 13: AI Bespoke Trip Planner */}
      <AITripPlanner />

      {/* Section 14: Community Impact Dashboard (Rupee Retention Calculator) */}
      <ImpactDashboard />

      {/* Section 15: Responsible Travel (8 Mountain Ethics Guidelines) */}
      <ResponsibleTravel />

      {/* Section 16: Permit & Gateways Guide (Before You Go) */}
      <PermitGuide />

      {/* Section 17: Local Phrasebook (Speak a Little Local) */}
      <Phrasebook />

      {/* Section 18: Discovery Quiz (Which Arunachal Are You?) */}
      <ArchetypeQuiz
        onExploreRoute={_routeId => {
          scrollTo('travel-routes');
        }}
      />

      {/* Community Action Banners */}
      <div className='py-12 bg-[#091824] border-t border-white/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6'>
          <div className='flex items-center gap-4'>
            <div className='p-3 rounded-2xl bg-[#E5A93C]/20 border border-[#E5A93C]/40 text-[#F3BA54]'>
              <Download className='w-6 h-6' />
            </div>
            <div>
              <h4 className='font-serif text-xl text-white'>Heading into Zero-Signal Valleys?</h4>
              <p className='text-xs text-gray-400 font-light'>Download the offline travel pack with contacts, maps, and phrases.</p>
            </div>
          </div>
          <div className='flex items-center gap-3 w-full sm:w-auto'>
            <button
              onClick={() => setIsOfflineModalOpen(true)}
              className='flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold transition-colors flex items-center justify-center gap-2'
            >
              <Download className='w-3.5 h-3.5' /> Download Offline Pack
            </button>
            <button
              onClick={() => setIsContributeModalOpen(true)}
              className='flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-[#E5A93C] hover:bg-[#F3BA54] text-[#07131D] font-mono text-xs font-bold transition-colors flex items-center justify-center gap-2'
            >
              <PlusCircle className='w-3.5 h-3.5' /> Share Story / Spot
            </button>
          </div>
        </div>
      </div>

      {/* Final Dramatic CTA */}
      <FinalCTA
        onExploreMap={() => scrollTo('interactive-map')}
        onStartPlan={() => scrollTo('ai-planner')}
      />

      {/* Comprehensive Editorial Footer */}
      <Footer />

      {/* Modals and Overlays */}
      <DestinationDrawer
        destination={activeModalDest}
        onClose={() => setActiveModalDest(null)}
        onPlanTripForThis={() => {
          setActiveModalDest(null);
          scrollTo('ai-planner');
        }}
      />
      <GlobalSearchModal
        onSelectDestination={dest => setActiveModalDest(dest)}
      />
      <TripJournalModal />
      <OfflinePackModal
        isOpen={isOfflineModalOpen}
        onClose={() => setIsOfflineModalOpen(false)}
      />
      <CommunityContributeModal
        isOpen={isContributeModalOpen}
        onClose={() => setIsContributeModalOpen(false)}
      />

      {/* Audio Ambient Widget & Mobile Bottom Dock */}
      <AudioPlayerWidget />
      <MobileNav />
    </div>
  );
};

export default function App() {
  return (
    <AudioProvider>
      <JournalProvider>
        <MainApp />
      </JournalProvider>
    </AudioProvider>
  );
}