class Professor {
    nome: string;
    idade: number;
    materia: string;

    constructor(nome: string, idade: number, materia: string) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }

    SeApresentar(): string{
        return `Meu nome é ${this.nome}, tenho ${this.idade} de idade e vou lecionar ${this.materia}.`;
    }

    DizerNotas([...notas]:number[]):string {
        const totalDeNotas =  notas.reduce((total, valorAtual)=> total + valorAtual,0);
        const media = totalDeNotas / notas.length;
        return `A média das notas é ${media.toFixed(1)}`
    }
};


const glaucio = new Professor('Glaucio de Andrade',35,'DBA');

console.log(glaucio.DizerNotas([10,8,10]));