const prompt = require("prompt-sync")();

let altura=prompt("Digite sua altura: ");

altura>190?console.log("NBA Aprovado"):console.log("NBA Reprovado");

console.log("------------------------------------")

let selecaoCampea=prompt("Digite uma seleção: ");

switch(selecaoCampea){
    case "Brasil":
        console.log("5 Titulos")
        break
    case "Italia":
        console.log("4 titulos")
        break
    default:
        console.log("Não tem titulos")
};

let jogadorBrasileiro=prompt("Digite um nome de jogador brasileiro: ");

switch(jogadorBrasileiro){
    case "Neymar":
        console.log("Jogador que atua na França")
        break
    case "Richarlison":
        console.log("Jogador que atua na Inglaterra")
        break
    case "Firmino":
        console.log("Jogador que atua na Arabia")
        break
    case "Lucas Moura":
        console.log("Jogador que atua no Brasil")
        break
    default:
        console.log("Jogador não consta no banco de dados")
};

console.log("--------------------------------------------")

let notaDinamica = Number(prompt("Digite a nota de Meteorologia Dinamica: "));
let notaSinotica = Number(prompt("Digite a nota de Meteorologia Sinotica: "));
let notaTermodinamica = Number(prompt("Digite a nota de Termodinamica: "));

let mediaMestrado = (notaDinamica+notaSinotica+notaTermodinamica)/3

if (mediaMestrado>=7){
    console.log("Nota: ",mediaMestrado," Mestrando aprovado")
}

else if(mediaMestrado>=6){
    console.log("Nota: ",mediaMestrado," Recuperação")
}

else{
    console.log("Nota: ",mediaMestrado," Mestrando reprovado")
}

console.log("----------------------------------------")

let numeroUm = Number(prompt("Digite um numero: "))
let numeroDois = Number(prompt("Digite outro numero: "))

let caracter = prompt("Digite um caracter: ")
console.log("+ (Adição) \n - (Subtração) \n * (Muliplicação) \n / (Subtração)")

switch(caracter){
    case "+":
        operacao = numeroDois + numeroUm
        console.log("Soma: ", operacao)
        break
    
    case "-":
        operacao = numeroDois - numeroUm
        console.log("Subtração: ", operacao)
        break
    
    case "*":
        operacao =numeroDois * numeroUm
        console.log("Multiplicação: ", operacao)
        break
    
    case "/":
        operacao = numeroDois / numeroUm
        console.log("Divisão: ", numeroDois/numeroUm)
        break
    default:
        console.log("Opção não disponivel")
};



