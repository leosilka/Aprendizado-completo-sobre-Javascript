const { gerarNotas, print } = require('./funcoes-auxiliares');
let aluno = 'Leonardo'
let notasAlunos = gerarNotas();
let somaNota = 0;
let mediaNota;
let i = 0;

notasAlunos.forEach(notasAlunos => {
    i++;
    print(`Nota ${[i]}: ${notasAlunos}`)
});

for (let i = 0; i < notasAlunos.length; i++) {
    somaNota += notasAlunos[i];
    mediaNota = somaNota / notasAlunos.length;
}

print(`A média do aluno ${aluno.toUpperCase()} foi ${mediaNota.toFixed(1)}`);