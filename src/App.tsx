import { Game } from './components/Game';
import { Title } from './components/Title';
import { GameProvider } from './context/GameContext';
import './App.css';

function App() {
  return (
    <GameProvider>
      <Title />
      <Game />
    </GameProvider>
  );
}

export default App;
