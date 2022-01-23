import { useState } from 'react';

import Section from 'componenets/Section/Section';
import FeedbackOptions from 'componenets/FeedbackOptions/FeedbackOptions';
import Statistics from 'componenets/Statistics/Statistics';
import Notification from 'componenets/Notification/Notification';

import s from './App.module.scss';

const initialState = { good: 0, neutral: 0, bad: 0 };

export default function App() {
  const [feedback, setFeedback] = useState(initialState);

  const handleIncrease = keyName => {
    setFeedback(prev => ({ ...prev, [keyName]: prev[keyName] + 1 }));
  };

  const countTotal = () => {
    return Object.values(feedback).reduce((acc, value) => acc + value, 0);
  };

  const countPositive = () => {
    return Math.round((feedback.good * 100) / total);
  };

  const optionsArray = Object.keys(feedback);
  const total = countTotal();
  const percent = countPositive();
  const statistics = Object.entries(feedback);

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
