const prompt = require("prompt-sync")();

let grupo = [];

for(let i=0; i<5; i++){
    let numero = prompt("Digite um numero: ");
    grupo.push(numero);
}
console.log(grupo);
let maior = Math.max(...grupo);
console.log("Maior numero: ",maior);