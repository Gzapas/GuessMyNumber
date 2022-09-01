'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const numberContent = function (number) {
  document.querySelector('.number').textContent = number;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    // document.querySelector('.number').textContent = secretNumber;
    numberContent(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== highScore) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : ' Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  // document.querySelector('.number').textContent = secretNumber;
  numberContent(secretNumber);
  // document.querySelector('.number').textContent = '?';
  numberContent('?');
  displayMessage('Start guessing...');

  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
