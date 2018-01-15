export default class Pessoa { //export default serve para tornar a classe disponível fora do módulo pessoa.js
    constructor(nome) {
        this.nome = nome
    }

    toString() {
        return `Pessoa: ${this.nome}`
    }
}