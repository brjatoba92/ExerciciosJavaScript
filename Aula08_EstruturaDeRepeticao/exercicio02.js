//Desenvolva um código que primeiro o usuário insira os dados de um carro (ano, marca, modelo, cor e valor). 
//Em seguida, através do loop for in apresente os dados na tela.

const prompt = require("prompt-sync")();

const carro = new Object();
carro.ano = Number(prompt("Ano do carro: "));
carro.marca = prompt("Marca do carro: ");
carro.modelo = prompt("Modelo do carro: ");
carro.cor = prompt("Cor do carro: ");
carro.valor = prompt("Valor do carro")

for(let propriedade in carro){
    console.log(propriedade, " : ", carro[propriedade])
}