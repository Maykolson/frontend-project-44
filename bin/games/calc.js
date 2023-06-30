import { cons } from '@hexlet/pairs';
import { randomNumber, playGame } from '../../src/index.js';

const description = 'What is the result of the expression?';

const operators = [
  '+',
  '-',
  '*'
];

const operation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
  }
};

const data = () => {
  const num1 = randomNumber(0, 100);
  const num2 = randomNumber(0, 100);
  const operator = operators[randomNumber(0, operators.length - 1)];
  const sign = operator;
  const question = `${num1} ${sign} ${num2}`;
  const rightAnswer = String(operation(num1, num2, sign));
  return cons(question, rightAnswer);
};

export default () => playGame(data, description);