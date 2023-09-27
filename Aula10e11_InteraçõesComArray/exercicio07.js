//Utilizando o exercício anterior, utilize a função map para criar um novo array 
//que contenha somente o nome dos alunos e imprima o resultado na tela.
const prompt = require("prompt-sync")();

const selecaoDeAlunos = [
    {
        nome: "Bruno",
        timeDoCoracao: "Vasco",
    },
    {
        nome: "Rodrigo",
        timeDoCoracao: "Corinthians",
    },
    {
        nome: "Marcelo",
        timeDoCoracao: "Flamengo",
    },
];

let notasDosAlunos = selecaoDeAlunos.map(function(item){
    return item.nome;
});

console.log(notasDosAlunos);