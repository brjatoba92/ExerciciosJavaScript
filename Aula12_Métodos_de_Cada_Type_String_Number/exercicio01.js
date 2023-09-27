const prompt = require("prompt-sync")();

//Crie uma solução na qual o usuário irá inserir o cadastro de 5 participantes de um evento, 
//contendo nome e sobrenome e tipo de ingresso (Pista Gold, Pista Premium, Camarote). 
//Utilizando o conceito do array.map, adicione as seguintes propriedades ao cadastro de cada participante: 
//1. Nome completo (utilizando interpolação de strings)
//2. Tipo de ingresso pista (string includes)
//3. Tipo de ingresso formatado (toUpperCase e trim)

const cadastroParticipantes = [];

for(let i=0; i<2;i++){
    const cadastro = {};
    cadastro.nome = prompt("Nome: ");
    cadastro.sobrenome=prompt("Sobrenome: ");
    cadastro.tipoIngresso=prompt("Tipo de ingresso: Pista Gold/ Pista Premmium/ Camarote");
    cadastroParticipantes.push(cadastro);
}

const propriedadesCadastro = cadastroParticipantes.map(function(item){
    let nomeCompleto = item.nome + " " + item.sobrenome;
    console.log(nomeCompleto);
})

const ingressosCadastro = cadastroParticipantes.map(function(item){
    let ingresso = item.tipoIngresso;
    console.log(ingresso)
    console.log(ingresso.toUpperCase());
});
