console.log("---------- EXERCICIO 2 ----------");

const altura = 1.73;
const peso = 90;
let imc;

imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Abaixo do peso! Seu IMC esta em " + imc.toFixed(2));
} else if (imc >= 18.5 && imc <= 25) {
    console.log("Peso normal!  Seu IMC esta em " + imc.toFixed(2));
} else if (imc > 25 && imc <= 30) {
    console.log("Acima do peso! Seu IMC esta em " + imc.toFixed(2));
} else if (imc > 30 && imc <= 40) {
    console.log("Obeso! Seu IMC esta em " + imc.toFixed(2));
} else if (imc > 40) {
    console.log("Obesidade grave! Seu IMC esta em " + imc.toFixed(2))
}

console.log("---------------------------------");