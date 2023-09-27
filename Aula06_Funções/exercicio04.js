//Desenvolva uma sistema que através de uma função 
//apresente a conversão do real para dólar, euro e libra, utilizando o switch case

const prompt = require("prompt-sync")();

function converterReal (valorEmReal){
    switch(moeda){
        case 'e':
            console.log(valorEmReal*5.2);
            break;
        case 'd':
            console.log(valorEmReal*4.8);
            break;
        case 'l':
            console.log(valorEmReal*7.2)
            break;
        default:
            console.log("Opção não disponivel")
    }
}

let moeda = prompt("Opções de moedas: e(euro), d(dolar), l(libra)");

converterReal(5)

