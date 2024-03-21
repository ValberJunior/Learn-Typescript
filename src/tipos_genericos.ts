function obterPrimeiraPosição<T>(meuArray: Array<T>) : T {   // Definição do tipo "T" genérico
    return meuArray[1];
}

console.log(obterPrimeiraPosição(["Glaucio", 10, "Rafael"]))