import { debug } from "./utils/decorators";

// Decorator
@debug
class PrimeiraClasse {
    constructor(){}
}


// -- ------------ segundo exemplo: 

function intercept(classe:any){                 // << nesse exemplo interceptamos a classe e adicionamos um novo comportamento a ela
    return class extends classe{
        created_at: Date = new Date('2024-02-15');
        message: string = "Hello World"
    }
}

// Decorator
@intercept
class SegundaClasse {
    constructor(){}
}

console.log(new SegundaClasse())