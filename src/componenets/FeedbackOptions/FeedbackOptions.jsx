import PropTypes from 'prop-types';

export default function FeedbackOptions(props) {
  const { options, onLeaveFeedback } = props;

  return (
    <div className="Counter__controls">
      <ul className="buttonList">
        {options.map(option => {
          return (
            <li className="buttonList__item" key={option}>
              <button
                className={option}
                type="button"
                onClick={() => onLeaveFeedback(option)}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
