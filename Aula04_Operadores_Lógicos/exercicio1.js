//Desenvolva um sistema para identificar se uma pessoa tem preferência em um embarque.
// Para isso, o usuário precisará inserir duas informações: 
//a.idade e b.tipo de bilhete. 
//Se a idade for maior do que 60 anos ou tipo de bilhete for “premium”, o usuário poderá passar a frente. 
//Imprima a mensagem: “Embarque preferencial: [true ou false]”

const prompt = require("prompt-sync")();

let idade = prompt("Digite a idade: ");
let bilhete = prompt("Digite o tipo do bilhete: ");

console.log("Embarque preferencial: ", idade>=60 || bilhete == "premium");
