import readlineSync from 'readline-sync';
import sayHello from './cli.js';

function questionNumber() {
  return Math.floor(Math.random() * 100);
}
function evenCheck(number) {
  if (number % 2 === 0 && number !== 0) {
    return true;
  }
  return false;
}
function evenGame() {
  const userName = sayHello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctCounter = 1;
  while (correctCounter > 0) {
    if (correctCounter === 4) {
      console.log(`Congratulations! ${userName}`);
      break;
    }
    const question = questionNumber();
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
