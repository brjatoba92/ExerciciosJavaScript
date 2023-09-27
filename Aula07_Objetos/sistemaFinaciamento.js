const prompt = require("prompt-sync")();

const carro = new Object();
carro.modelo = prompt("Digite o modelo do carro a ser finaciado: ")
carro.ano = prompt("Digite o ano do carro: ");
carro.cor = prompt("Digite a cor do carro: ");
carro.valorAVista = Number(prompt("Digite o valor do carro a vista"));
carro.financiamento = function (numeroDeParcelas){
    return this.valorAVista / numeroDeParcelas
};
console.log("--------------------------");
console.log("Sistema de funanciamento BV")
let numeroDeParcelas = Number(prompt("Digite o numero de parcelas"));
console.log("Valor da parcela: R$ ",carro.financiamento(numeroDeParcelas))

