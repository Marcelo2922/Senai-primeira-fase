// Decisão de Compra: Peça ao usuário para inserir o preço de um item e seu saldo. Em seguida, determine se eles podem comprar o item ou não.
let num1 = prompt("Digite o seu saldo: ")
let num2 = prompt ("Digite o valor do produto: ")
if (num1<num2){
    alert(`R$${num1} Não pode compra R$${num2}`)
}else{
    alert(`R$${num1} Pode compra R$${num2}`)
}