const prompt = require("prompt-sync")();

//Desenvolva uma solução que contenha um array pré definido com valores de itens de supermercado. ok
//Solicite o usuário os próximos 3 itens que serão adicionados e os coloque ao final da listagem. 
//Em seguida, imprima a lista final na tela.

const listaSupermercado = new Array("Arroz", "Feijão", "Biscoito");
listaSupermercado.splice(3, 0, "Sabao", "Detergente", "Amaciante")

console.log(listaSupermercado)