const prompt = require("prompt-sync")();

//Função map
const precos = [200, 120, 256, 698, 54, 8122];

const precosComDesconto = precos.map(function(item){
    return item * 0.9;
})

console.log(precosComDesconto)

const turmaMestrado = [
    {
        nome: "Bruno",
        sobrenome: "Jatobá",
        nota: 8.5,
    },
    {
        nome: "Rodrigo",
        sobrenome: "Lins",
        nota: 8.3,
    },
    {
        nome: "Marcelo",
        sobrenome: "Junior",
        nota: 8.2,
    },
    {
        nome: "Edvaldo",
        sobrenome: "Junior",
        nota: 7.8,
    },
    {
        nome: "Ismael",
        sobrenome: "Gidson",
        nota: 8.7,
    },
    {
        nome: "Klemerson",
        sobrenome: "Guimarães",
        nota: 10,
    },

];

let alunosAprovadosDoutorado = turmaMestrado.map(function(item){
    return item.nome + " " + item.sobrenome
});

console.log(alunosAprovadosDoutorado)

let aprovados = turmaMestrado.map(function(item){
    return {
        ... item, // todas as propriedades
        nomeCompleto: item.nome + " " + item.sobrenome,
    }
});

console.log(aprovados)

// Função filter

const classificacaoBrasileirao = [
    {
        time: "Vasco",
        pontuacao: 32,
    },
    {
        time: "Atletico MG",
        pontuacao: 42,
    },
    {
        time: "Blamengo",
        pontuacao: 22,
    },
    {
        time: "Palmeiras",
        pontuacao: 52,
    },
    {
        time: "Bragantino",
        pontuacao: 23,
    },
    {
        time: "São Paulo",
        pontuacao: 47,
    },
    {
        time: "Corinthians",
        pontuacao: 36,
    },
    {
        time: "Goias",
        pontuacao: 12,
    },
    {
        time: "Santos",
        pontuacao: 10,
    },
    {
        time: "Bahia",
        pontuacao: 27,
    },
    {
        time: "Fluminese",
        pontuacao: 30,
    },
    {
        time: "Botafogo",
        pontuacao: 60,
    },
];

let libertadores2024 = classificacaoBrasileirao.filter(function(item){
    return item.pontuacao > 40
})

console.log("Classificado para a Libertadores 2024: ",libertadores2024);

//Função Reduce

const somaNotasAlunosMestrado = turmaMestrado.reduce(function(total, item){
    return total + item.nota;
}, 0) // 0 por conta de trabalhar com objetos, valor inicial do total

console.log("Soma das notas: ",somaNotasAlunosMestrado)

//Função every

const notasMaioresQue7 = turmaMestrado.every(function(item){
    return item.nota > 7;
});

console.log("Notas maiores que 7? ", notasMaioresQue7)

// Some

const alguemTirou10 = turmaMestrado.some(function(item){
    return item.nota == 10;
})

console.log("Alguem tirou 10? ",alguemTirou10)

// IndexOf

const numerosAleatorios = new Array(1, 5, 9, 8, 7.5)

const indexNota8 = numerosAleatorios.indexOf(8);

console.log("Posição de quem tirou nota 8: ",indexNota8);

console.log("-------------------")

const medias = turmaMestrado.map(function(item){
    return item.nota;
})

const indexNota10 = medias.indexOf(10);
console.log("Posição de quem tirou nota 10: ",indexNota10);

// Find

const nomeAlunoQueTirou10 = turmaMestrado.find(function(item){
    return item.nota === 10;
});

console.log("Aluno que tirou 10: ",nomeAlunoQueTirou10.nome + " " + nomeAlunoQueTirou10.sobrenome)

// FindIndex

const alunoDestaque = turmaMestrado.findIndex(function(item){
    return item.nome === "Bruno";
});

console.log("Posição do Aluno Bruno: ",alunoDestaque)






