let dias = Number(prompt("Digite a quantidade de dias hospedado: "))
let diaria 
if (dias <=5){
   diaria = 100
} else if (dias <=10 ){
    diaria = 90
}else{
    diaria = 80
}
let valor = ((dias*diaria) * 0.9)*0.85 + 150
alert(`O valor total a ser pago é de R$ ${valor}`)