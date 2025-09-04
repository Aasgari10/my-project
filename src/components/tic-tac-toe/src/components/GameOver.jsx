import classes from '../indext.module.css'
export default function GameOver({winner ,onRestart}){
    return(
        <div className={classes.bigContainer}>
        <div id = {classes.gameOver}>
            <h2>Game Over!</h2>
           {winner && <p>{winner} Won! </p>}
           {!winner && <p> Draw!
             </p>}

            <p><button onClick={onRestart}>Rematch!</button></p>
        </div>
        </div>
    )

}