'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'correct secretNumber!!🥳';

// document.querySelector('.guess').value = 23;
// console.log(guessedsecretsecretNumber);
*/

const secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

let score = 20;

// let currentScore = document.querySelector('.score').value;
// console.log(currentScore);
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  //   console.log('button checked clicked!!!');/
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(typeof guess);

  //when user will just click the check button without any input
  if (!guess) {
    console.log('nothing is chosen');
    document.querySelector('.message').textContent = 'No number is entered';
  } else if (guess === secretNumber) {
    //player wins
    console.log('you guesses the right number');
    document.querySelector('.message').textContent =
      'you have guessed the right number!!🥳';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.check').disabled = true;

    //manipulate the css styles
    //1. change the background color
    document.querySelector('body').style.backgroundColor = '#60b347';

    //2. widen the ? square to rectangle
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Your guess is high📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game😔';
      document.querySelector('.score').textContent = 0;
    }
  }
  //guess < secretNumber
  else {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Your guess is low📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game😔';
      document.querySelector('.score').textContent = 0;
    }
  }
});
