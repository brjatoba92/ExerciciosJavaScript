const prompt = require("prompt-sync")();
// Utilizando o exercício 8, averigue se algum elemento tem o valor acima de R$50 (função some).
// Imprima o resultado na tela.

const classeDeAlunos = [];

for (let i=0; i<7; i++){
    let cadastro = {};
    cadastro.nome = prompt("Digite o nome: ");
    cadastro.peso = prompt("Digite o peso: ");
    cadastro.altura = prompt("Digite a altura: ");
    cadastro.dinheiroNaConta = prompt("Saldo na conta: ");
    classeDeAlunos.push(cadastro);
};

let saldoMaiorQue50 = classeDeAlunos.some(function(item){
    return item.dinheiroNaConta > 50;
});

console.log("Algum dos alunos tem saldo em conta maior que $50? ",saldoMaiorQue50);

