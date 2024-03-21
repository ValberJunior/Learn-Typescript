class Banco {

    private cofreQtd: number = 10000;

    private debitarCofre(quantidade:number) : number | string {                        // métodos privados só são acessíveis dentro da própria classe
        if(this.cofreQtd >= quantidade) return this.cofreQtd -= quantidade;
        else return 'O cofre não possui a quantidade requisitada'
    }

    protected sacarDoCaixa(quantidade:number){                   // métodos protected podem ser acessados pela classe pai
        return this.debitarCofre(quantidade)   
    }                         

    public sacarDoCaixaEletronico(quantidade:number){
        return this.debitarCofre(quantidade)
    }
}


class Banco24Horas extends Banco {
    public sacar(qtd: number){ 
        return this.sacarDoCaixa(qtd)                 // métodos protected também podem ser acessados pelas classes filhas, apenas.
    }
}


const nubank = new Banco();
const banco24 = new Banco24Horas().sacar(2500)

// os atributos private não podem ser sobrescritos, tampouco pelas classes filhas uma vez que não terão acesso a eles.