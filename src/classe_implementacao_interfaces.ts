// Algo abstrato, nao podemos tocar nela e nem instanciar, ela serve como modelo.
// Objetivo: reaproveitar código e o deixar mais limpo

interface INotificacao2 {
    enviar(): boolean
}

interface IEmail2 {
    nome: string,
    email: string
}

interface ITelefone2{
    numero: string
}

interface IUsuario{
    nome: string,
    email: string,
    telefone: string
}

// abstração de códigos reutilizáveis

abstract class Notificacao2 implements INotificacao2 {   // implementando a interface na classe, ela obriga que os métodos sigam a interface, para adicionar mais de uma basta separá-las por vírgula
    abstract enviar():boolean;    // os métodos são identificados com o tipo "abstract" e não implementam nada, apenas são tipados (como interfaces)
}

class Email2 extends Notificacao2 implements IEmail2{

    nome: string;         // declaro atributo assim apenas quando eu preciso tratar de outra forma oq vir no constructor
    email: string;

    constructor(usuario: IUsuario){
        super();
        this.nome = usuario.nome;
        this.email = usuario.email;
    }

    enviar():boolean{
        console.log(`Enviando um email para o usuário ${this.email} ...`)
        return true
    }

}

class SMS2 extends Notificacao2 implements ITelefone2 {

    numero: string;        // declaro atributo assim apenas quando eu preciso tratar de outra forma oq vir no constructor

    constructor(usuario:IUsuario){
        super();
        this.numero = usuario.telefone;
    }

    enviar():boolean{
        console.log(`Enviando um sms para o número ${this.numero} ...`)
        return true
    }

}


new Email2({nome: "Valbinho play", email: "Rivelino@gmail.com", telefone: "48484-484848"}).enviar()
new SMS2({nome: "Valbinho play", email: "Rivelino@gmail.com", telefone: "48484-484848"}).enviar()
