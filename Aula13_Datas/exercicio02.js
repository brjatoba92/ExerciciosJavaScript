const prompt = require("prompt-sync")();

//Crie um sistema que solicite o usuário 
//o cadastro de 5 participantes de um 
//processo seletivo para uma bolsa escolar, 
//contento nome e data de nascimento (ano-mes-dia).ok
// A partir disso, apresente quantos nasceram no mesmo ano 
//e quantos nasceram no mesmo mês. ok

let processoSeletivo = []

for(let i=0; i<5; i++){
    let nome = prompt("Digite o nome: ");
    let dataNascimento = prompt("Digite a data de nascimento no formato ano-mes-dia: ");
    processoSeletivo.push({nome: nome, dataNascimento: dataNascimento});
}

console.log(processoSeletivo);

let nascidosNoMesmoAno = {};
let nascidosNoMesmoMes = {};

processoSeletivo.forEach(function(processoSeletivo) {
    let ano = processoSeletivo.dataNascimento.split("-")[0];
    let mes = processoSeletivo.dataNascimento.split("-")[1];
    if(nascidosNoMesmoAno[ano]){
        nascidosNoMesmoAno[ano]++;
    }else{
        nascidosNoMesmoAno[ano]=1;
    }

    if(nascidosNoMesmoMes[mes]){
        nascidosNoMesmoMes[mes]++;
    }else{
        nascidosNoMesmoMes[mes]=1;
    }
});

console.log("Nascidos no mesmo ano: ", nascidosNoMesmoAno);
console.log("Nascidos no mesmo mês: ", nascidosNoMesmoMes)

