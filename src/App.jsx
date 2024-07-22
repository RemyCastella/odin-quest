import { useState } from 'react';
import gameLogo from './assets/img/hood.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CoverScreen from './CoverScreen';
import QuizScreen from './QuizScreen';

function App() {
  const [screen, setScreen] = useState('cover');

  function startQuiz() {
    setScreen('quiz');
  }

  return (
    <>
      {screen === 'cover' && (
        <CoverScreen gameLogo={gameLogo} startQuiz={startQuiz} />
      )}
      {screen === 'quiz' && <QuizScreen />}
    </>
  );
}

export default App;
