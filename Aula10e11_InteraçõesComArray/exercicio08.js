const prompt = require("prompt-sync")();
//Utilizando o exercício 6, utilize a função filter 
//para imprimir um array com os alunos que tenham mais de 180 de altura.

const classeDeAlunos = [];

for(let i=0; i<7; i++){
    let cadastro = {};
    cadastro.nome = prompt("Digite o nome: ");
    cadastro.peso = Number(prompt("Digite o peso: "));
    cadastro.altura = Number(prompt("Digite a altura"));
    classeDeAlunos.push(cadastro);
};

let alunosComAlturaMaior180 = classeDeAlunos.filter(function(classeDeAlunos){
    return classeDeAlunos.altura > 180;
})

console.log(alunosComAlturaMaior180);