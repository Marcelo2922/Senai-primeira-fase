let placa = parseInt(prompt("Digite o último número da placa: "))
if (placa == 0 || placa == 1){
    alert("Não pode rodar na Segunda-feira ")
}else if(placa == 2 || placa == 3){
    alert("Não pode rodar na Terça-feira ")
}else if(placa == 4 || placa == 5){
    alert("Não pode rodar na Quarta-feira ")
}else if(placa == 6 || placa == 7){
    alert("Não pode rodar na Quinta-feira ")
}else if(placa == 8 || placa == 9){
    alert("Não pode rodar na Sexta-feira ")
}else{
    alert("Placa invalida!!")
}