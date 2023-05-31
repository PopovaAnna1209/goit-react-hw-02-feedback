import { React, Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0
	}
  
	countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);
    // countTotalFeedback = () => {
	// 	const { good, neutral, bad } = this.state;
	// 	const total = good + neutral + bad;
	// 	return total;
	// };

	countPositiveFeedbackPercentage = () => {
		return this.countTotalFeedback()
		  ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)
		  : '0';
	  };
	// countPositiveFeedbackPercentage = () => {
	// 	const total = this.countTotalFeedback();
	// 	const { good } = this.state;
	// 	const percentage = (good * 100) / total;
	// 	return Math.round(percentage);
	// };

	onLeaveFeedback = state => {
		this.setState(prevState => ({ [state]: prevState[state] + 1 }));
	  };
	// onLeaveFeedback = (event) => {
	// 	const name = event.target.name;
	// 	this.setState((prevState) => ({
	// 		[name]: prevState[name] + 1
	// 	}));
	// };


  render() {
    const { good, neutral, bad } = this.state;

    return (
    <>
	<Section title="Please leave feedback">
		<FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback} />
      </Section>

      {this.countTotalFeedback() ? (
	  <Section title="Statistics">
		<Statistics
			good={good}
			neutral={neutral}
			bad={bad}
			total={this.countTotalFeedback()}
			positivePercentage={this.countPositiveFeedbackPercentage()}
		/>
		</Section>
		) : ( 
		<Notification message="No feedback given" />
		)}

    </>
  );
 }
}


