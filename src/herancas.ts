class Cadastro {
    nome: string;
    nascimento: Date;

    constructor(nome: string, nascimento: Date) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}

class Cliente extends Cadastro {
    email: string;
    empresa: string;

    constructor(nome: string, nascimento: Date, email: string, empresa: string ){
        super(nome, nascimento);  // super deve existir quando as classes extendem de uma classe Pai
        this.email =  email; 
        this.empresa = empresa;
    }
}

const joao = new Cliente('João das Couves', new Date('2000-01-01'), 'joao@gmail.com','JoaoCorps');

console.log(joao)