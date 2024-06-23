function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

  let numero;
  let sorteados = [];

  for (i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);
    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate);
    }
    sorteados.push(numero);
  }
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
  alterarbotao();
}

function obterNumeroAleatorio(min, max) {
  return parseInt(Math.random() * (max - min + 1)) + min;
}

function alterarbotao() {
  let botaoReset = document.getElementById("btn-reiniciar");
  if (botaoReset.classList.contains("container__botao-desabilitado")) {
    botaoReset.classList.remove("container__botao-desabilitado");
    botaoReset.classList.add("container__botao");
  } else {
    botaoReset.classList.remove("container__botao");
    botaoReset.classList.add("container__botao-desabilitado");
  }
}
function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  document.getElementById(
    "resultado"
  ).innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
  alterarbotao();
}
