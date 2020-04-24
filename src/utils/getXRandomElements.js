import { shuffle } from './shuffle';

export const getXRandomElements = (array, number) => shuffle(array).slice(0, number);
