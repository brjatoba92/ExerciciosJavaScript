const prompt = require("prompt-sync")();
const catalogoNetflix = {
    senhordosaneis: function(ano, genero, bilheteria){
        console.log(ano)
        console.log(genero)
        console.log(bilheteria)
    },
    superman: function(ano, genero, bilheteria){
        console.log(ano)
        console.log(genero)
        console.log(bilheteria)
    }
}

catalogoNetflix.senhordosaneis(2011, "guerra", 510000);
catalogoNetflix.superman(1989, "aventura", 25000000009);