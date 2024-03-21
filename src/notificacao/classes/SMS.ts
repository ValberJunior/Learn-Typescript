import { IUsuario } from "../interfaces/IUsuario"
import { Notificacao } from "./Notificacao"

export class SMS extends Notificacao {

    enviar(usuario: IUsuario):boolean{
        console.log(`Enviando um sms para o número ${usuario.telefone} ...`)
        return true
    }

}
