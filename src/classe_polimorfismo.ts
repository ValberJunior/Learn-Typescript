// Quando classes Filhas tem comportamentos diferentes, sobrescrevem algum método da classe mãe.

class Empresa {
    public prestarServico(){
        return "Empresa prestando serviço"
    }
};

class Padaria extends Empresa {
    public prestarServico(){
        return "Vendendo pão"
    }
};

class Farmacia extends Empresa {
    public prestarServico(){
        return "Vendendo remédios"
    }
}

console.log(new Empresa().prestarServico());
console.log(new Padaria().prestarServico());
console.log(new Farmacia().prestarServico())