import { Link } from 'react-router-dom';
import classes from './MainPage.module.css'
export default function Main() {
  return (
<div className={classes.html}>
    <div className={classes.container}>
    <div className={classes.body}>
      <div className={classes.header}>
        <h1 className={classes.headerH1}>Mini Projects</h1>

        <h2 className={classes.froMme}>That I Have Assembled</h2>
      </div>
      <ul className={classes.myProjectsUl}>
        <Link className={classes.links} to='/about-me'><li ><button className={classes.btn}><a className={classes.links}>About me</a></button></li></Link>
        <Link className={classes.links} to='/tic-tac-toe'><li><button className={classes.btn}><a className={classes.links}>Tic-Tac-Toe</a></button></li></Link>
        <Link className={classes.links} to='/Invesment-calculator'><li><button className={classes.btn}><a className={classes.links}>Investment Calculator</a></button></li></Link>
        <Link className={classes.links} to='/count-down'><li><button className={classes.btn}><a className={classes.links}>Count Down</a></button></li></Link>
        <Link className={classes.links} to='/quiz'><li><button className={classes.btn}><a className={classes.links}>Quiz</a></button></li></Link>
    </ul>
      </div>
    </div>
    </div>
  );
}; // ← Add this semicolon
