import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import Player from "./components/Player"
import GameOver from "./components/GameOver"
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./winning-combination"
import classes from './indextic.module.css'


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

function Thetictactoe() {
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

    function HandleSelectSquare(rowIndex, colIndex) {
        if (gameBoard[rowIndex][colIndex] || winner || hasDraw) return; // Prevent move if square is occupied or game is over
        setGameTurns(prevTurnes => {
            const currentPlayer = driveActionPlayer(prevTurnes);
            const updatedTurnes = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurnes];
            return updatedTurnes;
        });
    }

    function HandleRestart() {
        setGameTurns([]);
    }

    function HandlePlayerChangeName(symbol, newName) {
        setPlayers(prevPlayer => {
            return {
                ...prevPlayer,
                [symbol]: newName
            };
        });
    }

    return (
         <>
         <div className={classes.html}>
         <div className={classes.body}>
         <header className={classes.header}>
      <h1 className={classes.h1}>Whoever loses is going to face <span class={classes.highlight}>Calvin</span>.</h1>


    </header>
        <main>
            <div id={classes.gameContainer}>
                <ol id={classes.players} className={classes.highlightPlayer }>
                    <Player onChangeName={HandlePlayerChangeName} name='player 1' symbol='x' isActive={activePlayer === 'x'} />
                    <Player onChangeName={HandlePlayerChangeName} name='player 2' symbol='o' isActive={activePlayer === 'o'} />
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} onRestart={HandleRestart} />}
                <GameBoard onSelectSquare={HandleSelectSquare} board={gameBoard} />
            </div>
            <Log turns={gameTurnes} />
        </main>
        </div>
        </div></>
    );
}

export default Thetictactoe;
