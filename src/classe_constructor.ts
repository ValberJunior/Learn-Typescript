// class Pedido implements IProduto {
//     produto : string;
//     valorTotal: number ;
//     previsaoEntrega: Date;

//     constructor(produto: string,valorTotal: number, previsaoEntrega: Date){
//         this.produto = produto;
//         this.valorTotal =  valorTotal;
//         this.previsaoEntrega = previsaoEntrega
//     }
// }

class Pedido {
 
    constructor(                                       // posso definir meus atributos diretamente nos parâmetros do constructor, sem precisar escrevê-los antes
            public produto: string,
            public valorTotal: number, 
            public previsaoEntrega: Date
        ){ }                                           // Com isso não preciso nem atribuir os valores aos atributos, isso se faz sozinho por debaixo dos panos.                                       
}

const meuPedido = new Pedido("Tv de 65 polegadas", 2300,new Date('2024,05,01'));

console.log(meuPedido)

// Mas se eu tiver um atributo que eu não receba como parâmetro no constructor da classe, como "id", então precisamos usar a declaração do atributo antes.