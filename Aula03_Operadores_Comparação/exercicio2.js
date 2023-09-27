//Escreva um algoritmo para identificar se o nome inserido pelo usuário é diferente do seu.

const prompt = require("prompt-sync")();

let nomeMeu = prompt("Digite um nome: ");

console.log("O nome digitado é diferente do meu: ", nomeMeu!="bruno");