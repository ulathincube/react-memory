import styles from '../styles/Score.module.css';

function Score({ score, title }) {
  return (
    <div className={styles.parent}>
      <span className={styles.score}>
        {title}: {!score ? 0 : score}
      </span>
    </div>
  );
}

export default Score;
