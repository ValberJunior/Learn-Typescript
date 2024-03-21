class Permissao {

    constructor(
        private _nome: string,           // No JS por convenção, declaramos os atributos private com "_", pois assim podemos declarar os getters e setters seguindo
        private _nivel: number           // a mesma identificação
    ){}

    get nome(){
        return this._nome;               // veja
    }

    set nome(novoNome: string){          // métodos setters não podem retornar nenhum valor
        if(novoNome.length < 5) throw new Error('O nome deve ter no mínimo 5 letras');
        this._nome = novoNome
    }

}


const permissao = new Permissao("Admin",1);

try {
    permissao.nome = "SUPERUSER"               // tratamento de erros
}catch(e:any){
    console.log(e.message)
}



console.log(permissao.nome)  // para getters e nem para os setters não precisa invocar os () do método