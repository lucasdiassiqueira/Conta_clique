const clickBtn = document.getElementById('clickBtn');
const fill = document.getElementById('fill');
const clickCountText = document.getElementById('clickCount');
const restartScreen = document.getElementById('restartScreen');
const restartBtn = document.getElementById('restartBtn');

let fillPercent = 0;
let clickPower = 100 / 50;
let decayRate = 0.3;
let interval;
let totalClicks = 0;

clickBtn.addEventListener('click', () => {
  fillPercent += clickPower;
  totalClicks++;
  if (fillPercent > 100) fillPercent = 100;
  updateFill();
});

function updateFill() {
  fill.style.height = fillPercent + '%';
  clickCountText.textContent = `Cliques: ${totalClicks}`;
  if (fillPercent >= 100) {
    clearInterval(interval);
    restartScreen.style.display = 'flex';
  }
}

function decay() {
  if (fillPercent > 0 && fillPercent < 100) {
    fillPercent -= decayRate;
    if (fillPercent < 0) fillPercent = 0;
    updateFill();
  }
}

restartBtn.addEventListener('click', () => {
  fillPercent = 0;
  totalClicks = 0;
  updateFill();
  restartScreen.style.display = 'none';
  interval = setInterval(decay, 100);
});

interval = setInterval(decay, 100);
