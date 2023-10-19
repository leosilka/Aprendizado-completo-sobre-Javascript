const entradas = [5, 50, 10, 98, 23, 100];
const notas = [];
const numerosAleatorios = [];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

function gerarNotas() {
    for (let i = 0; i < 3; i++) {
        let nota = Math.floor(Math.random() * (10 - 1 + 1)) + 0;
        notas.push(nota)
    }
    return notas
}

function numerosRandomicos() {
    for (let i = 0; i < 10; i++) {
        let n = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
        numerosAleatorios.push(n);
    }
    return numerosAleatorios;
}

function calculoSalario(salario, beneficios) {
    
    if (salario <= 1100) {
        let decimalAliquota = 5 / 100
        let salarioTransferencia = salario - (salario * decimalAliquota) + beneficios;
        return salarioTransferencia
    } if (salario >= 1100.01 && salario < 2500) {
        let decimalAliquota = 10 / 100
        let salarioTransferencia = salario - (salario * decimalAliquota) + beneficios;        
        return salarioTransferencia
    } else {
        let decimalAliquota = 15 / 100
        let salarioTransferencia = salario - (salario * decimalAliquota) + beneficios;        
        return salarioTransferencia
    }
}

// Exportando
module.exports = {
    gets: gets,
    print: print,
    gerarNotas: gerarNotas,
    numerosRandomicos: numerosRandomicos,
    calculoSalario: calculoSalario
}