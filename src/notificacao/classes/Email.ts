import { IUsuario } from "../interfaces/IUsuario"
import { Notificacao } from "./Notificacao"

export class Email extends Notificacao {

    enviar(usuario: IUsuario):boolean{
        console.log(`Enviando um email para o usuário ${usuario.email} ...`)
        return true
    }

}