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

it("deve acrescentar 20% ao valor de entrega caso o estado seja RS", () => {
    const pedidoComEstadoRS = {
        estado: "RS",
        itens: [
            {nome: "Capacete de Armadura", valor: 500},
            {nome: "Entrega", valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(pedidoComEstadoRS);

    
    expect(resultado).toBe(620)

})

it("deve acrescentar 20% ao valor de entrega caso o estado seja SC", () => {
    const pedidoComEstadoSC = {
        estado: "SC",
        itens: [
            {nome: "Capacete de Armadura", valor: 500},
            {nome: "Entrega", valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(pedidoComEstadoSC);

    
    expect(resultado).toBe(620)

})

it("deve não acrescentar 20% ao valor de entrega caso o estado seja SP", () => {
    const pedidoComEstadoSP = {
        estado: "SP",
        itens: [
            {nome: "Capacete de Armadura", valor: 500},
            {nome: "Entrega", valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(pedidoComEstadoSP);

    
    expect(resultado).toBe(600)

})