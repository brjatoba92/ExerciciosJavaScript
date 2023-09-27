const prompt = require("prompt-sync")();
//Desenvolva um programa que tenha uma lista de compras dos itens de tecnologia que você deseja comprar futuramente. ok
//Em seguida, por meio do terminal, escreva mais 2 elementos que deseja inserir nessa listagem. 
//Pela função splice, remova os 2 últimos elementos e adicione esses dois novos. 
//Ao final, imprima a nova listagem na tela.

const produtosTecnologicos = new Array();

for(let i=0; i<10; i++){
    let ti = prompt("Digite o produto: ")
    produtosTecnologicos[i] = ti
    let digiteParaContinuar = prompt("Digite s para continuar e n para encerrar: ")
    if (digiteParaContinuar=="n"){
        break
    }
}

console.log(produtosTecnologicos)

produtosTecnologicos.splice((produtosTecnologicos.length)-2, 2, "Impressora", "Cartucho");
console.log(produtosTecnologicos);


