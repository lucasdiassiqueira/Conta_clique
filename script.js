let contador = 0;
let tempo = 60;
let intervalo;
let iniciado = false;

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

function iniciarTemporizador() {
  intervalo = setInterval(() => {
    tempo--;
    tempoEl.textContent = formatarTempo(tempo);
    if (tempo <= 0) {
      clearInterval(intervalo);
      botao.disabled = true;
      resultado.style.display = "block";
      resultado.innerHTML = `⏱️ Parabéns! Você clicou <strong>${contador}</strong> vezes!`;
    }
  }, 1000);
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
  contador = 0;
  tempo = 60;
  iniciado = false;
  contadorEl.textContent = "0";
  tempoEl.textContent = formatarTempo(tempo);
  resultado.style.display = "none";
  botao.disabled = false;
});

