import readlineSync from 'readline-sync';
import sayHello from './cli.js';
import { randomNumber, evenCheck } from './index.js';

const userName = sayHello();
function evenGame() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    let correctAnswer;
    const number = randomNumber(0, 100);

    if (number % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
export default evenGame;
