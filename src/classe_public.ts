// Encapsulamento
// public  -> pode ser acessado normalmente, sem restrição
// protected -> att e métodos protegidos, apenas métodos de dentro da classe e suas classes filhas podem acessar esses métodos/att.
// private -> att ou métodos privados, apenas a classe que possue esses att ou métodos podem acessá-los.
// readonly (apenas atributos) -> protegem att de alterações, podemos ler mas não podemos alterá-lo.

class veiculo {
   //atributos
   public cor: string;
   // constructor
   constructor(cor: string){
    this.cor = cor
   }
   // métodos
   public tentarAbrirPorta () :string {
    return "Abriu"
   }
}