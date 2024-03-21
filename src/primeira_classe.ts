class Pessoa {

    nome: string;
    idade: number;
    altura: number;

    constructor(nome: string, idade: number, altura: number){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }

    toString():string{
        return `A pessoa ${this.nome} tem ${this.idade} de idade e mede ${this.altura} de altura`;
    }

}

const ronaldo = new Pessoa('Ronaldo',20,1.80);

console.log(ronaldo.toString())