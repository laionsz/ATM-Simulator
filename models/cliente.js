import Conta from "./conta.js";

export default class Cliente extends Conta {
    constructor(nome, numAgencia, saldo = 0) {
        super(nome, numAgencia, saldo);
    };
}