const prompt = require("prompt-sync")();

//Crie um programa que solicitei que o usuário entre com 5 nome de jogadores e a quantidade de gols e assistências na temporada. 
//Em seguida, através do comando forEach, imprima na tela a quantidade total de lances para gol (gols + assistência) esse jogador contribuiu.

const jogadoresIncriveis = [
    {
        nome: "Roberto Carlos",
        golTemporada: 19,
        assistencias: 26
    },
    {
        nome: "Romario",
        golTemporada: 29,
        assistencias: 21,
    },
    {
        nome: "Ronaldo",
        golTemporada: 25,
        assistencias: 10,

    },
    {
        nome: "Zidane",
        golTemporada: 39,
        assistencias: 17,
    },
    {
        nome: "Maldini",
        golTemporada: 18,
        assistencias: 31,
    },
];

jogadoresIncriveis.forEach(function(elemento, index){
    elemento.golTemporada
    elemento.assistencias
});
console.log(jogadoresIncriveis)

