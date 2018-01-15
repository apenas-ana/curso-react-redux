import Pessoa from './pessoa' // browsers ainda não suportam import, então é necessário usar um transpiler (Babel)

const pessoa = new Pessoa('Guilherme2')
console.log(pessoa.toString())