const { print } = require('./funcoes-auxiliares');

let media = 5.5;

if (media < 5) {
    print('Reprovado');
  } if (media >= 5 && media < 7) {
    print('Recuperação');
  } else {
    print('Aprovado');
  }