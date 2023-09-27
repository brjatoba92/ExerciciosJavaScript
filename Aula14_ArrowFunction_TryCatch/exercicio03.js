//Desenvolva um sistema que irá cadastrar as 5 corridas inicias de um motorista de aplicativo. 
//Os dados inseridos devem ser:
//1. Horário de início da corrida ok
//2. Distância em km ok
//3. Tempo até o destino ok
//4. Valor da corrida ok

//Em seguida, formate os dados, adicionado a propriedade de horário final de chegada ao destino e também o valor da corrida. 
//Por fim, apresente os dados formatados, o valor total das soma das corridas e também a soma de distância percorrida. ok

const prompt = require("prompt-sync")();

try{
    const formatandoPreco = (sistemaUber) => {
        return sistemaUber.map((corrida) => ({
            ...corrida,
            valorCobrado: new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(corrida.valorCobrado)          
        }))
    }
    
    const sistemaUber = new Array();
    let valorInicial = 0 
    for(let i=0; i<5; i++){
        const corrida = new Object(); //criando novo objeto
        const hoje = new Date() 
        corrida.horarioInicioCorrida = prompt("Horario inicial da corrida (hh:mm): "); //4 propriedades iniciais
        corrida.distancia = Number(prompt("Digite a distancia em km: "));
        corrida.tempoAteODestino = Number(prompt("Digite o tempo até a chegada, em minutos: "));
        corrida.valorCobrado = Number(prompt("Informe o valor da corrida: "));
        valorInicial+=corrida.valorCobrado;  //aqui soma o valor inicial(0) com cada valor inserido no loop e modificando a cada soma
        
        const splitandoHorarioInicial =  corrida.horarioInicioCorrida.split(":"); //separando os elementos hh:MM através do caracter :
        const hora = Number(splitandoHorarioInicial[0]); //hora hh
        const minutos = Number(splitandoHorarioInicial[1]); //minutos MM

        const minutosTotais = minutos + corrida.tempoAteODestino; //somando os minutos da string com o digitado
        let chegouAoDestino = hoje; //criei uma variavel para armazenar o valor de hoje

        if(minutosTotais>60){
            const minutosExcedentes = minutosTotais - 60 //caso supere 60 minutos
            chegouAoDestino.setHours(hora+1); //acrescente em uma hora
            chegouAoDestino.setMinutes(minutosExcedentes); //pegue o valor da subtração 64-60 = 4 ; 14:50 + 60 minutos = 110 minutos; 110-60 = 50min
            // 14:50 + 110 minutos = 15:50
        }else{
            chegouAoDestino.setHours(hora); //mantem a hora
            chegouAoDestino.setMinutes(minutosTotais); // pega a soma dos minutos da string e os digitados
        }
        
        corrida.horarioDeChegada = chegouAoDestino.toString(); //nova propriedade pegando a constante chegouAoDestino com as modificações na hora e minutos
        sistemaUber.push(corrida); //adiciona todos os elementos do objeto corrida ao array sistemaUber
    }
    const valorCobradoFormatado = formatandoPreco(sistemaUber); //chamando uma função nova para modificar os preços no formato em Real
    console.table(valorCobradoFormatado); // imprime no formato de tabelas
    console.log("Valor: R$ ",valorInicial);

}catch(error){
    console.log("Erro no sistema");
}