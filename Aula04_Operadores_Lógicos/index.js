const prompt = require("prompt-sync")();

let peso = Number(prompt("Digite seu peso: "));
let altura = Number(prompt("Digite sua altura: "));

console.log("Pode ser jogador da NBA: ", peso>=95 && altura >= 190);

console.log("----------------------------------------------------");
console.log("Digite as opções de ticket para acesso a aeronave: ");
console.log("pil ");
console.log("man");
console.log("aer ");

let ticketAcesso = prompt("Digite seu ticket: ");

console.log("Acesso Liberado: ", ticketAcesso == "pil" || ticketAcesso == "man" || ticketAcesso == "aer" );

console.log("----------------------------------------------------");

let notaEnem = prompt("Digite a nota do Enem: ");
let notaPss = prompt("Digite a nota do PSS: ");

console.log("Aluno aprovado: ", notaEnem>=700 || notaPss >=800);
console.log("Aluno reprovado: ", !(notaEnem>=700 || notaPss >=800));
