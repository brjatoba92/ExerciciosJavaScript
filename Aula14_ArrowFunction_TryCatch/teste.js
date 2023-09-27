// Criação de um array vazio para armazenar as corridas
let corridas = [];

// Função para adicionar uma corrida
function adicionarCorrida(horarioInicio, distancia, tempo, valor) {
    let corrida = {
        horarioInicio: new Date(horarioInicio),
        distancia: distancia,
        tempo: tempo,
        valor: valor
    };
    
    // Calcula o horário final baseado no horário de início e no tempo até o destino
    corrida.horarioFinal = new Date(corrida.horarioInicio.getTime() + corrida.tempo*60000);
    
    // Adiciona a corrida ao array de corridas
    corridas.push(corrida);
}

// Função para formatar e exibir os dados
function exibirDados() {
    let valorTotal = 0;
    let distanciaTotal = 0;
    
    for(let i = 0; i < corridas.length; i++) {
        console.log(`Corrida ${i+1}:`);
        console.log(`Horário de início: ${corridas[i].horarioInicio}`);
        console.log(`Distância: ${corridas[i].distancia} km`);
        console.log(`Tempo até o destino: ${corridas[i].tempo} minutos`);
        console.log(`Valor da corrida: R$ ${corridas[i].valor}`);
        console.log(`Horário final: ${corridas[i].horarioFinal}\n`);
        
        valorTotal += corridas[i].valor;
        distanciaTotal += corridas[i].distancia;
    }
    
    console.log(`Valor total das corridas: R$ ${valorTotal}`);
    console.log(`Distância total percorrida: ${distanciaTotal} km`);
}

// Adicionando 5 corridas
for(let i = 0; i < 5; i++) {
    adicionarCorrida('2023-09-20T08:00:00', 10, 30, 50);
}

// Exibindo os dados
exibirDados();