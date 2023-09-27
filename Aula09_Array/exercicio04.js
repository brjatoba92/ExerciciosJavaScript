const prompt = require("prompt-sync")();
//Escreva um programa no qual o usuário irá inserir uma listagem inicial com o nome de 4 filmes que gostaria de assistir. ok
//Em seguida, solicite ao usuário o nome de 4 séries que gostaria de assistir. ok
//Em uma nova variável, salve o conjunto dos dois arrays e imprima o resultado na tela. ok

const listaFilmes = new Array();
for(let i=0; i<4; i++){
    let filmes = prompt("Digite o nome do filme: ");
    listaFilmes[i] = filmes;
};

const listaSeries = new Array();
for(let i=0; i<4; i++){
    let series = prompt("Digite o nome da serie: ");
    listaSeries[i] = series;
};

let catalogoFavorito = listaFilmes.concat(listaSeries);
console.log(catalogoFavorito);