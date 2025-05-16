import { useState, useEffect } from 'react';
import { decode } from 'html-entities';
import { nanoid } from 'nanoid';
import { RawQuestionData, QuizQuestionData, AnswerData } from './types/quiz';
import Question from './Question';
import QuestionResults from './QuestionResults';
import Results from './Results';
import './QuizScreen.css';

export default function QuizScreen() {
  const [questions, setQuestions] = useState<QuizQuestionData[]>([]);
  const [mounted, setMounted] = useState<boolean>(false);
  const [results, setResults] = useState<boolean>(false);
  const [rank, setRank] = useState<string>('Normie');
  const [highScore, setHighScore] = useState<number>(
    Number(localStorage.getItem('highScore')) || 0
  );
  const [reset, setReset] = useState<number>(0);

  useEffect(() => {
    const url =
      'https://opentdb.com/api.php?amount=10&category=17&difficulty=hard&type=multiple';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const questions = data.results.map((question: RawQuestionData) => {
          const answers = [
            ...question.incorrect_answers,
            question.correct_answer,
          ].map((answer) => {
            return {
              answer: decode(answer),
              id: nanoid(),
              selected: false,
              correct: answer === question.correct_answer,
            };
          });

          return {
            key: nanoid(),
            q: decode(question.question),
            a: shuffle(answers),
            correct: decode(question.correct_answer),
          };
        });
        setQuestions(questions);
      });
  }, [reset]);

  useEffect(() => {
    localStorage.setItem('highScore', JSON.stringify(highScore));
  }, [highScore]);

  function scoreToRank(score: number) {
    let rank: string = "Normie";
    switch (score) {
      case 0:
        rank = 'Normie';
        break;
      case 1:
        rank = 'Normie';
        break;
      case 2:
        rank = 'Smart';
        break;
      case 3:
        rank = 'Wise';
        break;
      case 4:
        rank = 'Genius';
        break;
      case 5:
        rank = 'Confucius';
        break;
      case 6:
        rank = 'Socrates';
        break;
      case 7:
        rank = 'Da Vinci';
        break;
      case 8:
        rank = 'Einstein';
        break;
      case 9:
        rank = 'Athena';
        break;
      case 10:
        rank = 'Odin';
        break;
    }
    return rank;
  }

  const shuffle = (array: AnswerData[]) => {
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

      return answer.id === answerId
        ? {
            ...answer,
            selected: true,
          }
        : answer;
    });

    setQuestions((prevQs) => {
      return prevQs.map((question) => {
        return question.a[0].id === answerSelected[0].id
          ? { ...question, a: answerSelected }
          : question;
      });
    });
  }

  function checkAnswer() {
    setResults(true);
    const correct = countCorrect(questions);
    const rank = scoreToRank(correct);
    setRank(rank);
    if (correct > highScore) {
      setHighScore(correct);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function countCorrect(questions) {
    let total = 0;
    questions.forEach((question) => {
      const selectedAnswer = question.a.filter((i) => i.selected === true);
      if (selectedAnswer.length) {
        selectedAnswer[0].answer === question.correct ? total++ : total;
      }
    });
    return total;
  }

  function resetGame() {
    setResults(false);
    setReset((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const quizComponents = questions.map((question, index) => (
    <Question
      key={question.key}
      id={question.key}
      index={index + 1}
      question={question.q}
      answers={question.a}
      correct={question.correct}
      selectAnswer={selectAnswer}
    />
  ));

  const resultComponents = questions.map((question, index) => (
    <QuestionResults
      key={question.key}
      id={question.key}
      index={index + 1}
      question={question.q}
      answers={question.a}
      selected={question.selected}
      correct={question.correct}
    />
  ));

  return (
    <div className="quiz-screen">
      <h1>Odin Quest</h1>
      <Results
        rank={rank}
        results={results}
        highScore={JSON.parse(highScore)}
        scoreToRank={scoreToRank}
      />
      <div className="questions">
        {results ? resultComponents : quizComponents}
      </div>
      {props.mounted && (
        <button
          className="check-answers"
          onClick={results ? resetGame : checkAnswer}
        >
          {results ? 'Try again' : 'Check answers'}
        </button>
      )}
    </div>
  );
}
