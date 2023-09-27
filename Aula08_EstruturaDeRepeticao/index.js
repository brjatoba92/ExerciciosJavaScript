const prompt = require("prompt-sync")();

let valorInicial = 0
let quantidade = 0

for(let i=0; i<5; i++){
    let valorProduto = Number(prompt("Digite o valor do produto: R$ "));
    valorInicial+=valorProduto;
    quantidade+=1
}
console.log("Valor da compra de ", quantidade," produtos é: R$ ", valorInicial)

console.log("--------------------------------")

const piloto = new Object();
piloto.nome = prompt("Nome: ");
piloto.idade = prompt("Idade: ");
piloto.pais = prompt("Pais natal: ")
piloto.equipe = prompt("Equipe: ");
piloto.etapa = prompt("Pista: ")
piloto.tempoDeProva = prompt("Tempo de prova: ")
piloto.posicao = prompt("Posição de classificação: ")
console.log("------------------------------")
for(let propriedade in piloto){
    console.log(propriedade, " : ", piloto[propriedade])
}

console.log("------------------------")

function numeroParOuNao(numero){
    return numero % 2 === 0;
}

let continuarLoop = "s";
while (continuarLoop == "s"){
    let numero = prompt("Digite um numero: ");
    let numeroEpar = numeroParOuNao(Number(numero));
    console.log("O numero ", numero, " é par: ", numeroEpar);
    continuarLoop = prompt("Digite s para continuar ou qualquer caracter para encerrar: ")
}

console.log("-------------------------")

let home = "n";
do{
    let numero = prompt("Digite um numero: ");
    let numeroEpar = numeroParOuNao(Number(numero));
    console.log("O numero ", numero, " é par: ", numeroEpar);
    home = prompt("Digite s para continuar ou qualquer caracter para encerrar: ")
}while(home=="s");
