const prompt = require("prompt-sync")();

const hoje = new Date(); // data de hoje, imprime em UTC
console.log(hoje)

const dataNatal = new Date("2023-12-25"); // data especifica
console.log(dataNatal)

console.log(hoje.toString());//Hora atual com formatação
console.log(hoje.toDateString());//Somente a data, sem o horario
console.log(hoje.toUTCString());// Padrao UTC
console.log(hoje.toISOString());
console.log(hoje.toLocaleDateString());

//Metodos Get and Set
console.log(hoje.getDate()) // Dia
const mudandoHora = hoje.setMinutes(20);
console.log(new Date(mudandoHora).toString());

console.log("--------------------------")

const horaEMinutos = prompt("Digite o horario no seguinte formato: HH:mm - ")
const horarioSplitado = horaEMinutos.split(":")
console.log(horaEMinutos)
const hora = Number(horarioSplitado[0])
console.log("Hora: ",hora)
const minutos = Number(horarioSplitado[1])
console.log("Minutos: ",minutos)

hoje.setHours(hora);
hoje.setMinutes(minutos);

console.log("Pedido confirmado às: ", hoje.toString());

const tempoDeEntrega = Number(prompt("Digite o tempo de entrega: "));
const minutosTotais = tempoDeEntrega + minutos;
let dataDeEntrega = hoje;

if (minutosTotais>60){
    const minutosExcedentes = minutosTotais - 60;
    dataDeEntrega.setHours(hora+1)
    dataDeEntrega.setMinutes(minutosExcedentes)
}else{
    dataDeEntrega.setMinutes(minutosTotais)
}
console.log("Data de entrega: ", dataDeEntrega.toString())

