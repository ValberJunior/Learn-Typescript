interface IProcessamento<T> {
    valor: T;
    realizarProcessamento(arg:T):T
}


const texto : IProcessamento<string> = {
    valor: "hcode",
    realizarProcessamento(arg:string):string{
        return arg.toUpperCase()
    }
}

const numeros : IProcessamento<number> = {
    valor: 30,
    realizarProcessamento(arg:number):number{
        return arg
    }
}

// console.log(texto.valor);
// console.log(texto.realizarProcessamento("Hello World"));

console.log(numeros.valor);
console.log(numeros.realizarProcessamento(2000));

