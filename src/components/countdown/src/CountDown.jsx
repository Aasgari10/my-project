import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
import classes from "./numbers.module.css"
function CountDown() {  
  return (
    <>
    <div className={classes.body}>
        <div id={classes.modal}></div>
        <div id={classes.content}>
        <header className={classes.header}>
        <h1 className={classes.h1}>Countdown</h1>
        </header>
        </div>
      <Player />
      <div id={classes.challenges}>
        <TimerChallenge title='level 1' targetTime={3}/>
        <TimerChallenge title='level 2' targetTime={5}/>
        <TimerChallenge title='level 3' targetTime={10}/>
        <TimerChallenge title='level 4' targetTime={15}/>
        <TimerChallenge title='level 5' targetTime={20}/>
        <TimerChallenge title='level 6' targetTime={25}/>

      </div></div>
    </>
  );
}

export default CountDown;
