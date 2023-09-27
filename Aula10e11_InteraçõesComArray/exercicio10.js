const prompt = require("prompt-sync")();

//Utilizando o exemplo anterior, cheque se na listagem todos os itens tem um valor acima de R$10.
// Dica: método every. 
//Imprima o resultado na tela.

const itensCompras = [];

console.log("Programa lista de compras: ")

do{
    const itens = {};
    itens.produto = prompt("Nome do item: ");
    itens.preco = Number(prompt("Digite o preço: "))
    itensCompras.push(itens);
    continueOuNao=prompt("Digite s para continuar ou qlq outra tecla para encerrar: ")
}while(continueOuNao == 's')

console.log(itensCompras)

const produtosMaisQue100 = itensCompras.every(function(item){
    return item.preco > 100;
});

console.log(produtosMaisQue100)