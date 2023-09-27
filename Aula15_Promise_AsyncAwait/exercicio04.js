//Utilizando o resultado do exercício 3, após apresentar o resultado na tela,
// peça ao usuário que digite o número do index do pokemon que deseja ver mais informações.
// Em seguida, faça uma requisição dos detalhes daquele pokemon e apresente o resultado na tela.
//Ex: { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' } (index é 0 na listagem). Faça uma requisição da url e apresente o resultado no terminal.
const prompt = require("prompt-sync")()

fetch(`https://pokeapi.co/api/v2/pokemon`)
.then((response)=>{
    return response.json()
}).then((data)=>{
    const pokemons = data.results.map((pokemon, index)=>{
        return {name: pokemon.name, url:pokemon.url}
    });
    const qualPokemon = Number(prompt("Digite o index do pokemon: "))/
    console.log(pokemons[qualPokemon])
}).catch((error)=>{
    console.log(error)
});