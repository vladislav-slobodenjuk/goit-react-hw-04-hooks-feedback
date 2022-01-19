import PropTypes from 'prop-types';

export default function Statistics(props) {
  const { total, positive, statistics } = props;

  return (
    <ul className="statistics">
      {statistics.map(([key, value]) => {
        return (
          <li className="item" key={key}>
            {key}: {value}
          </li>
        );
      })}
      <li className="item" key="total">
        Total: {total}
      </li>
      <li className="item" key="positive">
        Positive feedback: {positive}%
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  props: PropTypes.objectOf(
    PropTypes.exact({
      total: PropTypes.number.isRequired,
      positive: PropTypes.number.isRequired,
      statistics: PropTypes.arrayOf(PropTypes.array).isRequired,
    }),
  ),
};
