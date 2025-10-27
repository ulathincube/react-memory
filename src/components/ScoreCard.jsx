import styles from '../styles/Scorecard.module.css';
import Score from './Score';

function ScoreCard() {
  return (
    <div className={styles.board}>
      <Score title='Current Score' />
      <Score title='Best Score' />
    </div>
  );
}

export default ScoreCard;
