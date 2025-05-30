let contador = 0;
let tempo = 60;
let intervalo;
let iniciado = false;

const contadorEl = document.getElementById("contador");
const tempoEl = document.getElementById("temporizador");
const botao = document.getElementById("botaoClique");
const resultado = document.getElementById("resultadoFinal");

botao.addEventListener("click", () => {
  if (!iniciado) {
    iniciado = true;
    intervalo = setInterval(() => {
      tempo--;
      tempoEl.textContent = "Tempo: " + tempo + "s";
      if (tempo <= 0) {
        clearInterval(intervalo);
        botao.disabled = true;
        resultado.style.display = "block";
        resultado.innerHTML = `⏱️ Parabéns! Você clicou <strong>${contador}</strong> vezes!`;
      }
    }, 1000);
  }

  if (tempo > 0) {
    contador++;
    contadorEl.textContent = "Cliques: " + contador;
  }
});

