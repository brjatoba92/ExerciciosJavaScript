//1. Crie um sistema onde o usuário irá cadastrar os últimos 7 pedidos realizados em uma pizzaria. As informações inseridas deverão ser:
//1. Sabor da pizza: margerita, pepperoni, frango, portuguesa.
//2. Tamanho: 1, 2 ou 3 ok
//3. Data do pedido: yyyy-mm-dd ok
//4. Hora do pedido: hh-mm ok
//5. Valor total ok
//Valide os dados à cada entrada. Em seguida, formate os dados de cada item com data completa e o valor total seguindo os padrões do javascript. Por fim, calcule o valor total de todos os pedidos e apresente os dados formatados e o valor total na tela para o usuário.

const prompt = require("prompt-sync")();

try{
    const formatandoCardapioPizzaria = (sistemaPizzaria) => {
        return sistemaPizzaria.map((pedidos) => ({
            ...pedidos,
            preco: new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(pedidos.preco),
            tamanho: pedidos.tamanho.toUpperCase(),
        }))
    }
    const validacaoDosDados = (itemPizzaria) => {
        if(itemPizzaria.preco<0){
            throw "Valor inserido é menor ou igual a zero !!!";
        }
        if(
            itemPizzaria.tamanho === "1" ||
            itemPizzaria.tamanho === "2" ||
            itemPizzaria.tamanho === "3"
        ){
            return;
        }else{
            throw "Tamanho invalido"
        }    
    }
    
    const sistemaPizzaria = new Array();
    let valorTotal = 0;

    for(let i=0; i<3; i++){
        const pedidos = new Object();
        console.log("Opções de sabores disponiveis: marguerita, peperoni, frango, portuguesa: ");
        pedidos.sabor= prompt("Sabor escolhido: ");
        pedidos.tamanho=prompt("Tamanho escolhido (1/2/3): ")
        pedidos.dataDoPedido = prompt("Data do pedido (yyyy-mm-dd): ");
        pedidos.horaDoPedido = prompt("Digite a hora (hh:mm): ");
        pedidos.preco = (Number(prompt("Digite o valor da pizza: ")));
        valorTotal+=pedidos.preco
        validacaoDosDados(pedidos)
        sistemaPizzaria.push(pedidos);
    }
    const pizzariaFormatada = formatandoCardapioPizzaria(sistemaPizzaria)
    console.table(pizzariaFormatada)
    console.log("Valor total dos pedidos: R$ ",valorTotal)

}catch(error){
    console.log("Erro no sistema")
}