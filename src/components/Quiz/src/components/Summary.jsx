import "../indexQuiz.css"
import QUESTIONS from "../questions";

export default function Summary({ userAnswers }) {
    // Fixed correct answers calculation
    const correctAnswers = userAnswers.filter((answer, index) => 
        answer === QUESTIONS[index].answers[0]
    );
    
    // Fixed skipped answers calculation
    const skippedAnswers = userAnswers.filter(answer => answer === null);
    
    // Calculate percentages safely
    const totalQuestions = userAnswers.length;
    const skippedAnswersShare = Math.round((skippedAnswers.length / totalQuestions) * 100);
    const correctAnswerShare = Math.round((correctAnswers.length / totalQuestions) * 100);
    const wrongAnswerShare = Math.max(0, 100 - skippedAnswersShare - correctAnswerShare);

    return (
        <div id="summary-history">
            <h2>پایان آزمون</h2>
            
            <div id="summary-stats-history">
                <p>
                    <span className="number-history">{skippedAnswersShare}٪</span>
                    <span className="text1-history">رد شده</span>
                </p>
                <p>
                    <span className="number-history">{correctAnswerShare}٪</span>
                    <span className="text2-history"> درست</span>
                </p>
                <p>
                    <span className="number-history">{wrongAnswerShare}٪</span>
                    <span className="text3-history"> اشتباه</span>
                </p>
            </div>

            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = "user-answer-history";
                    
                    if (answer === null) {
                        cssClass += " skipped-history";
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        cssClass += " correct-history";
                    } else {
                        cssClass += " wrong-history";
                    }

                    return (
                        <li key={index}> {/* Changed key to index for uniqueness */}
                            <h3>{index + 1}</h3>
                            <p className="question-history">{QUESTIONS[index].text}</p>
                            <p className={cssClass}>
                                {answer ?? "رد شده"}
                            </p>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
