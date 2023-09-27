//Escreva um sistema que o usuário insira as notas de 10 alunos de uma faculdade. 
//Em seguida, através do comando sort, ordene a listagem de notas.

const prompt = require("prompt-sync")();

const alunosNotas = new Array()

for(let i=0; i<10; i++){
    alunosNotas[i] = prompt("Digite uma nota: ")
}

let notasOrdenadas = alunosNotas.sort(function(n1, n2){
    return n1 - n2
})

console.log(notasOrdenadas)