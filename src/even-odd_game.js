import readlineSync from 'readline-sync';
import sayHello from './cli.js';
import { randomNumber, evenCheck } from './index.js';

const userName = sayHello();
function evenGame() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctCounter = 1;
  while (correctCounter > 0) {
    if (correctCounter === 4) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
    const question = randomNumber(1, 100);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    let correctAnswer;
    if (evenCheck(question)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctCounter += 1;
    } else {
      correctCounter = 0;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again ${userName}!`);
      break;
    }
  }
}
export default evenGame;
