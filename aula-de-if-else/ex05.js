// Calculadora Simples: Crie uma calculadora simples que peça ao usuário dois números e uma operação (adição, subtração, multiplicação ou divisão) e, em seguida, exiba o resultado.

let num1 = parseFloat(prompt("Digite um número:"));
let num2 = parseFloat(prompt("Digite um segundo número:"));
let operacao = prompt("Escolha uma operação: +, -, /, *");
let resultado;

if (operacao == "+") {
    resultado = num1 + num2;
    alert("Resultado: " + resultado);
} else if (operacao == "-") {
    resultado = num1 - num2;
    alert("Resultado: " + resultado);
} else if (operacao == "*") {
    resultado = num1 * num2;
    alert("Resultado: " + resultado);
} else if (operacao == "/") {
    if (num2 === 0) {
        alert("Erro: divisão por zero!");
    } else {
        resultado = num1 / num2;
        alert("Resultado: " + resultado);
    }
} else {
    alert("Operação inválida!");
}