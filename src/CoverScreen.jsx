import React from 'react';

export default function CoverScreen(props) {
  return (
    <>
      <img src={props.gameLogo} alt="game logo" className="game-logo" />
      <h1>Odin Quest</h1>
      <p className="cover-text">
        Prove your wisdom by answering all 10 questions. Only those with the
        knowledge of Odin, the Norse God of wisdom, shall succeed.
      </p>
      <button className="start" onClick={props.startQuiz}>
        Start Game
      </button>
    </>
  );
}
