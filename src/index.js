/* eslint-disable linebreak-style */
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
const evenCheck = (number) => {
  if (number % 2 === 0 && number !== 0) {
    return true;
  }
  return false;
};
export { randomNumber, evenCheck };
