const prompt = require("prompt-sync")();

const alunosAprovados = new Array("Barbara", "Denise", "Jose", "Pedro", "Gusman", "Isabella", "Rayanne");

for(let i=0; i<alunosAprovados.length; i++){
    let aluno = alunosAprovados[i];
    console.log(aluno);
}
console.log("-------------------------------");

const notasTurma = new Array(5.2, 10, 8.52, 9, 6.5)

for(let i = 0; i<notasTurma.length; i++){
    notasTurma[i] = notasTurma[i]+1;
}
console.log(notasTurma);

console.log("-------------------------------");

const nomeCompleto =[
    {
        nome: "Bruno",
        sobrenome: "Jatoba",
    },
    {
        nome: "Rayanne",
        sobrenome: "Andrade",

    },
    {
        nome: "Isabella",
        sobrenome: "Aragão"
    },
];

for(let i=0; i<nomeCompleto.length; i++){
    console.log(nomeCompleto[i].nome + " " + nomeCompleto[i].sobrenome)
}

console.log("---------------------------------")


for(pessoa of nomeCompleto){
    console.log(pessoa.nome + " " + pessoa.sobrenome)
}

console.log("--------------------------")

//Função ForEach
const precosComputadores = [
    {
        produto: "Macbook Air",
        memoria: "256 GB",
        valor: 5200,
    },
    {
        produto: "Macbook Pro",
        memoria: "256 GB",
        valor: 6200,
    },
    {
        produto: "Mac Studio",
        memoria: "256 GB",
        valor: 15200,
    },
    {
        produto: "Iphone 14",
        memoria: "128 GB",
        valor: 5500,
    },
    {
        produto: "Iphone 14 Pro",
        memoria: "128 GB",
        valor: 6800,
    },
    {
        produto: "Iphone 14 Pro Max",
        memoria: "128 GB",
        valor: 8100,
    },
];
console.log("Promoção Apple Store Final do Ano - 5% off")
precosComputadores.forEach(function(elemento, index){
    //console.log(index, " - ", elemento.memoria)
    elemento.valor = elemento.valor * 0.95
});

console.log(precosComputadores)

console.log("------------------------------------")

//Função Sort
const numeros = [1, 6, 8, 2, 25, 652, 23, 5, 1254];

numeros.sort(function (n1, n2){
    return n1 - n2;
});

console.log(numeros)

console.log("------------------------------")

precosComputadores.sort(function (e1, e2){
    return e1.valor - e2.valor;
});

console.log(precosComputadores)