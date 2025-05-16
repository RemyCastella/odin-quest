import { useState, useEffect } from 'react';
import gameLogo from './assets/img/hood.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CoverScreen from './CoverScreen';
import QuizScreen from './QuizScreen';
import Footer from './Footer';

function App() {
  const [screen, setScreen] = useState<string>('cover');

  function startQuiz(): void {
    setScreen('quiz');
  }

  return (
    <>
      <main>
        {screen === 'cover' && (
          <CoverScreen gameLogo={gameLogo} startQuiz={startQuiz} />
        )}
        {screen === 'quiz' && <QuizScreen />}
      </main>
      {screen === 'quiz' && <Footer />}
    </>
  );
}

export default App;
