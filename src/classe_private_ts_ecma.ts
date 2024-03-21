class Documento {
    private valor: string = '1234568784-88';  // TS
    #number : number = 35  // ECMAScript

    mostrarDocumento():string | number {
        return this.#number;
    }
};

class CNPJ extends Documento {
   // private valor: string = '124587488987-55' // ts
    #number: number = 88;

    mostrarCNPJ():string | number {
        return this.#number
    }
}

const rg = new Documento();
const cnpj = new CNPJ();

// console.log(rg.number)
//console.log(cnpj.mostrarCNPJ())

// Em typescript o private só funciona em tempo de desenvolvimento, mesmo dando erro na linha de código ele compila para ECMAScript como atributo publico
// Já usando o "#" como no ECMAScript, o atributo fica inacessível fora da classe e portanto ele tem a funcionalidade desejada, não é acessível em outras partes do código
// nem após a compilação.