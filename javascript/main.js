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
const playAgainBtn = document.getElementById('play-btn');

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

  computerChoice.classList.add(`${computerSelected}`);
  computerIcon.src = `./images/icon-${computerSelected}.svg`;

  if (userSelected === computerSelected) {
    result.classList.remove('hidden');
    resultMessage.textContent = "it's draw";
  } else if (
    (userSelected === 'paper' && computerSelected === 'rock') ||
    (userSelected === 'rock' && computerSelected === 'scissor') ||
    (userSelected === 'scissor' && computerSelected === 'paper')
  ) {
    result.classList.remove('hidden');
    userChoice.classList.add('winner');
    resultMessage.textContent = 'you win';
  } else {
    result.classList.remove('hidden');
    computerChoice.classList.add('winner');
    resultMessage.textContent = 'you lose';
  }
}

playAgainBtn.addEventListener('click', function () {
  triangle.classList.remove('hidden');
  resultContaienr.classList.add('hidden');
  result.classList.add('hidden');
  computerChoice.classList.remove('rock', 'scissor', 'paper', 'winner');
  userChoice.classList.remove('rock', 'scissor', 'paper', 'winner');
  computerChoice.classList.add('hidden');
  waitingCircle.classList.remove('hidden');
});
