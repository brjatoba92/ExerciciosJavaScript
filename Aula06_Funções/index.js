const prompt = require("prompt-sync")();

function somandoNumeros(num1, num2){
    return num1+num2
}
function multiplicandoNumeros(num1, num2){
    return num1*num2
};

let num1 = Number(prompt("Digite um numero: "));
let num2 = Number(prompt("Digite outro numero: "));

console.log("Soma: ",somandoNumeros(num1,num2));
console.log("Multiplicação: ",multiplicandoNumeros(num1,num2));

console.log("------------------------------------");

console.log("Sistema Casa de Cambio")

const valorDolar = 5.53;
const valorEuro = 6.25;
const valorLibra = 8.56;

function converterParaDolar(valorReal){
    return valorReal/valorDolar
};

function converterParaEuro(valorReal){
    return valorReal/valorEuro
};

function converterParaLibra(valorReal){
    return valorReal/valorLibra
};

let valorReal = prompt("Digite o valor em real: ");

console.log("Valor em dolar: ", converterParaDolar(valorReal));
console.log("Valor em euro: ", converterParaEuro(valorReal));
console.log("Valor em libra: ", converterParaLibra(valorReal));

console.log("-----------------------------------------------");

function calculeMedia(nota1, nota2){
    let media = (nota1 + nota2)/2;
    return media;
}

let n1 = Number(prompt("Digite a primeira nota"));
let n2 = Number(prompt("Digite a segunda nota"));

console.log("Media: ", calculeMedia(n1,n2));

console.log("-----------------------------------------");

function converterParaFarenheit(grausCelsius){
    return (grausCelsius*1.8)+32
}

function converterParaKelvin(grausCelsius){
    return grausCelsius+273
}

let celsius = Number(prompt("Informe a temperatura em Celsius: "));

console.log("Temperatura em Farenheit: ", converterParaFarenheit(celsius), " °F");
console.log("Temperatura em Kelvin: ", converterParaKelvin(celsius), " K");

console.log("------------------------------------")

function vogalOuNao(letra){
    if (
        letra == "a" || 
        letra == "e" || 
        letra == "i" || 
        letra == "o" || 
        letra == "u"
        ) {
            return true
        }
            return false
}
let caracter = prompt("Digite uma letra: ");

console.log("É uma vogal? ",vogalOuNao(caracter))


