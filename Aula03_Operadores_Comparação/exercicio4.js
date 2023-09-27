//Crie uma solução para identificar entre dois alunos, qual teve a nota mais baixa.

const prompt = require("prompt-sync")();

let notaAlunoUm = Number(prompt("Digite a nota do primeiro aluno: "));
let notaAlunoDois = Number(prompt("Digite a nota do segundo aluno: "));

if(notaAlunoUm<notaAlunoDois){
    console.log("Nota mais baixa: Aluno 1")
}
else{
    console.log("Nota mais baixa: Aluno 2")
}