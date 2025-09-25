import { useEffect } from "react";
import "../indexQuiz.css"


export default function QuestionTimer({ 
  remainingTime, 
  setRemainingTime, 
  onTimeout,
  answerState 
}) {
  useEffect(() => {
    if (answerState) return; // Freeze timer when answer is selected
    
    const timer = setTimeout(() => {
      onTimeout();
      setRemainingTime(10000);
    }, remainingTime);

    const interval = setInterval(() => {
      setRemainingTime(prev => Math.max(prev - 100, 0));
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [remainingTime, setRemainingTime, onTimeout, answerState]);

  return <progress id="question-time-history" max={20000} value={remainingTime} />;
}
