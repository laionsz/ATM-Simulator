import Conta from "../models/conta.js";

//Aqui podemos criar as contas e encontra-las

export default class ContaController {
    constructor() {
        this.contas = [];
    };

    criarConta(numero, titular) {
        const conta = new Conta(numero, titular);
        this.constas.push(conta);
        return conta;
    };

    encontrarConta(numero) {
        const contaEncontrada = this.contas.find(conta => conta.numero === numero);
        return contaEncontrada;
    };
};