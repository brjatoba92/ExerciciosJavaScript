//Desenvolva um sistema que leia a velocidade de um veiculo. Usando o operador ternário (? e :), 
//caso a velocidade seja maior do 100, imprimia a mensagem: “Carro em alta velocidade", 
//caso contrário: “Velocidade normal”.

const prompt = require("prompt-sync")();

let velocidade = prompt("Digite a velocidade: ");

velocidade>100?console.log("Carro em alta velocidade"): console.log("Velocidade normal")