 import logo from '../src/assets/logo.jpg'
 import classes from "../src/indexinvest.module.css"

export default function Header(){
    return(
        <header id={classes.header}>
            <img src={logo} className='img'/>
            <h1>Invesment Calculator</h1>
        </header>
    )
} 