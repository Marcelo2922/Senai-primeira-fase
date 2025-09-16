// Comparação de Números: Peça ao usuário para inserir dois números e determine qual deles é maior.
let num1 = prompt("Digite um número: ")
let num2 = prompt ("Digite um segundo número: ")
if (num1>num2){
    alert(`${num1} É maior que ${num2}`)
}else if (num1==num2){
    alert(`${num1} É igual a ${num2}`)
}else{
    alert(`${num1} É menor que ${num2}`)
}
