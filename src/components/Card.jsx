import styles from '../styles/Card.module.css';

function Card({ imageUrl, title, onCardClick }) {
  return (
    <button onClick={onCardClick} className={styles.card}>
      <img className={styles.avatar} src={imageUrl} alt={title} />
      <figcaption className={styles.caption}>{title}</figcaption>
    </button>
  );
}

export default Card;
