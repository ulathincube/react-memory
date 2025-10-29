import styles from '../styles/Score.module.css';

function Score({ title, currentScore }) {
  return (
    <div className={styles.parent}>
      <span className={styles.score}>
        {title}: {currentScore}
      </span>
    </div>
  );
}

export default Score;
