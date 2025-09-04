import classes from '../indext.module.css'


export default function GameBoard({onSelectSquare , board}) {
    

    return ( 
        <div className={classes.bigContainer}>
        <ol id={classes.gameBoard}>
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button className={classes.btnn} onClick={() => onSelectSquare(rowIndex, colIndex) } disabled={playerSymbol !== null  }>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
        </div>
    ); 
}