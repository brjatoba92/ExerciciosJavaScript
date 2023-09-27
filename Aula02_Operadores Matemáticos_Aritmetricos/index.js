const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Informe o numero 1: "));
let numero2 = Number(prompt("Informe o numero 2: "));

console.log("Soma: ", numero1+numero2);
console.log("Subtração: ", numero1-numero2);
console.log("Multiplicação: ", numero1*numero2);
console.log("Divisão: ", numero1/numero2);
console.log("Modulo: ", numero1%numero2);
console.log("Exponenciação: ", numero1**numero2)

console.log("------------------------------------")

let velocidade = Number(prompt("Digite a velocidade, em km/h: "));
let tempo = Number(prompt("Digite o tempo levado, em horas: "));

console.log("Distancia percorrida: "+ (velocidade*tempo) + " km")

console.log("--------------------------------------")

let nome = prompt("Digite um nome: ");
let sobrenome = prompt("Digite um sobrenome: ")

console.log("Nome completo: " + nome + " " + sobrenome)
