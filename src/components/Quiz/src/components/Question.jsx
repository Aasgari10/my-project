// Question.jsx
import { useEffect } from "react";
import Answers from "./answers";
import QuestionTimer from "./questionTimer";
import "../indexQuiz.css"

export default function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer,
  remainingTime,
  setRemainingTime
}) {
  useEffect(() => {
    if (answerState === 'answered-history') {
      setRemainingTime(prev => Math.min(prev, 10000));
    }
  }, [answerState, setRemainingTime]);

  return (
    <div id="question-history">

      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
         <QuestionTimer 
        remainingTime={remainingTime}
        setRemainingTime={setRemainingTime}
        onTimeout={onSkipAnswer}
        answerState={answerState}
      />    
    </div>
  );
}
