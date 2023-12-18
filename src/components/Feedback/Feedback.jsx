import css from "./feedback.module.css";


const Feedback = ({ options, onLeaveFeedback}) => {

    return (
<div className={css.feedbackSection}>
  {/* <h2 className={css.feedbackTitle}>Please leave feedback</h2> */}
  <div className={css.feedbackButtons}>
    <button onClick={() => onLeaveFeedback(options[0])} className={css.feedbackBtn}>Good</button>
    <button onClick={() => onLeaveFeedback(options[1])} className={css.feedbackBtn}>Neutral</button>
    <button onClick={() => onLeaveFeedback(options[2])} className={css.feedbackBtn}>Bad</button>
  </div>
</div>
    )
}

export {Feedback};