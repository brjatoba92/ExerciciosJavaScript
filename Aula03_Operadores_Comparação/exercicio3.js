//Desenvolva um sistema para receber duas velocidades de dois pilotos de fórmula 1.
//Em seguida, apresente o que teve maior velocidade.

const prompt = require("prompt-sync")();

let v1 = Number(prompt("Digite a velocidade do piloto 1: "));
let v2 = Number(prompt("Digite a velocidade do piloto 2: "));

if(v1>v2){
    console.log("Piloto 1 mais veloz")
}
else{
    console.log("Piloto 2 mais veloz")
}
