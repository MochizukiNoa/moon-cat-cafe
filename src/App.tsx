import React from 'react';
import { Game } from './components/Game';
import { Title } from './components/Title';
import { GameProvider } from './context/GameContext';
import './App.css';

function App() {
  return (
    <GameProvider>
      <div className="App">
        <Title />
        <Game />
      </div>
    </GameProvider>
  );
}

export default App;
