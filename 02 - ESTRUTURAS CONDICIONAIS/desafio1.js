console.log("--------- DESAFIO 1 ---------");
console.log("");
const precoGasolina = 5.42;
const precoEtanol = 3.99
const distanciaViagem = 1043;
const gastoMedioCarroCombustivel = 8.9;
const tipoDeCombustivel = 'Gasolina'
let gastoTotalViagemGasolina;
let gastoTotalViagemEtanol;
let litrosCombustivel;
console.log("Distancia atual que irá percorrer: " + distanciaViagem + "KM");
console.log("Gasto do veículo por combustível: " + gastoMedioCarroCombustivel +"km/l");
litrosCombustivel = distanciaViagem / gastoMedioCarroCombustivel
console.log("");
if (tipoDeCombustivel === 'Etanol') {
    gastoTotalViagemEtanol = litrosCombustivel * precoEtanol
    console.log("O valor gasto nesta viagem foi de R$" + gastoTotalViagemEtanol.toFixed(2) + " de etanol");
} else if (tipoDeCombustivel === 'Gasolina') {
    gastoTotalViagemGasolina = litrosCombustivel * precoGasolina
    console.log("O valor gasto nesta viagem foi de R$" + gastoTotalViagemGasolina.toFixed(2) + " de gasolina");
}
console.log("O total de litros usado nesta viagem foi de " + litrosCombustivel.toFixed(2));
console.log("-----------------------------");