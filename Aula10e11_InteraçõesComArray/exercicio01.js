//Escreva um programa que contenha uma listagem com ficha de funcionários, 
//contendo nome e valor do salário.
// Utilizando o comando for, passe por cada um dos elementos do array, 
//e dê um bônus salarial de 5% a mais para cada funcionário.

const prompt = require("prompt-sync")();

const fichaCadastro = [
    {
        nome: "Ramon",
        salario: 5200,
    },
    {
        nome: "Tavares",
        salario: 8512,
    },
    {
        nome: "Roberta",
        salario: 5492,
    },
    {
        nome: "Rayanne",
        salario: 18541,
    },
    {
        nome: "Isabella",
        salario: 14523,
    },
]

for(let i = 0; i<fichaCadastro.length; i++){
    console.log("Salario reajustado de",fichaCadastro[i].nome , ": R$ ",fichaCadastro[i].salario * 1.05)
}