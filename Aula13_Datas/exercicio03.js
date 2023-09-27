const prompt = require("prompt-sync")();

//Escreva um algoritmo que o usuário entre a hora que solicitou um taxi.
// Em seguida, apresente a mensagem: “Solicitação confirmada em: [apresente a data]”. 
//Depois, solicite a previsão de minutos para chegada”. Finalizando, apresente a data final estimada para chegada ao destino.

const hoje = new Date(); //informando data atual com o horario

const horarioSolicitado = prompt("Digite o horario de solicitação do taxi (hh:mm): "); //informa horario no formato informado
const horarioSeparado = horarioSolicitado.split(":"); // separa as horas dos minutos através do caracter :
console.log(horarioSeparado); // imprime a string

const horas = Number(horarioSeparado[0]); // variavel hora pegando o primeiro elemento da string
const minutos = Number(horarioSeparado[1])  // variavel minuto pegando o segundo elemento da string

hoje.setHours(horas); //muda as horas na constante hoje
hoje.setMinutes(minutos); // muda os minutos na constante hoje 

console.log("Solicitação confirmada em: ",hoje.toString()) //imprime formatado

const previsaoDeChegada = Number(prompt("Em quanto tempo o Uber chegará: ")); //uma constante para informar o tempo de chegada do Uber
const minutosTotais = previsaoDeChegada + minutos; // soma a previsão com os minutos informados

if(minutosTotais>60){
    const minutosExcedentes = minutosTotais - 60; //minutos superado os 60
    hoje.setHours(horas+1); // aumenta a hora em 1
    hoje.setMinutes(minutosExcedentes); //pega os minutos superados
}else{
    hoje.setMinutes(minutosTotais); //caso não supere 
}
console.log("Chegada em: ", hoje.toString()); //imprime as mudanças

