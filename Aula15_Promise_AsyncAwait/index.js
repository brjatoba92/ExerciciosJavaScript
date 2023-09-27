//const prompt = require("prompt-sync")();

setTimeout(()=>{
    console.log("Algo executando")
}, 10000) //tempo em milessegundos

setInterval(()=>{
    console.log("Executando ...")
}, 10000) //executa a cada valor de intervalo mencionado, É INFINITO


const funcaoTimeOut = (duracao) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duracao)
    });
};

funcaoTimeOut(1000).then(()=>{ 
    console.log("Após 1000 ms"); //resolve
}).catch((error)=>{
    console.log("Erro na promise: ", error) //reject
});

fetch("https://pokeapi.co/api/v2/pokemon")
.then((data)=>{
    return data.json()
}).then((result)=>{
    console.log(result)

}).catch((error)=>{
    console.log(error)
});

const getPokemons = async () => {
  const resultado  = await fetch ("https://pokeapi.co/api/v2/pokemon");
  return resultado.json()
}
const pokemons = await getPokemons();
console.log(pokemons)




