let startBtn = document.getElementById('start-btn');
let images = document.getElementById('img-container');
let desc = document.getElementById('description');
let popupWin = document.getElementById('popup-win');
let popupLose = document.getElementById('popup-lose');
let popupDraw = document.getElementById('popup-draw');

let image = document.getElementById('image');
let stone = document.querySelector('.stone');
let scissors = document.querySelector('.scissors');
let paper = document.querySelector('.paper');
let stone2 = document.querySelector('#stone2');
let scissors2 = document.querySelector('#scissors2');
let paper2 = document.querySelector('#paper2');

function startGame() {
  startBtn.style.display = "none";
  popupWin.style.display = "none";
  popupLose.style.display = "none";
  popupDraw.style.display = "none";
  stone2.style.display = "none";
  paper2.style.display = "none";
  scissors2.style.display = "none";
  images.style.display = "flex";
  stone.style.display = "block";
  paper.style.display = "block";
  scissors.style.display = "block";
  desc.style.display = "flex";
}

function clicked(element) {
  let ssp = ['stone', 'scissors', 'paper'];
  let pc = ssp[Math.floor(Math.random() * ssp.length)];
  desc.style.display = "none";
  if(element === 'stone' && pc === 'scissors') {
    scissors.style.display = "none";
    paper.style.display = "none";
    setTimeout(function(){
      scissors.style.display = "block";
    }, 1000);
    setTimeout(function(){
      popupWin.style.display = "flex";
    }, 2000);
  } else if (element === 'stone' && pc === 'paper') {
    scissors.style.display = "none";
    paper.style.display = "none";
    setTimeout(function(){
      paper.style.display = "block";
    }, 1000);
    setTimeout(function(){
      popupLose.style.display = "block";
    }, 2000);
  } else if (element === 'stone' && pc === 'stone') {
    scissors.style.display = "none";
    paper.style.display = "none";
    setTimeout(function(){
      stone2.style.display = "inline";
    }, 1000);
    setTimeout(function(){
      popupDraw.style.display = "block";
    }, 2000);
  } else if (element === 'scissors' && pc === 'stone') {
    stone.style.display = "none";
    paper.style.display = "none";
    setTimeout(function(){
      stone.style.display = "block";
    }, 1000);
    setTimeout(function(){
      popupLose.style.display = "block";
    }, 2000);
  } else if (element === 'scissors' && pc === 'paper') {
    stone.style.display = "none";
    paper.style.display = "none";
    setTimeout(function(){
      paper.style.display = "block";
    }, 1000);
    setTimeout(function(){
      popupWin.style.display = "block";
    }, 2000);
  }  else if (element === 'scissors' && pc === 'scissors') {
    stone.style.display = "none";
    paper.style.display = "none";
    setTimeout(function(){
      scissors2.style.display = "inline";
    }, 1000);
    setTimeout(function(){
      popupDraw.style.display = "block";
    }, 2000);
  } else if (element === 'paper' && pc === 'stone') {
    stone.style.display = "none";
    scissors.style.display = "none";
    setTimeout(function(){
      stone.style.display = "block";
    }, 1000);
    setTimeout(function(){
      popupWin.style.display = "block";
    }, 2000);
  } else if (element === 'paper' && pc === 'scissors') {
    stone.style.display = "none";
    scissors.style.display = "none";
    setTimeout(function(){
      scissors.style.display = "block";
    }, 1000);
    setTimeout(function(){
      popupLose.style.display = "block";
    }, 2000);
  } else if (element === 'paper' && pc === 'paper') {
    stone.style.display = "none";
    scissors.style.display = "none";
    setTimeout(function(){
      paper2.style.display = "inline";
    }, 1000);
    setTimeout(function(){
      popupDraw.style.display = "block";
    }, 2000);
  };
};

// let ssp = ['stone', 'scissors', 'paper'];
// let pc = ssp[Math.floor(Math.random() * ssp.length)];
// let player = prompt("Type: stone, scissors or paper");
//
// function game(player, pc) {
//   if(player === 'stone' && pc === 'stone') {
//     console.log('PC: ' + pc + '. Try again');
//   } else if (player === 'stone' && pc === 'scissors') {
//     console.log('PC: ' + pc + '. You win');
//   } else if (player === 'stone' && pc === 'paper') {
//     console.log('PC: ' + pc + '. You lose');
//   } else if (player === 'scissors' && pc === 'stone') {
//     console.log('PC: ' + pc + '. You lose');
//   } else if (player === 'scissors' && pc === 'scissors') {
//     console.log('PC: ' + pc + '. Try again');
//   } else if (player === 'scissors' && pc === 'paper') {
//     console.log('PC: ' + pc + '. You win');
//   } else if (player === 'paper' && pc === 'stone') {
//     console.log('PC: ' + pc + '. You win');
//   } else if (player === 'paper' && pc === 'scissors') {
//     console.log('PC: ' + pc + '. You lose');
//   } else if (player === 'paper' && pc === 'paper') {
//     console.log('PC: ' + pc + '. Try again');
//   };
// };
// game(player, pc);
