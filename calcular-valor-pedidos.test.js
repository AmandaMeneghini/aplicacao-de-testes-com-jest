const calcularValorPedido = require('./calcular-valor-pedidos');

it("não deve cobrar valor de frete quando o valor dos produtos for superior a 500", () => {
    //AAA

    //ARRANGE
    const meuPedido = {
        itens: [
            {nome: "Arco Encantado", valor: 2000},
            {nome: "Entrega", valor: 100, entrega: true}
        ]
    }

    // ACT
    const resultado = calcularValorPedido(meuPedido);

    
    expect(resultado).toBe(2000)
});




