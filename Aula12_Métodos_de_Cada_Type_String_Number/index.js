const prompt = require("prompt-sync")();

//Metodos Strings

let nome = "Bruno Guimarães Jatobá";

//lenght
console.log(nome.length)
//substring
console.log(nome.substring(0, 5))
//replace
console.log(nome.replace("Bruno", "Rayanne"))
console.log(nome.replace(/bruno/i, "Isabella")) // case insensitive: não importa se foi informado letra maiuscula ou miniscula
//toUpperCase e toLowerCase
console.log(nome.toUpperCase()) // tudo mauisculo
console.log(nome.toLowerCase()) // tudo minusculo
//trim
console.log(nome.trim(" ")) // elimina espaços adicionais
//charAt
console.log(nome.charAt(0)) // imprime o caracter em uma certa posição
//split
console.log(nome.split(" ")) // separa a string conforme um indicador, que no caso seria o espaço 
//includes
console.log(nome.includes("B")) // pesquisa se tem determinado caracter
//interpolacao de strings
let primeiroNome = "Bruno"
let sobrenome = "Jatobá"
console.log(`${primeiroNome} ${sobrenome}`)


//Metodos com numeros
const preco = 20.229
//toFixed
console.log(preco.toFixed(2)) // transforma para duas casas decimais
//Conversão de moedas
const valorMacbook = 8995
let valor = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
}).format(valorMacbook)

console.log(valor)