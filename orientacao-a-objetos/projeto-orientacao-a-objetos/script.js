class contaBancaria {
    constructor(agencia, numero, tipo) { //Todas as coisas da classe vão ficar dentro do construtor
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0 //esse underline vai servir para o get e o set porque iremos resgatar valores daqui e fazer possíveis métodos.
}
    get saldo() {
        return this._saldo;
}
    set saldo(valor) {
        this._saldo = valor;
}
sacar(valor) {
    if(valor > this._saldo) {
        return 'Operação negada'
    }
    this._saldo = this._saldo - valor

    return this._saldo;
}
depositar(valor) {
    this._saldo = this._saldo + valor

    return this._saldo
}
}
//Herança
class contaCorrente extends contaBancaria { //Classes fiçhas precisam do extend para se comunicarem com a classe pai
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero) //Super é um método utilizado para fazer herança
        this.tipo = 'Corrente'; //Não colocamos o tipo diretamente nesse construtor porque ele vai ser definido de uma maneira diferente nessa classe.
        this._cartaoCredito = cartaoCredito
    }
    get cartaoCredito() {
        return this.cartaoCredito;
    }

    set cartaocredito(valor) {
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero) 
        this.tipo = 'Poupança'; 
        
    }

}

class contaUniversitaria extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero) 
        this.tipo = 'Universitária'; 
        
    }

    sacar(valor) {
        if(valor > 500) {
            return 'Operação negada';
        }

        this._saldo = this._saldo - valor;
    }

}

//fazendo essas coisas, no program, que é o próprio browser, no nosso caso(lembrar das aulas de C#, você vai criar o new object. Como já fizemos os construtores, é só instanciar os atributos entre os parênteses.)