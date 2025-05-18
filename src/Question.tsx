import React from 'react';
import { AnswerData } from './types/quiz';

interface QuestionProps {
  id: string,
  index: number,
  question: string,
  answers: AnswerData[],
  correct: string,
  selectAnswer: (questionId: string, answerId: string) => void
}

export default function Question(props: QuestionProps) {

  return (
    <div className="question">
      <h2>{`${props.index}. ${props.question}`}</h2>
      <div className="answers-container">
        <button
          className="answer"
          onClick={() => props.selectAnswer(props.id, props.answers[0].id)}
          style={{
            borderColor: props.answers[0].selected ? '#ffd700' : 'transparent',
            color: props.answers[0].selected ? '#ffd700' : '',
          }}
        >
          {props.answers[0].answer}
        </button>
        <button
          className="answer"
          onClick={() => props.selectAnswer(props.id, props.answers[1].id)}
          style={{
            borderColor: props.answers[1].selected ? '#ffd700' : '',
            color: props.answers[1].selected ? '#ffd700' : '',
          }}
        >
          {props.answers[1].answer}
        </button>
        <button
          className="answer"
          onClick={() => props.selectAnswer(props.id, props.answers[2].id)}
          style={{
            borderColor: props.answers[2].selected ? '#ffd700' : '',
            color: props.answers[2].selected ? '#ffd700' : '',
          }}
        >
          {props.answers[2].answer}
        </button>
        <button
          className="answer"
          onClick={() => props.selectAnswer(props.id, props.answers[3].id)}
          style={{
            borderColor: props.answers[3].selected ? '#ffd700' : '',
            color: props.answers[3].selected ? '#ffd700' : '',
          }}
        >
          {props.answers[3].answer}
        </button>
      </div>
    </div>
  );
}
