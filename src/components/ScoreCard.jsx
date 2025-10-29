import styles from '../styles/Scorecard.module.css';
import Score from './Score';

function ScoreCard({ currentScore, bestScore }) {
  return (
    <div className={styles.board}>
      <Score title='Current Score' currentScore={currentScore} />
      <Score title='Best Score' currentScore={bestScore} />
    </div>
  );
}

export default ScoreCard;
