// src/games/gcd.js
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const findGCD = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return Math.abs(a)
}

const getRound = () => {
  const num1 = getRandomNumber(1, 100)
  const num2 = getRandomNumber(1, 100)
  const question = `${num1} ${num2}`
  const correctAnswer = findGCD(num1, num2).toString()
  return { question, correctAnswer }
}

const rule = 'Find the greatest common divisor of given numbers.'

export default { getRound, rule }
