import TicTacToe from './Tictactoe'
import classes from './indext.module.css'
export default function TicTacToeFinal() {
  return (
    <div className={classes.bigContainer}>
      <div className={classes.ccontainer}>
        <TicTacToe />
        <div className={classes.backgroundPattern} /> 
      </div>
    </div>
  );
};