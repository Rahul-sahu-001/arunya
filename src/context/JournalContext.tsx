import React, { createContext, useContext, useState, useEffect } from 'react';
import { SavedJournalEntry } from '../types';

interface JournalContextType {
  savedDestinations: string[];
  toggleSaveDestination: (id: string) => void;
  isSavedDestination: (id: string) => boolean;
  savedStories: string[];
  toggleSaveStory: (id: string) => void;
  isSavedStory: (id: string) => boolean;
  savedHomestays: string[];
  toggleSaveHomestay: (id: string) => void;
  isSavedHomestay: (id: string) => boolean;
  journalEntries: SavedJournalEntry[];
  addJournalEntry: (entry: Omit<SavedJournalEntry, 'id' | 'date'>) => void;
  deleteJournalEntry: (id: string) => void;
  isJournalOpen: boolean;
  setIsJournalOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  selectedDestinationId: string | null;
  setSelectedDestinationId: (id: string | null) => void;
}

const JournalContext = createContext<JournalContextType | undefined>(undefined);

export const JournalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedDestinations, setSavedDestinations] = useState<string[]>(() => {
    try {
      const item = localStorage.getItem('arunya_saved_destinations');
      return item ? JSON.parse(item) : ['mechuka', 'anini', 'hong-village-ziro'];
    } catch {
      return ['mechuka', 'anini', 'hong-village-ziro'];
    }
  });

  const [savedStories, setSavedStories] = useState<string[]>(() => {
    try {
      const item = localStorage.getItem('arunya_saved_stories');
      return item ? JSON.parse(item) : ['village-listens-forest'];
    } catch {
      return ['village-listens-forest'];
    }
  });

  const [savedHomestays, setSavedHomestays] = useState<string[]>(() => {
    try {
      const item = localStorage.getItem('arunya_saved_homestays');
      return item ? JSON.parse(item) : ['tage-bamboo-homestay'];
    } catch {
      return ['tage-bamboo-homestay'];
    }
  });

  const [journalEntries, setJournalEntries] = useState<SavedJournalEntry[]>(() => {
    try {
      const item = localStorage.getItem('arunya_journal_entries');
      return item ? JSON.parse(item) : [
        {
          id: 'initial-entry',
          title: 'First Morning in the Valley of Bamboo',
          date: 'September 12, 2026',
          location: 'Hong Village, Ziro',
          notes: 'Woke to the sound of rain drops on the bamboo roof. The hearth was already glowing with red oak embers. Elder Tage offered warm salted butter tea and showed us the boundary stones of his clan grove.',
          mood: 'Pensive & Peaceful',
          savedItemIds: ['hong-village-ziro', 'tage-bamboo-homestay']
        }
      ];
    } catch {
      return [];
    }
  });

  const [isJournalOpen, setIsJournalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedDestinationId, setSelectedDestinationId] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('arunya_saved_destinations', JSON.stringify(savedDestinations));
    } catch {}
  }, [savedDestinations]);

  useEffect(() => {
    try {
      localStorage.setItem('arunya_saved_stories', JSON.stringify(savedStories));
    } catch {}
  }, [savedStories]);

  useEffect(() => {
    try {
      localStorage.setItem('arunya_saved_homestays', JSON.stringify(savedHomestays));
    } catch {}
  }, [savedHomestays]);

  useEffect(() => {
    try {
      localStorage.setItem('arunya_journal_entries', JSON.stringify(journalEntries));
    } catch {}
  }, [journalEntries]);

  const toggleSaveDestination = (id: string) => {
    setSavedDestinations(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const isSavedDestination = (id: string) => savedDestinations.includes(id);

  const toggleSaveStory = (id: string) => {
    setSavedStories(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const isSavedStory = (id: string) => savedStories.includes(id);

  const toggleSaveHomestay = (id: string) => {
    setSavedHomestays(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const isSavedHomestay = (id: string) => savedHomestays.includes(id);

  const addJournalEntry = (entry: Omit<SavedJournalEntry, 'id' | 'date'>) => {
    const newEntry: SavedJournalEntry = {
      ...entry,
      id: 'entry-' + Date.now(),
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    };
    setJournalEntries(prev => [newEntry, ...prev]);
  };

  const deleteJournalEntry = (id: string) => {
    setJournalEntries(prev => prev.filter(e => e.id !== id));
  };

  return (
    <JournalContext.Provider
      value={{
        savedDestinations,
        toggleSaveDestination,
        isSavedDestination,
        savedStories,
        toggleSaveStory,
        isSavedStory,
        savedHomestays,
        toggleSaveHomestay,
        isSavedHomestay,
        journalEntries,
        addJournalEntry,
        deleteJournalEntry,
        isJournalOpen,
        setIsJournalOpen,
        isSearchOpen,
        setIsSearchOpen,
        selectedDestinationId,
        setSelectedDestinationId
      }}
    >
      {children}
    </JournalContext.Provider>
  );
};

export const useJournal = () => {
  const context = useContext(JournalContext);
  if (!context) {
    throw new Error('useJournal must be used within a JournalProvider');
  }
  return context;
};