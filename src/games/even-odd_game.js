import { cons } from '@hexlet/pairs';
import { playGame } from '../index.js';
import randomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = number => number % 2;

const data = () => {
  const question = randomNumber(1, 100);
  const rightAnswer = isEven(question) ? 'no' : 'yes';
  return cons(question, rightAnswer);
};

export default () => playGame(data, description);