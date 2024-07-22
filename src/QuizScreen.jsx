import { useState, useEffect } from 'react';
import { decode } from 'html-entities';
import { nanoid } from 'nanoid';
import Question from './Question';
import './QuizScreen.css';

export default function QuizScreen(props) {
  console.log(props.screen);
  const [questions, setQuestions] = useState([]);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  function selectAnswer(questionId, answerId) {
    const targetQuestion = questions.filter(
      (question) => question.key === questionId
    );

    const answerSelected = targetQuestion[0].a.map((answer) => {
      if (answer.selected) {
        answer.selected = false;
      }

      return answer.id === answerId ? { ...answer, selected: true } : answer;
    });

    setQuestions((prevQs) => {
      return prevQs.map((question) => {
        return question.a[0].id === answerSelected[0].id
          ? { ...question, a: answerSelected }
          : question;
      });
    });
  }

  useEffect(() => {
    const url =
      'https://opentdb.com/api.php?amount=10&category=9&difficulty=hard&type=multiple';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const questions = data.results.map((question) => {
          const answers = [
            ...question.incorrect_answers,
            question.correct_answer,
          ].map((answer) => {
            return {
              answer: decode(answer),
              id: nanoid(),
              selected: false,
            };
          });

          return {
            key: nanoid(),
            q: decode(question.question),
            a: shuffle(answers),
            correct: decode(question.correct_answer),
            selected: false,
          };
        });
        setQuestions(questions);
      });
  }, []);

  const questionComponents = questions.map((question, index) => (
    <Question
      key={question.key}
      id={question.key}
      index={index + 1}
      question={question.q}
      answers={question.a}
      selected={question.selected}
      correct={question.correct}
      selectAnswer={selectAnswer}
    />
  ));

  return (
    <div className="quiz-screen">
      <h1>Odin Quest</h1>
      <div className="questions">{questionComponents}</div>
    </div>
  );
}
