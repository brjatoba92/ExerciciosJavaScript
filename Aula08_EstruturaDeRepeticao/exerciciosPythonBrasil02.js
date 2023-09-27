const prompt = require("prompt-sync")();


let continuarOuNao = "s"
while(continuarOuNao=="s"){
    let nomeUsuario = prompt("Informe o username: ");
    let senhaUsuario = prompt("Informe a senha: ");
    if(nomeUsuario!=senhaUsuario){
        if (senhaUsuario!=123456 && senhaUsuario !=123){
            console.log("Usuario e senha validos !!!")
            break
        }
        else{
            console.log("Atenção, você digitou uma senha muito facil. Tente novamente")
        }
    }
    else{
        console.log("Usuario e senha invalidos, usuario e senha iguais. Tente novamente !!!")
        continue
    }
}