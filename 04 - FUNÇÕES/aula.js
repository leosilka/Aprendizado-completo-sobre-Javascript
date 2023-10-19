function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(200, 20));
console.log("------------------------")

function escrevaMeuNome(nome) {
    console.log("Meu nome: " + nome);
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log("Voce e maior de idade!");
    } else {
        console.log("Voce e menor de idade!");
    }
}

escrevaMeuNome("Leo")
verificarIdade(18)