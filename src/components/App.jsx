import { Component } from "react"

import {Statistics} from './Statistics/Statistics'
import {Feedback} from "./Feedback/Feedback"
import {Section} from "./Section/Section"

export class App extends Component { 

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }


  // Statistics section handler
  countTotalFeedback() {
    const sum = this.state.good + this.state.neutral + this.state.bad;
       return sum;
  }

  countPositiveFeedbackPercentage(good, total) {
  const positive = (good / total) * 100;
  if (isNaN(positive)) {
    return 0;
  }
  return positive.toFixed(0);
  }



// Feedback buttons section
btnHandler = (currentKeyState) => {
  this.setState({ [currentKeyState]: this.state[currentKeyState] + 1})
}


render (){
  return (
    <div
      style={{
        // height: '100vh',
        margin: "0 auto",
        width: '650px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

<Section title="Please leave feedback"> 
<Feedback  
options={["good", "neutral", "bad"]}  
onLeaveFeedback={this.btnHandler} />
  </Section>


<Section title="Statistics">
<Statistics  
good={this.state.good} 
neutral={this.state.neutral} 
bad={this.state.bad} 
total={this.countTotalFeedback()} 
positivePercentage={this.countPositiveFeedbackPercentage(this.state.good, this.countTotalFeedback())} 
 />
</Section>
    </div>
  );
};
}