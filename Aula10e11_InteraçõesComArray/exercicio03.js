//Crie um algoritmo que tenha uma listagem com os carros dos seus sonhos, contendo o nome e valor dos veículos, 
//e deixe a listagem ordenada de acordo com o valor (sort).
// Em seguida, pela função filter, 
//separe em dois novos arrays os veículos que tem valor abaixo e acima de 100mil reais. 
//Imprima na tela as duas listagens.

const prompt = require("prompt-sync")();

const carrosDosSonhos = [
    {
        nome: "RAM 1500",
        valor: 450000,
    },
    {
        nome: "Porsche Cayenne",
        valor: 400000,
    },
    {
        nome: " Toyota Hilux",
        valor: 350000,
    },
    {
        nome: "Ferrari",
        valor: 4500000,
    },
    {
        nome: "Jeep Commander",
        valor: 250000,
    },
    {
        nome: "Cherry Tiggo8",
        valor: 230000,
    },
    {
        nome: "Chevrolet Onix",
        valor: 42000,
    },
];

carrosDosSonhos.sort(function(n1,n2){
    return n1.valor - n2.valor
});

console.log(carrosDosSonhos)

let carrosAbaixoDeCemMil = carrosDosSonhos.filter(function(carrosDosSonhos){
    return carrosDosSonhos.valor < 100000;
});

console.log(carrosAbaixoDeCemMil)

let carrosAcimaDeCemMil = carrosDosSonhos.filter(function(carrosDosSonhos){
    return carrosDosSonhos.valor > 100000;
});

console.log(carrosAcimaDeCemMil)