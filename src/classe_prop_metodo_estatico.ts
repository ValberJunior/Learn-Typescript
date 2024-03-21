

// com o factory, não precisamos instanciar um novo objeto da classe, basta chamar o método factory e criar o objeto:

import { BancoDeDados } from "./classes/BancoDeDados";



const conexaoBanco = BancoDeDados.factory({
    ip: BancoDeDados.LOCAL,
    usuario: 'Valber',
    senha: '123456',
    tipoBanco: BancoDeDados.TIPO_MYSQL
    });

console.log(conexaoBanco)

