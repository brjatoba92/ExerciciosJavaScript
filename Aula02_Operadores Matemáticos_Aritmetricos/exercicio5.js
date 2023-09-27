//Desenvolva um programa que converta uma quantidade de horas inserida pelo usuário em 
//minutos e, em seguida, em segundos.

const prompt = require("prompt-sync")();

let horas = Number(prompt("Informe a quantidade de horas: "));

console.log("Minutos: ", horas*60);
console.log("Segundos: ", horas*360);