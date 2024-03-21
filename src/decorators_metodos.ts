function decoratorMetodo(target: unknown, propertyKey: string, descriptor: PropertyDescriptor){
    console.log(descriptor.value)
    descriptor.value = (...args: unknown[]) => {                // captando o retorno do método e tratando, pode servir para validar algo
        return args.map( item => {
            return (<string>item).toUpperCase();
        })
    }
}

class TratarMensagem {
    // decorator no método (sempre na linha acima da que voce quer passar)
    @decoratorMetodo
    dizerMensagem(...mensagens: string[]){
        return mensagens;
    }
}

const instancia = new TratarMensagem().dizerMensagem("Hello World", "Teste XPTO");

console.log(instancia)