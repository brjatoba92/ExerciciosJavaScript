const prompt = require("prompt-sync")();

let continuarLoop = "s";
while(continuarLoop== "s"){
    let nome = prompt("Informe um nome: ");
    let idade = Number(prompt("Informe uma idade: "));
    let salario = Number(prompt("Informe um salario: "))
    let sexo = prompt("Informe f para feminino ou m para masculino: ");
    let estadoCivil = prompt("Informe s para solteiro, c para casado, v para viuvo ou d para divorciado: ");
    
    if (nome.length>3){
        console.log("Nome invalido", nome)
    }
    else{
        console.log("Nome valido: ", nome)
    }

    if (idade>150 || idade<0){
        console.log("Idade invalida: ", idade)
    }
    else{
        console.log("Idade valida: ", idade)
    }

    if (salario>0){
        console.log("Salario valido: R$ ", salario)
    }
    else{
        console.log("Salario invalido")
    }

    console.log("Sexo: ", sexo)
    console.log("Estado civil: ", estadoCivil)

    continuarLoop = prompt("Digite s para continuar ou qualquer outro caracter para encerrar: ");
}
