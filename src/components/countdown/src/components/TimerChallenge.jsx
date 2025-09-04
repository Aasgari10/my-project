    import { useRef, useState } from "react";
    import classes from "../numbers.module.css";

    import ResultModel from "./ResultModel";
    export default function TimerChallenge ({title , targetTime}){
        const timer = useRef();
        const dialog = useRef();
        const [timeRemaining , setTimeRemaining] = useState(targetTime * 1000);
        const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime*1000;

        if (timeRemaining <=0)
        {
            clearInterval(timer.current);
            dialog.current.showModal()
        }

        function handleReset(){
            setTimeRemaining(targetTime*1000);
        }

        function handleStart(){
             timer.current= setInterval(() => {
                setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
            } , 10);
        }

        function handleStop(){
            clearInterval(timer.current);
            dialog.current.showModal()
        }
        return (
        <>
        <ResultModel
         ref={dialog} targetTime={targetTime} result='lost'
          remainingTime={timeRemaining}
          onReset={handleReset}/> 
        <section className={classes.challenge}>
            <h2>
            {title}
            </h2>
            <p className={classes.challengeTime}   >
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
            <button onClick={timerIsActive ? handleStop : handleStart }>
            {timerIsActive ? 'stop' : 'start'}  it!
            </button>
            </p>
            <p className={timerIsActive ? classes.active : undefined}>
                {timerIsActive ? 'Timer is working' : 'timer is not working'}
            </p>
        </section>
    </> );
    }