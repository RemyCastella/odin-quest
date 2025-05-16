export interface RawQuestionData {
  type: string,
  difficulty: string,
  category: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[]
}

export interface QuizQuestionData {
  key: string,
  q: string,
  a: Answer[],
  correct: string
}

export interface AnswerData {
  answer: string,
  id: string,
  selected: boolean,
  correct: boolean
}
