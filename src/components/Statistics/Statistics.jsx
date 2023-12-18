import css from "./statistics.module.css"
import {Notification} from '../Notification/Notification'


const Statistics = ({good, neutral, bad, total, positivePercentage}) => {

    return (

<div className={css.statisticsSection}>
  {/* <h2 className={css.statisticsTitle}>Statistics</h2> */}

{ total < 1 && <Notification message="There is no feedback" />}

 { total > 0 && <ul className={css.statisticsList}> 
    <li> <p className={css.statisticsText}>Good: {good}</p></li>
<li className={css.statisticsListItem}> <p className={css.statisticsText}>Neutral: {neutral}</p></li>
<li className={css.statisticsListItem}> <p className={css.statisticsText}>Bad: {bad}</p></li>
<li className={css.statisticsListItem}> <p className={css.statisticsText}>Total: {total}</p></li>
<li className={css.statisticsListItem}> <p className={css.statisticsText}>Positive feedback: {positivePercentage}%</p></li>
</ul> }
</div>
    )
}

export {Statistics}