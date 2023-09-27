//Crie um código que solicite ao usuário digitar três números. 
//Em seguida, apresente o resultado da soma, subtração, multiplicação dos três.

const prompt = require("prompt-sync")()

let numero1 = Number(prompt("Digite o numero 1: "));
let numero2 = Number(prompt("Digite o numero 2: "));
let numero3 = Number(prompt("Digite o numero 3: "));

console.log("Adição: ", numero1+numero2+numero3);
console.log("Subtração: ", numero1-numero2-numero3);
console.log("Multiplicação: ", numero1*numero2*numero3);
