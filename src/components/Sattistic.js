import { Stat } from './feedback.styled';
import{Notification} from './Notification'
const countTotalFeedback = ({ good, neutral, bad }) => {
  return good + neutral + bad;
};

const countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
  const total = countTotalFeedback({ good, neutral, bad });
  return total ? ((good / total) * 100).toFixed(0) : 0;
};

export const Statistics = ({good, neutral, bad }) => {
  const totalFeedback = countTotalFeedback({good, neutral, bad });
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage({good, neutral, bad});
  if (totalFeedback===0) {
    return(
      <Notification/>
    )
  } else {
  return (
    <Stat>
      <span>Good:{good}</span>
      <span>Bad:{bad}</span>
      <span> Neutral:{neutral}</span>
      <span>Total:{totalFeedback}</span>
      <span>Positive feedback:{positiveFeedbackPercentage}%</span>
    </Stat>
  );
}
}