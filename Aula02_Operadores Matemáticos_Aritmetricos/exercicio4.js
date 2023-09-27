//Desenvolva um programa que leia um número. 
//Em seguida, usando os operadores de decremento, imprima o número anterior. 

const prompt = require("prompt-sync")();

let n1 = Number(prompt("Informe um numero: "));

console.log("Numero: ", n1);
console.log("Numero anterior: ", --n1); //numero anterior --variavel
