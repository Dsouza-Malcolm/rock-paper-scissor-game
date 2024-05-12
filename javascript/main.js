const rulesCloseBtn = document.getElementById('mob-close-btn');
const rulesOpenBtn = document.getElementById('rules-btn');
const rulesWindow = document.querySelector('.rules-window');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const rock = document.getElementById('rock');
const rpsIcon = document.querySelectorAll('.rps-icon');
const triangle = document.querySelector('.triangle-box');
const resultContaienr = document.querySelector('.result-container');
const userChoice = document.querySelector('.user-selected');
const computerChoice = document.querySelector('.computer-selected');
const userIcon = document.querySelector('.user-choice-icon');
const computerIcon = document.querySelector('.computer-choice-icon');
const waitingCircle = document.querySelector('.waiting-circle');
const result = document.querySelector('.result');
const resultMessage = document.querySelector('.message');

const choice = ['paper', 'rock', 'scissor'];
let userSelected;

rulesCloseBtn.addEventListener('click', function () {
  rulesWindow.classList.add('hidden');
});

rulesOpenBtn.addEventListener('click', function () {
  rulesWindow.classList.remove('hidden');
});

rpsIcon.forEach(function (rps) {
  rps.addEventListener('click', rpsGame);
});

function rpsGame(e) {
  triangle.classList.add('hidden');
  resultContaienr.classList.remove('hidden');
  userSelected = e.target.id;

  userChoice.classList.add(`${userSelected}`);
  userIcon.src = `./images/icon-${userSelected}.svg`;

  setTimeout(() => {
    displayComputerChoice();
  }, 2000);
}

function displayComputerChoice() {
  computerChoice.classList.remove('hidden');
  waitingCircle.classList.add('hidden');
  const computerSelected = choice[Math.trunc(Math.random() * 3)];
  console.log(computerSelected);

  computerChoice.classList.add(`${computerSelected}`);
  computerIcon.src = `./images/icon-${computerSelected}.svg`;

  if (userSelected === computerSelected) {
    result.classList.remove('hidden');
    resultMessage.textContent = "it's draw";
    console.log('draw');
  } else if (
    (userSelected === 'paper' && computerSelected === 'rock') ||
    (userSelected === 'rock' && computerSelected === 'scissor') ||
    (userSelected === 'scissor' && computerSelected === 'paper')
  ) {
    result.classList.remove('hidden');
    resultMessage.textContent = 'you win';
    console.log('user win');
  } else {
    result.classList.remove('hidden');
    resultMessage.textContent = 'you lose';
    console.log('computer win');
  }
}
