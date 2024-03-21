interface IGeneric {
    length: number
}

function mostrarQuantidade<T extends IGeneric>(valor:T):T{   // consigo extender uma interface tipada para o tipo genérico
    console.log(`Total ${valor.length}`)
    return valor;
};


console.log(mostrarQuantidade(["Valber","Junior"]));
console.log(mostrarQuantidade({nome:"Valber Junior",length: 50}))