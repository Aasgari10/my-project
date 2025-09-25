import "../indexQuiz.css"

export default function StartingPage({ startHandler }) {  // Fixed prop destructuring
    return(
    <div className="starting-page-history">
        <h3>تعداد سوال : ۷</h3>
        <h3>مدت زمان پاسخگویی برای هر سوال : ۲۰ ثانیه</h3>
        <button onClick={startHandler}>شروع آزمون</button>  {/* Added button text */}
    </div>
    ) 
}