// src/games/progression.js
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }
  return progression
}

const getRound = () => {
  const length = getRandomNumber(5, 10)
  const start = getRandomNumber(1, 50)
  const step = getRandomNumber(2, 10)
  const hiddenIndex = getRandomNumber(0, length - 1)

  const progression = generateProgression(start, step, length)
  const correctAnswer = progression[hiddenIndex].toString()
  progression[hiddenIndex] = '..'
  const question = progression.join(' ')

  return { question, correctAnswer }
}

const rule = 'What number is missing in the progression?'

export default { getRound, rule }
