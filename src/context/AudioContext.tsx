import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

export type AmbientTrack = 'pines' | 'hearth' | 'river' | 'monastery';

interface AudioContextType {
  isAmbientPlaying: boolean;
  currentAmbientTrack: AmbientTrack;
  toggleAmbient: (track?: AmbientTrack) => void;
  setAmbientTrack: (track: AmbientTrack) => void;
  isStoryPlaying: boolean;
  currentStoryId: string | null;
  storyProgress: number;
  playStory: (storyId: string, textToNarrate?: string) => void;
  pauseStory: () => void;
  toggleStoryPlayback: (storyId: string, textToNarrate?: string) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAmbientPlaying, setIsAmbientPlaying] = useState(false);
  const [currentAmbientTrack, setCurrentAmbientTrack] = useState<AmbientTrack>('pines');
  const [isStoryPlaying, setIsStoryPlaying] = useState(false);
  const [currentStoryId, setCurrentStoryId] = useState<string | null>(null);
  const [storyProgress, setStoryProgress] = useState(0);

  // Web Audio synth refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const noiseNodeRef = useRef<AudioNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const progressIntervalRef = useRef<any>(null);

  const initWebAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  const startNatureSynth = (track: AmbientTrack) => {
    initWebAudio();
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    stopNatureSynth();

    // Create buffer for procedural soundscape
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = buffer;
    whiteNoise.loop = true;

    // Filter based on ambient type
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    if (track === 'pines') {
      // Soft wind through pines
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
    } else if (track === 'river') {
      // Flowing mountain stream
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(650, ctx.currentTime);
      filter.Q.setValueAtTime(1.8, ctx.currentTime);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
    } else if (track === 'hearth') {
      // Crackling warm fire embers
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, ctx.currentTime);
      gain.gain.setValueAtTime(0.035, ctx.currentTime);
    } else {
      // Monastery singing bell frequency
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(220, ctx.currentTime);
      gain.gain.setValueAtTime(0.03, ctx.currentTime);
    }

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    whiteNoise.start();
    noiseNodeRef.current = whiteNoise;
    gainNodeRef.current = gain;
  };

  const stopNatureSynth = () => {
    if (noiseNodeRef.current) {
      try {
        (noiseNodeRef.current as any).stop();
        noiseNodeRef.current.disconnect();
      } catch (e) {}
      noiseNodeRef.current = null;
    }
  };

  const toggleAmbient = (track?: AmbientTrack) => {
    const targetTrack = track || currentAmbientTrack;
    if (isAmbientPlaying && (!track || track === currentAmbientTrack)) {
      stopNatureSynth();
      setIsAmbientPlaying(false);
    } else {
      setCurrentAmbientTrack(targetTrack);
      startNatureSynth(targetTrack);
      setIsAmbientPlaying(true);
    }
  };

  const setAmbientTrack = (track: AmbientTrack) => {
    setCurrentAmbientTrack(track);
    if (isAmbientPlaying) {
      startNatureSynth(track);
    }
  };

  const playStory = (storyId: string, textToNarrate?: string) => {
    if (currentStoryId === storyId && isStoryPlaying) return;

    // Stop previous narration if any
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    clearInterval(progressIntervalRef.current);

    setCurrentStoryId(storyId);
    setIsStoryPlaying(true);
    setStoryProgress(0);

    // Ensure nature ambience is gently active in the background
    if (!isAmbientPlaying) {
      toggleAmbient('pines');
    }

    // Start speech narration if available
    if (window.speechSynthesis && textToNarrate) {
      const utterance = new SpeechSynthesisUtterance(textToNarrate);
      utterance.rate = 0.92; // Calm, respectful storytelling cadence
      utterance.pitch = 0.95;
      utterance.onend = () => {
        setIsStoryPlaying(false);
        setStoryProgress(100);
        clearInterval(progressIntervalRef.current);
      };
      utterance.onerror = () => {
        setIsStoryPlaying(false);
      };
      window.speechSynthesis.speak(utterance);
    }

    // Progress timer
    const startTime = Date.now();
    const durationMs = 60000; // Simulated 1 min narration
    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / durationMs) * 100));
      setStoryProgress(pct);
      if (pct >= 100) {
        clearInterval(progressIntervalRef.current);
        setIsStoryPlaying(false);
      }
    }, 500);
  };

  const pauseStory = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    clearInterval(progressIntervalRef.current);
    setIsStoryPlaying(false);
  };

  const toggleStoryPlayback = (storyId: string, textToNarrate?: string) => {
    if (isStoryPlaying && currentStoryId === storyId) {
      pauseStory();
    } else {
      playStory(storyId, textToNarrate);
    }
  };

  useEffect(() => {
    return () => {
      stopNatureSynth();
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      clearInterval(progressIntervalRef.current);
    };
  }, []);

  return (
    <AudioContext.Provider
      value={{
        isAmbientPlaying,
        currentAmbientTrack,
        toggleAmbient,
        setAmbientTrack,
        isStoryPlaying,
        currentStoryId,
        storyProgress,
        playStory,
        pauseStory,
        toggleStoryPlayback
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};