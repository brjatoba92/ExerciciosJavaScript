const prompt = require("prompt-sync")();

// 1. Criar sistema de estoque para 10 itens, informando:
//a. Nome; b. Tamanho; c. Preço
// 2. Criando tudo no escopo try ... catch(erro)
// 3. Criar função para validar os dados
//a. Preço e b. tamanho
//4. Criar função para formatar 
//a. os valores para reais e b. Os tamanhos em maiusculo


try {    
    const formatandoEstoque = (estoqueAmazon) => {
        return estoqueAmazon.map((cadastro) => ({
            ...cadastro,
            preco: new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(cadastro.preco),
            tamanho: cadastro.tamanho.toUpperCase(),
        }));
    }

    const validaDados = (itemEstoque) => {
        if(itemEstoque.preco<0){ //testa se há valor igual ou abaixo de zero
            throw "Valor não pode ser igual ou menor que zero" // caso positivo, mostra este erro e joga esta mensagem de erro na variavel error logo no final
        }
        if( //aqui testa se há elemento abrangidos nos 4 tamanhos 
            itemEstoque.tamanho === "p" || 
            itemEstoque.tamanho === "m" || 
            itemEstoque.tamanho === "g" || 
            itemEstoque.tamanho === "gg"
            ){
                return; // positivo, retorna vazio
            }else{
                throw "Tamanho invalido"; // negativo, mostra erro e joga esta mensagem de erro para a variavel error logo no final
            }
    }
    const estoqueAmazon = new Array() // criando um array vazio

    for(let i=0; i<3; i++){ //criando loop
        const cadastro = new Object();  // criando objeto dentro do loop
        cadastro.nome = prompt("Nome: "); // propriedades do objeto
        cadastro.tamanho = prompt("Tamanho (p,m,g,gg): ");
        cadastro.preco = Number(prompt("Valor: "));
        //formatandoPrecos(cadastro)
        validaDados(cadastro); // chama a função e passa o objeto
        estoqueAmazon.push(cadastro); //inclui o objeto cadastro no array estoqueAmazon
    }
    const estoqueFormatado = formatandoEstoque(estoqueAmazon)
    console.table(estoqueFormatado); // 


} catch (error) {
    console.log("Pane no sistema. Verifique o erro !!!", error) // qualquer erro presente, mostra esta mensagem
}
