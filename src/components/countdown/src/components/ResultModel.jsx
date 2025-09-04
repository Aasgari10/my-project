import classes from "../numbers.module.css";
export default function ResultModel({ref,onReset,   targetTime , remainingTime}){
    const userLost = remainingTime <= 0;
    const formatedRemainingTime = (remainingTime/1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
    return( <dialog ref={ref} className={classes.resultModal} >
            {!userLost && <h2>You Lost!</h2>}
            {!userLost && <h2>score : {score}</h2> }
        <p>Your goal was <strong>{targetTime} seconds.</strong> </p>
        <p>You stopped it with <strong>{formatedRemainingTime}</strong></p>
        <form method="dialog" onSubmit={onReset}>
            <button >Close</button>
        </form>
    </dialog>);
}