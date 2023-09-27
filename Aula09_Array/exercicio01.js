const prompt = require("prompt-sync")();

//Desenvolva uma solução que preencha dinamicamente 
//através do comando for preencha um array de nomes de seus familiares.

const familiaJatoba = new Array();
for(let i=0; i<6; i++){
    let nomeFamiliar = prompt("Digite o nome do familiar: ")
    familiaJatoba[i] = nomeFamiliar
}

console.log(familiaJatoba)