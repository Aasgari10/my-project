import { useState } from "react";
import Header from "../components/header.jsx";
import UserInput from "../components/UserInput.jsx";
import Results from "../components/results.jsx";
import classes from "./indexinvest.module.css";

function Invesment() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const inputValid = userInput.duration > 0;

    function handleChange(inputIdentify, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentify]: newValue === '' ? 0 : +newValue 
            };
        });
    }

    return (
        <><div className={classes.container}>
            <Header />
            <UserInput Userinput={userInput} onChange={handleChange} />
            {!inputValid && <p className={classes.center}>Please enter a duration greater than zero.</p>}
            {inputValid && <Results input={userInput} />} 
            </div>
        </>
    );
}

export default Invesment;
