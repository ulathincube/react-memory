import styles from '../styles/Card.module.css';

function Card({ imageUrl, title }) {
  return (
    <figure className={styles.card}>
      <img className={styles.avatar} src={imageUrl} alt={title} />
      <figcaption className={styles.caption}>{title}</figcaption>
    </figure>
  );
}

export default Card;
