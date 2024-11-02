export default class Conta {
    constructor(numero, titular, saldo = 0) {
        this.numero = numero,
            this.numero = titular,
            this.saldo = saldo;
    };
    depositarSaldo(valor) {
        this.saldo += valor;
        return `O valor ${valor} foi depositado.`
    }
}