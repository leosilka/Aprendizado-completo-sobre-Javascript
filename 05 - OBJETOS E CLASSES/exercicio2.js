/*
    2- Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura)).
    Instancie uma pessoa chamada Jos[e que tenha 70kg de peso e 1,75 de altura e pe;a ao Jos[e para dizer o valor do seu IMC.
*/

const { calculateUserDefaultAvatarIndex } = require("discord.js");

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura)
    }

    classificacaoIMC() {
        const imc = this.calcularIMC();
        if (imc <= 18.5) {
            return `Baixo Peso`
        } else if (imc >= 18.6 &&  imc <= 24.9) {
            return `Eutrofia (peso adequado)`
        } else if (imc >= 25 &&  imc <= 29.9) {
            return `Sobrepeso`
        } else if (imc >= 30 &&  imc <= 34.9) {
            return `Obesidade Grau 1`
        } else if (imc >= 35 &&  imc <= 39.9) {
            return `Obesidade Grau 2`
        } else {
            return `Obesidade Extrema`
        }
    }
}

const jose = new Pessoa("Jose", 70, 1.75);
console.log(`O IMC de ${jose.nome} eh de ${jose.calcularIMC().toFixed(2)} e sua classificacao eh de ${jose.classificacaoIMC()}`)

// console.log(`O valor de IMC de Jose eh: ${jose.calcularIMC().toFixed(2)}`);