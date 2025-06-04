window.addEventListener("DOMContentLoaded", () => {
  const clickBox = document.getElementById("click-box");
  const timeDisplay = document.getElementById("time");
  const countDisplay = document.getElementById("count");
  const finalMessage = document.getElementById("final-message");
  const finalCount = document.getElementById("final-count");
  const restartBtn = document.getElementById("restart-btn");
  const gameArea = document.getElementById("game-area");

  let count = 0;
  let timeLeft = 10;
  let interval;

  function moveBoxRandomly() {
    const areaWidth = gameArea.clientWidth;
    const areaHeight = gameArea.clientHeight;
    const boxWidth = clickBox.offsetWidth;
    const boxHeight = clickBox.offsetHeight;

    const randomX = Math.random() * (areaWidth - boxWidth);
    const randomY = Math.random() * (areaHeight - boxHeight);

    clickBox.style.left = `${randomX}px`;
    clickBox.style.top = `${randomY}px`;
  }

  function startGame() {
    count = 0;
    timeLeft = 10;
    countDisplay.textContent = count;
    timeDisplay.textContent = timeLeft;
    finalMessage.classList.add("hidden");
    clickBox.style.display = "flex";
    moveBoxRandomly();

    interval = setInterval(() => {
      timeLeft--;
      timeDisplay.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(interval);
        clickBox.style.display = "none";
        finalCount.textContent = count;
        finalMessage.classList.remove("hidden");
      }
    }, 1000);
  }

  clickBox.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
    moveBoxRandomly();
  });

  restartBtn.addEventListener("click", () => {
    startGame();
  });

  // ⏳ Iniciar apenas quando o DOM estiver 100% carregado
  startGame();
});


