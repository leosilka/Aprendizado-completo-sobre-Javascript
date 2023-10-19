console.log("---------- EXERCICIO 1 ----------");
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificacaoImc(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso! Seu IMC esta em " + imc.toFixed(2);
    } else if (imc >= 18.5 && imc <= 25) {
        return "Peso normal!  Seu IMC esta em " + imc.toFixed(2);
    } else if (imc > 25 && imc <= 30) {
        return "Acima do peso! Seu IMC esta em " + imc.toFixed(2);
    } else if (imc > 30 && imc <= 40) {
        return "Obeso! Seu IMC esta em " + imc.toFixed(2);
    } else {
        return "Obesidade grave! Seu IMC esta em " + imc.toFixed(2);
    }
}

function main() {
    const altura = 1.73;
    const peso = 90;
    
    const imc = calcularImc(peso, altura);
    console.log(classificacaoImc(imc));
}

main();

console.log("---------------------------------");