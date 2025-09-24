const prompt = require("prompt-sync")()
const idade = prompt("Digite sua idade: ")
const cnh = prompt ("Tem CNH? ")

if (idade >= 18 && cnh == "sim") {
    console.log ("Pode dirigir!!")
}else{
    console.log ("Não pode dirigir!!")
}