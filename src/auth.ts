/// <reference path="./auth/index.ts"/>

const novoRegistro = new Auth.LoginRegistro();

const resultado = novoRegistro.registro({
    nome: "Valber Junior",
    dataNascimento: new Date('1992-12-10'),
    email: "Valberjr92@gmail.com",
    senha: "xptoptotpt"
})

console.log(resultado);

