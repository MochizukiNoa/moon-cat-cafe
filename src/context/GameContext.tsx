import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { Scene } from '../types/story';
import { story } from '../data/story';

interface SaveData {
  currentSceneId: string;
  currentTextIndex: number;
  timestamp: string;
  currentText: string;
}

interface GameContextType {
  currentScene: Scene;
  currentText: string;
  isTextComplete: boolean;
  makeChoice: (nextSceneId: string) => void;
  nextText: () => void;
  saveGame: (slot: number) => void;
  loadGame: (slot: number) => void;
  getSaveData: (slot: number) => SaveData | null;
  hasSaveData: (slot: number) => boolean;
  startNewGame: () => void;
  showTitle: boolean;
  returnToTitle: () => void;
  playBGM: () => void;
  stopBGM: () => void;
  isBGMPlaying: boolean;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

const getSaveKey = (slot: number) => `visual_novel_save_${slot}`;

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSceneId, setCurrentSceneId] = useState(story.startScene);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showTitle, setShowTitle] = useState(true);
  const [isBGMPlaying, setIsBGMPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentScene = story.scenes[currentSceneId];
  const textLines = currentScene.text.split('\n').filter(line => line.trim() !== '');
  const currentText = textLines[currentTextIndex] || '';
  const isTextComplete = currentTextIndex >= textLines.length - 1;

  const makeChoice = useCallback((nextSceneId: string) => {
    setCurrentSceneId(nextSceneId);
    setCurrentTextIndex(0);
  }, []);

  const nextText = useCallback(() => {
    if (currentTextIndex < textLines.length - 1) {
      setCurrentTextIndex(prev => prev + 1);
    }
  }, [currentTextIndex, textLines.length]);

  const saveGame = useCallback((slot: number) => {
    const saveData: SaveData = {
      currentSceneId,
      currentTextIndex,
      timestamp: new Date().toLocaleString(),
      currentText: currentText,
    };
    localStorage.setItem(getSaveKey(slot), JSON.stringify(saveData));
  }, [currentSceneId, currentTextIndex, currentText]);

  const loadGame = useCallback((slot: number) => {
    const savedData = localStorage.getItem(getSaveKey(slot));
    if (savedData) {
      const data: SaveData = JSON.parse(savedData);
      setCurrentSceneId(data.currentSceneId);
      setCurrentTextIndex(data.currentTextIndex);
      setShowTitle(false);
    }
  }, []);

  const getSaveData = useCallback((slot: number) => {
    const savedData = localStorage.getItem(getSaveKey(slot));
    return savedData ? JSON.parse(savedData) : null;
  }, []);

  const hasSaveData = useCallback((slot: number) => {
    return localStorage.getItem(getSaveKey(slot)) !== null;
  }, []);

  const playBGM = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/music/bgm.mp3');
      audioRef.current.loop = true;
    }
    audioRef.current.play();
    setIsBGMPlaying(true);
  }, []);

  const stopBGM = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsBGMPlaying(false);
    }
  }, []);

  const startNewGame = useCallback(() => {
    setCurrentSceneId(story.startScene);
    setCurrentTextIndex(0);
    setShowTitle(false);
    playBGM();
  }, [playBGM]);

  const returnToTitle = useCallback(() => {
    setShowTitle(true);
    stopBGM();
  }, [stopBGM]);

  return (
    <GameContext.Provider
      value={{
        currentScene,
        currentText,
        isTextComplete,
        makeChoice,
        nextText,
        saveGame,
        loadGame,
        getSaveData,
        hasSaveData,
        startNewGame,
        showTitle,
        returnToTitle,
        playBGM,
        stopBGM,
        isBGMPlaying,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}; 