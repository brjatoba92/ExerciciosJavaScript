//Crie uma solução utilizando o comando while um sistema que leia nome de países. 
//A cada loop, identifique, por meio de uma função, se esse país faz parte da América do Sul 
//e apresente essa informação para o usuário. Em seguida, pergunte se ele deseja continuar (s para continuar, qualquer outra tecla para parar).

const prompt = require("prompt-sync")();

function americaDoSul(pais){
    let southAmerica = ['Brasil', 'Argentina', 'Bolivia', 'Chile', 'Colombia', 'Equador', 'Paraguai', 'Peru', 'Suriname', 'Guiana', 'Guiana Francesa', 'Uruguai', 'Venezuela']
    return southAmerica.includes(pais);
}

let continuarLoop ="s";
while(continuarLoop == "s"){
    let pais = prompt("Digite o nome de um pais: ");
    let paisEDaAmericaDoSul = americaDoSul(pais);
    console.log(paisEDaAmericaDoSul);
    continuarLoop = prompt("Digite s para continuar ou qualquer outro caracter para sair: ")
}