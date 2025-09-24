const prompt = require("prompt-sync")()
const nota_final = Number(prompt("Digite a nota final: "))
const frequencia = Number(prompt("Digite a frequência: "))

if (nota_final < 0 || nota_final > 10) {
    console.log("Nota inválida")
} else if (frequencia < 0 || frequencia > 10) {
    console.log("Frequência inválida")
} else if (nota_final >= 7 && frequencia >= 8) {
    console.log("Aprovado por nota e frequência")
} else if (nota_final < 7 && frequencia >= 8) {
    console.log("Reprovado por nota baixa!!")
} else if (frequencia < 8) {
    console.log("Reprovado por frequência")
}
