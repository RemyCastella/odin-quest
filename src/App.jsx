import { useState, useEffect } from 'react';
import gameLogo from './assets/img/hood.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CoverScreen from './CoverScreen';
import QuizScreen from './QuizScreen';
import Footer from './Footer';

function App() {
  const [screen, setScreen] = useState('cover');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 3000);
  }, []);

  //move mounted state here, pass QuizScreen mounted state,
  //render footer only when mounted

  function startQuiz() {
    setScreen('quiz');
  }

  return (
    <>
      <main>
        {screen === 'cover' && (
          <CoverScreen gameLogo={gameLogo} startQuiz={startQuiz} />
        )}
        {screen === 'quiz' && <QuizScreen mounted={mounted} />}
      </main>
      {mounted && screen === 'quiz' && <Footer />}
    </>
  );
}

export default App;
