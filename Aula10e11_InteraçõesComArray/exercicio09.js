const prompt = require("prompt-sync")();

// Desenvolva um programa que o usuário insira um número ilimitado de itens de supermercado, 
// contendo os valores e nome do item.
// Através da função reduce, calcule o valor total da compra e apresente o resultado na tela.

const itensSupermercado = [];

console.log("Programa lista de supermercado ilimitada")

do{
    const item = {};
    item.produto = prompt("Digite o nome de um item: ");
    item.valor = Number(prompt("Digite o preço R$: "));
    itensSupermercado.push(item);    
    continuarOuNao=prompt("Digite s para continuar ou qualquer outra tecla para encerrar: ")
}while(continuarOuNao == 's');
console.log(itensSupermercado)

const valoresProdutos = itensSupermercado.reduce(function(total, item){
    return total + item.valor;
}, 0);

console.log("Soma das compras: R$ ", valoresProdutos);