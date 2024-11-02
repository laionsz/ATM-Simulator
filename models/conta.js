//Classe da conta, poderemos criar várias contas.
export default class Conta {
    constructor(nome, numAgencia, saldo = 0) {
        this.noma = nome,
            this.numeroAgencia = numAgencia,
            this.saldo = saldo;
    };
    depositar(valor) {
        this.saldo += valor;
        return `O valor R$${valor} foi depositado.`;
    };
    sacar(valor) {
        if (valor > this.saldo) {
            return `Saldo insuficiente. Saldo atual: R$${this.saldo}`;
        } else {
            this.saldo -= valor;
            return `Saque efetuado. Saldo atual: R$${this.saldo}`;
        };
    };
    consultarSaldo() {
        return `Saldo atual: R$${this.saldo}`;
    };
};