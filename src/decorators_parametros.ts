// adicionar com yarn add reflect-metadata e @types/reflect-metadata
import "reflect-metadata"

function decoratorParametros(target:any, key: string, propertyKey: number){  
   return Reflect.getMetadata("design:paramtypes", target, key).map(    
        (item : any) => console.log(item)
    )
}


class TratarParametros {
    metodo1(@decoratorParametros mensagem:string){}          // conseguimos validar os parâmetros
    metodo2(@decoratorParametros numero:number){}
};

new TratarParametros();