console.log("--------- EXERCICIO 3 ---------");

const precoProduto = 2874.51;
const formaPagamento = 'parcelado';
const meioPagamento = 'credito';
const parcelamentoPagamento = 3;
const jurosPagamento = 0.10;
const descontoPagamento = 0.15;
let valorFinalProduto;

if (formaPagamento === 'avista' && meioPagamento === "debito") {
    valorFinalProduto = precoProduto - (precoProduto * descontoPagamento);
    console.log("O valor total da compra: R$" + valorFinalProduto.toFixed(2));
} else if (formaPagamento === 'avista' && (meioPagamento === "dinheiro" || meioPagamento === 'pix')) {
    valorFinalProduto = precoProduto - (precoProduto * descontoPagamento);
    console.log("O valor total da compra: R$" + valorFinalProduto.toFixed(2));
} else if (formaPagamento === 'parcelado' && parcelamentoPagamento <= 2) {
    console.log("O valor total da compra: R$" + precoProduto.toFixed(2));
} else if (formaPagamento === 'parcelado' && parcelamentoPagamento > 2) {
    valorFinalProduto = precoProduto + (precoProduto * jurosPagamento);
    console.log("O valor total da compra: R$" + valorFinalProduto.toFixed(2));
}
console.log("-------------------------------");