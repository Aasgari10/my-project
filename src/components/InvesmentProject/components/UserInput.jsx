 import classes from "../src/indexinvest.module.css"

export default function UserInput( {onChange, Userinput }){
 


return <section id={classes.userInput}>
        <div className={classes.inputGroup}>
            <p>
                <label >Initial Invesment</label>
<input 
  type="text" 
  inputMode="numeric"
  pattern="[0-9]*"
  value={Userinput.initialInvestment}
  onChange={(event) => {
    const englishNumbers = event.target.value
      .replace(/[^0-9]/g, '')
      .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
    onChange('initialInvestment', englishNumbers);
  }}
/>            </p>
                <p>
                <label >Anual Invesment</label>
<input 
  type="text" 
  inputMode="numeric"
  pattern="[0-9]*"
  value={Userinput.annualInvestment}
  onChange={(event) => {
    const englishNumbers = event.target.value
      .replace(/[^0-9]/g, '')
      .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
    onChange('annualInvestment', englishNumbers);
  }}
/>            </p>
        </div>
                <div className={classes.inputGroup}>
            <p>
                <label >Expected return</label>
<input 
  type="text" 
  inputMode="numeric"
  pattern="[0-9]*"
  value={Userinput.expectedReturn}
  onChange={(event) => {
    const englishNumbers = event.target.value
      .replace(/[^0-9]/g, '')
      .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
    onChange('expectedReturn', englishNumbers);
  }}
/>            </p>
            <p>
                <label >Duration</label>
<input 
  type="text" 
  inputMode="numeric"
  pattern="[0-9]*"
  value={Userinput.duration}
  onChange={(event) => {
    const englishNumbers = event.target.value
      .replace(/[^0-9]/g, '')
      .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
    onChange('duration', englishNumbers);
  }}
/>
            </p>
        </div>
    </section>
}