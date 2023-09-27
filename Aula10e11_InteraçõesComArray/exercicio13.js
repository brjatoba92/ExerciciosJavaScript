//Encontre no exercício 8 o index do elemento “Sabão”. 
//Caso não haja (index -1), imprima a informação na tela

const prompt = require("prompt-sync")();

const listaSupermercado = []

do{
    let carrinhoDeCompra = {};
    carrinhoDeCompra.produto = prompt("Produto comprado: ");
    carrinhoDeCompra.valor = Number(prompt("Valor do produto: "));
    listaSupermercado.push(carrinhoDeCompra);
    continueOuNao = prompt("Digite s para continuar ou qlq outra tecla para encerrar: ")
}while(continueOuNao == 's')

const indexSabao = listaSupermercado.findIndex(function(item){
    return item.produto === "sabao";
})

console.log(indexSabao)