const prompt = require("prompt-sync")();

console.log("Opções de credenciais: ");
console.log("adm ");
console.log("fin ");
console.log("rh ");

let credencial = prompt("Digite sua credencial: ");
let acessoLiberado = credencial != "rh";
console.log("Acesso liberado: " + acessoLiberado);

console.log("--------------------------------");

let n1 = prompt("Digite o numero 1: ");
let n2 = prompt("Digite o numero 2: ");

console.log("Numero 1 é maior que o 2: ", n1>n2);
console.log("Numero 1 é maior ou igual que o 2: ", n1>=n2);
console.log("Numero 1 é menor que o 2: ", n1<n2);
console.log("Numero 1 é menor ou igual que o 2: ", n1<=n2);
console.log("Numero 1 é diferente do 2: ", n1!=n2);
console.log("Numero 1 é igual ao 2: ", n1==n2);

console.log("-------------------------------");
let nota1 = Number(prompt("Digite um numero: "))
let comparado = nota1 === "3"
console.log(comparado)



