//Para um número ser ímpar, o resultado do módulo (%) tem que ser diferente de zero.
// Desenvolva um programa que identifique se o número inserido pelo usuário é impar

const prompt = require("prompt-sync")();

let numeroImparOuNao = prompt("Digite um numero: ");

console.log("Numero impar: ", (numeroImparOuNao%2) > 0);