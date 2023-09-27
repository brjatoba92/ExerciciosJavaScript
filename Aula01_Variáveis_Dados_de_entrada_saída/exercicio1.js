//Escreva um programa que irá cadastrar um aluno em um sistema escolar. 
//Para isso, peça o usuário que insira: Nome Completo, Idade, Número da Matricula.
//Em seguida, imprima as informações na tela.

const prompt = require("prompt-sync")();

let nome = prompt("Informe seu nome: ");
let sobrenome = prompt("Informe seu sobrenome: ");
let idade = Number(prompt("Informe a idade: "));
let numeroMatricula = Number(prompt("Informe a matricula: "))

console.log("----------------------------------------")
console.log("Nome completo: ", nome + " " + sobrenome)
console.log("Idade: ", idade + "\nNumero da matricula: " + numeroMatricula)
