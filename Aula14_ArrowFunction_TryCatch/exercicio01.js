const prompt = require("prompt-sync")();

//Desenvolva um sistema que cadastre 5 opções de menu te uma hamburgueria. 
//O usuário deverá inserir os seguintes dados: ok
//1. Nome do lanche ok
//2. Valor ok
//3. Tamanho: p, m, g ok
//Valide os dados de entrada utilizando uma arrow function, e caso ocorra um erro, utilize a função throw. ok
//Em seguida, utilizando o console.table, apresente as informações na tela. ok

try {
    const formatandoDelivery = (hamburgueriaItens) => {        
        return hamburgueriaItens.map((opcoes) => ({
            ...opcoes,
            valor: new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(opcoes.valor),
            tamanho: opcoes.tamanho.toUpperCase(),
        }));
    };

    const valideOsDados = (itemHamburgueria) => {
        if(itemHamburgueria.valor<0){
            throw "Valor não pode ser igual ou menor que zero !!"
        }
        if(
            itemHamburgueria.tamanho === "p" ||
            itemHamburgueria.tamanho === "m" ||
            itemHamburgueria.tamanho == "g"
        ){
            return;
        }else{
            throw "Tamanho incorreto !!"
        }
    }
    const hamburgueriaItens = new Array()
    for(let i=0; i<5; i++){
        const opcoes = new Object();
        opcoes.nome = prompt("Qual o lanche escolhido: ");
        opcoes.tamanho = prompt("Qual o tamanho (p/m/g): ");
        opcoes.valor = prompt("Qual o valor: ");
        valideOsDados(opcoes)
        hamburgueriaItens.push(opcoes)

    }
    console.table(formatandoDelivery(hamburgueriaItens));

}catch(error){
    console.log("Erro no sistema")

}