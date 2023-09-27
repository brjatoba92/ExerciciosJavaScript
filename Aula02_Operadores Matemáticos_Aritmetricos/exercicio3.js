//Desenvolva um programa que leia um número. 
//Em seguida, usando os operadores de incremento, imprima o número seguinte.

const prompt = require("prompt-sync")();

let numero = Number(prompt("Informe um numero"))

console.log("Numero: ", numero);
console.log("Proximo numero: ", ++numero)