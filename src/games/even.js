// src/games/even.js
const isEven = (num) => num % 2 === 0;

const getRound = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return {
    question: number.toString(),
    correctAnswer,
  };
};

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export default { getRound, rule };