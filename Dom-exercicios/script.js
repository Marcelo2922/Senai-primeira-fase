let combustivel
let quilometragem
let gasto
function Calcular(){
    quilometragem = Number(document.getElementById("distancia").value)
    combustivel = Number(document.getElementById("consumo").value)
    gasto = quilometragem / combustivel 
    Number(document.getElementById("Resposta").innerHTML = `usuario cadastrado com sucesso: ${gasto}Km/L`)


}