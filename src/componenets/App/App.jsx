import { useState } from 'react';

import Statistics from 'componenets/Statistics/Statistics';
import Section from 'componenets/Section/Section';
import FeedbackOptions from 'componenets/FeedbackOptions/FeedbackOptions';
import Notification from 'componenets/Notification/Notification';

import s from './App.module.scss';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrease = keyName => {
    switch (keyName) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }

    // this.setState(prevState => ({
    //   [keyName]: prevState[keyName] + 1,
    // }));
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

// class oldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleIncrease = keyName => {
//     this.setState(prevState => ({
//       [keyName]: prevState[keyName] + 1,
//     }));
//   };

//   countTotal = () => {
//     return Object.values(this.state).reduce((acc, value) => acc + value, 0);
//   };

//   countPositive = () => {
//     const { good } = this.state;
//     const total = this.countTotal();
//     return Math.round((good * 100) / total);
//   };

//   render() {
//     const optionsArray = Object.keys(this.state);
//     const total = this.countTotal();
//     const percent = this.countPositive();
//     const statistics = Object.entries(this.state);

//     return (
//       <div className={s.app}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={optionsArray}
//             onLeaveFeedback={this.handleIncrease}
//           />
//         </Section>

//         <Section title="Statistics">
//           {total > 0 && (
//             <Statistics
//               statistics={statistics}
//               total={total}
//               positive={percent}
//             />
//           )}
//           {!total && <Notification message="There is no feedback" />}
//         </Section>
//       </div>
//     );
//   }
// }