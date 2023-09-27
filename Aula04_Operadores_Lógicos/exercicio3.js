//Para se qualificar para o melhor jogador de vôlei do mundo, o candidato deverá ter marcado durante a temporada 
//a.uma pontuação maior ou igual a 50 pontos, 
//b.ter mais de 3 anos de carreira 
//c.e também ter fornecido pelo menos 30 assistências. 

//Desenvolva um programa que leia o nome, pontuação, tempo de carreira e numero de assistências. 
//Em seguida, imprima uma mensagem se ele se qualifica ou não para ser candidato a melhor do mundo.

const prompt = require("prompt-sync")();

let nome = prompt("Digite o nome: ");
let pontuacao = Number(prompt("Digite a pontuação necessaria: "));
let tempoCarreira = Number(prompt("Digite o tempo de carreira: "));
let numeroAssistencias = Number(prompt("Digite o numero de assistencias: "));

console.log(nome, " é o melhor jogador do mundo na temporada: ", pontuacao>=50 && tempoCarreira>3 && numeroAssistencias>=30);