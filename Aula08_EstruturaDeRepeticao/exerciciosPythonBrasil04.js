const prompt = require("prompt-sync")();

let popA = 80000;
let popB = 200000;
let porcA = 0.03;
let porcB = 0.015;
let anos = 0;

do{
    popA += popA*porcA;
    popB += popB*porcB;
    anos ++;
}while(popA<popB)

console.log("Anos necessarios para que população de A seja igual a população de B: ", anos, " anos")