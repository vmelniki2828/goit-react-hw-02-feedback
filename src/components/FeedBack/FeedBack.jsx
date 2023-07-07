import PropTypes from 'prop-types';

const FeedBack = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(option => {
        return (
            <button
              key={option}
              name={option}
              type='button'
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
        );
      })}
    </ul>
  );
};

FeedBack.propTypes = {
  text: PropTypes.string,
};

export default FeedBack;
