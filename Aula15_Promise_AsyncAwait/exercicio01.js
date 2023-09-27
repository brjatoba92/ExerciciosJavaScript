//Faça um programa que solicite ao usuário o nome e a data de nascimento. 
//Apresente os dados no terminal após 2s

const prompt = require("prompt-sync")();

setTimeout(()=>{
    const cadastro = new Array()
    do{
        const usuario = new Object();
        usuario.nome = prompt("Digite o nome: ")
        usuario.dataDeNascimento = prompt("Digite a data de nascimento: ")
        cadastro.push(usuario)
        continuar = prompt("Digite s para continuar ou qualquer outro caracter para encerrar")
    }while(continuar == 's')
    console.log(cadastro)
}, 2000) //2 segundos = 2000 ms