//Para um clube europeu ter chances de se classificar para Champions League,
// ele deverá ter feito mais de 60 pontos durante o campeonato. 
//Caso tenha feito mais de 75, as chances são maiores.
// Desenvolva uma solução que leia o nome e pontuação do time. 
//Em seguida, usando as estruturas condicionais, 
//a.caso a pontuação seja maior do que 75, imprima “Excelentes chances de classificação”. 
//b.Caso entre 60 e 75, imprima “Boas chances de se classificar". 
//c.Caso contrário: “Chances baixas de se classificar”

const prompt = require("prompt-sync")();

let classificacaoChampions = Number(prompt("Quantidade de pontos na temporada: "));

if (classificacaoChampions>75){
    console.log("Excelentes chances de se classificar")
}
else if(classificacaoChampions>60){
    console.log("Boas chances de se classificar")
}
else{
    console.log("Chances baixas de se classificar")
};