//Crie uma solução que de acordo com os dados inseridos pelo usuário salve as informações de um planeta 
//(Nome, Tamanho, Distancia da terra). 
//Em seguida, crie um método que calcule, de acordo com a velocidade que o usuário inserir, 
//quanto tempo demoraria para chegar até este planeta.

const prompt = require("prompt-sync")();

const sistemaPlanetario = {
    nome: prompt("Digite o nome do planeta: "),
    tamanho: Number(prompt("Digite o tamanho do planeta: ")),
    distanciaTerra: Number(prompt("Digite a distancia em relacao a Terra em quilometros: ")),
    tempo: function(){
        return this.distanciaTerra/velocidade
    }
}

velocidade = prompt("Digite a velocidade, em quilometros por hora: ")

console.log("Tempo:", sistemaPlanetario.tempo(), " h")
