//Sistema Uber
//const sistemaUber = new Array() ok
//1.Dados de entrada(elementos) ok
//usando laço for para 5 pedidos
//const motorista = new Object() ok
//a. horarioDePartida (hh:MM)
//b. distanciaAteODestino 
//c. tempoAteODestino (MM)
//d. valorCorrida
//e. horarioDeChegada = horarioDePartida + tempoAteODestino
//2. Formate o valorDaCorrida, em R$
//a. Crie uma função para fazer isso

const prompt = require("prompt-sync")()

const sistemaUber = new Array();

try{
    const formatandoCash = (sistemaUber) => {
        return sistemaUber.map((motorista) => ({
            ...motorista,
            valorCorrida: new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(motorista.valorCorrida)
        }))
    }

    const sistemaUber = new Array();
    let valorInicial = 0

    for(let i=0; i<5; i++){
        const motorista = new Object()
        motorista.horarioDePartida = prompt("Digite o horario de partida (hh:MM): ");
        motorista.distanciaAteODestino = prompt("Digite a distancia: ");
        motorista.tempoAteODestino = Number(prompt("Distancia para chegar: "));
        motorista.valorCorrida = Number(prompt("Digite o valor da corrida: "));
        valorInicial+=motorista.valorCorrida

        const hoje = new Date();
        const horarioSplitado = motorista.horarioDePartida.split(":");
        const horas = Number(horarioSplitado[0]);
        const minutos = Number(horarioSplitado[1]);
        
        const minutosTotais = minutos + motorista.tempoAteODestino;
        let calculandoQuandoChegara = hoje;

        if(minutosTotais>60){
            const minutosAMais = minutosTotais - 60;
            calculandoQuandoChegara.setHours(horas+1);
            calculandoQuandoChegara.setMinutes(minutosAMais)
        }else{
            calculandoQuandoChegara.setHours(horas)
            calculandoQuandoChegara.setMinutes(minutosTotais)
        }

        motorista.horarioDeChegada = calculandoQuandoChegara.toString();
        sistemaUber.push(motorista);
    }
    
    const valorCorridaFormatado = formatandoCash(sistemaUber);//chamei a função
    console.table(valorCorridaFormatado);
     console.log("Valor total das corridas: R$ ", valorInicial);
}catch(error){
    console.log("Erro no sistema !!!")
}