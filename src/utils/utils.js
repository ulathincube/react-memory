function shuffle(array) {
  let shuffleIndex = array.length;
  let temp;

  while (shuffleIndex) {
    const index = Math.floor(Math.random() * shuffleIndex--);

    temp = array[shuffleIndex];
    array[shuffleIndex] = array[index];
    array[index] = temp;
  }

  return array;
}

export { shuffle };
