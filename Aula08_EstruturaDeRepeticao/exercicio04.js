//Desenvolva um sistema que através do comando do while identifique se o número digitado é impar. 
//Enquanto o usuário digitar um número diferente de zero, continue a executar o loop

const prompt = require("prompt-sync")();
function numeroImparOuNao(numero){
    return numero % 2 != 0;
}

let digiteParaContinuar = "n";
do{
    let numero = prompt("Digite um numero: ")
    let numeroEImpar = numeroImparOuNao(Number(numero));
    console.log("O numero ", numero, " é impar: ", numeroEImpar);
    digiteParaContinuar = prompt("Continuar? s para sim e qlq outro para encerrar: ")
}while(digiteParaContinuar=='s');