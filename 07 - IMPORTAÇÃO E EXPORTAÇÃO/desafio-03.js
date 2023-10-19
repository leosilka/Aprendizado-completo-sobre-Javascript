const { calculoSalario, print } = require('./funcoes-auxiliares');

const salario = 2500;
const beneficios = 100;
const valorSalario = calculoSalario(salario, beneficios);

print(`O salario a ser transferido para o funcionario é de R$${valorSalario.toFixed(2)}`);