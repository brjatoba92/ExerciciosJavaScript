const prompt = require("prompt-sync")();

//Crie uma solução que contenha uma listagem pré definida de alunos de uma turma e suas notas. ok
//Em seguida, solicite ao usuário que escreve os próximos 3 alunos e suas respectivas notas. ok
//Adicione esses elementos (objetos) ao array no começo da listagem e imprima a lista na tela. ok
//Em seguida, remova os 3 últimos elementos da listagem e imprima o resultado final e o tamanho da listagem. ok

const turmaAlunos = [
    {
        nome: "Bruno",
        nota: 10,
    },
    {
        nome: "Rayanne",
        nota: 9.5,
    },
    {
        nome: "Isabella",
        nota: 9.6,
    },
    {
        nome: "Mariana",
        nota: 8.5,
    },
    {
        nome: "Priscila",
        nota: 8.75,
    }
];
//console.log(turmaAlunos)

const alunosNovos = new Array();
for(let i=0; i<3; i++){
    let adicionando = new Object();
    adicionando.nome = prompt("Nome: ");
    adicionando.nota = Number(prompt("Nota: "));
    alunosNovos[i] = adicionando;
}

let turmaDoAno = turmaAlunos.concat(alunosNovos)
console.log(turmaDoAno)

turmaDoAno.splice(turmaAlunos.length, 3)
console.log(turmaDoAno)

console.log("Tamanho da lista: ",turmaDoAno.length, " elementos")

