let pontuacao = Number(prompt("Digite a pontuação: "))
if (pontuacao <=10){
    alert("Deu ruim ")
}else if (pontuacao > 10 && pontuacao <= 100 ){
    alert("Ta... é melhor você jogar mais!!!!!")
}else if (pontuacao > 100 && pontuacao <= 200){
    alert("Supimpa!!")
}else if (pontuacao >200){
    alert("Mitou")
}else{
    alert("Pontuação invalida!!")
}