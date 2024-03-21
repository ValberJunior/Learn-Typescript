// Algo abstrato, nao podemos tocar nela e nem instanciar, ela serve como modelo.
// Objetivo: reaproveitar código e o deixar mais limpo

import { IUsuario } from "../interfaces/IUsuario";

export abstract class Notificacao {
    abstract enviar(usuario:IUsuario):boolean;    // os métodos são identificados com o tipo "abstract" e não implementam nada, apenas são tipados (como interfaces)
}