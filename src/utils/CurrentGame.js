import shuffle from './shuffle';
import last from './last';

function getRandomizedNumbers() {
  const numArray = [];
  for (let i = 1; i <= 90; i++) {
    numArray.push(i);
  }
  return shuffle(numArray);
}

function createNewGame() {
  const randomizedNumbers = getRandomizedNumbers();
  return {
    numbers: randomizedNumbers.slice(0, randomizedNumbers.length - 1),
    usedNumbers: [last(randomizedNumbers)],
  };
}

const CurrentGame = {
  save(game) {
    localStorage.setItem('game', JSON.stringify(game));
  },
  get() {
    const savedGame = JSON.parse(localStorage.getItem('game'));
    if (savedGame) {
      return savedGame;
    }
    const newGame = createNewGame();
    this.save(newGame);
    return newGame;
  },
  reset() {
    localStorage.removeItem('game');
  },
  hasSavedGame() {
    return !!JSON.parse(localStorage.getItem('game'));
  },
};

export default CurrentGame;
