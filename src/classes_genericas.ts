interface ICadastro {
    readonly id: number;
    readonly created_at: Date;
    readonly updated_at: Date
}


interface ICadastroUsuario extends ICadastro {
    nome: string;
    email: string;  
    senha: string;  
}

interface ICadastroCategoria extends ICadastro {
    nome: string
}



class CadastroBasico<T> {

    criar(dados:T):T{
        console.log("Criando novo registro");
        return dados;
    }
    selecionar(id: number):void{
        console.log(`Dados do registro de ID: ${id}`)
    }
    editar(id:number, dadosAtualizados: T):T{
        console.log(`Editando dadosdo ID ${id}`);
        return dadosAtualizados
    }
    excluir(id:number):boolean{
        console.log(`Excluindo o registro do ID ${id}`);
        return true;
    }

};

class UsuarioModelo extends CadastroBasico<ICadastroUsuario>{};
class CategoriaModelo extends CadastroBasico<ICadastroCategoria>{}

const novoUsuario = new UsuarioModelo();
const novaCategoria = new CategoriaModelo();

const valber = novoUsuario.criar({
    id: 1,
    nome: "Valber",
    email: "Valberjr92@gmail.com",
    senha: "xpto",
    created_at: new Date('2015-10-02'),
    updated_at: new Date('2019-11-23')

});

const objeto = novaCategoria.criar({
    id: 2,
    nome: "Esportes",
    created_at: new Date('2015-10-02'),
    updated_at: new Date('2019-11-23')
})

console.log(objeto)