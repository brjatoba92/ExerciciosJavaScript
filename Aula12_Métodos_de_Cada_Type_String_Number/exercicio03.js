const prompt = require("prompt-sync")();

//Desenvolva um sistema que solicite ao usuário o nome, sobrenome, idade e faculdade e salário de 4 pessoas. ok
//Utilizando a interação de arrays, crie um novo array que contenha no cadastro de cada pessoa, ok
//além das informações cadastradas, as inicias da pessoa (1 letra do nome e 1 letra do sobrenome), ok
//se a formação é engenharia ou não, ok
//e formate o salário em duas casas decimais. ok

const cadastroDeUsuarios = [];

for(let i=0; i<2; i++){
    const ficha = {};
    ficha.nome = prompt("Digite o nome: ");
    ficha.sobrenome = prompt("Digite o sobrenome: ");
    ficha.idade = Number(prompt("Digite a idade: "));
    ficha.cursoFaculdade = prompt("Digite o curso da faculdade: ");
    ficha.salario = Number(prompt("Digite o salario"));
    cadastroDeUsuarios.push(ficha);
}

const caracteresNome = cadastroDeUsuarios.map(function(item){
    return item.nome[0];
})
console.log("Caracteres nomes: ",caracteresNome)

const caracteresSobrenome = cadastroDeUsuarios.map(function(item){
    return item.sobrenome[0];
})
console.log("Caracteres sobrenomes: ",caracteresSobrenome);


const possuemEngenharia = cadastroDeUsuarios.some(function(item){
    return item.cursoFaculdade == "engenharia";
});
console.log("Possue engenharia? ",possuemEngenharia);

const salarioArredondado = cadastroDeUsuarios.map(function(item){
    return item.salario.toFixed(2);
});
console.log("Salarios arredondados: ",salarioArredondado);
