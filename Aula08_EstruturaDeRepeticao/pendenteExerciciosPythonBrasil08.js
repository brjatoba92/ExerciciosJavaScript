const prompt = require("prompt-sync")();

function mediaGeral(grupo){
    let soma = 0
    for(let i=0; i < grupo.lenght; i++){
        soma += grupo[i];
    }
    return soma/grupo.lenght
}

let grupo = []
for(let i=0; i<5; i++){
    let numeral = Number(prompt("Digite um numero: "));
    grupo.push(numeral)
}
console.log("Média dos 5 numeros: ",mediaGeral(grupo));