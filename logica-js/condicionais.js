//verifique a frequência do aluno (0 a 10)
//a aprovação só irá acontecer se o aluno tiver nota final maior que 7 e a frequência for maior que 8

const prompt = require("prompt-sync")()

const notaFinal = parseFloat(prompt("Digite a nota final: "))

if(notaFinal >= 7){
    console.log("Aprovado")
} else {
    console.log("reprovado")
}