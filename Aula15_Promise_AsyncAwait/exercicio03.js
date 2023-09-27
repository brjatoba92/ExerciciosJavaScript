//Seguindo o exemplo de requisições realizadas na aula, 
//realize a requisição de listagem de pokemons, 
//em seguida, utilizando o console.table, apresente a listagem de pokemons.

//const prompt = require("prompt-sync")();

fetch("https://pokeapi.co/api/v2/pokemon")
.then(response => response.json())
.then(data => {
    const pokemons = data.results.map((pokemon, index)=>{
        return {id: index+1, name: pokemon.name};
    });
    console.table(pokemons)
})
.catch(error => console.error("Erro ao buscar o pokemon", error))