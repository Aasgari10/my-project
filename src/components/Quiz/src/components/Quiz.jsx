import Summary from "./summary"; 
import { useState, useCallback,  useRef } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import StartingPage from "./startingPage";
import "../indexQuiz.css"


export default function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const [remainingTime, setRemainingTime] = useState(20000);
  const activeQuestionIndexRef = useRef(0);
  const [gameIsStarted , setGameIsStarted]= useState(false)

  const rawIndex = answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const activeQuestionIndex = Math.min(rawIndex, QUESTIONS.length - 1);
  activeQuestionIndexRef.current = activeQuestionIndex;
  const quizIsComplete = userAnswers.length === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setAnswerState('answered');
    setUserAnswers(prev => [...prev, selectedAnswer]);

    setTimeout(() => {
      const currentQuestion = QUESTIONS[activeQuestionIndexRef.current];
      if (currentQuestion) {
        const correctAnswer = currentQuestion.answers[0];
        setAnswerState(selectedAnswer === correctAnswer ? 'correct-history' : 'wrong-history');
      }

      setTimeout(() => {
        setAnswerState('');
        setRemainingTime(20000); 
      }, 2000);
    }, 1000);
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
        <Summary userAnswers={userAnswers}/>
    );
  }
   function handleStart (){
setGameIsStarted(true)  
 }

   if(gameIsStarted){ 
    return(
     <div id="quiz-history">      
      <Question 
        questionText={QUESTIONS[activeQuestionIndex]?.text || ''}
        answers={QUESTIONS[activeQuestionIndex]?.answers || []}
        onSelectAnswer={handleSelectAnswer}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        remainingTime={remainingTime}
        setRemainingTime={setRemainingTime}
        onSkipAnswer={handleSkipAnswer}
        key={activeQuestionIndex}
      />
    </div>
    )
   }


  return (
   <StartingPage startHandler={handleStart} />  // Proper prop passing
  );
}
