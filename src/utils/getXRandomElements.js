import shuffle from './shuffle';

const getXRandomElements = (array, number) => shuffle(array).slice(0, number);

export default getXRandomElements;
