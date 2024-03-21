function decoratorAttr(target: unknown, nomePropriedade: string){

   const novoNome = `_${nomePropriedade}`

   Object.defineProperty(target, nomePropriedade,{
        get(){
          return this[novoNome].toUpperCase();
        },
        set(novoValor){
            this[novoNome] = novoValor;
        }
   })
}


class Animal {

  @decoratorAttr  
  nome: string;

  constructor(nome:string){
    this.nome = nome;
  }

  mostrarNome(){
    return this.nome
  }

}

const cachorro = new Animal("cachorro")

console.log(cachorro.mostrarNome())