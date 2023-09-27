const prompt = require("prompt-sync")();

//Desenvolva um sistema que solicite o usuário o dia, mês e ano. ok
//Em seguida, apresente a data no formato de date string, UTC e ISO OK

const dia = Number(prompt("Digite o dia: "));
const mes = Number(prompt("Digite o mês: "));
const ano = Number(prompt("Digite o ano: "));

const hoje = new Date()

hoje.setDate(dia)
hoje.setMonth(mes-1)
hoje.setFullYear(ano)

console.log("Formato de string: ",hoje.toDateString())
console.log("Formato UTC: ",hoje.toUTCString());
console.log("Formato ISO: ",hoje.toISOString())