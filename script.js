'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'correct number!!🥳';

// document.querySelector('.guess').value = 23;
// console.log(guessedNumber);
*/

document.querySelector('.check').addEventListener('click', function () {
  //   console.log('button checked clicked!!!');/
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(typeof guess);

  //when user will just click the check button without any input
  if (!guess) {
    console.log('nothing is chosen');
    document.querySelector('.message').textContent = 'No number is entered';
  }
});
