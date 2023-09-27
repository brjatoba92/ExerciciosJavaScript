const prompt = require("prompt-sync")();

//alterando elemento de um array
const alunos = ["Bruno", "Isabella", "Rayanne"]

let primeiroAluno = alunos[0];
console.log(primeiroAluno)
alunos[0] = "Mariana"
console.log(alunos)

//mostrar um elemento de determinada posição
const times = new Array("Vasco", "City", "Barcelona")
console.log(times[1])

console.log("------------------------------");

//criando diferentes tipos de elementos em um array

const disciplinas = [
    {
        ano: 1,
        disciplinaElementares: "Calculo 1",
    },
    {
        ano: 2,
        disciplinaElementares: "Fisica 1"
    }

];
console.log(disciplinas);

console.log("------------------------------");

//criando um array vazio e acrescentando elementos

const listaShopping = new Array();
listaShopping[0] = "PS5";
listaShopping[1] = "xbox";

console.log(listaShopping)

//alterando elemento em um array

const jogosPs5 = new Array("Ragnarog", "Fortnite", "cs", "fifa");
jogosPs5[0] = "bmpes";

console.log(jogosPs5)

console.log("------------------------------");

//criando 5 elementos para um array vazio com o loop for

const disciplinasMestrado = new Array();
for (let i = 0; i<5; i++){
    let novaDisciplina = prompt("Digite a disciplina: ");
    disciplinasMestrado[i] = novaDisciplina;
}
console.log(disciplinasMestrado)
console.log("Tamanho do array: ",disciplinasMestrado.length, "elementos") //lenght mostra a quantidade de elementos
console.log("Ultima disciplina: ", disciplinasMestrado[disciplinasMestrado.length - 1] )

//criando um objeto com certas caracteristicas
const funcionarios = new Array();
for (let i = 0; i<2; i++){
    let cadastro = new Object();
    cadastro.nome = prompt("Digite o nome: ")
    cadastro.idade = prompt("Digite a idade: ")
    cadastro.profissao = prompt("Digite a profissao")
    funcionarios[i] = cadastro;
}
console.log(funcionarios)

const olxMarketPlace = new Array();
for (let i=0; i<6; i++){
    let anuncioCadastro = new Object();
    anuncioCadastro.anunciante = prompt("Nome do vendedor: ")
    anuncioCadastro.categorias = prompt("Digite a categoria: ");
    anuncioCadastro.titulo = prompt("Titulo: ");
    anuncioCadastro.descricao = prompt("Descrição: ");
    anuncioCadastro.tipo = prompt("Tipo: ");
    anuncioCadastro.preco = Number(prompt("R$ "));
    anuncioCadastro.fotos = prompt("Inserido uma foto? ");
    anuncioCadastro.localizacao = prompt("Localização: ");
    anuncioCadastro.telefone = prompt("Deseja ocultar o telefone? ")
    olxMarketPlace[i] = anuncioCadastro;
}
console.log(olxMarketPlace)

console.log("-----------------------")

// adicionando elementos em uma lista na ordem direta (push) e inversa (unshift)

const nomeDasMarcas = new Array();
let i = 0;

do{
    let marca = prompt("Digite uma marca: ");
    nomeDasMarcas.push(marca); //adiciona os elementos a partir do inicio da lista - ordem direta
    // digitado: adidas, nike, new balance
    // impresso: adidas, nike, new balance
    nomeDasMarcas.unshift(marca); //adiciona os elementos a partir do inicio da lista - ordem inversa
    // digitado: adidas, nike, new balance
    // impresso: new balance, nike, adidas
    i++
}while(i<5);

console.log(nomeDasMarcas)

console.log("------------------------")

const marcasCarro = new Array(
    "Honda",
    "Toyota",
    "Volkswagen",
    "Nissan",
    "Land Rover"
)
marcasCarro.pop(); // remove o ultimo elemento: landrover
marcasCarro.shift(); // remove o primeiro elemento: honda
console.log("Listagem dos carros: ", marcasCarro)


// soma de arrays - concat
const marcasDeLuxo = new Array(
    "Jaguar",
    "Ferrari",
    "Lamborginni",
    "McLaren",
    "BMW"
)

let novoArray = marcasDeLuxo.concat(marcasCarro)
console.log(novoArray)

console.log("--------------------")

marcasCarro.splice(1,0,"Fiat", "Pegeout"); //adiciona elementos sem remover
// splice(posicao_desejada, quantidade_elementos_removidos, elementos a serem adicionados)
console.log(marcasCarro)

marcasDeLuxo.slice(3, 5) // criar novo array: inicio, termino
console.log(marcasDeLuxo)

