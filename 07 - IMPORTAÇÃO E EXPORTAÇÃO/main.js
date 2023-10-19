const {gets, print} = require('./funcoes-auxiliares');

const quantidadeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0 ; i < quantidadeAlunos; i++) {
    const numero = gets();
    if (numero > maiorValorEncontrado) {
        maiorValorEncontrado = numero
    }
}

print(maiorValorEncontrado)