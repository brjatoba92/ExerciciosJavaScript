const prompt = require("prompt-sync")();

//1. Crie um sistema que solicite o usuário 
//O cadastro de 5 participantes de um processo seletivo para uma bolsa escolar, contendo: 
//a. nome e b. data de nascimento (ano-mes-dia). ok
//2. A partir disso, apresente: 
//a. quantos nasceram no mesmo ano ok
//b. quantos nasceram no mesmo mês. ok

const sistemaProcessoSeletivo = [];

for(let i=0; i<5; i++){ //fase cadastral
    let cadastro = {};
    cadastro.nome = prompt("Digite o nome do participante: ");
    cadastro.dataDeNascimento = prompt("Digite a data no formato ano-mes-dia: ");
    sistemaProcessoSeletivo.push(cadastro); //adiciona os objetos de cadastro dentro da constante sistemaProcessoSeletivo
}
console.log(sistemaProcessoSeletivo); // imprimindo para checar se esta tudo certp

let mesmoAnoDeNascimento = {}; 
let mesmoMesDeNascimento = {};

// metodo forEach: O método forEach() em JavaScript é uma função interna que permite iterar sobre os elementos de um array (matriz) ou propriedades de um objeto e executar uma função para cada elemento1. Ele simplifica o processo de looping através de elementos de array sem a necessidade de loops tradicionais como, por exemplo, o for
const colhendoDados = sistemaProcessoSeletivo.forEach(function(item){ //simplifica como se fazer um loop pelo for
    ano = item.dataDeNascimento.split("-")[0] //primeiro elemento da string
    mes = item.dataDeNascimento.split("-")[1] // segundd elemento da string
    if(mesmoAnoDeNascimento[ano]){ //se o elemento de ano do loop for o mesmo se acrescenta 1 toda vez que passar no loop
        mesmoAnoDeNascimento[ano]++
    }else{
        mesmoAnoDeNascimento[ano] = 1 //se for diferente é informado uma unica vez
    };

    if(mesmoMesDeNascimento[mes]){
        mesmoMesDeNascimento[mes]++
    }else{
        mesmoMesDeNascimento[mes] = 1
    }
})

console.log("Nascido no mesmo ano: ", mesmoAnoDeNascimento )
console.log("Nascido no mesmo mês: ", mesmoMesDeNascimento)


