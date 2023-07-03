import { cons } from '@hexlet/pairs';
import { playGame } from '../../src/index.js';
import randomNumber from '../../src/utils.js';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2;

const data = () => {
  const question = randomNumber(1, 100);
  const rightAnswer = isEven(question) ? 'no' : 'yes';
  return cons(question, rightAnswer);
};

export default () => playGame(data, description);