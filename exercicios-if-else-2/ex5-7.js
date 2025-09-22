let dias = Number(prompt("Digite a quantidade de dias hospedado: "))

if (dias <=5){
    alert(`O valor da diaria é de R$ ${((dias*100) * 0.9)*0.85 + 150}`)
} else if ( dias >= 6 && dias <=10 ){
    alert(`O valor da diaria é de R$ ${((dias*90) * 0.9)*0.85 + 150}`)
}else if ( dias >= 11){
    alert(`O valor da diaria é de R$ ${((dias*80) * 0.9)*0.85 + 150}`)
}else{
    alert("Quantidade invalida!!!")
}