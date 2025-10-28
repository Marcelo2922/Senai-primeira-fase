let produto; moeda1;moeda50;moeda25;moeda10;moeda5;
let total
let compra
function Calculo(){
    produto =Number(document.getElementById("Produto").value)
    moeda1 =Number(document.getElementById("moeda1").value)
    moeda50 =Number(document.getElementById("moeda50").value)
    moeda25 =Number(document.getElementById("moeda25").value)
    moeda10 =Number(document.getElementById("moeda10").value)
    moeda5 =Number(document.getElementById("moeda5").value)
    total = Number(moeda1+moeda50+moeda25+moeda10+moeda5) 
    compra = Number(total - produto)
    document.getElementById("Resposta").innerHTML = `Valor total no porco é de R$${total}`
    document.getElementById("valor_total").innerHTML = `Valor total no porco é de R$${compra}`
}
