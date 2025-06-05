const clickBtn = document.getElementById('clickBtn');
const fill = document.getElementById('fill');

let fillPercent = 0;
let clickPower = 100 / 15; // 15 cliques para encher
let decayRate = 0.3;       // velocidade de esvaziamento
let interval;

clickBtn.addEventListener('click', () => {
  fillPercent += clickPower;
  if (fillPercent > 100) fillPercent = 100;
  updateFill();
});

function updateFill() {
  fill.style.height = fillPercent + '%';
  if (fillPercent >= 100) {
    clearInterval(interval);
    alert('Parabéns! Você encheu a bomba!');
  }
}

function decay() {
  if (fillPercent > 0) {
    fillPercent -= decayRate;
    if (fillPercent < 0) fillPercent = 0;
    updateFill();
  }
}

interval = setInterval(decay, 100);
