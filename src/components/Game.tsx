import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import './Game.css';

export const Game: React.FC = () => {
  const { 
    currentScene, 
    makeChoice, 
    currentText, 
    nextText, 
    isTextComplete,
    saveGame,
    loadGame,
    getSaveData,
    hasSaveData,
    showTitle,
    returnToTitle,
    playBGM,
    stopBGM,
    isBGMPlaying
  } = useGame();

  const [showSaveSlots, setShowSaveSlots] = useState(false);
  const [showLoadSlots, setShowLoadSlots] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState<string>('/cafe_interior.jpg');

  useEffect(() => {
    // メッセージに応じて背景画像を変更
    if (currentScene?.text?.includes('あなたに出会って')) {
      setBackgroundImage('/background2.png');
    } else {
      setBackgroundImage('/cafe_interior.jpg');
    }
  }, [currentScene]);

  if (showTitle) {
    return null;
  }

  // クリックで次のテキストを表示
  const handleClick = () => {
    if (!isTextComplete && !showSaveSlots && !showLoadSlots) {
      nextText();
    }
  };

  // セーブスロットの外側をクリックした時に閉じる
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowSaveSlots(false);
      setShowLoadSlots(false);
    }
  };

  const handleSave = (slot: number) => {
    saveGame(slot);
    setShowSaveSlots(false);
  };

  const handleLoad = (slot: number) => {
    loadGame(slot);
    setShowLoadSlots(false);
  };

  return (
    <div className="game-container">
      <img 
        src={backgroundImage} 
        alt="背景" 
        className="background-image"
      />
      <div className="game-content">
        <div className="character-container">
          {currentScene.character && (
            <img
              src={currentScene.character}
              alt="キャラクター"
              className="character-image"
            />
          )}
        </div>
        <div className="text-area" onClick={handleClick}>
          <p>{currentText}</p>
          <div className="save-load-menu">
            <button 
              className="save-load-button"
              onClick={(e) => {
                e.stopPropagation();
                setShowSaveSlots(!showSaveSlots);
                setShowLoadSlots(false);
              }}
            >
              Save
            </button>
            <button 
              className="save-load-button"
              onClick={(e) => {
                e.stopPropagation();
                setShowLoadSlots(!showLoadSlots);
                setShowSaveSlots(false);
              }}
            >
              Load
            </button>
            <button 
              className="save-load-button"
              onClick={(e) => {
                e.stopPropagation();
                returnToTitle();
              }}
            >
              タイトルに戻る
            </button>
            <button
              className="save-load-button"
              onClick={(e) => {
                e.stopPropagation();
                isBGMPlaying ? stopBGM() : playBGM();
              }}
            >
              {isBGMPlaying ? 'BGM OFF' : 'BGM ON'}
            </button>
          </div>
        </div>
        {showSaveSlots && (
          <div className="save-slots-overlay" onClick={handleOutsideClick}>
            <div className="save-slots">
              {[1, 2, 3, 4, 5].map(slot => {
                const saveData = getSaveData(slot);
                return (
                  <button
                    key={slot}
                    className="save-slot"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSave(slot);
                    }}
                  >
                    セーブスロット {slot}
                    {saveData ? (
                      <>
                        <div className="save-slot-text">
                          {saveData.currentText}
                        </div>
                        <div className="save-slot-info">
                          {saveData.timestamp}
                        </div>
                      </>
                    ) : (
                      <div className="no-save-data">
                        まだ保存されているデータがありません。
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
        {showLoadSlots && (
          <div className="save-slots-overlay" onClick={handleOutsideClick}>
            <div className="save-slots">
              {[1, 2, 3, 4, 5].map(slot => {
                const saveData = getSaveData(slot);
                return (
                  <button
                    key={slot}
                    className="save-slot"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLoad(slot);
                    }}
                    disabled={!hasSaveData(slot)}
                  >
                    セーブスロット {slot}
                    {saveData ? (
                      <>
                        <div className="save-slot-text">
                          {saveData.currentText}
                        </div>
                        <div className="save-slot-info">
                          {saveData.timestamp}
                        </div>
                      </>
                    ) : (
                      <div className="no-save-data">
                        まだ保存されているデータがありません。
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
        <div className="choices-area">
          {isTextComplete && currentScene.choices.map((choice, index) => (
            <button
              key={index}
              className="choice-button"
              onClick={() => makeChoice(choice.nextScene)}
            >
              {choice.text}
            </button>
          ))}
          {currentScene.id === 'game_over' && (
            <>
              <button
                className="choice-button"
                onClick={returnToTitle}
              >
                タイトルに戻る
              </button>
              <button
                className="choice-button share-button"
                onClick={() => {
                  const text = '『月夜の猫と秘密のカフェ』をプレイしました。#月夜の猫と秘密のカフェ';
                  const gameUrl = 'https://moon-cat-cafe.vercel.app/';
                  const url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text + '\n' + gameUrl);
                  window.open(url, '_blank');
                }}
              >
                Xで共有する
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}; 