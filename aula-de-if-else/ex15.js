// Calculadora de IMC: Crie uma calculadora de Índice de Massa Corporal (IMC) que peça ao usuário seu peso e altura e, em seguida, calcule e exiba o IMC. Informe também em que faixa o usuário se encontra.
let peso, altura, imc 
peso = parseFloat(prompt ("Digite seu peso: "))
altura =parseFloat (prompt ("Digite sua altura com ponto final: "))
if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
  alert("Por favor, insira valores válidos para peso e altura.");
} else {
  let imc = peso / (altura ** 2);
  alert(`Seu IMC é ${imc.toFixed(2)}`);
}