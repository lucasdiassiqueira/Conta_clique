let contador = 0;
let tempo = 10;
let intervalo;
let iniciado = false;
let movimento;

const contadorEl = document.getElementById("contador");
const tempoEl = document.getElementById("temporizador");
const botao = document.getElementById("botaoClique");
const resultado = document.getElementById("resultadoFinal");
const botaoReiniciar = document.getElementById("reiniciar");

function formatarTempo(segundos) {
  const min = String(Math.floor(segundos / 60)).padStart(2, "0");
  const seg = String(segundos % 60).padStart(2, "0");
  return `${min}:${seg}`;
}

function moverBotao() {
  const maxX = window.innerWidth - botao.offsetWidth;
  const maxY = window.innerHeight - botao.offsetHeight - 100;

  const novoX = Math.random() * maxX;
  const novoY = Math.random() * maxY;

  botao.style.left = `${novoX}px`;
  botao.style.top = `${novoY}px`;
}

function iniciarTemporizador() {
  intervalo = setInterval(() => {
    tempo--;
    tempoEl.textContent = formatarTempo(tempo);
    if (tempo <= 0) {
      clearInterval(intervalo);
      clearInterval(movimento);
      botao.disabled = true;
      resultado.style.display = "block";
      resultado.innerHTML = `🔥 Você clicou <strong>${contador}</strong> vezes!`;
    }
  }, 1000);

  movimento = setInterval(moverBotao, 700);
}

botao.addEventListener("click", () => {
  if (!iniciado) {
    iniciado = true;
    iniciarTemporizador();
  }

  if (tempo > 0) {
    contador++;
    contadorEl.textContent = contador;
  }
});

botaoReiniciar.addEventListener("click", () => {
  clearInterval(intervalo);
  clearInterval(movimento);
  contador = 0;
  tempo = 10;
  iniciado = false;
  contadorEl.textContent = "0";
  tempoEl.textContent = formatarTempo(tempo);
  resultado.style.display = "none";
  botao.disabled = false;
  moverBotao();
});

// Posição inicial do botão
window.onload = () => {
  moverBotao();
};
