const prompt = require("prompt-sync")();

let numero = 0

for (let i=0; i<20; i++){
    numero+=1
    console.log(numero)
}

let output = " "
for(let i=1; i<=20; i++){
    output += i + " ";
}
console.log(output)
