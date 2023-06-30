import { cons } from '@hexlet/pairs';
import { randomNumber, playGame } from '../../src/index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
        if (i !== num && num % i === 0) {
            return false;
        }
    }
    
    return true;
};

const data = () => {
    const question = randomNumber(1, 100);
    const rightAnswer = isPrime(question) ? 'yes' : 'no';
    return cons(question, rightAnswer);
}

export default () => playGame(data, description);