let produto, moeda1, moeda50, moeda25, moeda10, moeda5, compra, total;

function Calculo() {
  produto = Number(document.getElementById("Produto").value);
  moeda1 = Number(document.getElementById("moeda1").value);
  moeda50 = Number(document.getElementById("moeda50").value);
  moeda25 = Number(document.getElementById("moeda25").value);
  moeda10 = Number(document.getElementById("moeda10").value);
  moeda5 = Number(document.getElementById("moeda5").value);
  total = (moeda1 * 1.00) + (moeda50 * 0.50) + (moeda25 * 0.25) + (moeda10 * 0.10) + (moeda5 * 0.05);
  compra = total - produto;
  document.getElementById("Resposta").innerHTML = `Total no porquinho: R$${total.toFixed(2)}`;
  if (compra < 0) {
    document.getElementById("valor_total").innerHTML = `Faltam R$${Math.abs(compra).toFixed(2)} para comprar o produto.`;
  } else {
    document.getElementById("valor_total").innerHTML = `Você ainda terá R$${compra.toFixed(2)} sobrando.`;
  }
}
