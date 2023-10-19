console.log("--------- DESAFIO 1 ---------");
console.log("");
const precoCombustivelLitro = 5.42;
const distanciaViagem = 1008;
const gastoMedioCarroCombustivel = 6.5;
let gastoTotalViagem;
let litrosCombustivel;
console.log("Preço atual do Combsutível: R$" + precoCombustivelLitro);
console.log("Distancia atual que irá percorrer: " + distanciaViagem + "KM");
console.log("Gasto do veículo por combustível: " + gastoMedioCarroCombustivel +"km/l");
litrosCombustivel = distanciaViagem / gastoMedioCarroCombustivel
gastoTotalViagem = litrosCombustivel * precoCombustivelLitro
console.log("");
console.log("O valor gasto nesta viagem foi de R$" + gastoTotalViagem.toFixed(2))
console.log("-----------------------------");