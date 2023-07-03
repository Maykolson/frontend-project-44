import { cons } from '@hexlet/pairs';
import { playGame } from '../index.js';
import randomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

function gcd(a, b) {
    if (b) {
        return gcd(b, a % b);
    } else {
        return Math.abs(a);
    }
}

const data = () => {
    const num1 = randomNumber(1,100);
    const num2 = randomNumber(1,100);
    const question = `${num1} ${num2}`;
    const rightAnswer = String(gcd(num1, num2));
    return cons(question, rightAnswer);
}

export default () => playGame(data, description);