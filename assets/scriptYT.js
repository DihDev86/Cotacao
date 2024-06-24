let saudacao = "Olá, mundo!";
const SAUDACAO = "Olá, mundo!";

console.log(saudacao);

saudacao = "Nova saudação!";

console.log(saudacao);

//SAUDACAO = "Nova saudação"; //   não podemos modificar valores de constantes.

// Listas:
//                     0        1         2
const minhaLista = ["Diego", "Átila", "Marcone"];

console.log(minhaLista[0]);

// Objetos:
const celular = {
  bateria: "4000mah",
  tela: "5.7",
  camera: 100,
  estaLigado: true,
  estaCarregando: false,
  ligar: (numero) => {
    console.log("Ligando para o número " + numero + "...");
  },
};

// Funções:

// Função não anomima:
function soma(a, b) {
  const resultado = a + b;

  console.log(
    "A soma de " + a + " com " + b + " é igual a: " + resultado + "."
  );
}

// Funções anônimas ou "Arrow Function":

const subtrair = (a, b) => {
  const resultado = a - b;

  console.log(
    "A subtração de " + a + " com " + b + " é igual a: " + resultado + "."
  );
};

// Condições lógicas:
// == -> Comparação de igualdade
// != -> Comparação de diferença
// > -> Maior que
// < -> Menor que
// <= -> Menor ou igual a
// >= -> Maior ou igual a

let idade = 17;

if (idade >= 18) {
  // == -> Comparação de igualdade
  console.log("Parabéns! Agora você  pode ser preso.");
} else {
  console.log("Você ainda não pode ser preso.");
}

// Laços de repetição:

// Listas:
//                            0        1         2          3
const minhaSegundaLista = ["Diego", "Átila", "Marcone", "Plínia"];

for (const nome of minhaSegundaLista) {
  console.log("O nome selecionado é: " + nome);
}

console.log(minhaSegundaLista[1] + " está na posição 1 da minha lista.");

for (let index = 0; index < minhaSegundaLista.length; index++) {
  const nome = minhaSegundaLista[index];

  console.log(
    "O nome " + nome + " está na posição " + (index + 1) + " da minha lista."
  );
}

// Adicionando escutadores de eventos:

const btn01El = document.querySelector("#btn01");

function clicar() {
  console.log("O botão foi clicado.");
}

document.addEventListener('DOMContentLoaded', (event) => {

  btn01El.addEventListener("mouseover", () => {
    console.log("O mouse passou por cima do elemnto " + btn01El);
});

});

