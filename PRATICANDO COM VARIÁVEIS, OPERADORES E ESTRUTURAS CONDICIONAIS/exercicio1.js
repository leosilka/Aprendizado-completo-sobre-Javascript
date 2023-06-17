console.log("---------- EXERCICIO 1 ----------");

const nota1 = 0
const nota2 = 5
const nota3 = 2
let mediaNota;

mediaNota = (nota1 + nota2 + nota3) / 3

if (mediaNota < 5) {
    console.log("Aluno Reprovado! Sua média foi " + mediaNota.toFixed(2));
} else if (mediaNota >= 5 && mediaNota < 7) {
    console.log("Aluno em Recuperação! Sua média foi " + mediaNota.toFixed(2))
} else if (mediaNota >= 7) {
    console.log("Aluno Aprovado! Sua média foi " + mediaNota.toFixed(2))
}

console.log("---------------------------------");