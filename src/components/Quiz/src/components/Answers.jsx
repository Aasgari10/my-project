import "../indexQuiz.css"
import { useRef } from "react";

export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {
  const shuffledAnswers = useRef([...answers].sort(() => Math.random() - 0.5));

  return (
    <ul id="answers-history">
      {shuffledAnswers.current.map((answer) => (
        <li key={answer} className="answer-history">
          <button 
            onClick={() => onSelect(answer)}
            className={
              selectedAnswer === answer ? 
              (answerState === 'correct-history' || answerState === 'wrong-history' ? answerState : 'selected-history') : 
              ''
            }
            disabled={answerState !== ''}
          >
            {answer}
          </button>
        </li>
      ))}
    </ul>
  );
}
