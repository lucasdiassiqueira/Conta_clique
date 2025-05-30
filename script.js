const botao = document.getElementById("botaoClique");
const contador = document.getElementById("contador");
const temporizador = document.getElementById("temporizador");
const telaInicio = document.getElementById("telaInicio");
const comecar = document.getElementById("comecar");
const telaFinal = document.getElementById("telaFinal");
const pontuacaoFinal = document.getElementById("pontuacaoFinal");

let cliques = 0;
let tempo = 10;
let intervalo;
let jogoAtivo = false;

comecar.addEventListener("click", () => {
  telaInicio.style.display = "none";
  iniciarJogo();
});

function iniciarJogo() {
  jogoAtivo = true;
  intervalo = setInterval(() => {
    tempo--;
    atualizarTempo();
    if (tempo <= 0) {
      finalizarJogo();
    }
  }, 1000);
  atualizarTempo();
  moverBotao();
}

function atualizarTempo() {
  temporizador.textContent = `00:${tempo < 10 ? "0" + tempo : tempo}`;
}

botao.addEventListener("click", () => {
  if (!jogoAtivo) return;
  cliques++;
  contador.textContent = cliques;
  moverBotao();
});

function moverBotao() {
  const larguraJanela = window.innerWidth;
  const alturaJanela = window.innerHeight;
  const larguraBotao = botao.offsetWidth;
  const alturaBotao = botao.offsetHeight;

  const posX = Math.random() * (larguraJanela - larguraBotao);
  const posY = Math.random() * (alturaJanela - alturaBotao);

  botao.style.left = `${posX}px`;
  botao.style.top = `${posY}px`;
}

function finalizarJogo() {
  jogoAtivo = false;
  clearInterval(intervalo);
  botao.style.display = "none";
  telaFinal.style.display = "flex";
  pontuacaoFinal.textContent = cliques;
}

