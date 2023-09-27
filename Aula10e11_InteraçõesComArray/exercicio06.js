//Desenvolva uma solução em que o usuário insira a ficha atlética de 7 alunos de uma academia,
// com nome, peso e altura. 
//Em seguida, imprima a lista ordenada pela altura dos alunos, de forma decrescente 
//e uma segunda lista pelo peso, de forma crescente.

const prompt = require("prompt-sync")();

const ligaAcademica = [];

for(let i=0; i<7; i++){
    let cadastroLiga = {};
    cadastroLiga.nome = prompt("Digite o nome do aluno: ");
    cadastroLiga.peso = Number(prompt("Digite o peso do aluno"));
    cadastroLiga.altura = Number(prompt("Digite a altura do aluno: "))
    ligaAcademica.push(cadastroLiga);
}

let pesoCrescente = ligaAcademica.sort(function(n1, n2){
    return n2.peso - n1.peso
});

console.log(pesoCrescente);

let alturaDecrescente = ligaAcademica.sort(function(e1, e2){
    return e1.altura - e2.altura
});

console.log(alturaDecrescente);