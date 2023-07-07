import PropTypes from 'prop-types'

const Statistic = ({good, neutral, bad, total, posPercentage }) => {
    return (
        <ul>
            <li>Good:{good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>PositiveFeedback: {posPercentage}%</li>
        </ul>
    )
}

Statistic.propTypes = {
    text: PropTypes.string
}

export default Statistic;