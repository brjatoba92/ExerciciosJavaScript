const prompt = require("prompt-sync")();

const carro = Object.create({
    marca:"RAM",
    valor:350000,
    ano: 2023,
    cor: "Vermelho",
});

const automovel = {
    marca: "Chevrolet",
    modelo: "S10",
    ano: 2019,
    cor: "azul",
    valor: 152000,
}

const veiculo = new Object();
veiculo.marca = "Toyota";
veiculo.modelo = "Hilux";
veiculo.ano = "2012";
veiculo.cor = "branca";
veiculo.valor = 122000;

console.log(carro.marca);
console.log(carro.ano);

const valor = carro.valor;
console.log(valor);

const {cor} = carro;
console.log(cor)

const ano = carro["ano"]
console.log(ano)

console.log("------------------------");

const funcionario = new Object();
funcionario.nome = prompt("Digite o nome: ");
funcionario.idade = prompt("Digite a idade: ");
funcionario.profissao = prompt("Digite a profissão ");
funcionario.salario = prompt("Digite o salario: ")

const {nome, idade, profissao, salario, salarioAnual}= funcionario;
console.log("---------------------");
console.log("Dados do funcionario: ");
console.log("Nome: ", nome);
console.log("Idade: ", idade);
console.log("Profissão: ", profissao);
console.log("Salario: ", salario);

const colaboradores = {
    name: "Bruno",
    old: 31,
    job: "Programador",
    cash: 4500,
    calcularSalarioAnual: function () {
        const salarioAnual = 13 * this.cash
        return salarioAnual;
    }
};

const {name, old, job, cash} = colaboradores;
let nomePropriedade = prompt("Digite a propriedade: ");
console.log("---------------------");
console.log("Dados do funcionario: ");
console.log("Nome: ", name);
console.log("Idade: ", old);
console.log("Profissão: ", job);
console.log("Salario: ", cash);
console.log("Salario Anual: ", colaboradores.calcularSalarioAnual());
console.log(colaboradores[nomePropriedade]);