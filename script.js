'use strict';

let secretNumber, score, playing;
let highScore = 0;

// Starting condition
const init = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  playing = true;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

init();

// Check the guess
document.querySelector('.check').addEventListener('click', function () {
  if (playing) {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
      // When there is no input
      document.querySelector('.message').textContent = '⛔ No number!';
    } else if (guess === secretNumber) {
      // When guess is correct, player wins
      playing = false;
      document.querySelector('.message').textContent = '🎉 Correct Number!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess !== secretNumber) {
      // When guess is wrong
      if (score > 1) {
        document.querySelector('.message').textContent =
          guess > secretNumber ? '🔼 Too high!' : '🔽 Too low!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        // When player loses
        document.querySelector('.message').textContent =
          '😥 You lost the game!';
        document.querySelector('.score').textContent = 0;
      }
    }
  }
});

// Reset
document.querySelector('.again').addEventListener('click', init);
