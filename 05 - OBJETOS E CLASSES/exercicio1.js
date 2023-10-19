/* 
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto medio de combustivel por kilometro rodado.
    Crie um metodo que dado a quantidade de quilometro e o preco do combustivel nos de o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoPorKm;
    valorCombustivel;
    distanciaPercurso;
    valorTotal;

    constructor(marca, cor, gastoPorKm, valorCombustivel, distanciaPercurso) {
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
        this.valorCombustivel = valorCombustivel;
        this.distanciaPercurso = distanciaPercurso;
    }

    calcularGasto() {
        this.valorTotal = (this.distanciaPercurso / this.gastoPorKm) * this.valorCombustivel
    }

    descrever1() {
        this.calcularGasto();
        console.log(`O veiculo de marca ${this.marca} e cor ${this.cor}, faz ${this.gastoPorKm}KM/L, no percuso de ${this.distanciaPercurso}KM sera gasto R$${this.valorTotal} de combustivel.`);
    }
    descrever2() {
        this.calcularGasto();
        console.log(`Dados do Veiculo:
        Marca: ${this.marca}
        Cor: ${this.cor}
        Gasto por KM: ${this.gastoPorKm}
        Percurso: ${this.distanciaPercurso}
        Valor Combustivel: R$${this.valorCombustivel}
        Valor Gasto Trajeto: R$${this.valorTotal}`);
    }

}

const veiculo = new Carro("Alfa Romeu", "Vermelho", 12, 5.50, 54);

console.log(veiculo.descrever1());
console.log();
console.log(veiculo.descrever2());
