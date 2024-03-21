class Domicilio {

    public cor:string;
    public endereco: object;

    constructor(cor:string,endereco:object){
        this.cor = cor;
        this.endereco = endereco;
    }

    public tocarInterfone() : string {
        return "Interfone Tocado!"
    }
}

class Casa extends Domicilio {

    // constructor(cor: string, endereco: object){ <-- quando eu nao tenho nenhum atributo na classe filha, 
    //                                                     nao precisa declarar o constructor, o super é reconhecido na instancia da classe
    //     super(cor, endereco);
    // }

    protected atenderInterfone(mensagem:string):string {
        return mensagem;
    }
}

const casaDoHomer = new Casa('Rosa',{cidade: 'Springfield'});

console.log(casaDoHomer.tocarInterfone())