import { cons } from '@hexlet/pairs';
import { playGame } from '../index.js';
import randomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const length = 10;

const getQuestion = () => {
  const plusingNumber = randomNumber(1, 10);
  const question = [randomNumber(1, 100)];
  for (let i = 0; i < length; i += 1) {
    question.push(question[i] + plusingNumber);
  }
  return question;
};

const data = () => {
  const missingIndex = randomNumber(0, 9);
  let question = getQuestion();
  const rightAnswer = String(question[missingIndex]);
  question[missingIndex] = '..';
  question = question.join(' ');
  return cons(question, rightAnswer);
};

export default () => playGame(data, description);
