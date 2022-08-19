const divresultado = document.getElementById('resultado');
const resultado = document.getElementById('resultado-lista');

const universo = []; // Universo de números (1 a 25 na LF)
const sorteado = []; // Array com os números sorteados (15 na LF)
let minimo, maximo, qtdNumeros; // Menor e maior número do universo e quantidade de números sorteados

function criarUniverso(minimo, maximo) {

  for (i = minimo; i <= maximo; i++) {
    universo[i] = i;
  }
  universo.shift();

  return universo;
}

function sortearNumeros(minimo, maximo, qtdNumeros) {
  const universo = criarUniverso(minimo, maximo); // Faz um universo
  maximo = universo.length;

  function compararNumeros(a, b) {
    return a - b;
  }

  for (var i = 0; i < qtdNumeros; i++) {
    posicao = Math.floor(Math.random() * maximo);
    sorteado[i] = universo[posicao];
    universo.splice(posicao, 1);
    maximo = universo.length;
  }

  sorteado.sort(compararNumeros);

  return sorteado;
}

function limpar() {
  universo.splice(0, 100);
  sorteado.splice(0, 50);
  minimo = maximo = qtdNumeros = 0;
  resultado.innerHTML = '';
}

function gerarNumerosMegaSena() {
  limpar();
  const exibir = sortearNumeros(1, 60, 6);

  // var numerosResultado = document.getElementById("numerosGerados");
  divresultado.style.display = "flex";
  // numerosResultado.className = "alert alert-success";

  for (var result of exibir) {
    resultado.innerHTML += (`<li><span>${String(result).padStart(2,"0")}</span></li>`);
  }
}