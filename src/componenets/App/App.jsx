import { useState } from 'react';

import Section from 'componenets/Section/Section';
import FeedbackOptions from 'componenets/FeedbackOptions/FeedbackOptions';
import Statistics from 'componenets/Statistics/Statistics';
import Notification from 'componenets/Notification/Notification';

import s from './App.module.scss';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrease = keyName => {
    switch (keyName) {
      case 'good':
        // setGood(prev => prev + 1);
        setGood(good + 1); // как лучше? и можно ли здесь так?
        break;

      case 'neutral':
        // setNeutral(prev => prev + 1);
        setNeutral(neutral + 1);
        break;

      case 'bad':
        // setBad(prev => prev + 1);
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  const countTotal = () => good + neutral + bad;
  const total = countTotal();

  const countPositive = () => {
    return Math.round((good * 100) / total);
  };
  const percent = countPositive();

  const optionsArray = ['good', 'neutral', 'bad'];
  const statistics = [
    ['good', good],
    ['neutral', neutral],
    ['bad', bad],
  ];
  // const statistics = Object.entries(this.state);

  return (
    <div className={s.app}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionsArray}
          onLeaveFeedback={handleIncrease}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 && (
          <Statistics
            statistics={statistics}
            total={total}
            positive={percent}
          />
        )}
        {!total && <Notification message="There is no feedback" />}
      </Section>
    </div>
  );
}
