const prompt = require("prompt-sync")();
//Desenvolva um sistema que o usuário irá cadastrar um orçamento de obra.
//Para isso, será necessário inserir os dados no seguinte padrão:
//1. Material
//2. Custo
//O sistema deverá perguntar repetidas vezes até o usuário desejar finalizar.
//Ao finalizar, apresente a quantidade de material que inclua a palavra “cimento”, calcule o valor total da obra e formate também o valor total seguindo a formatação de moeda no JavaScript

const sistemaLoja = []; 

let contador = 0

do{
    const orcamentoAtual = {};
    orcamentoAtual.material = prompt("Material comprado: ");
    orcamentoAtual.custo = Number(prompt("Valor de custo: "))
    sistemaLoja.push(orcamentoAtual)
    if(orcamentoAtual.material == 'cimento'){
        contador+=1
    }
    continueOuNao = prompt("Digite s para continuar ou qlq outro caracter para encerrar");
}while(continueOuNao == 's');
console.log(sistemaLoja)
console.log("Quantidade de cimentos: ",contador)

const totalCompra = sistemaLoja.reduce(function(total, item){
    return total + item.custo;
}, 0)
let valorTotal = totalCompra;

let valorFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
}).format(valorTotal)

console.log("Total da compra: ",valorFormatado);


