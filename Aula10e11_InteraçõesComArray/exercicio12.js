//Ainda utilizando o exercício de número 8, busque se há na lista algum elemento que seja “Arroz”, por meio da função find. 
//Imprima o resultado na tela.

const prompt = require("prompt-sync")();

const listaSupermercado = []

do{
    let carrinhoDeCompra = {};
    carrinhoDeCompra.item = prompt("Produto comprado: ");
    carrinhoDeCompra.valor = Number(prompt("Valor do produto: "));
    listaSupermercado.push(carrinhoDeCompra);
    continueOuNao = prompt("Digite s para continuar ou qlq outra tecla para encerrar: ")
}while(continueOuNao == 's')

let temArroz = listaSupermercado.find(function(item){
    return item.item === "Arroz";
})

console.log(temArroz)