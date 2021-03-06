let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no number
  if (!guess) {
    displayMessage('NO NUMBER');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#99383e';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High !!' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('๐งจ You lost the game.');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  displayMessage('start guessing...')
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
/*
//querySelector is basically a method 
//that's available on the document object.
'use strict';
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '๐ Correct Number !';

document.querySelector('.number').textContent = 23;
document.querySelector('.score').textContent = 13;

document.querySelector('.guess').value = 10;
console.log(document.querySelector('.guess').value);


//event is something happens on the page
*/

//secret number defined outside, otherwise whenever input an number then press the check will producting an new number

//ๆๅๅจ้ๅ็ซ?็ฏๆๆ่ชค่งฃๅฐ็ๅฐๆน
//ไปฅ็บ value ๆฏๆธๅญๅฐ็จ; textContent ๆฏ string ๅฐ็จ
//ไฝไบๅฏฆไธvalue ๆฏๆ็จๆผ่กจๅฎ็่ผธๅฅๆก; ่ textContent ๅฐฑ็ฎ็ตฆ็ๆฏๆธๅญtyoeof ไนๆๆฏ number;

// const test = (document.querySelector('.guess').textContent = 10);
// console.log(typeof test);

//  else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too High !!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '๐งจ You lost the game.';
//     document.querySelector('.score').textContent = 0;
//   }

//   //when guess too low
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too Low';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '๐งจ You lost the game.';
//     document.querySelector('.score').textContent = 0;
//   }

//   //when player win
// } else {

//   document.querySelector('.message').textContent = 'Correct Nrmber';
//   document.querySelector('.number').textContent = secretNumber;

//   document.querySelector('body').style.backgroundColor = '#99383e';
//   document.querySelector('.number').style.width='30rem'

//   if( score > highscore){
//     highscore = score;
//     document.querySelector('.highscore').textContent = highscore;
//   }

// }
