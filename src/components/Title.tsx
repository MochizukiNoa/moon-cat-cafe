import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import './Title.css';

export const Title: React.FC = () => {
  const { startNewGame, hasSaveData, loadGame, showTitle } = useGame();
  const [showLoadSlots, setShowLoadSlots] = useState(false);

  if (!showTitle) {
    return null;
  }

  const handleContinue = () => {
    setShowLoadSlots(true);
  };

  const handleLoad = (slot: number) => {
    loadGame(slot);
    setShowLoadSlots(false);
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowLoadSlots(false);
    }
  };

  return (
    <div className="title-container">
      <div className="title-content">
        <div className="title-buttons">
          <button 
            className="title-button"
            onClick={startNewGame}
          >
            はじめから
          </button>
          <button 
            className="title-button"
            onClick={handleContinue}
            disabled={!hasSaveData(1)}
          >
            つづきから
          </button>
        </div>
      </div>
      {showLoadSlots && (
        <div className="save-slots-overlay" onClick={handleOutsideClick}>
          <div className="save-slots">
            {[1, 2, 3, 4, 5].map(slot => (
              <button
                key={slot}
                className="save-slot"
                onClick={() => handleLoad(slot)}
                disabled={!hasSaveData(slot)}
              >
                セーブスロット {slot}
                {hasSaveData(slot) ? (
                  <div className="save-slot-info">
                    {new Date().toLocaleString()}
                  </div>
                ) : (
                  <div className="no-save-data">
                    まだ保存されているデータがありません。
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}; 