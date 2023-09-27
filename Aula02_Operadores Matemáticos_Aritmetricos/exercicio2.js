//Desenvolva um sistema que solicite ao usuário dois números.
//Em seguida, calcule a média dos dois números.

const prompt = require("prompt-sync")();

let n1 = Number(prompt("Informe o numero 1: "));
let n2 = Number(prompt("Informe o numero 2: "));

console.log("Média: ", (n1+n2)/2)