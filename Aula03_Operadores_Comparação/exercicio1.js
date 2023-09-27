//Desenvolva um código para identificar se os dois números inseridos são iguais

const prompt = require("prompt-sync")();

let n1 = Number(prompt("Digite um numero: "));
let n2 = Number(prompt("Digite outro numero: "));

console.log("O numero são iguais: ", n1==n2); //mostrará True ou False => booleano