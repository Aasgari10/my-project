import { calculateInvestmentResult  , formatter } from '../src/util/investment';
 import classes from "../src/indexinvest.module.css"


export default function Results({ input }) {
    const resultsData = calculateInvestmentResult(input);
    const initialValue = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

    return (
        <div className={classes.resultContainer}>
        <table id={classes.result}>
           
            <thead>
                <tr className={classes.head}>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map(yearData => {
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialValue;
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{totalAmountInvested}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </div>
    );
}
