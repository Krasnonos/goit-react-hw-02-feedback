import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  choseAnswer = answearValue => {
    this.setState(prevState => {
      return { [answearValue]: prevState[answearValue] + 1 };
    });
  };

  countTotalFeedback() {
    const answearValues = Object.values(this.state);

    return answearValues.reduce((acc, item) => {
      return acc + item;
    }, 0);
  }

  countPositiveFeedbackPercentage() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.state.good;

    if (positiveFeedback === 0) {
      return 0;
    } else {
      return ((positiveFeedback / totalFeedback) * 100).toFixed(0);
    }
  }

  render() {
    const buttonsArray = Object.keys(this.state);
    const statsArray = Object.entries(this.state);
    const totalAnswears = this.countTotalFeedback();
    const avarageValue = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <h1>Please leave feedback</h1>
        <ul>
          {buttonsArray.map(button => (
            <li key={button}>
              <button type="button" onClick={() => this.choseAnswer(button)}>
                {button}
              </button>
            </li>
          ))}
        </ul>
        <div>
          <p>Statistics</p>
          <ul>
            {statsArray.map(item => (
              <li key={item[0]}>
                <p>
                  {item[0]}: {item[1]}
                </p>
              </li>
            ))}
          </ul>
          <p>Total: {totalAnswears}</p>
          <p>Positive Feedback: {avarageValue}%</p>
        </div>
      </div>
    );
  }
}
