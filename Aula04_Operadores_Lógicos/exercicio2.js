//Para uma criança participar das aulas de natação do colégio, 
//ela deve ter menos de 10 anos e estar na série 5.
// Desenvolva um sistema em que o usuário insira a idade da criança e também a respectiva série. 
//Em seguida, imprima se poderá ou não participar das aulas de natação.

const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite a idade: "));
let serieEscolar = Number(prompt("Digite a serie escolar: "));

console.log("Participará da aula de natação: ", idade<10 && serieEscolar==5);