import { useState } from 'react';
import gameLogo from './assets/img/hood.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CoverScreen from './CoverScreen';
import QuizScreen from './QuizScreen';
import Footer from './Footer';

function App() {
  const [screen, setScreen] = useState('cover');

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
        {screen === 'quiz' && <QuizScreen />}
      </main>
      {screen === 'quiz' && <Footer />}
    </>
  );
}

export default App;