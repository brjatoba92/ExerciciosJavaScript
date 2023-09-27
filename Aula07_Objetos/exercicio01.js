//Construa uma solução em que o usuário insira os dados de um aluno (nome, matricula, nota1, nota2, nota3). 
//Salve as informações um objeto e crie um método dentro deste objeto que calcule a média das 3 notas. 
//Em seguida, apresente a média final para o usuário.

const prompt = require("prompt-sync")();

const dadosUsuarios = {
    nome: prompt("Digite o nome do usuario"),
    matricula: prompt("Digite a matricula: "),
    nota1: Number(prompt("Nota1: ")),
    nota2: Number(prompt("Nota2: ")),
    nota3: Number(prompt("Nota3: ")),
    media: function(){
        const media = (nota1+nota2+nota3)/3
        return media
    }

};
const{nome, matricula, nota1, nota2, nota3} = dadosUsuarios;

console.log("Nome: ",nome);
console.log("Matricula: ",matricula);
console.log("Nota 1: ", nota1);
console.log("Nota 2: ", nota2);
console.log("Nota 3: ", nota3);
console.log("Média: ",dadosUsuarios.media());
