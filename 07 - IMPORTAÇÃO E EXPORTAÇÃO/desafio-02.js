const { numerosRandomicos, print } = require('./funcoes-auxiliares');

const numeroAleatorio = numerosRandomicos();
const numeroPar = [];
const numeroImpar = [];
let maiorNumeroPar = 0;
let menorNumeroImpar = 1000;
print(numeroAleatorio);

function numerosPares() {
    for (let i = 0; i <= numeroAleatorio.length; i++) {
        if (numeroAleatorio[i] % 2 === 0 ) {
            numeroPar.push(numeroAleatorio[i]);
        }
        for (let i = 0; i <= numeroPar.length; i++) {
            if (numeroPar[i] > maiorNumeroPar) {
                maiorNumeroPar = numeroPar[i];
            }
        }
    }
}


function numerosImpares() {
    for (let i = 0; i <= numeroAleatorio.length; i++) {
        if (numeroAleatorio[i] % 2 != 0) {
            numeroImpar.push(numeroAleatorio[i]);
        }
        for (let i = 0; i <= numeroImpar.length; i++) {
            if (numeroImpar[i] < menorNumeroImpar) {
                menorNumeroImpar = numeroImpar[i];
            }
        }
    }
}

numerosPares();
numerosImpares();

print(`O maior número par é: ${maiorNumeroPar}`);
print(`O menor número impar é: ${menorNumeroImpar}`);