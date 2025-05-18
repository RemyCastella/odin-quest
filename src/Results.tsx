import React from 'react';

interface ResultsProps {
  highScore: number,
  rank: string,
  results: boolean
}

export default function Results(props: ResultsProps) {
  return (
    <div className="results-container">
      <h3 className="rank-alltime">
        <span className="score-label">Highscore:</span>
        <span className="highscore">{props.rank}</span>
      </h3>
      {props.results && (
        <h3 className="rank-now">
          <span className="score-label">Score:</span>
          <span style={{ fontSize: props.rank === 'Normie' ? '3rem' : '1rem' }}>
            Normie
          </span>
          <span style={{ fontSize: props.rank === 'Smart' ? '3rem' : '1rem' }}>
            Smart
          </span>
          <span style={{ fontSize: props.rank === 'Wise' ? '3rem' : '1rem' }}>
            Wise
          </span>
          <span style={{ fontSize: props.rank === 'Genius' ? '3rem' : '1rem' }}>
            Genius
          </span>
          <span
            style={{ fontSize: props.rank === 'Confucius' ? '3rem' : '1rem' }}
          >
            Confucius
          </span>
          <span
            style={{ fontSize: props.rank === 'Socrates' ? '3rem' : '1rem' }}
          >
            Socrates
          </span>
          <span
            style={{ fontSize: props.rank === 'Da Vinci' ? '3rem' : '1rem' }}
          >
            Da Vinci
          </span>
          <span
            style={{ fontSize: props.rank === 'Einstein' ? '3rem' : '1rem' }}
          >
            Einstein
          </span>
          <span style={{ fontSize: props.rank === 'Athena' ? '3rem' : '1rem' }}>
            Athena
          </span>
          <span style={{ fontSize: props.rank === 'Odin' ? '3rem' : '1rem' }}>
            Odin
          </span>
        </h3>
      )}
    </div>
  );
}
