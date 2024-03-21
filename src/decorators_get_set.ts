function decoratorGetSet(valor: boolean){
    return function(target: unknown, propertyKey: string, descriptor: PropertyDescriptor){
        descriptor.enumerable = valor;
    }
}

class Login {
    constructor(
        private _usuario: string,
        private _senha: string
    ){}
    
    @decoratorGetSet(true)
    get usuario():string{
        return this._usuario;
    }
    @decoratorGetSet(false)
    get senha():string{
        return this._senha;
    }
}

const login = new Login("Valberjr92@gmail.com","32547888xpto");

for(let chave in login){
    console.log("chave",chave)
}