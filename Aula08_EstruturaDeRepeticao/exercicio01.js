//Construa uma solução que através do loop for leia 5 números diferentes. 
//A partir disso, apresente para o usuário qual foi o maior e qual foi o menor número digitado

const prompt = require("prompt-sync")();

let grupo = []

for(let i = 0; i<5; i++){
    let numero = Number(prompt("Digite um numero"))
    grupo.push(parseInt(numero));
}

let maior = Math.max(...grupo);
let menor = Math.min(...grupo);

console.log("Maior numero: ",maior);
console.log("Menor numero: ",menor);