const prompt = require("prompt-sync")();

let popA = prompt("Digite a população de A: ");
let popB = prompt("Digite a população de B: ");
let porcA = prompt("Digite a taxa de crescimento da população de A: ");
let porcB = prompt("Digite a taxa de crescimento da população de B: ");
let anos = 0;

do{
    popA += popA*porcA;
    popB += popB*porcB;
    anos ++;
}while(popA<popB)

console.log("Anos necessarios para que população de A seja igual a população de B: ", anos, " anos")