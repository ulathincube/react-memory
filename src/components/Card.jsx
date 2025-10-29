import styles from '../styles/Card.module.css';
import { useState } from 'react';

function Card({
  imageUrl,
  title,
  onCardClick,
  onChangeScore: { setBestScore, setScore },
}) {
  const [clickedTimes, setClickedTimes] = useState(0);

  const onButtonClick = () => {
    onCardClick();
    setClickedTimes(clickedTimes + 1);

    if (clickedTimes > 0) {
      setScore(0);
      // restart game => persist bestScore
      return;
    }
    setScore(currentScore => currentScore + 1);
    setBestScore(currentScore => currentScore + 1);
  };

  return (
    <button onClick={onButtonClick} className={styles.card}>
      <img className={styles.avatar} src={imageUrl} alt={title} />
      <figcaption className={styles.caption}>{title}</figcaption>
    </button>
  );
}

export default Card;
