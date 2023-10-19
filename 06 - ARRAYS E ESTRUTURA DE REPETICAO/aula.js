// const alunos = []

// alunos.push("Leonardo")
// alunos.push("Karen")
// console.log(alunos)
// alunos.pop()
// console.log(alunos)
// alunos.push("Hellen")
// alunos.shift()
// console.log(alunos)


const notas = []

notas.push(5)
notas.push(6)
notas.push(7)
notas.push(8)
notas.push(9)
notas.push(10)

let quantidadeNotas = notas.length
let somarNota = 0;

for (let i = 0; i < quantidadeNotas; i++) {
    somarNota += notas[i];
}
console.log(somarNota);