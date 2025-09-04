import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import Player from "./components/Player"
import GameOver from "./components/GameOver"
import { useState } from "react"
import classes from "./indext.module.css"
import { WINNING_COMBINATIONS } from "./winning-combination"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function driveActionPlayer(gameTurnes) {
    let currentPlayer = 'x';
    if (gameTurnes.length > 0 && gameTurnes[0].player === 'x') {
        currentPlayer = 'o';
    }
    return currentPlayer;
}

function driveWiner(gameBoard, players) {
    let winner;
    for (let combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
            winner = players[firstSquareSymbol];
        }
    }
    return winner;
}

function App() {
    const [gameTurnes, setGameTurns] = useState([]);
    const [players, setPlayers] = useState({
        x: 'player 1',
        o: 'player 2'
    });

    const activePlayer = driveActionPlayer(gameTurnes);
    let gameBoard = [...initialGameBoard].map(array => [...array]);

    for (const turn of gameTurnes) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }

    const winner = driveWiner(gameBoard, players);
    const hasDraw = gameTurnes.length === 9 && !winner;



return (
  <main className={classes.mainWrapper}>
    <div className={classes.gameContainer}>
      <ol className={`${classes.players} ${classes.playerList}`}>
        {/* Player components */}
      </ol>
      {/* GameOver and GameBoard */}
    </div>
    <Log turns={gameTurnes} className={classes.moveHistory} />
  </main>
);
}

export default App;
