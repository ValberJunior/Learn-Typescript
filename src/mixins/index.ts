import applyMixins from "./applyMixins";

interface IProduto {
    vender(qtd:number):string;
    comprar(qtd:number):string
}

interface IMovel {
    sentar():string,
    empurrar(metros:number):string
}

class Produto implements IProduto {
    vender(qtd: number) : string {
        return `Foram vendidos ${qtd} itens desse produto`
    }
    comprar(qtd: number): string {
        return `Foram comprados ${qtd} itens desse produto`
    }
}

class Movel implements IMovel {
    sentar():string{
        return "Voce sentou no móvel"
    }
    empurrar(metros: number):string{
        return `O móvel foi empurrado por ${metros} metros`
    }
}

// class Sofa extends Produto, Movel {    <<<<<<  por nativo só podemos extender de uma classe
class Sofa {           
    constructor(
        public nome:string
    ){}
}

// para extender mais de uma classe, temos um "hack" do typescript que funciona assim:
// 1 - crie uma interface e extenda as classes que voce deseja utilizar na própria interface:
// obs: A interface tem que ter o mesmo nome da classe que será aplicada
// 2- crie uma função que irá funcionar como mixin, recomendável criar na pasta utils, mas pode ser criado em qualquer lugar,
//  o nome do arquivo e da função: "applyMixins"

interface Sofa extends Produto, Movel {}  // A interface precisa ser declarada assim porque ela vai montar a tipagem corretamente

applyMixins(Sofa,[Produto, Movel]);   // o primeiro argumento será em qual Class será aplicada, e o segundo um array das classes que serão extendidas

const produto = new Sofa("Meu sofá");

 console.log(produto.sentar())