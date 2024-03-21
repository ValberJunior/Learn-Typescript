// readonly apenas para atributos

class Usuario {
    readonly id: string = "42424545";  // O id eu gostaria de mostrar, mas não de permitir alteração.
    nome: string = "Joao";
    private senha = "reritutyru6";  // não quero que outras partes leiam minha senha e nem acesse ela (Poderiamos inclusive colocar o "#" ao inves do private)
    readonly dataCadastro: Date = new Date("2021-01-01");
}

//  A diferença do Readonly para o Private é que o Private a gente consegue alterar o valor desde que dentro da classe, já o readonly não.
// Outra diferença é que o readonly é acessível fora da classe, podendo ser exibido. Já o private não.