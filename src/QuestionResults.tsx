import React from 'react';
import { AnswerData } from './types/quiz';

interface QuestionResultsProps {
  id: string,
  index: number,
  question: string,
  answers: AnswerData[],
  correct: string,
}

export default function QuestionResults(props: QuestionResultsProps) {

  const a0Styles = props.answers[0].selected
    ? {
        borderColor: props.answers[0].correct ? 'green' : 'red',
        color: props.answers[0].correct ? 'green' : 'red',
      }
    : {};

  const a1Styles = props.answers[1].selected
    ? {
        borderColor: props.answers[1].correct ? 'green' : 'red',
        color: props.answers[1].correct ? 'green' : 'red',
      }
    : {};

  const a2Styles = props.answers[2].selected
    ? {
        borderColor: props.answers[2].correct ? 'green' : 'red',
        color: props.answers[2].correct ? 'green' : 'red',
      }
    : {};

  const a3Styles = props.answers[3].selected
    ? {
        borderColor: props.answers[3].correct ? 'green' : 'red',
        color: props.answers[3].correct ? 'green' : 'red',
      }
    : {};

  return (
    <div className="question">
      <h2>{`${props.index}. ${props.question}`}</h2>
      <div className="answers-container">
        <button className="answer" style={a0Styles}>
          {props.answers[0].answer}
        </button>
        <button className="answer" style={a1Styles}>
          {props.answers[1].answer}
        </button>
        <button className="answer" style={a2Styles}>
          {props.answers[2].answer}
        </button>
        <button className="answer" style={a3Styles}>
          {props.answers[3].answer}
        </button>
      </div>
    </div>
  );
}
