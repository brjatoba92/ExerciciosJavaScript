const prompt = require("prompt-sync")();

let continuarSimNao = "s";
while(continuarSimNao == "s"){
    let numero = Number(prompt("Digite um numero: "));
    if (numero>10 || numero<0){
        console.log("Numero invalido", numero)
        break
    }
    else{
        console.log("Numero valido", numero)
    }
    continuarSimNao = prompt("Digite s para continuar ou qualquer outro caracter para encerrar: ")
}