//Desenvolva uma programa que irá salvar o dado de 2 jogadores de futebol. 
//Peça o usuário que digite o nome dos jogares e seus respectivos clubes. 
//Em seguida, imprima as informações na tela.

const prompt = require("prompt-sync")();

let jogadorUm = prompt("Informe o nome do jogador 1: ");
let clubJogadorUm = prompt("Informe o clube do jogador 1: ");
let jogadorDois = prompt("Informe o nome do jogador 2: ");
let clubJogadorDois= prompt("Informe o clube do jogador 2: ");


console.log("Jogador 1  \nNome : " + jogadorUm + "\nClube: " + clubJogadorUm  );
console.log("Jogador 2  \nNome : " + jogadorDois + "\nClube: " + clubJogadorDois);

