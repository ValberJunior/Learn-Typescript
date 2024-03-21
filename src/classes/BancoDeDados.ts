import { IBancoDeDados } from "../interfaces";

export class BancoDeDados {

    static LOCAL = "127.0.0.1";                // atributos estáticos são atributos que não mudam nunca, 
    static TIPO_MYSQL = "MySQL";               // por isso eles não precisam sofrer alterações e são expostos para todas as classes
    static TIPO_SQLSERVER = "SQL Server";

    constructor(
        private _ip : string,
        private _usuario: string,
        private _senha: string,
        private _tipoBanco: string
    ){}

    static factory(params:IBancoDeDados) {                 // Design Patterns Criacionista > método para criação padronizada da nova instância
        if(![BancoDeDados.TIPO_MYSQL, BancoDeDados.TIPO_SQLSERVER].includes(params.tipoBanco)) throw new Error("Tipo de Banco incorreto"); // n precisamos do this em atributos estáticos
        return new BancoDeDados( params.ip, params.usuario, params.senha, params.tipoBanco );
    }
}