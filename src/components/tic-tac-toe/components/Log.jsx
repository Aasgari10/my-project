import classes from '../indextic.module.css'

export default function Log ( {turns} ) {
    return(
        <ol className={classes.ol} id={classes.log}>
            {turns.map ((turn) => <li key={`${turn.square.row}${turn.square.col}`}>{turn.player}selectet{turn.square.row},{turn.square.col} </li>)}
        </ol>
    )
}