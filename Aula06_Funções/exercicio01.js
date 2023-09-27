//Desenvolva um sistema que execute uma função para calcular a média de 4 números

function mediaQuatroNumeros (num1, num2, num3, num4){
    let soma = num1+num2+num3+num4
    return soma/4
}

let resultado = mediaQuatroNumeros(2,4,6,8)
console.log(resultado)