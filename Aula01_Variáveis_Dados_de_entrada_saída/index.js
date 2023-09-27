const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
let idade = prompt("Digite a sua idade: ");
let contratadoOuNao = false;
let pagamento = null;
let cargo;

console.log("\nDados cadastrais: ")
console.log("--------------------------------------------------------")
console.log("Seu nome: ", nome, "\nSua idade: ", idade, "\nFoi contratado? ", contratadoOuNao, "\nPagamento: ", pagamento, "\nCargo: ", cargo);