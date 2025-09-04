
import classes from '../indextic.module.css'

export default function GameBoard({onSelectSquare , board}) {
    return ( 
        <ol id={classes.gameBoard}>
            {board.map((row, rowIndex) => (
                <li className={classes.li} key={rowIndex}>
                    <ol className={classes.ol}>
                        {row.map((playerSymbol, colIndex) => (
                            <li className={classes.li} key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex) } disabled={playerSymbol !== null  }>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    ); 
}