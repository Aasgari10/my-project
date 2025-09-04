import classes from '../indext.module.css'
export default function Log ( {turns} ) {
    return(
        
        <div className= {classes.bigContainer}>
        <ol id={classes.log}>
            {turns.map ((turn) => <li key={`${turn.square.row}${turn.square.col}`}>{turn.player}selectet{turn.square.row},{turn.square.col} </li>)}
        </ol>
        </div>
    )
}