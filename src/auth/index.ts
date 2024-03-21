namespace Auth {

    interface IUsuario{
        email: string,
        senha: string
    }

    interface ICadastro extends IUsuario {
        nome: string,
        dataNascimento: Date
    }

    interface ILoginRegistro {
        login(usuario: IUsuario):IUsuario;
        registro(novoUsuario: ICadastro):ICadastro
    }

    interface IRecuperacao{
        recuperarSenha():string;
        recuperarUsuario():string
    }

    export class LoginRegistro implements ILoginRegistro{
        public login(usuario: IUsuario):IUsuario {
            return usuario;
        }
        public registro(novoUsuario: ICadastro):ICadastro{
            return novoUsuario;
        }
    }

    export class Recuperacao implements IRecuperacao{
        recuperarSenha():string{
            return "Enviando e-mail para recuperação de senha..."
        }
        recuperarUsuario():string{
            return "Enviando e-mail para recuperação de usuário..."
        }
    }
}