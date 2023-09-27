//Desenvolva um sistema que leia a idade do usuário. 
//Caso a idade seja maior que 70 anos, imprima a mensagem “Idoso”, 
//caso entre 30 e 70: “Adulto”, entre 20 e 30: “Jovem Adulto”, 
//entre 15 e 20: “Jovem”, menor do que 15: “Criança ou adolescente”

const prompt = require("prompt-sync")();

let idade = prompt("Digite a idade: ");

if (idade >= 70){
    console.log("Idoso ", idade)
}
else if(idade >= 30){
    console.log("Adulto ", idade)
}
else if(idade >= 20){
    console.log("Jovem Adulto ", idade)
}
else if(idade >= 15){
    console.log("Jovem")
}
else{
    console.log("Criança ou adolescente")
}