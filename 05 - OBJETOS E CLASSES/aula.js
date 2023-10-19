class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome eh ${this.nome} e minha idade eh ${this.idade}!`);
    }
}

function compararPessoas(pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        console.log(`${pessoa1.nome} eh mais velha(o) que ${pessoa2.nome}!`);
    } else if (pessoa2.idade > pessoa1.idade) {
        console.log(`${pessoa2.nome} eh mais velha(o) que ${pessoa1.nome}!`);
    } else {
        console.log(`${pessoa1.nome} e ${pessoa2.nome} tem a mesma idade!`);
    }
}

const leonardo = new Pessoa('Leonardo', 28);
const karen = new Pessoa('Karen', 26);

compararPessoas(leonardo, karen);