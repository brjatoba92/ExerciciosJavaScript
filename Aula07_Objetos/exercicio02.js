//Desenvolva um sistema que salve em um objeto uma receita de bolo, seguindo as seguintes informações:
//Nome da receita
//Ingredientes
//Passos para a receita

const prompt = require("prompt-sync")();

const receita = {
    nome: prompt("Informe o nome da receita: "),
    ingrediente: prompt("Informe o ingrediente: "),
    passos: prompt("Informe os passos a serem seguidos: "),
    imprimir: function(){
        return [this.nome, this.ingrediente, this.passos];
    }
}

console.log("Nome: ", receita.imprimir()[0]);
console.log("Ingrediente: ", receita.imprimir()[1]);
console.log("Passos: ", receita.imprimir()[2]);