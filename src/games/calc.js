// src/games/calc.js
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const operations = [
  { sign: '+', compute: (a, b) => a + b },
  { sign: '-', compute: (a, b) => a - b },
  { sign: '*', compute: (a, b) => a * b },
]

const getRound = () => {
  const num1 = getRandomNumber(1, 30)
  const num2 = getRandomNumber(1, 30)
  const operation = operations[Math.floor(Math.random() * operations.length)]
  const question = `${num1} ${operation.sign} ${num2}`
  const correctAnswer = operation.compute(num1, num2).toString()
  return { question, correctAnswer }
}

const rule = 'What is the result of the expression?'

export default { getRound, rule }
