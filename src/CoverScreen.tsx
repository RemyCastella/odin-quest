import React from 'react';

interface CoverScreenProps {
  gameLogo: string,
  startQuiz: () => void
}

export default function CoverScreen(props: CoverScreenProps) {
  return (
    <>
      <img src={props.gameLogo} alt="game logo" className="game-logo" />
      <h1>Odin Quest</h1>
      <p className="cover-text">
        Prove your wisdom by answering all 10 questions.
        <br />
        Only those with the knowledge of Odin, the Norse God of wisdom, shall
        succeed.
      </p>
      <button className="start" onClick={props.startQuiz}>
        Start Game
      </button>
    </>
  );
}
