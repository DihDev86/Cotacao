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

  console.log("A soma de " + a + " com " + b + " é igual a: " + resultado + ".");
}

// Funções anônimas ou "Arrow Function":

const subtrair = (a,  b) => {
    const resultado = a - b;

    console.log("A subtração de " + a + " com " + b + " é igual a: " + resultado + ".");
}



