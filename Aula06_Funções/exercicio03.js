//Escreva um algoritmo que através de uma função identifique se o nome de uma marca de carros 
//inserida pelo usuário é de origem alemã (Volkswagen, Audio, BMW, Mercedes)

const prompt = require("prompt-sync")()
function marcaEAlemaOuNao (carro){
    if (carro == "volkswagen" || carro == "audi" || carro=="bmw" || carro=="mercedes"){
        return "É Alemã"
    }
    else{
        return "Não é alemã"
    }
}

console.log(marcaEAlemaOuNao(prompt("Digite a marca do carro: ")))

