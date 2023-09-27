const prompt = require("prompt-sync")();
//Crie um algoritmo que tenha uma listagem (fixa) com os carros dos seus sonhos, ok
//contendo o nome e valor dos veículos, e deixe a listagem manualmente ordenada de acordo com o valor. ok
//Em seguida, pela função slice, separe em dois novos arrays os veículos que tem valor abaixo e acima de 100mil reais. 
// Imprima na tela as duas listagens.

const carrosDoSonho = [
    {
        modelo: "RAM 1500",
        valor: 350000,
    },
    {
        modelo: "Tiggo 8",
        valor: 210000,
    },
    {
        modelo: "TCross",
        valor: 150000,
    },
    {
        modelo: "Ferrari",
        valor: 3500000,
    },
    {
        modelo: "Corolla",
        valor: 120000,
    },
    {
        modelo: "Onix",
        valor: 55000,
    },
    {
        modelo: "Virtus",
        valor: 85000,
    },
    {
        modelo: "Chevette",
        valor: 15000,
    }
];

console.log(carrosDoSonho)

carrosDoSonho.sort((a, b) => a.valor - b.valor);

let carrosAbaixo100k = carrosDoSonho.slice(0, carrosDoSonho.findIndex(carrosDoSonho => carrosDoSonho.valor > 100000));
let carrosAcima100k = carrosDoSonho.slice(carrosDoSonho.findIndex(carrosDoSonho => carrosDoSonho.valor > 100000));

console.log("Carros abaixo de 100k:");
console.log(carrosAbaixo100k);

console.log("Carros acima de 100k:");
console.log(carrosAcima100k);