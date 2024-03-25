const calcularValorPedido = require('./calcular-valor-pedidos');

it("não deve cobrar valor de frete quando o valor dos produtos for superior a 500", () => {

    const meuPedido = {
        itens: [
            {nome: "Arco Encantado", valor: 2000},
            {nome: "Entrega", valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(meuPedido);

    
    expect(resultado).toBe(2000)
});

it("deve cobrar o valor de frete quando o valor dos produtos for menor que 500", () => {
    const meuPedido = {
        itens: [
            {nome: "Medalhão", valor: 50},
            {nome: "Entrega", valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(meuPedido);

    
    expect(resultado).toBe(150)
});

it("deve cobrar o valor de frete quando o valor dos produtos for EXATAMENTE 500", () => {
    const meuPedido = {
        itens: [
            {nome: "Capacete de Armadura", valor: 500},
            {nome: "Entrega", valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(meuPedido);

    
    expect(resultado).toBe(600)
})

