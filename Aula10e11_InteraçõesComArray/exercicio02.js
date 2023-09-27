const prompt = require("prompt-sync")();
// Utilizando o comando for of passe por cada elemento de uma listagem de clientes de uma empresa. ok
// Cada dado de cliente deve conter: nome do cliente, 2 dois saldos a receber (saldo1, saldo2). ok
// Calcule o saldo total de cada cliente, adicione essa nova propriedade ao elemento respectivo da lista. ok 
// Ao final, imprima toda listagem na tela. ok

const listagemClientes = [
    {
        nome: "Bruno",
        saldoUm: 5200,
        saldoDois: 6512,
    },
    {
        nome: "Rayanne",
        saldoUm: 9621,
        saldoDois: 12458,
    },
    {
        nome: "Isabella",
        saldoUm: 6521,
        saldoDois: 7458,
    },
];

for(cliente of listagemClientes){
    let saldoTotal = cliente.saldoUm + cliente.saldoDois
    console.log(cliente.nome, " Saldo 1 - R$", cliente.saldoUm, " Saldo 2 - R$ ", cliente.saldoDois, " Saldo total: R$ ", saldoTotal)
}