import styles from '../styles/Home.module.css';
import Card from '../components/Card';
import { useEffect, useState } from 'react';
import { shuffle } from '../utils/utils';

const url =
  'https://api.giphy.com/v1/gifs/search?api_key=eAOOp2bkz4qoXdjVNop4VuyiK2HfZRpp&q=usa+actor+faces&limit=20';

function Home() {
  const [images, setImages] = useState(null);

  console.log('re-render!!!');

  const onCardClick = () => {
    setImages(previousState => [...shuffle(previousState)]);
  };

  useEffect(() => {
    const getGiphyImages = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw Error;

        const { data } = await response.json();

        const newData = data.map(
          ({
            images: {
              original: { url, webp },
            },
            title,
            id,
          }) => {
            return { imageUrl: url, staticImage: webp, title, id };
          }
        );

        setImages(newData);
      } catch (e) {
        console.log(e);
      }
    };

    getGiphyImages();
  }, []);

  if (images)
    return (
      <div className={styles.home}>
        {images.map(({ imageUrl, title, id }) => (
          <Card
            onCardClick={onCardClick}
            title={title}
            imageUrl={imageUrl}
            key={id}
          />
        ))}
      </div>
    );
  return <div className={styles.home}>Loading...</div>;
}

export default Home;
