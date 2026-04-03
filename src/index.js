// src/index.js
import readlineSync from 'readline-sync'

const ROUNDS_COUNT = 3

const runGame = (game) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(game.rule)

  for (let i = 0; i < ROUNDS_COUNT; i++) {
    const { question, correctAnswer } = game.getRound()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ').trim()

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${name}!`)
}

export default runGame
